import { useState, useEffect } from 'react';
import { Bell, HelpCircle, User, AlertCircle, CheckCircle, XCircle, Loader2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface AdverseMediaResultsProps {
  onNavigate: (view: 'adverse-media' | 'adverse-media-results') => void;
  activeView: string;
  requestId: string;
  searchParams: {
    model: string;
    similarityScore: string;
    country: string;
    dateOfBirth: string;
  };
}

interface EntitySummary {
  name: string;
  identifiers_used: string | string[];
  search_date: string;
  summary: string;
}

interface Match {
  risk_type: string;
  source: string;
  source_tier: string | number;
  severity: string;
  date: string;
  summary: string;
  source_link?: string;
  entity_confirmation: string;
}

interface SearchMethodology {
  sources_searched: string | string[];
  date_range: string;
  search_terms_used: string | string[];
}

interface ScreeningOutput {
  entity_summary: EntitySummary;
  matches: Match[];
  risk_score: string | number;
  confidence_level: string | number;
  needs_review: boolean | string;
  escalation_level: string;
  search_methodology: SearchMethodology;
}

export function AdverseMediaResults({ onNavigate, activeView, requestId, searchParams }: AdverseMediaResultsProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [screeningData, setScreeningData] = useState<ScreeningOutput | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start polling for results
    const poll = async () => {
      try {
        const response = await fetch(`/api/listen/${requestId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }

        const result = await response.json();

        if (result.data && result.data.html) {
          // Parse the HTML field which contains JSON string
          try {
            const parsed = JSON.parse(result.data.html);
            if (parsed.output) {
              setScreeningData(parsed.output);
              setLoading(false);
              
              // Stop polling
              if (pollingInterval) {
                clearInterval(pollingInterval);
              }
            }
          } catch (parseError) {
            console.error('Error parsing result data:', parseError);
            setError('Invalid data format received');
            setLoading(false);
            if (pollingInterval) {
              clearInterval(pollingInterval);
            }
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
        setError('Failed to fetch results');
        setLoading(false);
        if (pollingInterval) {
          clearInterval(pollingInterval);
        }
      }
    };

    // Initial poll
    poll();

    // Set up interval for polling every 2 seconds
    const interval = setInterval(poll, 2000);
    setPollingInterval(interval);

    // Cleanup on unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
      
      // Optional: Clear data on exit
      fetch(`/api/listen/${requestId}`, { method: 'DELETE' }).catch(console.error);
    };
  }, [requestId]);

  const formatValue = (value: string | string[] | number | boolean | undefined) => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value?.toString() || 'N/A';
  };

  const getSeverityColor = (severity: string) => {
    const lower = severity?.toLowerCase() || '';
    if (lower.includes('high') || lower.includes('critical')) return 'text-destructive';
    if (lower.includes('medium') || lower.includes('moderate')) return 'text-yellow-600';
    if (lower.includes('low')) return 'text-green-600';
    return 'text-foreground';
  };

  const getRiskScoreColor = (score: string | number) => {
    const numScore = typeof score === 'string' ? parseFloat(score) : score;
    if (isNaN(numScore)) return 'text-foreground';
    if (numScore >= 70) return 'text-destructive';
    if (numScore >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar activeView={activeView as any} onNavigate={onNavigate as any} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Breadcrumbs */}
        <div className="sticky top-0 z-50 bg-card border-b border-border">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onNavigate('adverse-media')}
                className="text-[13px] text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Adverse Media Screening
              </button>
              <span className="text-[13px] text-muted-foreground">/</span>
              <span className="text-[13px] text-foreground">Results</span>
            </div>

            {/* Right section icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-muted rounded-md transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-md transition-colors">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-md transition-colors">
                <User className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Heading Banner */}
        <div className="px-6 py-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[18px] font-semibold text-foreground">
                {loading ? 'Processing Screening...' : error ? 'Screening Failed' : 'Screening Results'}
              </h1>
              <p className="text-[12px] text-muted-foreground mt-1">
                Request ID: {requestId}
              </p>
            </div>
            <button 
              onClick={() => onNavigate('adverse-media')}
              className="flex items-center gap-2 px-4 py-1.5 border border-border rounded-md text-[13px] hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4" />
              Search Again
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 px-[20px] py-[10px] space-y-6">
            {/* Loading State */}
            {loading && (
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <div className="text-center">
                    <p className="text-[15px] font-medium text-foreground">Waiting for results...</p>
                    <p className="text-[13px] text-muted-foreground mt-2">
                      This may take a few moments while we analyze the entity
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="bg-card rounded-lg border border-destructive p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">Error</h3>
                    <p className="text-[13px] text-muted-foreground mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Results Display */}
            {screeningData && !loading && !error && (
              <>
                {/* Search Parameters */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-[15px] font-semibold text-foreground mb-4">Search Parameters</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[12px] text-muted-foreground">Model Provider</span>
                      <p className="text-[13px] text-foreground mt-1">{searchParams.model}</p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Similarity Score</span>
                      <p className="text-[13px] text-foreground mt-1">{searchParams.similarityScore}%</p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Country</span>
                      <p className="text-[13px] text-foreground mt-1">{searchParams.country || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Date of Birth</span>
                      <p className="text-[13px] text-foreground mt-1">{searchParams.dateOfBirth || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {/* Entity Summary */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-[15px] font-semibold text-foreground mb-4">Entity Summary</h2>
                  <div className="space-y-3">
                    {Object.entries(screeningData.entity_summary).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-[12px] text-muted-foreground capitalize">
                          {key.replace(/_/g, ' ')}
                        </span>
                        <p className="text-[13px] text-foreground mt-1">{formatValue(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-[15px] font-semibold text-foreground mb-4">Risk Assessment</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[12px] text-muted-foreground">Risk Score</span>
                      <p className={`text-[15px] font-semibold mt-1 ${getRiskScoreColor(screeningData.risk_score)}`}>
                        {formatValue(screeningData.risk_score)}
                      </p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Confidence Level</span>
                      <p className="text-[13px] text-foreground mt-1">{formatValue(screeningData.confidence_level)}</p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Needs Review</span>
                      <p className="text-[13px] text-foreground mt-1 flex items-center gap-2">
                        {formatValue(screeningData.needs_review) === 'Yes' ? (
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                        {formatValue(screeningData.needs_review)}
                      </p>
                    </div>
                    <div>
                      <span className="text-[12px] text-muted-foreground">Escalation Level</span>
                      <p className="text-[13px] text-foreground mt-1">{formatValue(screeningData.escalation_level)}</p>
                    </div>
                  </div>
                </div>

                {/* Matches */}
                {screeningData.matches && screeningData.matches.length > 0 && (
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h2 className="text-[15px] font-semibold text-foreground mb-4">
                      Matches ({screeningData.matches.length})
                    </h2>
                    <div className="space-y-4">
                      {screeningData.matches.map((match, index) => (
                        <div key={index} className="border border-border rounded-md p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-[14px] font-medium text-foreground">{match.risk_type}</h3>
                              <p className={`text-[12px] font-medium mt-1 ${getSeverityColor(match.severity)}`}>
                                Severity: {match.severity}
                              </p>
                            </div>
                            {match.source_link && (
                              <a
                                href={match.source_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[12px] text-primary hover:underline"
                              >
                                View Source
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-[11px] text-muted-foreground">Source</span>
                                <p className="text-[13px] text-foreground">{match.source} (Tier {match.source_tier})</p>
                              </div>
                              <div>
                                <span className="text-[11px] text-muted-foreground">Date</span>
                                <p className="text-[13px] text-foreground">{match.date}</p>
                              </div>
                            </div>
                            <div>
                              <span className="text-[11px] text-muted-foreground">Summary</span>
                              <p className="text-[13px] text-foreground mt-1">{match.summary}</p>
                            </div>
                            <div>
                              <span className="text-[11px] text-muted-foreground">Entity Confirmation</span>
                              <p className="text-[13px] text-foreground mt-1">{match.entity_confirmation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Methodology */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-[15px] font-semibold text-foreground mb-4">Search Methodology</h2>
                  <div className="space-y-3">
                    {Object.entries(screeningData.search_methodology).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-[12px] text-muted-foreground capitalize">
                          {key.replace(/_/g, ' ')}
                        </span>
                        <p className="text-[13px] text-foreground mt-1">{formatValue(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}