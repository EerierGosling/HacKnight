import { Routes, Route } from "react-router-dom";

import Content from "./Content.js";
import Form from "./Form.js";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/signup" element={<Form />} />
                <Route path="/" element={<Content />} />
                <Route path="*" element={<Content />} />
            </Routes>
            {/* Additional content or components can be added here but outside the Routes */}
        </div>
    );
}

export default App;
