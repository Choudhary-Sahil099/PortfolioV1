import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Preloader from "./components/Preloader";
import Menubar from "./components/Menubar";

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // 🔒 Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {loading && <Preloader />}

      {!loading && (
        <>
          <Navbar setOpen={setOpen} />
          <Menubar open={open} setOpen={setOpen} />
          <Profile />
          <Divider />
          <Skill />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
