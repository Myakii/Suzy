import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/index.css";
import Test from "./chapitre_1_act_I/rencontre_etincelle";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Test />} />

          {/* Autres routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
