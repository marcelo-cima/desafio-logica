import solucao from "../src/exercicio-06/desempenhoInvestimento";
import comparar from "./comparar";
import { desempenhoInvestimentoOutput } from "./output";

describe("Questão - Desempenho de Investimento", () => {
  it("teste 1", () => {
    const x1 = [-100, 0, 0, 0, 100, 100];
    const y = solucao(x1);
    const corresponde = comparar(y, desempenhoInvestimentoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [-100, 0, 0, 0, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, desempenhoInvestimentoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [-100, 0, 0, 0, 0, 100];
    const y = solucao(x1);
    const corresponde = comparar(y, desempenhoInvestimentoOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = [0, 0, 0, 0, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, desempenhoInvestimentoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
