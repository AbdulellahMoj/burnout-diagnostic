import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `
You are an empathetic, supportive, and understanding AI assistant helping university students (especially in technical/CS fields) deal with occupational and academic burnout.
Keep your responses brief, warm, practical, and conversational. Do NOT provide medical advice. If someone seems in crisis, gently suggest they seek professional help.
Limit your response to 2-3 short paragraphs maximum. Use a gentle, heartfelt tone.
`.trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
  }

  const { messages = [], userMessage = '' } = req.body || {};
  if (!userMessage || typeof userMessage !== 'string') {
    return res.status(400).json({ error: 'Invalid user message' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const history = messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n');

    const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${history}\nUser: ${userMessage}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        maxOutputTokens: 250,
        temperature: 0.7
      }
    });

    const reply = response.text || "I'm here for you. Could you tell me a bit more?";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({
      error: 'Chat service unavailable',
      reply: "I'm having a little trouble connecting right now, but please know that your feelings are valid and you're not alone in this."
    });
  }
}
