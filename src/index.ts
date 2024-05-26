let dadosPassageiros = [
    {
      nome: "Passageiro A",
      pesoMala: 25,
    },
    {
      nome: "Passageiro B",
      pesoMala: 10,
    },
    {
      nome: "Passageiro C",
      pesoMala: 24,
    },
    {
      nome: "Passageiro D",
      pesoMala: 22,
    },
    {
      nome: "Passageiro E",
      pesoMala: 40,
    },
  ];
//  \/ codigo

// for (let passageiro of dadosPassageiros) {
//  const {nome, pesoMala} = passageiro
//  if (pesoMala > 23) {
//     console.log(nome)
// }
// }
 


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

console.log(nomes.slice(1,-3)) 


