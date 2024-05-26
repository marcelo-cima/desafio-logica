type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  let malasExcedidas = []
let i = 0
let nomes = ' '

for (let passageiro of dadosPassageiros) {
 let {nome, pesoMala} = passageiro
 if (pesoMala > 23) {
    malasExcedidas[i++] = nome
    nomes += nome + ' - '
}
}
if (nomes == ' ') {
  return 'SEM PASSAGEIROS'
} else {
return nomes.slice(1,-3)
}
}
export default solucao;
