import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import Restaurant from "./Page/Restaurant";
import ThemeContextApp from "./ThemeContext/ThemeContextApp";

function App() {
  return (
    <div className="">
      <ThemeContextApp>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/restaurant"
              element={<Restaurant></Restaurant>}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ThemeContextApp>
    </div>
  );
}

export default App;
