import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

interface ItemCardProps {
  name: string;
  description: string | string[];
  owner: string;
  damage: string;
  imageUrl: string;
  delay?: number;
}

export function ItemCard({ name, description, owner, damage, imageUrl, delay = 0 }: ItemCardProps) {
  // Normalizar descrição para string
  const descriptionText = Array.isArray(description) 
    ? description.join(" ") 
    : description || "Sem descrição.";

  return (
    <Card
      sx={{
        bgcolor: "#3A3833",
        color: "#F9E4B7",
        border: "2px solid #D4AF37",
        borderRadius: 3,
        textAlign: "center",
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        animation: "fadeInScale 0.6s ease-out forwards",
        animationDelay: `${delay}s`,
        "&:hover": {
            transform: "translateY(-10px) scale(1.03)",
            borderColor: "#FFD700",
            boxShadow: "0 12px 24px rgba(0,0,0,0.5), 0 0 30px rgba(255, 215, 0, 0.4)",
            bgcolor: "#4A4843",
        },
        }}
    >
    <CardMedia
        component="img"
        height="220"
        image={imageUrl ? imageUrl.replace("../../../public", "") : "/placeholder/item.jpg"}
        alt={name}
        sx={{
        objectFit: "contain",
        borderRadius: 2,
        border: "2px solid #D4AF37",
        bgcolor: "#2C2B28",
        p: 1,
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.05)",
        },
        }}
    />
    <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography
        variant="h6"
        sx={{
            fontFamily: "var(--font-title)",
            color: "#FFD700",
            mb: 1,
            fontWeight: 700,
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        }}
        >
        {name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "var(--font-body)",
            color: "#F9E4B7",
            mb: 2,
            minHeight: "60px",
            fontSize: "0.95rem",
            lineHeight: 1.5,
          }}
        >
          {descriptionText}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            borderTop: "1px solid #D4AF37",
            pt: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "#D4AF37" }}>Dono:</strong>{" "}
            <span style={{ color: "#FFD700" }}>{owner}</span>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "var(--font-body)" }}>
            <strong style={{ color: "#D4AF37" }}>Dano:</strong>{" "}
            <span style={{ color: "#FFD700" }}>{damage}</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
