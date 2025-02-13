import "./global.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
      </main>
    </>
  );
}

export default App;
