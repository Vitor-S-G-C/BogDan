import { Route, Routes } from "react-router-dom";
import HeroOne from "./bogdan/HeroOne";
import HeroMortarion from "./mortarion/HeroMortarion";

const HeroHome = () => {
  return (

      <><Routes>

      <Route index element={<HeroOne />} />
      <Route path="mortarion" element={<HeroMortarion />} />
    </Routes></>

  );
}   
export default HeroHome;