import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './/globals.css'

const Home: React.FC = () => {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
