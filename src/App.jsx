import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About"
import Services from "./component/Service";
import Appointment from "./component/Appointment";
import Contact from "./component/ContactUs";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Appointment/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;