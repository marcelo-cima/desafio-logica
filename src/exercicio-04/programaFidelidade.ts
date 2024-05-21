function solucao(pontosAcumulados: number, valorCompra: number) {
  if (pontosAcumulados < 100) {
    return valorCompra
  } else if (pontosAcumulados >= 100 && pontosAcumulados <= 500){
return valorCompra - 0.1 * valorCompra
  } else {
    return valorCompra - 0.2 * valorCompra
  }
}
export default solucao;
