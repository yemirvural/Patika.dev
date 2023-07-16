import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Balance from './components/Balance/Balance'
import Receipt from './components/Receipt/Receipt'
import './App.css'

function App() {


  return (
    <div className='wrapper'>
      <div className='signature'> Made with ❤️ by&nbsp; <a href={'https://github.com/yemirvural'} target='blank'>Yusuf Emir Vural</a></div>
      <Header />
      <Balance />
      <Products />
      <Receipt />
    </div>
  )
}

export default App
