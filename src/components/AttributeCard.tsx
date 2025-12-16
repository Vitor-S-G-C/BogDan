import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface AttributeCardProps {
  name: string;
  value: number | string;
  icon: ReactNode;
  delay?: number;
}

export function AttributeCard({ name, value, icon, delay = 0 }: AttributeCardProps) {
  return (
    <Box
      sx={{
        bgcolor: "#3A3833",
        border: "2px solid #D4AF37",
        borderRadius: 2,
        px: 2,
        py: 1.5,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
        fontFamily: "var(--font-body)",
        transition: "all 0.3s ease",
        animation: "fadeInScale 0.5s ease-out forwards",
        animationDelay: `${delay}s`,
        "&:hover": {
          transform: "translateY(-5px) scale(1.05)",
          bgcolor: "#4A4843",
          borderColor: "#FFD700",
          boxShadow: "0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(255, 215, 0, 0.3)",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "2rem",
          color: "#FFD700",
          filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "var(--font-title)",
          color: "#D4AF37",
          fontWeight: 600,
          letterSpacing: 0.5,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "var(--font-medieval)",
          color: "#FFD700",
          fontWeight: 700,
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
