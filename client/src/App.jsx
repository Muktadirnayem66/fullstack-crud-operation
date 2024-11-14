import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import Header from "./components/common/Header.jsx";


const Home = () => {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path="/read" element={<ReadPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={< UpdatePage/>} />
      </Routes>
    </div>
  );
};

export default Home;
