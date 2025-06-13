import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
const ai = new GoogleGenAI({ apiKey: "AIzaSyAHMpLQSxcAtO4n8HZ-UC0I9JXsDwHWXC8" });

// Create an array that will maintain our chat history 
const History = []

async function Chatting(userProblem) {

    History.push({
        role : 'user',
        parts : [{text : userProblem}]
    })
    
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
  });

  History.push({
    role : 'model',
    parts : [{text : response.text}]
  })
  console.log(response.text);
}

 async function main(){
   const userProblem =  readlineSync.question(" Ask me anything ->  ");
   await Chatting(userProblem);
   main();

 }
 // It is in a manually way But we want to Make it in a More ellurix Manner 


 
 


 main();