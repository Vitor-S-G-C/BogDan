import BogDan from "../../../data/dataPerson/Hero";

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

export function BogDanPage() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  // 1. CORREÇÃO NA VARIÁVEL E NO FILTRO
  // O nome do dono no JSON é "Bog Dan, o presenteado das Deusas", então usamos includes.
  // Renomeei para BogDanItems para manter a coerência com o uso no final.
  const BogDanItems = Object.values(items).filter(
    (item) => item.dono && item.dono.includes("BogDan")
  );

  // A 'settings' não está sendo usada já que você usou Grid, mas a mantive se for usá-la depois.
  /*
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
  */

  return (
    <>
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
          {/* Grid Container principal */}
          <Grid container spacing={0}>
            {/* Imagem (Este já tinha 'item') */}
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
                src={BogDan.img}
                alt={BogDan.nome}
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

            {/* 4. CORREÇÃO: Adicionar 'item' no Grid de Informações */}
            <Grid item xs={12} md={8}>
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                // ... (Nome do Personagem)
                >
                  {BogDan.nome}
                </Typography>

                <Divider sx={{ mb: 3, bgcolor: "#D4AF37" }} />

                {/* Atributos */}
                <Typography
                // ...
                >
                  Atributos
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    ["Força", BogDan.forca, <GiCrossedSwords />],
                    ["Destreza", BogDan.destreza, <GiMagicSwirl />],
                    ["Constituição", BogDan.constituicao, <GiCrossedSwords />],
                    ["Inteligência", BogDan.inteligencia, <GiMagicSwirl />],
                    ["Sabedoria", BogDan.sabedoria, <GiMagicSwirl />],
                    ["Carisma", BogDan.carisma, <GiMagicSwirl />],
                    ["CA", BogDan.CA, <GiCrossedSwords />],
                  ].map(([nome, valor, icone], i) => (
                    // 2. CORREÇÃO: Adicionar 'item' aqui
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
                {/* ... (Conteúdo do 'Sobre') ... */}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* --- SEÇÃO DE ITENS (CORRIGIDA) --- */}
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
            Itens de Bog Dan
          </Typography>

          {/* Grid Container para os Itens */}
          <Grid container spacing={3} justifyContent="center">
            {BogDanItems.map((item, index) => (
              // 3. CORREÇÃO: Adicionar 'item' aqui. O nome da variável é 'BogDanItems'
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
                    height="200" // Use uma unidade válida como '200px' ou apenas '200' para px
                    // Ajuste o caminho da imagem, se necessário, para ser público
                    image={
                      item.imgUrl
                        ? item.imgUrl.replace("../../../public", "")
                        : "/placeholder/item.jpg"
                    }
                    alt={item.nome}
                    sx={{
                      objectFit: "contain",
                      borderRadius: 2,
                      border: "2px solid #D4AF37",
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontFamily: "serif" }}>
                      {item.nome}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {/* Corrigindo a redundância na descrição */}
                      {item.Descricao ?? "Sem descrição."}
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

export default BogDanPage;
