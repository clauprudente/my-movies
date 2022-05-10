import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./views/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
