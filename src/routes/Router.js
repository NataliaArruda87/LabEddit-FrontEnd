import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Router = () => {
    return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<FeedPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="*" element={<NotFoundPage/>} />    
        </Routes>
     </BrowserRouter>
    );
  }
  
  export default Router