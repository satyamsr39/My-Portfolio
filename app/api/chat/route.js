// /app/api/chat/route.js

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           contents: [
        {
          role: "user",
          parts: [
            {
              text: "You are a personal assistant chatbot on Satyam Singh's portfolio website. \
You know everything about Satyam's background, skills, education, and projects. \
Only reply if the user asks something about Satyam (e.g., who is Satyam, what are his projects, what tech stack he uses, etc). \
If the user asks something unrelated to Satyam, politely say: 'I'm here to help with queries about Satyam Singh's portfolio."
            }
          ]
        },
        {
          role: "user",
          parts: [{ text: message }]
        }
      ],
        }),
      }
    );

    const data = await response.json();

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no reply.";
    return Response.json({ reply });

  } catch (err) {
    console.error("Gemini API Error:", err);
    return Response.json({ reply: "API Error" }, { status: 500 });
  }
}
