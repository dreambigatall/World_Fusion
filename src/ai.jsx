// import React, { useState } from "react";
// import fetchAiData from "./Services/openaiApi";
// import axios from "axios";
// const AIChatInterface = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Await AI response
//       const data = await fetchAiData({ question: input });
  
//       // Log the full response to check its structure
//       console.log('AI response:', data);
  
//       // Extract and set the AI response text (update based on response structure)
//       const aiText = data?.candidates?.[0]?.output || 'No response from AI';
//       setResponse(aiText);
//     } catch (error) {
//       setResponse('Error retrieving AI response');
//       console.error('Error in submission:', error);
//     }
  
//     console.log("Submitted:", input, response);
//   };
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   async function generateAnswer(e) {
//     setGeneratingAnswer(true);
//     e.preventDefault();
//     setAnswer("Loading your answer... \n It might take upto 10 seconds");
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//           import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
//         }`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: `tell me about these ${question} country in short and descriptive manner` }] }],
//         },
//       });

//       setAnswer(
//         response["data"]["candidates"][0]["content"]["parts"][0]["text"]
//       );
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }

//     setGeneratingAnswer(false);
//   }

//   console.log(answer)
  

//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 ">
//       {/* Greeting Section */}
//       <div className="flex items-center space-x-4">
//         <div className="flex-shrink-0">
//           {/* Icon (Add an image or SVG here) */}
//           <div className="w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center">
//             <span role="img" aria-label="icon" className="text-2xl">🧐</span>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-blue-500">Hi, Halid!</h1>
//           <p className="text-gray-600">How can I help?</p>
//         </div>
//       </div>

//       {/* Chat Button 
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
//         Let's chat
//       </button>
//       */}
//       <div className="overflow-y-auto rounded-lg shadow-lg p-4 mt-4  ">
//         <p className="text-gray-500 h-72 font-bold">
//           {generatingAnswer && "Generating answer..." }
//         {answer}

//         </p>
//       </div>

//       {/* Input Area */}
//       <form onSubmit={generateAnswer} 
//       className=" overflow-auto">
//         <input
//           type="text"
//           placeholder="Ask me anything"
//           value={question}
//         onChange={(e) => setQuestion(e.target.value)}

//           className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  "
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 mt-5"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Disclaimer */}
//       <p className="text-xs text-gray-500">
//         Coach is powered by AI, so check for mistakes and don't share sensitive info.
//       </p>
//     </div>
//   );
// };

// export default AIChatInterface;

// import React, { useState } from "react";
// import axios from "axios";
// import LoadingSpinner from "./UI/Spinner";

// const AIChatInterface = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState(null);
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   async function generateAnswer(e) {
//     e.preventDefault();
//     setGeneratingAnswer(true);
//     setAnswer("Loading your answer... It might take up to 10 seconds");

//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: `tell me about these ${question} country in short and descriptive manner` }] }],
//         },
//       });

//       const aiResponse = response.data.candidates[0].content.parts[0].text;
//       console.log(aiResponse);
//       setAnswer(parseContent(aiResponse));
//     } catch (error) {
//       console.error(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     } finally {
//       setGeneratingAnswer(false);
//     }
//   }

//   // Function to parse JSON string into sections with headings and bullet points
//   const parseContent = (response) => {
//     const sections = response.split('\n\n').map((section) => {
//       const [title, ...points] = section.split('\n').filter(Boolean);
//       return {
//         title: title.replace(/\*\*/g, ''),
//         points: points.map((point) => point.replace(/^\* /, '')),
//       };
//     });
//     return sections;
//   };

//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4">
//       <div className="flex items-center space-x-4">
//         <div className="w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center">
//           <span role="img" aria-label="icon" className="text-2xl">🧐</span>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-blue-500">Hi, Geographer!</h1>
//           <p className="text-gray-600">How can I help?</p>
//         </div>
//       </div>

//       <div className="overflow-y-auto rounded-lg shadow-lg p-4 mt-4 h-72">
//         {generatingAnswer ? (
//          <LoadingSpinner/>
//         ) : (
//           answer && answer.map((section, index) => (
//             <div key={index}>
//               <h2 className="text-xl font-bold mt-2">{section.title}</h2>
//               <ul className="list-disc list-inside ml-4">
//                 {section.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         )}
//       </div>

//       <form onSubmit={generateAnswer} className="overflow-auto mt-4">
//         <input
//           type="text"
//           placeholder="Ask me anything"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 mt-4"
//         >
//           Submit
//         </button>
//       </form>

//       <p className="text-xs text-gray-500 mt-2">
//         Coach is powered by AI, so check for mistakes and don't share sensitive info.
//       </p>
//     </div>
//   );
// };

// export default AIChatInterface;


// import React, { useState } from "react";
// import LoadingSpinner from "./UI/Spinner";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import ReactMarkdown from "react-markdown";

// const fetchAiData = async ({ question }) => {
//   const apiKey = import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT;
//   if (!apiKey) {
//     throw new Error("API key not found");
//   }
//   try {
//     const genAI = new GoogleGenerativeAI(apiKey);
      
//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
//     const prompt = `tell me about this country in detail ${question}`;
//     const response = await model.generateContent(prompt );
    
//     // Ensure the response structure is as expected.
//     const aiResponse = response.response.candidates[0].content.parts[0].text;
//     console.log("AI Response:", aiResponse);
//     return aiResponse;
//   } catch (err) {
//     console.error("Full error object:", err);
//     if (err.response) {
//       console.error("API error:", err.response.data);
//     } else {
//       console.error("Request error:", err.message);
//     }
//     throw new Error("Error fetching AI response");
//   }
// };

// const AIChatInterface = () => {
//   const [question, setQuestion] = useState("");
//   // Initially answer is null. When populated, it will either be an array (parsed sections)
//   // or a string error message.
//   const [answer, setAnswer] = useState(null);
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   async function generateAnswer(e) {
//     e.preventDefault();
//     setGeneratingAnswer(true);
//     // Clear previous answer so the UI can show a loading state if needed.
//     setAnswer(null);

//     try {
//       const aiResponse = await fetchAiData({ question });
//       console.log(aiResponse);
//       const parsed = parseContent(aiResponse);
//       setAnswer(parsed);
//     } catch (error) {
//       console.error(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     } finally {
//       setGeneratingAnswer(false);
//     }
//   }

//   // Parses the API response into sections if it’s a string.
//   const parseContent = (response) => {
//     if (typeof response !== "string") {
//       // Fallback: return the response wrapped in an object
//       return [{ title: "Response", points: [response] }];
//     }
//     const sections = response.split("\n\n").map((section) => {
//       const [title, ...points] = section.split("\n").filter(Boolean);
//       return {
//         title: title.replace(/\*\*/g, ""),
//         points: points.map((point) => point.replace(/^\* /, "")),
//       };
//     });
//     return sections;
//   };

//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4">
//       <div className="flex items-center space-x-4">
//         <div className="w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center">
//           <span role="img" aria-label="icon" className="text-2xl">🧐</span>
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-blue-500">Hi, Geographer!</h1>
//           <p className="text-gray-600">How can I help?</p>
//         </div>
//       </div>

//       <div className="overflow-y-auto rounded-lg shadow-lg p-4 mt-4 h-72">
//         {generatingAnswer ? (
//           <LoadingSpinner/>
//         ) : (
//           answer && (
//             <ReactMarkdown>answer</ReactMarkdown>
//           )
//         )}
//       </div>

//       <form onSubmit={generateAnswer} className="overflow-auto mt-4">
//         <input
//           type="text"
//           placeholder="Ask me anything"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 mt-4"
//         >
//           Submit
//         </button>
//       </form>

//       <p className="text-xs text-gray-500 mt-2">
//         Coach is powered by AI, so check for mistakes and don't share sensitive info.
//       </p>
//     </div>
//   );
// };

// export default AIChatInterface;
import React, { useState } from "react";
import LoadingSpinner from "./UI/Spinner";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const fetchAiData = async ({ question }) => {
  const apiKey = import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT;
  if (!apiKey) {
    throw new Error("API key not found");
  }
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
    const prompt = `Describe ${question}: geography, history, culture, politics, and economy.`;

    const response = await model.generateContent(prompt);
    
    // Ensure the response structure is as expected.
    const aiResponse = response.response.candidates[0].content.parts[0].text;
    console.log("AI Response:", aiResponse);
    return aiResponse;
  } catch (err) {
    console.error("Full error object:", err);
    if (err.response) {
      console.error("API error:", err.response.data);
    } else {
      console.error("Request error:", err.message);
    }
    throw new Error("Error fetching AI response");
  }
};

const AIChatInterface = () => {
  const [question, setQuestion] = useState("");
  // Use a string state to store the AI response in markdown format.
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    // Clear previous answer.
    setAnswer("");

    try {
      const aiResponse = await fetchAiData({ question });
      console.log(aiResponse);
      setAnswer(aiResponse); // Directly store the markdown string.
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    } finally {
      setGeneratingAnswer(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center">
          <span role="img" aria-label="icon" className="text-2xl">🧐</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-500">Hi, Geographer!</h1>
          <p className="text-gray-600">How can I help?</p>
        </div>
      </div>

      <div className="overflow-y-auto rounded-lg shadow-lg p-4 mt-4 h-72">
        {generatingAnswer ? (
          <LoadingSpinner />
        ) : (
          answer && <ReactMarkdown>{answer}</ReactMarkdown>
        )}
      </div>

      <form onSubmit={generateAnswer} className="overflow-auto mt-4">
        <input
          type="text"
          placeholder="Ask me anything"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 mt-4"
        >
          Submit
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-2">
        Coach is powered by AI, so check for mistakes and don't share sensitive info.
      </p>
    </div>
  );
};

export default AIChatInterface;
