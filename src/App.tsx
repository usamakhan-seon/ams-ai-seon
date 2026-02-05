import { useState } from 'react';
import { AdverseMediaScreening } from './components/AdverseMediaScreening';
import { AdverseMediaResults } from './components/AdverseMediaResults';

export default function App() {
  const [activeView, setActiveView] = useState<'adverse-media' | 'adverse-media-results'>('adverse-media');
  const [adverseMediaRequestId, setAdverseMediaRequestId] = useState<string | null>(null);
  const [adverseMediaSearchParams, setAdverseMediaSearchParams] = useState<any>(null);

  const handleNavigate = (view: 'adverse-media' | 'adverse-media-results') => {
    setActiveView(view);
  };

  const handleNavigateToResults = (requestId: string, params: URLSearchParams) => {
    setAdverseMediaRequestId(requestId);
    setAdverseMediaSearchParams({
      model: params.get('model') || '',
      similarityScore: params.get('similarityScore') || '',
      country: params.get('country') || '',
      dateOfBirth: params.get('dateOfBirth') || ''
    });
    setActiveView('adverse-media-results');
  };

  return (
    <>
      {activeView === 'adverse-media' ? (
        <AdverseMediaScreening onNavigate={handleNavigate} activeView={activeView} onNavigateToResults={handleNavigateToResults} />
      ) : adverseMediaRequestId && adverseMediaSearchParams ? (
        <AdverseMediaResults onNavigate={handleNavigate} activeView={activeView} requestId={adverseMediaRequestId} searchParams={adverseMediaSearchParams} />
      ) : (
        <AdverseMediaScreening onNavigate={handleNavigate} activeView={activeView} onNavigateToResults={handleNavigateToResults} />
      )}
    </>
  );
}