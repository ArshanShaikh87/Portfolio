import Home from './sections/home';
import About from './sections/about';
import Services from './sections/services';
import Portfolio from './sections/portfolio';
import Contact from './sections/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
