import "./global.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import GroupExperience from "./sections/group-experience/GroupExperience";
import CustomExperience from "./sections/custom-experience/CustomExperience";
import Blogs from "./sections/blogs/Blogs";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <div className="divider" />
        <GroupExperience />
        <CustomExperience />
        <Blogs />
      </main>
    </>
  );
}

export default App;
