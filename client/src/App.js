import { Routes, Route } from "react-router-dom";

// Pages Link
import Index from "./pages/index";
import Chatbot from "./pages/chatbot";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
        </div>
    );
}

export default App;
