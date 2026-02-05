// In-memory storage for screening results
// In production, use a database like Redis or PostgreSQL
const resultsStore = new Map<string, {
  html: string;
  timestamp: string;
}>();

export default async function handler(req: any, res: any) {
  const { requestId } = req.query;

  if (!requestId || typeof requestId !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid request ID' });
  }

  // GET - Poll for results
  if (req.method === 'GET') {
    const data = resultsStore.get(requestId);
    
    return res.status(200).json({
      success: true,
      data: data || null,
      id: requestId
    });
  }

  // POST - Receive callback from backend
  if (req.method === 'POST') {
    try {
      // Backend sends form-urlencoded or multipart with 'html' field
      const html = req.body.html;
      
      if (!html) {
        return res.status(400).json({ success: false, error: 'No html field in request' });
      }

      // Store the result
      resultsStore.set(requestId, {
        html: html,
        timestamp: new Date().toISOString()
      });

      return res.status(200).json({ success: true, message: 'Result stored' });
    } catch (error) {
      console.error('Error storing result:', error);
      return res.status(500).json({ success: false, error: 'Failed to store result' });
    }
  }

  // DELETE - Clear stored result
  if (req.method === 'DELETE') {
    resultsStore.delete(requestId);
    return res.status(200).json({ success: true, message: 'Result cleared' });
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
