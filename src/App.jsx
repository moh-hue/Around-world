import Header from "./assets/Components/Header";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
            <Route path=":country" element={<Country />}/>
            <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
