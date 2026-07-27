import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Initialize Gemini client lazily
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "BioLab Assistant Server" });
});

// AI Assistant Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, contextTechnique } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required." });
      return;
    }

    const ai = getGeminiClient();

    let systemInstruction = `You are BioLab AI, an expert, enthusiastic, and highly knowledgeable Biotechnology & Life Sciences Laboratory Teaching Assistant.
Your mission is to help biotechnology, microbiology, molecular biology, and biochemistry students master lab techniques safely, accurately, and conceptually.

When explaining any laboratory technique, protocol, concept, or troubleshooting topic (such as PCR, DNA/RNA extraction, gel electrophoresis, ELISA, cell culture, microscopy, spectrophotometry, centrifugation, media preparation, biosafety, or laboratory troubleshooting):

You MUST structure your response into distinct markdown section headings (using '## Section Name'):
1. ## Overview
   - Concise summary of the technique or topic and its purpose.
2. ## Principle
   - Underlying scientific mechanism, chemical reactions, optics, or biological fundamentals.
3. ## Procedure
   - Step-by-step workflow, reagents used, exact parameters, or troubleshooting steps (use numbered lists '1.', '2.', etc. and bullet points).
4. ## Applications
   - Key practical uses in research, diagnostics, biotechnology, and industry.
5. ## Advantages
   - Major benefits, strengths, sensitivity, or efficiency factors.
6. ## Limitations
   - Potential drawbacks, bottlenecks, contamination risks, or false positive/negative factors.
7. ## Safety Tips
   - Critical PPE requirements, hazardous reagent handling (e.g. ethidium bromide, phenol, UV light, autoclaves, Bunsen burners), waste disposal, and emergency protocols.

For mathematical calculations (dilutions C1V1=C2V2, molarity, Beer-Lambert law), integrate clear step-by-step math within the Procedure or Overview section.
Maintain a professional, educational, clear, and highly user-friendly tone with bullet points and bold highlights throughout.`;

    if (contextTechnique) {
      systemInstruction += `\n\nNote: The user is currently studying the technique: "${contextTechnique}". Tailor your response with extra relevance to ${contextTechnique} if applicable.`;
    }

    // Prepare contents array for Gemini
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      history.forEach((item: { role: string; content: string }) => {
        contents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.content }],
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I was unable to process that request. Please try again.";

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error?.message || "Failed to generate AI response.",
      details: "Ensure your GEMINI_API_KEY is configured in AI Studio Secrets.",
    });
  }
});

// Setup Vite Dev Middleware or Serve Production Static Build
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BioLab Assistant server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
