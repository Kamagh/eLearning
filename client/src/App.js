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

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
    return (
        <div className="App">
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={'/sign-in'}>
                                positronX
                            </Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/sign-in'}>
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/sign-up'}>
                                            Sign up
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Routes>
                                <Route exact path="/" element={<Login />} />
                                <Route path="/sign-in" element={<Login />} />
                                <Route path="/sign-up" element={<SignUp />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
            {/* <Spinner /> */}
            {/* <Header/> */}
            {/*<Navbar/>
            <Carousel/>
            <Service/>
            <About/>
            <Categories/>
            <Courses/>
            <Team/>
            <Testimonial/>
            <Footer/>*/}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default App;
