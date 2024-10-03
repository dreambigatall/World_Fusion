import React, { useState } from "react";
import fetchAiData from "./Services/openaiApi";
import axios from "axios";
const AIChatInterface = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Await AI response
      const data = await fetchAiData({ question: input });
  
      // Log the full response to check its structure
      console.log('AI response:', data);
  
      // Extract and set the AI response text (update based on response structure)
      const aiText = data?.candidates?.[0]?.output || 'No response from AI';
      setResponse(aiText);
    } catch (error) {
      setResponse('Error retrieving AI response');
      console.error('Error in submission:', error);
    }
  
    console.log("Submitted:", input, response);
  };
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: `tell me about these ${question} country in short and descriptive manner` }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  console.log(answer)
  

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 ">
      {/* Greeting Section */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* Icon (Add an image or SVG here) */}
          <div className="w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center">
            <span role="img" aria-label="icon" className="text-2xl">🧐</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-500">Hi, Halid!</h1>
          <p className="text-gray-600">How can I help?</p>
        </div>
      </div>

      {/* Chat Button 
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
        Let's chat
      </button>
      */}
      <div className="overflow-y-auto rounded-lg shadow-lg p-4 mt-4  ">
        <p className="text-gray-600 h-72">
        {answer}

        </p>
      </div>

      {/* Input Area */}
      <form onSubmit={generateAnswer} 
      className=" overflow-auto">
        <input
          type="text"
          placeholder="Ask me anything"
          value={question}
        onChange={(e) => setQuestion(e.target.value)}

          className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  "
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 mt-5"
        >
          Submit
        </button>
      </form>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500">
        Coach is powered by AI, so check for mistakes and don't share sensitive info.
      </p>
    </div>
  );
};

export default AIChatInterface;


