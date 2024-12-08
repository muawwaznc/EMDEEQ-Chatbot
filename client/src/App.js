import { Routes, Route } from "react-router-dom";
import './App.css';

// Pages Link
import Index from "./pages/index";
import Contact from "./pages/contact";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
