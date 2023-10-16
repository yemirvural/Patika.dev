import './App.css'
import Filters from './components/Filters'
import Header from './components/Header'
import Results from './components/Results'
import { FilterProvider } from './FilterContext';

function App() {

  return (
    <FilterProvider>
      <Header/>
      <main className='container'>
        <Filters/>
        <Results/>
      </main>
    </FilterProvider>
  )
}

export default App
