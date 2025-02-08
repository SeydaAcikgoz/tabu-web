import {
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../pages/home";
import CardsPage from "../pages/cards";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ScorPage from "../pages/scor";
import ScorsPage from "../pages/scors";


const Navigation = () => {
    return <Routes>
        <Route
            path="/"
            element={<HomePage/>}
        />
        <Route
            path="/cards"
            element={<CardsPage/>}
        />
        <Route
            path="/login"
            element={<LoginPage/>}
        />
        <Route
            path="/register"
            element={<RegisterPage/>}
        />
        <Route
            path="/scor"
            element={<ScorPage/>}
        />
        <Route
            path="/scors"
            element={<ScorsPage/>}
        />
    </Routes>;
};
export default Navigation;