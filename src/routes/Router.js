import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const Router = () => {
    return (
     <BrowserRouter>
        <Routes>
            <Route path="/feedpage" element={<FeedPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<LoginPage/>} />  
        </Routes>
     </BrowserRouter>
    );
  }
  
  export default Router