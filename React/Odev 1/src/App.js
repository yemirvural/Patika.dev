import './App.css';
import axios from 'axios';

function App() {

  async function getData(number) {
    const user = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    console.log({user, post});
  }

  return (
    <div className="App">
      {getData(1)}
    </div>
  );
}

export default App;
