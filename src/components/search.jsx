import { useRef, useState,useEffect } from 'react';
import { useNation } from '../context/Context';

const CountrySearch = ({onCountrySelect}) => {
    const { nations } = useNation();
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef(null); // Create a ref to the search container


    function handleInputSearchQuery(e) {
        setSearchQuery(e.target.value);
    }
    // Function to clear the search when clicking outside
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
          setSearchQuery(''); // Clear search input
      }
  }
    // useEffect to add/remove event listener for clicks outside the search component
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup event listener on component unmount
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);


    let filteredCountries = [];
    filteredCountries = nations?.filter((item) =>
        item.name.common
            .toLowerCase()
            .replaceAll(' ', '')
            .includes(searchQuery.toLowerCase().replaceAll(' ', ''))
    );

    return (
      <div ref={searchRef} className="relative w-full max-w-md mx-auto">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for a country..."
                className="w-full p-2 border border-gray-300 rounded-md"
                value={searchQuery}
                onChange={handleInputSearchQuery}
            />

            {/* Search Results */}
            {searchQuery && (
                <div
                    className="absolute top-full left-0 w-full max-w-md bg-white shadow-lg border border-gray-300 rounded-md z-50 mt-2"
                    style={{ maxHeight: '200px', overflowY: 'auto' }} // Limit height, add scroll
                >
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>onCountrySelect(country.latlng) }
                            >
                                {country.name.common}
                                <img src={country.flags.svg} alt={country.name.common} className="w-6 h-4 inline-block ml-2" />
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-500">No countries found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CountrySearch;
