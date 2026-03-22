import BogDan from "../../../data/dataPerson/Hero";
import { AttributeCard } from "../../../components/AttributeCard";
import { ItemCard } from "../../../components/ItemCard";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Paper,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  GiCrossedSwords,
  GiMagicSwirl,
  GiHeartShield,
  GiBrain,
  GiWisdom,
  GiPublicSpeaker,
  GiShield,
  GiSecretBook,
  GiCrossMark,
  
} from "react-icons/gi";
import items from "../../../data/dataArma/items.json";
import { GiCheckedShield } from "react-icons/gi";

export function BogDanPage() {
  const BogDanItems = Object.values(items).filter(
    (item) => item.dono && item.dono.includes("BogDan")
  );
  const isActive = (path: string) => location.pathname === path;

  const attributes = [
    { name: "Força", value: BogDan.forca, icon: <GiCrossedSwords /> },
    { name: "Destreza", value: BogDan.destreza, icon: <GiMagicSwirl /> },
    { name: "Constituição", value: BogDan.constituicao, icon: <GiHeartShield /> },
    { name: "Inteligência", value: BogDan.inteligencia, icon: <GiBrain /> },
    { name: "Sabedoria", value: BogDan.sabedoria, icon: <GiWisdom /> },
    { name: "Carisma", value: BogDan.carisma, icon: <GiPublicSpeaker /> },
    { name: "CA", value: BogDan.CA, icon: <GiShield /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Cabeçalho Principal */}
      <Box
        sx={{
          bgcolor: "#2C2B28",
          backgroundImage: "linear-gradient(135deg, #2C2B28 0%, #1C1B18 100%)",
          color: "#F9E4B7",
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          overflow: "hidden",
          border: "4px solid #D4AF37",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent)",
            animation: "shimmer 3s ",
          },
        }}
      >
        <Grid container spacing={0}>
          {/* Seção da Imagem */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 3, md: 4 },
              bgcolor: "rgba(58, 56, 51, 0.6)",
              borderRight: { md: "4px solid #D4AF37" },
              borderBottom: { xs: "4px solid #D4AF37", md: "none" },
            }}
          >
            <Box
              component="img"
              src={BogDan.img}
              alt={BogDan.nome}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 280,
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
                border: "4px solid #D4AF37",
                transition: "transform 0.3s ease",
                animation: "fadeInScale 0.8s ease-out",
                "&:hover": {
                  transform: "scale(1.05) rotate(1deg)",
                  boxShadow: "0 12px 30px rgba(255,215,0,0.4)",
                },
              }}
            />
          </Grid>

          {/* Seção de Informações */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "space-between" },
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    color: "#FFD700",
                    fontFamily: "var(--font-title)",
                    textShadow: "3px 3px 6px #000",
                    mb: 0,
                    letterSpacing: 2,
                    fontWeight: 900,
                    animation: "fadeIn 1s ease-out",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {BogDan.nome}
                </Typography>

                <Tooltip title="Ir para Mortarion">
                  <IconButton
                    component={RouterLink}
                    to="/herois/mortarion"
                    sx={{
                      color: "#FFD700",
                      border: "2px solid #D4AF37",
                      bgcolor: "rgba(255, 215, 0, 0.08)",
                      boxShadow: "0 0 12px rgba(255, 215, 0, 0.25)",
                      "&:hover": {
                        bgcolor: "rgba(255, 215, 0, 0.18)",
                        transform: "translateY(-2px) scale(1.05)",
                        boxShadow: "0 0 18px rgba(255, 215, 0, 0.4)",
                      },
                    }}
                  >
                    <GiCrossMark />
                  </IconButton>
                </Tooltip>
              </Box>

              <Button
              component={RouterLink}
              to="/Diario"
              startIcon={<GiSecretBook />}
              sx={{
                color: isActive("/Diario") ? "#FFD700" : "#F9E4B7",
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
              Diario
              </Button>

              <Divider
                sx={{
                  mb: 3,
                  height: 3,
                  bgcolor: "#D4AF37",
                  boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                }}
              />

              {/* Título de Atributos */}
              <Typography
                variant="h5"
                sx={{
                  color: "#FFD700",
                  fontFamily: "var(--font-title)",
                  mb: 2,
                  fontWeight: 700,
                  textAlign: "center",
                  textShadow: "2px 2px 4px #000",
                }}
              >
                Atributos
              </Typography>

              {/* Grid de Atributos */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {attributes.map((attr, index) => (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                    <AttributeCard
                      name={attr.name}
                      value={attr.value}
                      icon={attr.icon}
                      delay={index * 0.1}
                    />
                  </Grid>
                ))}
              </Grid>

              <Divider
                sx={{
                  my: 3,
                  height: 2,
                  bgcolor: "#D4AF37",
                }}
              />

              {/* Seção Sobre */}
              <Typography
                variant="h5"
                sx={{
                  color: "#FFD700",
                  fontFamily: "var(--font-title)",
                  mb: 2,
                  fontWeight: 700,
                  textShadow: "2px 2px 4px #000",
                }}
              >
                História
              </Typography>

              <Box
                sx={{
                  maxHeight: { xs: 300, md: 400 },
                  overflowY: "auto",
                  pr: 2,
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    bgcolor: "#2C2B28",
                    borderRadius: 10,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#D4AF37",
                    borderRadius: 10,
                    "&:hover": {
                      bgcolor: "#FFD700",
                    },
                  },
                }}
              >
                {BogDan.sobre.map((paragrafo, index) => (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      mb: 2,
                      p: 2,
                      bgcolor: "rgba(58, 56, 51, 0.6)",
                      border: "1px solid #D4AF37",
                      borderRadius: 2,
                      animation: "fadeIn 0.6s ease-out forwards",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "var(--font-body)",
                        color: "#F9E4B7",
                        lineHeight: 1.8,
                        fontSize: "1.05rem",
                      }}
                    >
                      {paragrafo}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>      {/* --- SEÇÃO DE ITENS --- */}
      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#FFD700",
            fontFamily: "var(--font-title)",
            mb: 4,
            textAlign: "center",
            textShadow: "3px 3px 6px #000",
            fontWeight: 900,
            letterSpacing: 2,
            animation: "fadeIn 1s ease-out",
          }}
        >
         <GiCheckedShield />
  Arsenal de {BogDan.nome.split(",")[0]} <GiCheckedShield />

        </Typography>

        {BogDanItems.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {BogDanItems.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <ItemCard
                  name={item.nome}
                  description={item.Descricao ?? "Sem descrição."}
                  owner={item.dono}
                  damage={item.dano}
                  imageUrl={item.imgUrl}
                  delay={index * 0.1}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 4,
              bgcolor: "#2C2B28",
              borderRadius: 3,
              border: "2px solid #D4AF37",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#D4AF37",
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
              }}
            >
              Nenhum item encontrado para este herói.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default BogDanPage;
