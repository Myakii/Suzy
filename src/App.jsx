import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/0.Global/index.css";
import "./styles/0.Global/Effets.css";
import Chap1Act0 from "./Histoire/Chapitre1/ACT0"
import Chap1Act1 from "./Histoire/Chapitre1/ACT1"

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Chap1Act0 />} />
          <Route path="/chapitre1act1" element={<Chap1Act1 />} />

          {/* Autres routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
