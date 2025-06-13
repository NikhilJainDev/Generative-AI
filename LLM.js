import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAHMpLQSxcAtO4n8HZ-UC0I9JXsDwHWXC8" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
        {
            role : 'user',
            parts : [{text : "Hi, I am Rohit"}]
        },
        {
            role : 'model',
            parts : [{text : "Hi Rohit, it's nice to meet you! How can I help you today?"}]
        },
        {
            role : 'user', 
            parts : [{text : "Hello, Buddy What is MY name Can you tell me "}]
        }
    ],
  });

  // Another Object 
//    const response1 = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "What is the result of 2+2",
//   });

  console.log(" Generating answer .............. ");
  console.log(response.text);
 
}

await main();