import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Login from "./components/Login";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            {/* Home page with Hero section */}
            <Route
              path="/"
              element={
                <main>
                  <Home />
                  <About />
                  <Events />
                  <Testimonials />
                  <Contact />
                </main>
              }
            />

            {/* Individual page routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;