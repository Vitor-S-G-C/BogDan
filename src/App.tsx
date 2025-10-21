import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Home from "./paginas/Home";
import GodOne from "./paginas/god1/GodOne";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/godone" element={<GodOne />} />
        </Routes>
      </Container>
    </>
  );
}
