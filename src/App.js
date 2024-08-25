import Home from './Pages/Home/Home.jsx'
import Navbar from './Pages/Navbar.jsx'
import './App.css';
import HomeSecond from './Pages/HomeSecond/HomeSecond.jsx';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <HomeSecond></HomeSecond>
    </div>
  );
}

export default App;
