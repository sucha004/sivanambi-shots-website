import logo from './logo.svg';
import './App.css';
import Footer from './components/sections/footer/footer';
import Navbar from './components/sections/Navbar/Navbar';
import HeroVideoSection from './components/sections/hero/hero';
import Contact from './components/sections/contact/contact';

function App() {
  return (
    <>
      <Navbar/>
      <HeroVideoSection/>
      <Contact/>
      <Footer/> 
    </>
  );
}

export default App;
