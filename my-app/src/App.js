import logo from './logo.svg';
import './App.css';
// import function from components
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';


function App() {
  return (
    <div className="App">
     <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Alan" age="30" />
    </div>
  );
}

export default App;
