import { Fyrelvia } from "../../../data/dataPerson/God";
import DeusasBar from "../DeusasBar";
import {
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { GiCrossedSwords, GiMagicSwirl } from "react-icons/gi";
import items from "../../../data/dataArma/items.json";

// Dados de teste - você pode substituir depois pelo seu JSON real


export function FyrelviaPage() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const FyrelviaArray = Object.values(items).filter(
    (item) => item.reliquia === "Fyrelvia"
  );

  // Configuração do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <DeusasBar />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            bgcolor: "url('/img/pergaminho-texture.jpg')",
            backgroundSize: "cover",
            color: "#F9E4B7",
            borderRadius: 3,
            boxShadow: 8,
            overflow: "hidden",
            border: "6px solid #D4AF37",
          }}
        >
          <Grid container spacing={0}>
            {/* Imagem */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                p: { xs: 2, md: 4 },
                borderRight: "4px solid #D4AF37",
                borderBottom: "4px solid #D4AF37",
                bgcolor: "#3A3833",
              }}
            >
              <Box
                component="img"
                src={Fyrelvia.img}
                alt={Fyrelvia.nome}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: 250,
                  maxHeight: 250,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 5,
                  border: "3px solid #D4AF37",
                }}
              />
            </Grid>

            {/* Informações */}
            <Grid item xs={12} md={8}>
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  align={isLargeScreen ? "left" : "center"}
                  fontWeight={700}
                  color="#FFD700"
                  sx={{
                    fontFamily: "serif",
                    textShadow: "2px 2px 4px #000",
                    mb: 2,
                    letterSpacing: 1,
                  }}
                >
                  {Fyrelvia.nome}
                </Typography>

                <Divider sx={{ mb: 3, bgcolor: "#D4AF37" }} />

                {/* Atributos */}
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  mb={2}
                  fontWeight={600}
                  sx={{ fontFamily: "serif" }}
                >
                  Atributos
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    ["Força", Fyrelvia.forca, <GiCrossedSwords />],
                    ["Destreza", Fyrelvia.destreza, <GiMagicSwirl />],
                    [
                      "Constituição",
                      Fyrelvia.constituicao,
                      <GiCrossedSwords />,
                    ],
                    ["Inteligência", Fyrelvia.inteligencia, <GiMagicSwirl />],
                    ["Sabedoria", Fyrelvia.sabedoria, <GiMagicSwirl />],
                    ["Carisma", Fyrelvia.carisma, <GiMagicSwirl />],
                    ["CA", Fyrelvia.CA, <GiCrossedSwords />],
                  ].map(([nome, valor, icone], i) => (
                    <Grid item xs={6} key={i}>
                      <Box
                        sx={{
                          bgcolor: "#3A3833",
                          border: "2px solid #D4AF37",
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 1,
                          fontFamily: "serif",
                        }}
                      >
                        {icone}
                        <Typography variant="body1">
                          <strong>{nome}:</strong> {valor}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ mb: 3, bgcolor: "#D4AF37" }} />

                {/* Sobre */}
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  mb={2}
                  fontWeight={600}
                  sx={{ fontFamily: "serif" }}
                >
                  Sobre
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {Fyrelvia.sobre.map((texto, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      paragraph
                      sx={{
                        lineHeight: 1.8,
                        fontFamily: "serif",
                        textAlign: "justify",
                        letterSpacing: 0.5,
                      }}
                    >
                      {texto}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* --- SEÇÃO DE ITENS (SEM CARROSSEL) --- */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFD700",
              fontFamily: "serif",
              mb: 3,
              textShadow: "2px 2px 4px #000",
            }}
          >
            Itens de Fyrelvia
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {Object.values(FyrelviaArray).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    bgcolor: "#3A3833",
                    color: "#F9E4B7",
                    border: "2px solid #D4AF37",
                    borderRadius: 3,
                    textAlign: "center",
                    p: 2,
                    mx: "auto",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="1000 rem"
                    image={item.imgUrl}
                    alt={item.nome}
                    sx={{
                      objectFit: "cover",
                      borderRadius: 2,
                      border: "2px solid #D4AF37",
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontFamily: "serif" }}>
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item.Descricao ?? item.Descricao ?? ""}
                    </Typography>
                    <Typography>
                      <strong>Dono:</strong> {item.dono}
                    </Typography>
                    <Typography>
                      <strong>Dano:</strong> {item.dano}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default FyrelviaPage;
