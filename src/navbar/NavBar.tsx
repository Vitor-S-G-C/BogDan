import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { GiCastle, GiAngelWings, GiSwordman } from "react-icons/gi";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#2C2B28",
          backgroundImage: "linear-gradient(135deg, #2C2B28 0%, #1C1B18 100%)",
          borderBottom: "4px solid #D4AF37",
          boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 16px rgba(255,215,0,0.2)",
          },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
          {/* Logo / Título */}
          <Button
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <GiCastle
              style={{
                fontSize: "2rem",
                color: "#FFD700",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#FFD700",
                fontFamily: "var(--font-title)",
                fontWeight: 900,
                letterSpacing: 2,
                textShadow: "2px 2px 4px #000",
                background: "linear-gradient(45deg, #FFD700 30%, #FFA500 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ficha RPG
            </Typography>
          </Button>

          {/* Links de navegação */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={Link}
              to="/herois"
              startIcon={<GiSwordman />}
              sx={{
                color: isActive("/herois") ? "#FFD700" : "#F9E4B7",
                fontFamily: "var(--font-title)",
                fontWeight: 600,
                px: 2.5,
                py: 1,
                borderRadius: 2,
                border: "2px solid transparent",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: 1,
                ...(isActive("/herois") && {
                  bgcolor: "rgba(255, 215, 0, 0.15)",
                  borderColor: "#FFD700",
                  boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
                }),
                "&:hover": {
                  color: "#FFD700",
                  bgcolor: "rgba(255, 215, 0, 0.1)",
                  borderColor: "#D4AF37",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)",
                },
              }}
            >
              Campeões
            </Button>

            <Button
              component={Link}
              to="/deusas"
              startIcon={<GiAngelWings />}
              sx={{
                color: isActive("/deusas") ? "#FFD700" : "#F9E4B7",
                fontFamily: "var(--font-title)",
                fontWeight: 600,
                px: 2.5,
                py: 1,
                borderRadius: 2,
                border: "2px solid transparent",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: 1,
                ...(isActive("/deusas") && {
                  bgcolor: "rgba(255, 215, 0, 0.15)",
                  borderColor: "#FFD700",
                  boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
                }),
                "&:hover": {
                  color: "#FFD700",
                  bgcolor: "rgba(255, 215, 0, 0.1)",
                  borderColor: "#D4AF37",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)",
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
