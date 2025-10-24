import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const deuses = [
  { name: "Fyrelvia", path: "/Fyrelvia" },
  { name: "Qyresha", path: "/Qyresha" },
];

export default function DeusasBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#2C2B28", // Fundo escuro
        borderBottom: "4px solid #D4AF37", // Borda dourada
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Título */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#FFD700",
            fontFamily: "serif",
            fontWeight: "bold",
            textShadow: "1px 1px 2px #000",
            letterSpacing: 1,
          }}
        >
          Deusas
        </Typography>

        {/* Menu para telas pequenas */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              "& .MuiMenu-paper": {
                bgcolor: "#3A3833",
                color: "#F9E4B7",
                border: "2px solid #D4AF37",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              },
            }}
          >
            {deuses.map((deus) => (
              <MenuItem
                key={deus.name}
                component={Link}
                to={deus.path}
                onClick={handleMenuClose}
                selected={location.pathname === deus.path}
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "#D4AF37",
                    color: "#2C2B28",
                    fontWeight: "bold",
                  },
                  "&:hover": {
                    bgcolor: "rgba(212, 175, 55, 0.3)",
                  },
                  fontFamily: "serif",
                }}
              >
                {deus.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Botões para telas médias e grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {deuses.map((deus) => (
            <Button
              key={deus.name}
              component={Link}
              to={deus.path}
              variant={location.pathname === deus.path ? "outlined" : "text"}
              sx={{
                color: location.pathname === deus.path ? "#FFD700" : "#F9E4B7",
                borderColor:
                  location.pathname === deus.path ? "#FFD700" : "transparent",
                fontFamily: "serif",
                fontWeight: 600,
                "&:hover": {
                  color: "#FFD700",
                  borderColor: "#FFD700",
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                },
              }}
            >
              {deus.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
