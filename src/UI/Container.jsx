import Nation from '../components/Nation';
import Map from '../components/Map';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import CountrySearch from '../components/search';
import { Link } from 'react-router-dom';
import AIChatInterface from '../ai';

export default function Container() {
  const [selectedCountryCoords, setSelectedCountryCoords] = useState(null);
  const [isClicked, setIsClicked] = useState(true);
  const [aiClicked, setAiClicked] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  function handleAiClick(){
    setAiClicked(!aiClicked);

  }


  return (
    <>
      {/* Top navigation bar */}
      <div className="bg-gray-800 flex justify-between w-full fixed top-0 left-0 z-20 p-5">
        {/* Left side navigation items */}
        <div className="flex justify-start pr-4 align-middle hidden md:block">
          <span className="flex">
            <Link to="/" className="text-white pr-4"><img src='https://www.worldcountriesquiz.com/assets/img/globe.png'/></Link>
            <h1 className="text-xl font-bold tracking-wide mt-3 font-serif text-white">World  Fusion  </h1>
            <button className="text-white ml-4 mt-1" onClick={handleClick}>
              <FontAwesomeIcon icon={faList} />
            </button>
          </span>
        </div>

        {/* CountrySearch Component */}
        <div className="relative w-full max-w-md mx-auto z-30">
          <CountrySearch onCountrySelect={setSelectedCountryCoords} />
        </div>
        
          <div className="relative flex items-center">
      <button
        onClick={handleAiClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="text-3xl bg-blue-300 rounded-full mb-2 mx-3"
      >
        🧐
      </button>

      {showTooltip && (
        <div className=" absolute left-1/4 transform -translate-x-10 top-full mb-2 flex flex-col items-center">
          <div className="px-3 py-2 bg-gray-700 text-white text-sm rounded-md shadow-lg">
          Ask Coach AI !
          </div>
        </div>
      )}
    </div>

             
          <div className="relative flex items-center">
      <Link
        to="/question"
        onMouseEnter={() => setTooltipText(true)}
        onMouseLeave={() => setTooltipText(false)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="37" height="37" color="#111111" fill="none" className='bg-white rounded-full text-3xl mx-3 mb-3'>
    <path d="M10.4564 2.64012C11.3085 1.78663 12.6915 1.78663 13.5436 2.64012L14.553 3.65112C14.9625 4.06139 15.5186 4.29172 16.0983 4.29124L17.5269 4.29007C18.733 4.28909 19.7109 5.26702 19.7099 6.47306L19.7088 7.90166C19.7083 8.48139 19.9386 9.03745 20.3489 9.44705L21.3599 10.4564C22.2134 11.3085 22.2134 12.6915 21.3599 13.5436L20.3489 14.553C19.9386 14.9625 19.7083 15.5186 19.7088 16.0983L19.7099 17.5269C19.7109 18.733 18.733 19.7109 17.5269 19.7099L16.0983 19.7088C15.5186 19.7083 14.9625 19.9386 14.553 20.3489L13.5436 21.3599C12.6915 22.2134 11.3085 22.2134 10.4564 21.3599L9.44705 20.3489C9.03745 19.9386 8.48139 19.7083 7.90166 19.7088L6.47306 19.7099C5.26702 19.7109 4.28909 18.733 4.29007 17.5269L4.29124 16.0983C4.29172 15.5186 4.06139 14.9625 3.65112 14.553L2.64012 13.5436C1.78663 12.6915 1.78663 11.3085 2.64012 10.4564L3.65112 9.44705C4.06139 9.03745 4.29172 8.48139 4.29124 7.90166L4.29007 6.47306C4.28909 5.26702 5.26702 4.28909 6.47306 4.29007L7.90166 4.29124C8.48139 4.29172 9.03745 4.06139 9.44705 3.65112L10.4564 2.64012Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M11.992 17H12.001" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>
      </Link>

      {tooltipText && (
        
        <div className="absolute left-1/4 transform -translate-x-10 top-full mb-2 flex flex-col items-center">
           <div className="w-2 h-2 bg-gray-700 transform rotate-6 -mt-1"></div>
          <div className="px-3 py-2 bg-gray-700 text-white text-sm rounded-md shadow-lg">
            Go to Questions
          </div>
          {/* Tooltip arrow */}
         
        </div>
      )}
    </div>








        {/* Right side button (Mobile view) */}
        <div className="flex justify-end mr-4 align-middle">
          <button className="text-white md:hidden" onClick={handleClick}>
            <FontAwesomeIcon icon={faList} />
          </button>
          
        </div>
      </div>

      {/* Main content with padding to prevent overlap with the navbar */}
      <div className="h-screen w-full flex pt-20 relative z-10">
        {isClicked && <Nation onCountrySelect={setSelectedCountryCoords} />}
        <Map selectedCountryCoords={selectedCountryCoords} />
        {aiClicked && <AIChatInterface/>}
      </div>
    </>
  );
}
