import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About'
import OnCampus from './components/OnCampus';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />

        <main className="flex-[3]">
          <Home />
          <About />
          <Experience />
          <OnCampus />
          <Projects />

        </main>
      </div>

    </>
  );
}

export default App;
