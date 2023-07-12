import Searchbar from './components/Searchbar/Searchbar'
import TextArea from './components/TextArea/TextArea'
import Content from './components/Content/Content'
import './App.css'


function App() {

  return (
    <div className='wrapper'>
      <h2 className='logo'>NotesApp</h2>
      <Searchbar/>
      <TextArea/>
      <Content/>
    </div>
  )
}

export default App
