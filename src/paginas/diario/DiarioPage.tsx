import { Container, Box, Typography, Divider, Paper, Grid } from '@mui/material';
import diario from '../../data/dataDiario/diario.json';

type DiarioEntry = {
  title: string;
  date: string;
  content: string;
};

export default function DiarioPage() {
  const entries: DiarioEntry[] = (diario as { diario: DiarioEntry[] }).diario;
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Cabeçalho Principal */}
      <Box
        sx={{
          bgcolor: "#2C2B28",
          backgroundImage: "linear-gradient(135deg, #2C2B28 0%, #1C1B18 100%)",
          color: "#F9E4B7",
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(24, 19, 19, 0.6)",
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
            background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.1), transparent)",
            animation: "shimmer 3s ",
          },
          "@keyframes shimmer": {
            "0%": { left: "-100%" },
            "100%": { left: "100%" },
          },
        }}
      >
        <Box sx={{ p: 4, position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "var(--font-title)",
              fontWeight: 900,
              letterSpacing: 3,
              background: " #FFD700 ",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Diário de Aventuras
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontFamily: "var(--font-text)",
              color: "#F9E4B7",
              textShadow: "1px 1px 3px #000",
            }}
          >
            Registre aqui suas jornadas, descobertas e momentos épicos!
          </Typography>
        </Box>
      </Box>
      {/* Lista de Entradas do Diário (via JSON) */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {entries.map((entry, index) => (
            <Grid size={{ xs: 12, md: 10 }} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  bgcolor: "var(--color-bg-card)",
                  color: "var(--color-parchment)",
                  borderRadius: 3,
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-gold-dark)",
                  animation: "fadeIn 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "var(--font-title)",
                    letterSpacing: 1,
                    color: "#FFD700",
                    textShadow: "1px 1px 2px #000",
                  }}
                >
                  {entry.title}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "var(--font-medieval)",
                    opacity: 0.8,
                    mt: 0.5,
                    mb: 2,
                    fontSize: "0.9rem",
                    color: "#FFD700",
                    textShadow: "1px 1px 2px #000",
                  }}

                >
                  {entry.date}
                </Typography>

                <Divider sx={{ borderColor: "var(--color-gold-dark)", my: 2, opacity: 0.5 }} />

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--font-text)",
                    lineHeight: 1.8,
                    maxWidth: "75ch",
                    fontSize: "1.05rem",
                    color: "#F9E4B7",
                    textShadow: "1px 1px 2px #000",

                  }}
                >
                  {entry.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}