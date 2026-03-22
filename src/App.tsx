import NavBar from "./navbar/NavBar";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import HomeHero from "./paginas/Herois/HomeHero";
import GodHome from "./paginas/GodsHome/GodHome";
import HeroOne from "./paginas/Herois/bogdan/HeroOne";
import HeroMortarion from "./paginas/Herois/mortarion/HeroMortarion";
import FyrelviaPage from "./paginas/GodsHome/Fyrelvia/GodOne";
import QyreshaPage from "./paginas/GodsHome/Qyresha/GodTwo";
import { Box, CssBaseline } from "@mui/material";
import DiarioPage from "./paginas/diario/DiarioPage";

export default function App() {
  return (
    <>
      <CssBaseline /> {/* Reseta estilos globais */}
      <NavBar />
      <Box
        sx={{
          bgcolor: "#1C1B18", // Fundo escuro estilo pergaminho antigo
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HeroOne />} />
            <Route path="/herois/*" element={<HomeHero />} />
            <Route path="/mortarion" element={<HeroMortarion />} />
            <Route path="/deusas" element={<GodHome />} />
            <Route path="/Fyrelvia" element={<FyrelviaPage />} />
            <Route path="/Qyresha" element={<QyreshaPage />} />
            <Route path="/Diario" element={<DiarioPage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}
