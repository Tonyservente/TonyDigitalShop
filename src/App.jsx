import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/CartWidget';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/category/:idCategory" element={<MainContent />} />
          <Route path="/productDetail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
