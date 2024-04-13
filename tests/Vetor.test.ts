import { Vetor } from "../src/Vetor";

describe('Vetor', () => {
    let vetor: Vetor;
    beforeEach(() => {
        vetor = new Vetor();
    });

    it('Soma os elementos do vetor', () => {
        vetor.adicionar(10);
        vetor.adicionar(10);
        vetor.somarVetor();
    });

    it('Busca o maior número do vetor', () => {
        vetor.adicionar(23);
        vetor.adicionar(10);
        vetor.buscarMaior();
    });

    it('Faz a média dos números que estão contido dentro do vetor', () => {
        vetor.adicionar(23);
        vetor.adicionar(10);
        vetor.buscarMedia();
    });
});