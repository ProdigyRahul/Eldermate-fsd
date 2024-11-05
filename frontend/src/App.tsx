import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";
import CompleteProfile from "./components/CompleteProfile";
import GrandpalForm from "./components/GrandpalForm";


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
                  <Services />
                  <Testimonials />
                  <Contact />
                  <CompleteProfile />
                  <GrandpalForm />
                </main>
              }
            />

            {/* Individual page routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/completeProfile" element={<CompleteProfile />} />
            <Route path="/grandpalForm" element={<GrandpalForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;