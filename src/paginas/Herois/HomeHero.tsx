import { Route, Routes } from "react-router-dom";
import HeroOne from "./bogdan/HeroOne";

const HeroHome = () => {
  return (
    
      <><Routes>
        
      <Route path="/" element={<HeroOne />} />
    </Routes></>
    
  );
}   
export default HeroHome;