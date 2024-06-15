import CardContainer from "./components/CardContainer";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import EndScreen from "./components/EndScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<CardContainer />} />
          <Route path="/slider" element={<CardSlider />} />
          <Route path="/end" element={<EndScreen />} />
        </Route>       
      </Routes>

    </Router>
  );
}

export default App;
