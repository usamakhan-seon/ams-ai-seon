import { useEffect, useState } from 'react';
import { Bell, HelpCircle, User, ChevronDown, User as UserIcon, Globe, Calendar, Bot, RefreshCw } from 'lucide-react';
import { Sidebar } from './Sidebar';

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

const EMMA_DEMO_OUTPUT: ScreeningOutput = {
  entity_summary: {
    name: 'Emma Winberg',
    identifiers_used: ['full_name'],
    search_date: '2024-01-15',
    summary:
      "Emma Winberg has been identified in 2 adverse media mentions across 2 risk categories. The highest risk category is 'Financial Difficulty' with a severity of 'Medium'.",
  },
  matches: [
    {
      risk_type: 'Financial Difficulty',
      source: 'Hurriyet Daily News',
      source_tier: 2,
      severity: 'Medium',
      date: '2019-11-11',
      summary:
        "Emma Winberg, widow of former British army officer James Le Mesurier, stated that financial problems were the ultimate cause of her husband's death. The article discusses financial issues related to the Mayday Rescue organization which managed around £90 million in donations and faced financial difficulties.",
      source_link: 'https://www.hurriyetdailynews.com/',
      entity_confirmation:
        "Exact match on full name 'Emma Winberg' with context of being wife of James Le Mesurier and involvement with Mayday Rescue organization.",
    },
    {
      risk_type: 'Regulatory',
      source: 'KSAT/Associated Press',
      source_tier: 2,
      severity: 'Low',
      date: '2019-11-14',
      summary:
        "Emma Winberg was barred from leaving Turkey pending investigation into her husband's death. She was questioned by Turkish police and authorities imposed a travel ban in case she needed to be questioned again. Police were examining the couple's electronic devices as part of the investigation.",
      source_link: 'https://www.ksat.com/',
      entity_confirmation:
        "Exact match on full name 'Emma Winberg' with context of being wife of James Le Mesurier and involvement with White Helmets organization.",
    },
  ],
  risk_score: 45,
  confidence_level: 75,
  needs_review: false,
  escalation_level: 'Medium',
  search_methodology: {
    sources_searched: ['Hurriyet Daily News', 'KSAT/Associated Press'],
    date_range: '2019-11-11 to 2019-11-14',
    search_terms_used: ['Emma Winberg', 'Emma Hedvig Christina Winberg'],
  },
};

type TabType = 'Email' | 'Phone' | 'IP' | 'Card BIN' | 'AML' | 'Transaction' | 'Batch test' | 'Clone search' | 'AMS';

export function ManualLookup() {
  const [activeTab, setActiveTab] = useState<TabType>('AMS');

  // AMS Form State
  const [entityName, setEntityName] = useState('');
  const [similarityScore, setSimilarityScore] = useState('70');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [modelProvider, setModelProvider] = useState('DeepSeek');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const [currentRequestId, setCurrentRequestId] = useState<string | null>(null);
  const [loadingResults, setLoadingResults] = useState(false);
  const [resultsError, setResultsError] = useState<string | null>(null);
  const [screeningData, setScreeningData] = useState<ScreeningOutput | null>(null);
  const [lastSearchParams, setLastSearchParams] = useState<{
    model: string;
    similarityScore: string;
    country: string;
    dateOfBirth: string;
  } | null>(null);

  const modelProviders = ['DeepSeek', 'LLAMA', 'OpenAI'];

  // Backend URLs from environment
  const BACKEND_URLS = {
    DeepSeek: import.meta.env.NEXT_PUBLIC_API_ENDPOINT_DEEPSEEK,
    LLAMA: import.meta.env.NEXT_PUBLIC_API_ENDPOINT_LLAMA,
    OpenAI: import.meta.env.NEXT_PUBLIC_API_ENDPOINT_OPENAI
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!entityName.trim()) {
      alert('Entity Name is required');
      return;
    }

    setLastSearchParams({
      model: modelProvider,
      similarityScore,
      country,
      dateOfBirth,
    });
    setResultsError(null);
    setScreeningData(null);

    if (demoMode) {
      setCurrentRequestId(null);
      setLoadingResults(false);
      setScreeningData(EMMA_DEMO_OUTPUT);
      return;
    }

    setIsSubmitting(true);
    setLoadingResults(true);

    try {
      const requestId = Date.now().toString() + Math.random().toString(36).substring(2, 9);
      const origin = window.location.origin;
      const callbackUrl = `${origin}/api/listen/${requestId}`;
      const backendUrl = BACKEND_URLS[modelProvider as keyof typeof BACKEND_URLS];
      
      if (!backendUrl) {
        throw new Error(`API endpoint not configured for ${modelProvider}`);
      }

      const requestBody = {
        entityName,
        dateOfBirth,
        country,
        modelProvider,
        similarityScore: parseInt(similarityScore),
        callbackUrl,
        requestId
      };

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to submit screening request');
      }

      setCurrentRequestId(requestId);
      setResultsError(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit screening request. Please try again.');
      setIsSubmitting(false);
      setLoadingResults(false);
    }
  };

  useEffect(() => {
    if (!currentRequestId || demoMode) {
      return;
    }

    let cancelled = false;
    let intervalId: number | undefined;

    const poll = async () => {
      try {
        const response = await fetch(`/api/listen/${currentRequestId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }

        const result = await response.json();

        if (result.data && result.data.html) {
          try {
            const parsed = JSON.parse(result.data.html);
            if (!cancelled && parsed.output) {
              setScreeningData(parsed.output as ScreeningOutput);
              setLoadingResults(false);
              setIsSubmitting(false);
              setResultsError(null);
              if (intervalId !== undefined) {
                clearInterval(intervalId);
              }
            }
          } catch (parseError) {
            console.error('Error parsing result data:', parseError);
            if (!cancelled) {
              setResultsError('Invalid data format received');
              setLoadingResults(false);
              setIsSubmitting(false);
              if (intervalId !== undefined) {
                clearInterval(intervalId);
              }
            }
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
        if (!cancelled) {
          setResultsError('Failed to fetch results');
          setLoadingResults(false);
          setIsSubmitting(false);
          if (intervalId !== undefined) {
            clearInterval(intervalId);
          }
        }
      }
    };

    poll();
    intervalId = window.setInterval(poll, 2000);

    return () => {
      cancelled = true;
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
      fetch(`/api/listen/${currentRequestId}`, { method: 'DELETE' }).catch(() => {});
    };
  }, [currentRequestId, demoMode]);

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

  const tabs: TabType[] = ['Email', 'Phone', 'IP', 'Card BIN', 'AML', 'Transaction', 'Batch test', 'Clone search', 'AMS'];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar activeView="manual-lookup" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full min-w-0">
        {/* Header - Breadcrumbs */}
        <div className="flex-shrink-0 bg-card border-b border-border">
          <div className="flex items-center justify-between px-6 py-2">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-muted-foreground cursor-pointer">Manual Lookup</span>
              <span className="text-[13px] text-muted-foreground">/</span>
              <span className="text-[13px] text-foreground">{activeTab}</span>
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

        {/* Page Header Container */}
        <div className="flex-shrink-0 border-b border-border">
          {/* Page Header Top */}
          <div className="flex items-center justify-between px-6 py-4" style={{ paddingBottom: '0px' }}>
            {/* Page Header Left Side */}
            <div>
              <h1 
                className="m-0"
                style={{
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '-0.2px',
                  color: 'rgb(40, 42, 46)'
                }}
              >
                Manual Lookup
              </h1>
            </div>
            {/* Page Header Right Side */}
            <div></div>
          </div>

          {/* Tabs Container */}
          <div className="flex items-center gap-0 px-6 overflow-x-auto border-t border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-3 text-[13px] font-medium transition-colors border-b-2 relative ${
                  activeTab === tab
                    ? 'font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                style={{
                  color: activeTab === tab ? 'rgb(82, 87, 97)' : 'rgb(82, 87, 97)',
                  borderBottomColor: activeTab === tab ? 'rgb(60, 114, 255)' : 'transparent',
                  borderBottomWidth: '2px',
                  transitionProperty: 'color, border-color',
                  transitionDuration: '150ms',
                  transitionTimingFunction: 'ease-in-out',
                  position: 'relative',
                  zIndex: 2,
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                }}
              >
                <span className="text-[14px]">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-background w-full" style={{ minHeight: 0, height: 0, overflowY: 'auto' }}>
          {activeTab === 'AMS' ? (
            <div className="flex w-full min-h-0">
              {/* Left Panel - Form */}
              <div className="border-r border-border p-6 flex-shrink-0" style={{ width: '50%', flexBasis: '50%', paddingRight: '10px' }}>
                <div className="bg-card rounded-lg p-6">
                  <h2 className="text-[16px] font-semibold text-foreground mb-4">Adverse Media Screening</h2>
                
                  <div className="mb-4">
                    <label className="flex items-center gap-2 text-[12px] text-muted-foreground">
                      <input
                        type="checkbox"
                        checked={demoMode}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setDemoMode(checked);
                          setResultsError(null);
                          setCurrentRequestId(null);
                          setLoadingResults(false);
                          setIsSubmitting(false);

                          if (checked) {
                            setEntityName('Emma Winberg');
                            setModelProvider('DeepSeek');
                            setSimilarityScore('70');
                            setCountry('');
                            setDateOfBirth('');

                            setLastSearchParams({
                              model: 'DeepSeek',
                              similarityScore: '70',
                              country: '',
                              dateOfBirth: '',
                            });
                            setScreeningData(EMMA_DEMO_OUTPUT);
                          } else {
                            setScreeningData(null);
                            setLastSearchParams(null);
                          }
                        }}
                        className="w-3 h-3"
                      />
                      Demo mode (show Emma Winberg)
                    </label>
                  </div>

                  <form id="ams-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-medium text-foreground mb-2">
                        Entity Name <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={entityName}
                          onChange={(e) => setEntityName(e.target.value)}
                          disabled={demoMode}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter entity name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-foreground mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          disabled={demoMode}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Enter country"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-foreground mb-2">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="date"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                          disabled={demoMode}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-foreground mb-2">
                        Similarity Score (%)
                      </label>
                      <input
                        type="number"
                        value={similarityScore}
                        onChange={(e) => setSimilarityScore(e.target.value)}
                        min="0"
                        max="100"
                        disabled={demoMode}
                        className="w-full px-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="70"
                      />
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        How close the name must match (0-100%)
                      </p>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-foreground mb-2">
                        Model Provider
                      </label>
                      <div className="relative">
                        <Bot className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          disabled={demoMode}
                          className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground text-left focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all flex items-center justify-between"
                        >
                          {modelProvider}
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden z-20">
                            {modelProviders.map((provider) => (
                              <button
                                key={provider}
                                type="button"
                                onClick={() => {
                                  setModelProvider(provider);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-left text-[13px] flex items-center gap-3 transition-colors ${
                                  provider === modelProvider
                                    ? 'bg-muted text-foreground'
                                    : 'text-foreground hover:bg-muted/50'
                                }`}
                              >
                                <Bot className="w-4 h-4 text-muted-foreground" />
                                {provider}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="submit"
                        form="ams-form"
                        className="flex-1 px-4 py-2 bg-primary text-white rounded-md text-[13px] font-medium hover:bg-primary/90 disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Run Adverse Media Screening'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEntityName('');
                          setSimilarityScore('70');
                          setDateOfBirth('');
                          setCountry('');
                          setModelProvider('DeepSeek');
                          setScreeningData(null);
                          setResultsError(null);
                          setLastSearchParams(null);
                          setCurrentRequestId(null);
                          setLoadingResults(false);
                        }}
                        className="px-4 py-2 border border-border rounded-md text-[13px] hover:bg-muted"
                      >
                        Clear
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Panel - Results (always 50% width) */}
              <div className="flex-shrink-0 p-6" style={{ width: '50%', flexBasis: '50%', paddingLeft: '10px' }}>
                <div className="bg-card rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[16px] font-semibold text-foreground">Screening Results</h2>
                    {screeningData && (
                      <button
                        onClick={() => {
                          setScreeningData(null);
                          setResultsError(null);
                          setLastSearchParams(null);
                          setCurrentRequestId(null);
                          setLoadingResults(false);
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-md text-[12px] hover:bg-muted"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Refresh data
                      </button>
                    )}
                  </div>

                  {loadingResults && !screeningData && (
                    <div className="text-center py-8">
                      <p className="text-[15px] font-medium text-foreground mb-1">
                        Waiting for results...
                      </p>
                      <p className="text-[13px] text-muted-foreground">
                        This may take a few moments while we analyze the entity.
                      </p>
                    </div>
                  )}

                  {resultsError && (
                    <div className="border border-destructive rounded-md p-4">
                      <p className="text-[15px] font-medium text-destructive mb-1">
                        Screening Failed
                      </p>
                      <p className="text-[13px] text-muted-foreground mb-2">
                        {resultsError}
                      </p>
                      <p className="text-[12px] text-muted-foreground">
                        Please try again or enable demo mode to show sample results.
                      </p>
                    </div>
                  )}

                  {screeningData && !resultsError && (
                    <div className="space-y-4">
                      {lastSearchParams && (
                        <div className="bg-background rounded-md border border-border p-4">
                          <h3 className="text-[14px] font-semibold text-foreground mb-2">Search Parameters</h3>
                          <div className="space-y-1 text-[13px] text-foreground">
                            <p>
                              <strong>Model Provider:</strong>{' '}
                              {lastSearchParams.model || <span className="italic text-muted-foreground">N/A</span>}
                            </p>
                            <p>
                              <strong>Similarity Score:</strong>{' '}
                              {lastSearchParams.similarityScore
                                ? `${lastSearchParams.similarityScore}%`
                                : <span className="italic text-muted-foreground">N/A</span>}
                            </p>
                            <p>
                              <strong>Country:</strong>{' '}
                              {lastSearchParams.country || <span className="italic text-muted-foreground">N/A</span>}
                            </p>
                            <p>
                              <strong>Date of Birth:</strong>{' '}
                              {lastSearchParams.dateOfBirth || <span className="italic text-muted-foreground">N/A</span>}
                            </p>
                            {currentRequestId && !demoMode && (
                              <p className="text-[11px] text-muted-foreground mt-2">
                                Request ID: {currentRequestId}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-[16px] font-semibold text-foreground">
                            Screening Results Received!
                          </h3>
                          {demoMode && (
                            <span className="text-[11px] text-muted-foreground border border-border rounded px-2 py-0.5">
                              Demo data
                            </span>
                          )}
                        </div>

                        <h4 className="text-[15px] font-semibold text-foreground">
                          {screeningData.entity_summary?.name || 'Unknown Entity'}
                        </h4>

                        {screeningData.entity_summary && (
                          <div>
                            <h5 className="text-[14px] font-semibold text-foreground mb-1">Entity Summary</h5>
                            <div className="space-y-1 text-[13px] text-foreground">
                              <p>
                                <strong>name:</strong> {screeningData.entity_summary.name}
                              </p>
                              <p>
                                <strong>identifiers used:</strong>{' '}
                                {formatValue(screeningData.entity_summary.identifiers_used)}
                              </p>
                              <p>
                                <strong>search date:</strong> {screeningData.entity_summary.search_date}
                              </p>
                              <p>
                                <strong>summary:</strong> {screeningData.entity_summary.summary}
                              </p>
                            </div>
                          </div>
                        )}

                        <div>
                          <h5 className="text-[14px] font-semibold text-foreground mb-1">Risk Assessment</h5>
                          <div className="space-y-1 text-[13px] text-foreground">
                            <p className={getRiskScoreColor(screeningData.risk_score)}>
                              <strong>Risk Score:</strong> {screeningData.risk_score}
                            </p>
                            <p>
                              <strong>Confidence Level:</strong> {screeningData.confidence_level}
                            </p>
                            <p>
                              <strong>Needs Review:</strong> {formatValue(screeningData.needs_review)}
                            </p>
                            <p>
                              <strong>Escalation Level:</strong> {screeningData.escalation_level}
                            </p>
                          </div>
                        </div>

                        {screeningData.matches && screeningData.matches.length > 0 && (
                          <div>
                            <h5 className="text-[14px] font-semibold text-foreground mb-2">
                              Matches Found ({screeningData.matches.length})
                            </h5>
                            <div className="space-y-3">
                              {screeningData.matches.map((match, idx) => (
                                <div
                                  key={idx}
                                  className="border border-border rounded-md p-2 bg-background"
                                >
                                  <p
                                    className={`text-[13px] font-semibold mb-1 ${getSeverityColor(
                                      match.severity,
                                    )}`}
                                  >
                                    {match.risk_type} - {match.severity}
                                  </p>
                                  <p className="text-[13px] text-foreground mb-1">
                                    <strong>Source:</strong> {match.source} (Tier: {match.source_tier})
                                  </p>
                                  <p className="text-[13px] text-foreground mb-1">
                                    <strong>Date:</strong> {match.date}
                                  </p>
                                  <p className="text-[13px] text-foreground mb-1">
                                    <strong>Summary:</strong> {match.summary}
                                  </p>
                                  {match.source_link && (
                                    <a
                                      href={match.source_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[13px] text-primary hover:underline"
                                    >
                                      View Source
                                    </a>
                                  )}
                                  <p className="text-[12px] text-muted-foreground mt-1">
                                    <strong>Entity Confirmation:</strong> {match.entity_confirmation}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {screeningData.search_methodology && (
                          <div>
                            <h5 className="text-[14px] font-semibold text-foreground mb-1">
                              Search Methodology
                            </h5>
                            <div className="space-y-1 text-[13px] text-foreground">
                              <p>
                                <strong>sources searched:</strong>{' '}
                                {formatValue(screeningData.search_methodology.sources_searched)}
                              </p>
                              <p>
                                <strong>date range:</strong>{' '}
                                {screeningData.search_methodology.date_range}
                              </p>
                              <p>
                                <strong>search terms used:</strong>{' '}
                                {formatValue(screeningData.search_methodology.search_terms_used)}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!loadingResults && !resultsError && !screeningData && !demoMode && (
                    <div className="text-center py-8">
                      <p className="text-[13px] text-muted-foreground">
                        Submit the form to see screening results here.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-[13px] text-muted-foreground">
                {activeTab} tab content coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
