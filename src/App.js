import "./index.css";
import TrainingPlage from "./TrainingPlage.js";
import AddGym from "./AddGym.js";
import GymDetail from "./GymDetail.js";
import HomePageModal from "./HomePageModal.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="homepage">
      {/* <Router>
        <HomePage />
        <TrainingPlage />
        <AddGym />
        <GymDetail />
        <Routes>
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/trainingplace" element={<TrainingPlage />} />
          <Route exact path="/addgym" element={<AddGym />} />
          <Route exact path="/gymdetail" element={<GymDetail />} />
        </Routes>
      </Router> */}
      <HomePageModal />
      {/* <GymDetail /> */}
      {/* <Aa /> */}
    </div>
  );
}

export default App;
