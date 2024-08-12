import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Converto"/>
    <div className="container my-3">
      <TextForm heading="Enter text to Convert :"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
