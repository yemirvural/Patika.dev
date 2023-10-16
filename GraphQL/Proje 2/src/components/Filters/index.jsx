import style from './style.module.css'
import { FILTER_LOCATION, COUNT_GENDER, COUNT_LOCATION, COUNT_ALL_LOCATION } from './queries'
import { useQuery } from '@apollo/client';
import { genders, species } from './data'
import { useFilter } from '../../FilterContext';
import { useState } from 'react';

function Filters() {
  const {
    filterSpecies,
    filterSetSpecies,
    filterGender,
    filterSetGender,
    filterLocation,
    filterSetLocation,
    filterSetLocationID
  } = useFilter();

  const [search, setSearch] = useState('');
  const [genderState, setGenderState] = useState("");
  const [speciesState, setSpeciesState] = useState("");

  const allLocationCounts = {};
  const allGenderCounts = {};
  const allSpeciesCounts = {};

  const getAllLocationCounts = () => {
    for (let i = 1; i <= 7; i++) {
      const { loading: loading3, data: data3 } = useQuery(COUNT_ALL_LOCATION, {
        variables: { page: i },
      });
      !loading3 && data3?.locations.results.map(location => allLocationCounts[location.id] = location.residents.length)
    }
  }
  getAllLocationCounts()

  const FilterCount = ({gender, species}) => {
    let arr = [];
    
    if ((filterGender.length < 1 || filterSpecies.length < 1) || species === undefined) {
      const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
        variables: { filter: {
          gender: gender || genderState,
          species: species || speciesState
        }}, 
      });
      arr.push(genderData?.characters.info.count);
    }
      
    if (gender === undefined) {
      filterGender.map(gender => {
        const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
          variables: { filter: {
            gender: gender || genderState,
            species: species || speciesState
          }}, 
        });
          arr.push(genderData?.characters.info.count);
      })
    }
    
    if (filterSpecies.length > 1 && species === undefined) {
      filterSpecies.map(species => {
        const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
          variables: { filter: {
            gender: gender || genderState,
            species: species || speciesState
          }}, 
        });
        arr.push(genderData?.characters.info.count);
      })
    }
    return arr.sort((a,b) => b-a)[0] || 0;
  }

  const LocationCount = ({ countData }) => {
    const { loading: loading2, data: data2 } = useQuery(COUNT_LOCATION, {
      variables: { id: countData },
    });
    return data2?.location.residents.length;
  }

  const { loading, error, data } = useQuery(FILTER_LOCATION, {
    variables: { name: search },
  });

  const speciesHandler = (e) => {
    e.target.checked ? filterSetSpecies([...filterSpecies, e.target.name]) : filterSetSpecies([...filterSpecies.filter(el => el !== e.target.name)]);
    e.target.checked ? setSpeciesState(e.target.name) : setSpeciesState(filterSpecies.length >= 1 ? filterSpecies[filterSpecies.length - 2]: "122");
  }
  const genderHandler = (e) => {
    e.target.checked ? filterSetGender([...filterGender, e.target.name]) : filterSetGender([...filterGender.filter(el => el !== e.target.name)]);
    e.target.checked ? setGenderState(e.target.name) : setGenderState(filterGender.length >= 1 ? filterGender[filterGender.length - 2]: "122");
  }
  const locationHandler = (e) => {
    e.target.checked ? filterSetLocation(e.target.name) : filterSetLocation("");
    e.target.checked ? filterSetLocationID(e.target.id) : filterSetLocationID("");
  }

  const resetHandler = () => {
    filterSetGender([]);
    filterSetSpecies([]);
    filterSetLocation('');
    filterSetLocationID('');
    setGenderState("");
    setSpeciesState("");
  }

  const highlightText = (text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase()
        ? <span key={index} className={style.highlighted}>{part}</span>
        : part
    );
  };

  let resetValidate = () => (filterSpecies.length || filterGender.length || filterLocation.length) > 0 ? false : true;

  return (
    <>
      <div className={style.containerWrapper}>
        <section className={style.containerFilters}>
          <div className={style.header}>
            <h2>Filters</h2>
            <div className={style.clearFilters}>
              <button onClick={resetHandler} disabled={resetValidate()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><g fill="none" fillRule="evenodd" opacity=".4"><path d="M0 0h11v11H0z"></path><path fill="#000" fillRule="nonzero" d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"></path></g>
                </svg>
                Clear filters
              </button>
            </div>
          </div>
          <div className={style.body}>
            <div className={style.filterBox}>
              <div className={style.filterHeader}>Gender</div>
              <div className={style.filterBody}>
                <ul className={style.filterList}>
                  {
                    genders
                      .toSorted((a, b) => {
                        if (filterGender.includes(a.name)) return -1;
                        if (filterGender.includes(b.name)) return 1;
                      })
                      .slice(0, 10)
                      .map((gender, key) =>
                      (<li key={key} className={style.filterListItem}>
                        <label className={style.label}>
                          <input type="checkbox" onChange={genderHandler} checked={filterGender.includes(gender.name)} name={gender.name} className={style.checkbox} />
                          <span className={style.labelText}>{gender.name}</span>
                          <span className={style.count}>{<FilterCount gender={gender.name} />}</span>
                        </label>
                      </li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <div className={style.filterBox}>
              <div className={style.filterHeader}>Species</div>
              <div className={style.filterBody}>
                <ul className={style.filterList}>
                  {
                    species
                      .toSorted((a, b) => {
                        if (filterSpecies.includes(a.name)) return -1;
                        if (filterSpecies.includes(b.name)) return 1;
                      })
                      .slice(0, 10)
                      .map((specie, key) =>
                      (<li key={key} className={style.filterListItem}>
                        <label className={style.label}>
                          <input type="checkbox" onChange={speciesHandler} checked={filterSpecies.includes(specie.name)} name={specie.name} className={style.checkbox} />
                          <span className={style.labelText}>{specie.name}</span>
                          <span className={style.count}>{<FilterCount species={specie.name} />}</span>
                        </label>
                      </li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <div className={style.filterBox}>
              <div className={style.filterHeader}>Location</div>
              <div className={style.filterBody}>
                <div className={style.searchBox}>
                  <form action="" className={style.form}>
                    <button type="submit" onClick={(e) => e.preventDefault()} className={style.submitButton}>
                      <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                      </svg>
                    </button>
                    <input
                      className={style.searchInput}
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search for locations…"
                      spellCheck="false"
                    />
                    <button type="reset" className={style.resetButton} onClick={() => setSearch('')}>
                      <svg className="resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
                      </svg>
                    </button>
                  </form>
                </div>
                <ul className={style.filterList}>
                  {
                    data?.locations.results
                      .sort((a, b) => {
                        if (filterLocation === a.name) return -1;
                        if (filterLocation === b.name) return 1;
                        return allLocationCounts[b.id] - allLocationCounts[a.id];
                      })
                      .slice(0, 10)
                      .map((location, key) => (
                        <li key={key} className={style.filterListItem}>
                          <label className={style.label}>
                            <input type="checkbox" id={location.id} onChange={locationHandler} checked={filterLocation === location.name} name={location.name} className={style.checkbox} />
                            <span className={style.labelText}>{highlightText(location.name, search)}</span>
                            <span className={style.count}>{<LocationCount countData={location.id} />}</span>
                          </label>
                        </li>
                      ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Filters