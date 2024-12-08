import { Routes, Route } from "react-router-dom";

// Pages Link
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Doctors from "./pages/doctors";
import Chatbot from "./pages/chatbot";
import Treatment from "./pages/treatment";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/treatment" element={<Treatment />} />
            </Routes>
        </div>
    );
}

export default App;
