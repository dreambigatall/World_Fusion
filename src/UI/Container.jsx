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
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      {/* Top navigation bar */}
      <div className="bg-stone-800 flex justify-between w-full fixed top-0 left-0 z-20 p-5">
        {/* Left side navigation items */}
        <div className="flex justify-start pr-4 align-middle hidden md:block">
          <span className="flex">
            <Link to="/" className="text-white pr-4"><img src='https://www.worldcountriesquiz.com/assets/img/globe.png'/></Link>
            <h3 className="font-mono text-xl text-orange-500 mt-3">world Fussion</h3>
            <button className="text-white ml-4 mt-1" onClick={handleClick}>
              <FontAwesomeIcon icon={faList} />
            </button>
          </span>
        </div>

        {/* CountrySearch Component */}
        <div className="relative w-full max-w-md mx-auto z-30">
          <CountrySearch onCountrySelect={setSelectedCountryCoords} />
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
        {<AIChatInterface/>}
      </div>
    </>
  );
}
