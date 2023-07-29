import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const person = {
    "name": "yashir",
    "age": 20
  }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{person.name}</h1></div>
    </div>
  );
}

export default App;
