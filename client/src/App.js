import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Service from "./components/Service";
import About from "./components/About";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            {/* <Spinner /> */}
            {/* <Header/> */}
            <Navbar/>
            <Carousel/>
            <Service/>
            <About/>
            <Categories/>
            <Courses/>
            <Team/>
            <Testimonial/>
            <Footer/>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


        </div>
    );
}

export default App;
