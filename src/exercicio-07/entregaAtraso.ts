type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  let {estimativaEntrega} = dadosEntrega

 return estimativaEntrega >= diaAtual ? 'ENTREGA NAO ATRASADA' : 'ENTREGA ATRASADA'
}
export default solucao;
