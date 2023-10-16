import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterName, filterSetName] = useState('');
  const [filterStatus, filterSetStatus] = useState('');
  const [filterSpecies, filterSetSpecies] = useState([]);
  const [filterType, filterSetType] = useState('');
  const [filterGender, filterSetGender] = useState([]);
  const [filterLocation, filterSetLocation] = useState('');
  const [filterLocationID, filterSetLocationID] = useState('');



  return (
    <FilterContext.Provider
      value={{
        filterName,
        filterSetName,
        filterStatus,
        filterSetStatus,
        filterSpecies,
        filterSetSpecies,
        filterType,
        filterSetType,
        filterGender,
        filterSetGender,
        filterLocation,
        filterSetLocation,
        filterLocationID,
        filterSetLocationID
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}