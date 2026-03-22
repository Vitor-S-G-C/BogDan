import BogDan from "./Hero";

const Mortarion = {
  ...BogDan,
  nome: "Mortarion, O último condenado",
  forca: BogDan.destreza,
  destreza: BogDan.forca,
  constituicao: BogDan.carisma,
  carisma: BogDan.constituicao,
  img: "/hero/Mortarion.png",
};

export default Mortarion;
