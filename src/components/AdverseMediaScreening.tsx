import { useState } from 'react';
import { Bell, HelpCircle, User, ChevronDown, User as UserIcon, Globe, Calendar, Bot, Save, X } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface AdverseMediaScreeningProps {
  onNavigate: (view: 'adverse-media' | 'adverse-media-results') => void;
  activeView: string;
  onNavigateToResults?: (requestId: string, params: URLSearchParams) => void;
}

export function AdverseMediaScreening({ onNavigate, activeView, onNavigateToResults }: AdverseMediaScreeningProps) {
  const [entityName, setEntityName] = useState('');
  const [similarityScore, setSimilarityScore] = useState('70');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [modelProvider, setModelProvider] = useState('DeepSeek');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modelProviders = ['DeepSeek', 'LLAMA', 'OpenAI'];

  // Backend URLs from environment (Vite uses import.meta.env; envPrefix in vite.config exposes NEXT_PUBLIC_*)
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

    setIsSubmitting(true);

    try {
      // Generate unique request ID
      const requestId = Date.now().toString() + Math.random().toString(36).substring(2, 9);
      
      // Generate callback URL (using current origin)
      const origin = window.location.origin;
      const callbackUrl = `${origin}/api/listen/${requestId}`;

      // Choose backend URL based on model provider
      const backendUrl = BACKEND_URLS[modelProvider as keyof typeof BACKEND_URLS];

      // Prepare request body
      const requestBody = {
        entityName,
        dateOfBirth,
        country,
        modelProvider,
        similarityScore: parseInt(similarityScore),
        callbackUrl,
        requestId
      };

      // Send request to backend
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

      // Navigate to results page with query params
      const params = new URLSearchParams({
        model: modelProvider,
        similarityScore: similarityScore,
        country: country,
        dateOfBirth: dateOfBirth
      });

      if (onNavigateToResults) {
        onNavigateToResults(requestId, params);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit screening request. Please try again.');
      setIsSubmitting(false);
    }
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
              <span className="text-[13px] text-foreground cursor-pointer">Adverse Media Screening</span>
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
            <h1 className="text-[18px] font-semibold text-foreground">
              Adverse Media Screening
            </h1>
            <div className="flex items-center gap-2">
              <button 
                type="submit"
                form="adverse-media-form"
                className="px-4 py-1.5 bg-primary text-white rounded-md text-[13px] font-medium hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit screening'}
              </button>
              <button 
                className="px-4 py-1.5 border border-border rounded-md text-[13px] hover:bg-muted"
                onClick={() => {
                  setEntityName('');
                  setSimilarityScore('70');
                  setDateOfBirth('');
                  setCountry('');
                  setModelProvider('DeepSeek');
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 px-[20px] py-[10px]">
            {/* Form Card */}
            <div className="bg-card rounded-lg border border-border p-6">
              <form id="adverse-media-form" onSubmit={handleSubmit}>
                {/* First Row - 2 columns */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Entity Name */}
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
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Enter entity name"
                        required
                      />
                    </div>
                  </div>

                  {/* Country */}
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
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Enter country"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Row - 3 columns */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Date of Birth */}
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
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="dd.mm.yyyy"
                      />
                    </div>
                  </div>

                  {/* Similarity Score */}
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
                      className="w-full px-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="70"
                    />
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      How close the name must match (0-100%)
                    </p>
                  </div>

                  {/* Model Provider */}
                  <div>
                    <label className="block text-[12px] font-medium text-foreground mb-2">
                      Model Provider
                    </label>
                    <div className="relative">
                      <Bot className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-[13px] text-foreground text-left focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all flex items-center justify-between"
                      >
                        {modelProvider}
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}