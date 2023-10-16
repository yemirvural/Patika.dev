import style from './style.module.css'
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import { useState, useEffect } from 'react';
import { useFilter } from '../../FilterContext';

function Results() {
  const [page, setPage] = useState(1);
  const [resultOption, setResultOption] = useState(16);
  const [cardCount, setCardCount] = useState(80)
  const [pageCount, setPageCount] = useState(5)

  const {
    filterName,
    filterStatus,
    filterSpecies,
    filterType,
    filterGender,
    filterLocation,
    filterLocationID
  } = useFilter();

  let allResults = [];
  for (let i = 1; i <= 42; i++) {
    const { error ,loading, data } = useQuery(GET_CHARACTERS, {
      variables: { page: i, filter: {
        name: filterName,
        status: filterStatus,
        //species: filterSpecies,
        type: filterType,
        //gender: filterGender[0]
      } 
    },
  });
    error && console.log(error)
    !loading && allResults.push(...data.characters.results);
  }

  const optionHandler = (e) => {
    setResultOption(e.target.value)
  }

  useEffect(() => {
    setPage(1)
  }, [filterName, filterGender, filterSpecies, resultOption, filterLocation])


  useEffect(() => {
    setCardCount(allResults.length)
  }, [allResults])

  useEffect(() => {
    if(filterLocation) {
      let locationFilteredCount = allResults.filter(result => result.location.id === filterLocationID).length;
      setCardCount(locationFilteredCount)
    }
    setPageCount(Math.ceil(cardCount/resultOption))
  }, [allResults, cardCount, filterLocation, filterLocationID, resultOption])

  const highlightText = (text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === keyword.toLowerCase() 
      ? <span key={index} className={style.highlighted}>{part}</span>
      : part
    );
  };

  return (
    <>
      <div className={style.resultsWrapper}>
        <header className={style.resultsHeader}>
          <div className={style.resultsOption}>
            <select className={style.select} name='resultOption' onChange={optionHandler} value={resultOption}>
              <option value="16">16 hits per page</option>
              <option value="32">32 hits per page</option>
              <option value="64">64 hits per page</option>
            </select>
            <label htmlFor='resultOption'>
              <svg xmlns='http://www.w3.org/2000/svg' width='12' height='7'><g fill='none' fillRule='evenodd'><path d='M14-5v16H-2V-5z' /><path fill='#000' stroke='#FFF' strokeWidth='.5' d='M2.228 1.332a.664.664 0 00-.942.001.665.665 0 00-.002.941l4.247 4.247c.259.26.679.26.938 0l4.247-4.247a.664.664 0 00-.002-.94.666.666 0 00-.942-.002L6 5.105 2.228 1.332z' /></g>
              </svg>
            </label>
          </div>
        </header>
        <div className={style.resultsBody}>
          <ul className={style.resultsList}>
            {
              //  filterLocation ? .filter(item => {return item.location.name === filterLocation;})
              filterLocation ?
              allResults
              .filter((result) => result.location.id === filterLocationID)
              .slice(0 + (parseFloat(resultOption) * (page - 1)), parseFloat(resultOption) + (parseFloat(resultOption) * (page - 1)))
              .map((item, key) => {
                return (
                <li key={key} className={style.resultItem}>
                  <div className={style.itemHeader}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={style.itemBody}>
                    <p className={style.itemCategory}>{item.species}</p>
                    <h3 className={style.itemHighlight}>{item.name}</h3>
                    <p className={style.itemDescription}>{item.location.name}</p>
                  </div>
                </li>
              )})
              :
              filterGender.length > 0 ?
              allResults
              .filter((result) => filterGender.some((filter) => result.gender === filter))
              .slice(0 + (parseFloat(resultOption) * (page - 1)), parseFloat(resultOption) + (parseFloat(resultOption) * (page - 1)))
              .map((item, key) => (
                <li key={key} className={style.resultItem}>
                  <div className={style.itemHeader}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={style.itemBody}>
                    <p className={style.itemCategory}>{item.species}</p>
                    <h3 className={style.itemHighlight}>{highlightText(item.name, filterName)}</h3>
                    <p className={style.itemDescription}>{item.location.name}</p>
                  </div>
                </li>
              ))
              :
              filterSpecies.length > 0 ?
              allResults
              .filter((result) => filterSpecies.some((filter) => result.species === filter))
              .slice(0 + (parseFloat(resultOption) * (page - 1)), parseFloat(resultOption) + (parseFloat(resultOption) * (page - 1)))
              .map((item, key) => (
                <li key={key} className={style.resultItem}>
                  <div className={style.itemHeader}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={style.itemBody}>
                    <p className={style.itemCategory}>{item.species}</p>
                    <h3 className={style.itemHighlight}>{highlightText(item.name, filterName)}</h3>
                    <p className={style.itemDescription}>{item.location.name}</p>
                  </div>
                </li>
              ))
              :
              allResults
              .slice(0 + (parseFloat(resultOption) * (page - 1)), parseFloat(resultOption) + (parseFloat(resultOption) * (page - 1)))
              .map((item, key) => (
                <li key={key} className={style.resultItem}>
                  <div className={style.itemHeader}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={style.itemBody}>
                    <p className={style.itemCategory}>{item.species}</p>
                    <h3 className={style.itemHighlight}>{highlightText(item.name, filterName)}</h3>
                    <p className={style.itemDescription}>{item.location.name}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        {
          allResults.length > 0 ?
            <footer className={style.footer}>
              <div className={style.pagination}>
                <ul className={style.paginationList}>
                  <li className={`${style.paginationController} ${(page <= 1) && style.disabledButton}`}>
                    <button  onClick={() => setPage(page - 1)} disabled={page <= 1}> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.143"><path d="M9 5H1M5 9L1 5l4-4"></path></g>
                      </svg>
                    </button>
                  </li>
                  {
                    Array.from({ length: 5 }, (_, i) => page + i - 2)
                      .filter((pageNumber) => pageNumber >= 1 && pageNumber <= pageCount)
                      .map((pageNumber) => (
                        <li
                          key={pageNumber}
                          className={`${style.paginationItem} ${page === pageNumber && style.selectedButton
                            }`}
                        >
                          <a onClick={() => setPage(pageNumber)}>{pageNumber}</a>
                        </li>
                      ))
                  }
                  <li className={`${style.paginationController} ${(page >= pageCount) && style.disabledButton} `}> 
                    <button onClick={() => setPage(page + 1)} disabled={page >= pageCount}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.143"><path d="M1 5h8M5 9l4-4-4-4"></path></g>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </footer>
            : null
        }
      </div>
    </>
  )
}

export default Results