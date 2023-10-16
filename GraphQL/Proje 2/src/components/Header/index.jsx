import style from './style.module.css'
import { useFilter } from '../../FilterContext';

function Header() {
  const { filterName, filterSetName } = useFilter();

  return (
    <div className={style.header}>
      <p className={style.headerTitle}>Wubba Lubba Dub Dub.</p>
      <div className={style.searchbox}>
        <form action="" className={style.form}>
          <button type="submit" onClick={(e) => e.preventDefault()} className={style.submitButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" transform="translate(1 1)"><circle cx="7.11" cy="7.11" r="7.11"></circle><path d="M16 16l-3.87-3.87"></path></g></svg>
          </button>
          <input
            className={style.searchInput}
            type="search"
            placeholder="Name, description, location ..."
            spellCheck="false"
            value={filterName}
            onChange={(e) => filterSetName(e.target.value)}
          />
          {
            filterName.length > 0 ?
              <button type="reset" className={style.resetButton} onClick={() => filterSetName('')}>
                <svg className="resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
                </svg>
              </button> : null
          }
        </form>
      </div>
    </div>
  )
}

export default Header