// Exemplo: src/paginas/Personagem.tsx
;
import BogDan from "../../data/dataPerson/Hero";

export default function GodOne() {
  return (
    <div>
      <h1>{BogDan.nome}</h1>
      <ul>
        <li>Força: {BogDan.forca}</li>
        <li>Destreza: {BogDan.destreza}</li>
        <li>Constituição: {BogDan.constituicao}</li>
        <li>Inteligência: {BogDan.inteligencia}</li>
        <li>Sabedoria: {BogDan.sabedoria}</li>
        <li>Carisma: {BogDan.carisma}</li>
        <li>CA: {BogDan.CA}</li>
      </ul>
      <ul>Lore:{BogDan.historia}</ul>
    </div>
  );
}
