import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box minH="100vh" overflowX="hidden">
      <Header />
      <Box as="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
