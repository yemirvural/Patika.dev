import Event from './components/Events'
import Formbox from './components/Formbox'
import './App.css'

function App() {

  return (
    <div className='appWrapper'>
      <div className='signature'> Made with ❤️ by&nbsp; <a href={'https://github.com/yemirvural'} target='blank'>Yusuf Emir Vural</a></div>
      <Formbox />
      <Event />
    </div>
  )
}

export default App
