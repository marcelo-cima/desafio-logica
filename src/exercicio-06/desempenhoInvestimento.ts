function solucao(resultados: number[]) {
  let positivo = 0
  let negativo = 0
  for (let numero of resultados) {
    if (numero > 0){
      positivo ++
    } else if (numero < 0){
      negativo ++
    }
  }
  
  if (positivo > negativo) {
    return 'POSITIVO'
  } else if (negativo > positivo) {
    return 'NEGATIVO'
  } else {
    return 'NEUTRO'
  }
}
export default solucao;
