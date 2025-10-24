import { Routes, Route } from "react-router-dom";
import { FyrelviaPage } from "./Fyrelvia/GodOne";
import { QyreshaPage } from "./Qyresha/GodTwo";
import DeusasBar from "./DeusasBar";

const GodHome = () => {
  return (
    <>
      <DeusasBar />
      <Routes>
        <Route path="/Fyrelvia" element={<FyrelviaPage />} />
        <Route path="/Qyresha" element={<QyreshaPage />} />
      </Routes>
    </>
  );
}   
export default GodHome;