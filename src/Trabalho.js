
import React from "react";

export default function Extractor() {

  let html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

  let sp = html.split('*')[1];
  let lv = html.split('*')[3];
  let mc = html.split('*')[5];

  let rout = html.split('#');

  let spR = rout[1].replace('<br>', ', ');
  let lvR = rout[4].replace('<br>', ', ');
  let mcR = rout[7].replace('<br>', ', ');

  let spQty = spR.split(';').length;
  let lvQty = lvR.split(';').length;
  let mcQty = mcR.split(';').length;

  let spT = spR.split(';');
  let lvT = lvR.split(';');

  return (

    <div>
      <b style={{ fontSize: 50 }}> Trabalho FIAP </b>
      <p><b>  O nome das cidades avaliadas:</b></p>
      <ol>{sp.replace('<br>', ', ')}</ol>
      <ol>{lv}</ol>
      <ol>{mc}</ol>
      <b> O conteúdo do roteiro A de cada cidade avaliada.</b>
      <ol>{spR.replace('<br>', ', ')}</ol>
      <ol>{lvR.replace('<br>', ', ')}</ol>
      <ol>{mcR.replace('<br>', ', ')}</ol>
      <b> Quantos locais são citados no roteiro A de cada cidade.</b>
      <ol>Citados para São Paulo: {spQty}</ol>
      <ol>  Citados para Las Vegas:  {lvQty}</ol>
      <ol>  Citados para Moscou: {mcQty}</ol>
      <b> O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.</b>
      <ol> {spT.map(m => m.replace('<br>',', '))}</ol>
      <b> O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.</b>
      <ol>{lvT.map(m => m.replace('<br>',''))}</ol>
    </div >
  );

}
