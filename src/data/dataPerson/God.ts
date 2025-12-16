export interface Deus {
  nome: string;
  forca: number;
  destreza: number;
  constituicao: number;
  inteligencia: number;
  sabedoria: number;
  carisma: number;
  CA: number;
  reliquias: string[];
  img: string;
  sobre: string[];
}

const Fyrelvia = {
  nome: "Fyrelvia, Deusa da Emancipação",
  forca: 80,
  destreza: 150,
  constituicao: 120,
  inteligencia: 80,
  sabedoria: 130,
  carisma: 150,
  CA: 100,
  reliquias: {
    foto: "reliquias.jpg",
    descricao: "Imagem sagrada de reliquias, usada em rituais artísticos.",
  },
  img: "/god/Fyrelvia.jpg",
  sobre: [
    "Fyrelvia é a deusa da emancipação, simbolizando a liberdade, a justiça e a luta contra a opressão...",
    "Fyrelvia é frequentemente representada com correntes quebradas ou uma tocha flamejante...",
    "Os seguidores de Fyrelvia acreditam na importância da autodeterminação...",
  ],
};

const Qyresha = {
  nome: "Qyresha, Deusa da Expressão",
  forca: 60,
  destreza: 140,
  constituicao: 100,
  inteligencia: 160,
  sabedoria: 120,
  carisma: 180,
  CA: 100,
  reliquias: {
    foto: "reliquias.jpg",
    descricao: "Imagem sagrada de reliquias, usada em rituais artísticos.",
  },
  img: "/god/Qyresha.jpg",
  sobre: [
    "Qyresha é a deusa da expressão, inspirando artistas, músicos e poetas...",
    "Qyresha é frequentemente representada com um instrumento musical...",
    "Os seguidores de Qyresha acreditam que a arte é uma forma poderosa de transformação...",
  ],
};

export { Fyrelvia, Qyresha };
