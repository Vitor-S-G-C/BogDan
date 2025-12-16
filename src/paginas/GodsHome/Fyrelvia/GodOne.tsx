import { Fyrelvia } from "../../../data/dataPerson/God";
import { AttributeCard } from "../../../components/AttributeCard";
import { ItemCard } from "../../../components/ItemCard";
import DeusasBar from "../DeusasBar";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Paper,
} from "@mui/material";
import {
  GiCrossedSwords,
  GiMagicSwirl,
  GiHeartShield,
  GiBrain,
  GiWisdom,
  GiPublicSpeaker,
  GiShield,
} from "react-icons/gi";
import items from "../../../data/dataArma/items.json";

export function FyrelviaPage() {
  const FyrelviaArray = Object.values(items).filter(
    (item) => item.reliquia === "Fyrelvia"
  );

  const attributes = [
    { name: "Força", value: Fyrelvia.forca, icon: <GiCrossedSwords /> },
    { name: "Destreza", value: Fyrelvia.destreza, icon: <GiMagicSwirl /> },
    { name: "Constituição", value: Fyrelvia.constituicao, icon: <GiHeartShield /> },
    { name: "Inteligência", value: Fyrelvia.inteligencia, icon: <GiBrain /> },
    { name: "Sabedoria", value: Fyrelvia.sabedoria, icon: <GiWisdom /> },
    { name: "Carisma", value: Fyrelvia.carisma, icon: <GiPublicSpeaker /> },
    { name: "CA", value: Fyrelvia.CA, icon: <GiShield /> },
  ];

  return (
    <>
      <DeusasBar />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Card Principal da Deusa */}
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
              animation: "shimmer 3s infinite",
            },
          }}
        >
          <Grid container spacing={0}>
            {/* Imagem */}
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
                src={Fyrelvia.img}
                alt={Fyrelvia.nome}
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
                    transform: "scale(1.05) rotate(-1deg)",
                    boxShadow: "0 12px 30px rgba(255,215,0,0.4)",
                  },
                }}
              />
            </Grid>

            {/* Informações */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    color: "#FFD700",
                    fontFamily: "var(--font-title)",
                    textShadow: "3px 3px 6px #000",
                    mb: 2,
                    letterSpacing: 2,
                    fontWeight: 900,
                    animation: "fadeIn 1s ease-out",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {Fyrelvia.nome}
                </Typography>

                <Divider
                  sx={{
                    mb: 3,
                    height: 3,
                    bgcolor: "#D4AF37",
                    boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                  }}
                />

                {/* Atributos */}
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
                  Atributos Divinos
                </Typography>

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

                {/* Sobre */}
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
                  História Sagrada
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
                  {Fyrelvia.sobre.map((paragrafo, index) => (
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
        </Box>
        {/* --- SEÇÃO DE RELÍQUIAS --- */}
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
            ✨ Relíquias de {Fyrelvia.nome} ✨
          </Typography>

          {FyrelviaArray.length > 0 ? (
            <Grid container spacing={3} justifyContent="center">
              {FyrelviaArray.map((item, index) => (
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
                Nenhuma relíquia encontrada para esta deusa.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}

export default FyrelviaPage;
