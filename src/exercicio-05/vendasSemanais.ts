function solucao(vendasDiarias: number[]) {
  let total = 0
  for (let venda of vendasDiarias){
    total += venda
  }
  return total
}
export default solucao;
