import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/0.Global/index.css";
import Chapitre1 from "./Histoire/Chapitre1/ACT0"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Chapitre1 />} />

          {/* Autres routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
