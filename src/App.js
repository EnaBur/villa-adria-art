import './styles/app.scss';
//import Components
import Nav from './components/Nav';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
