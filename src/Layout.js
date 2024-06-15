import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/css/style.css";
import { Outlet, useLocation } from "react-router-dom";



function Layout() {
    const location = useLocation();
    const isAnimatedRoute = location.pathname === '/' || location.pathname === '/end';

    return (
        <div className="app">
            <div className={`card-bg ${isAnimatedRoute ? 'animated-bg' : ''}`}></div>
            <div className="container">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default Layout