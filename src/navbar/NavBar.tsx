import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#2C2B28", // Fundo escuro
          borderBottom: "4px solid #D4AF37", // Borda dourada
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Título */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: "#FFD700",
              fontFamily: "serif",
              textDecoration: "none",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            RPG Divino
          </Typography>

          {/* Links de navegação */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/herois"
              sx={{
                color: "#F9E4B7",
                fontFamily: "serif",
                "&:hover": {
                  color: "#FFD700",
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                },
              }}
            >
              Campeões
            </Button>
            <Button
              component={Link}
              to="/deusas"
              sx={{
                color: "#F9E4B7",
                fontFamily: "serif",
                "&:hover": {
                  color: "#FFD700",
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                },
              }}
            >
              Deusas
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
