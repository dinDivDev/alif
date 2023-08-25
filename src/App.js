import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import EntreesPage from "./pages/entreesPage/EntreesPage";
import MainLandingPage from "./pages/mainLandingPage/MainLandingPage";
import ContactUs from "./components/contactUs/ContactUs";
import "./App.css";
import BreakFastPage from "./pages/breakfastPage/BreakFastPage";
import DrinksPage from "./pages/drinkPage/DrinksPage";
import BakeryPage from "./pages/bakeryPage/BakeryPage";
import SaladsPage from "./pages/saladsPage/SaladsPage";
import SoupsPage from "./pages/soupsPage/SoupsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />}></Route>
      <Route path="/menu" element={<HomePage />}></Route>
      <Route path="/entrees" element={<EntreesPage />}></Route>
      <Route path="/breakfast" element={<BreakFastPage />}></Route>
      <Route path="/drinks" element={<DrinksPage />}></Route>
      <Route path="/bakery" element={<BakeryPage />}></Route>
      <Route path="/salads" element={<SaladsPage />}></Route>
      <Route path="/soups" element={<SoupsPage />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
    </Routes>
  );
}

export default App;
