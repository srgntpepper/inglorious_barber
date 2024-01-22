import React from "react";
import "./App.css"; // Make sure to create an App.css file for styling
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <Services />
        <About />
      </main>

      {/* <aside className="sidebar"> */}
      {/* Sidebar content */}
      {/* <div className="sidebar-item">Settings</div>
        <div className="sidebar-item">Profile</div> */}
      {/* Add other sidebar items here */}
      {/* </aside> */}
      <Footer />
    </div>
  );
}

export default App;
