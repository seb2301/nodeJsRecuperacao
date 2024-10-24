const ServiceExercicios = require("../src/service/exercicios");
const { describe, it, expect } = require("@jest/globals");

describe("Testes da função Graus: ", () => {
  it("Números inteiros", () => {
    const resultado = ServiceExercicios.Graus(100);
    expect(resultado).toBe(100);
  });

  it("Números com decimais", () => {
    const resultado = ServiceExercicios.Graus(20.5);
    expect(resultado).toBe(20.5);
  });
  it("Números negativos", () => {
    const resultado = ServiceExercicios.Graus(-100);
    expect(resultado).toBe(-100);
  });

  it("Números negativos com decimais", () => {
    const resultado = ServiceExercicios.Graus(-55.5);
    expect(resultado).toBe(-55.5);
  });
});

describe("Testes da função Imc: ", () => {
  it("Sexo masculino", () => {
    const resultado = ServiceExercicios.Imc(M);
    expect(resultado).toBe(M);
  });

  it("Sexo feminino", () => {
    const resultado = ServiceExercicios.Imc(F);
    expect(resultado).toBe(F);
  });

  it("Sexo invalido", () => {
    const resultado = ServiceExercicios.Imc(0);
    expect(resultado).toBe(0);
  });

  it("Altura invalida", () => {
    const resultado = ServiceExercicios.Imc(M, 0);
    expect(resultado).toBe(0);
  });

  it("Altura negativa", () => {
    const resultado = ServiceExercicios.Imc(M, -100);
    expect(resultado).toBe(0);
  });
});

describe("Testes da função Nota: ", () => {
  it("Notas positivas", () => {
    const resultado = ServiceExercicios.Nota(10, 10, 10);
    expect(resultado).toBe(10);
  });

  it("Notas negativas", () => {
    const resultado = ServiceExercicios.Nota(-10, -10, -10);
    expect(resultado).toBe(0);
  });

  it("Notas decimais", () => {
    const resultado = ServiceExercicios.Nota(10.5, 10.5, 10.5);
    expect(resultado).toBe(10.5);
  });

  it("Notas negativas decimais", () => {
    const resultado = ServiceExercicios.Nota(-10.5, -10.5, -10.5);
    expect(resultado).toBe(0);
  });
});

describe("Testes da função Tabuada: ", () => {
  it("Tabuada", () => {
    const resultado = ServiceExercicios.Tabuada(10);
    expect(resultado).toBe(10);
  });

  it("Tabuada negativa", () => {
    const resultado = ServiceExercicios.Tabuada(-10);
    expect(resultado).toBe(0);
  });
});

describe("Testes da função Triangulos: ", () => {
  it("Triangulos", () => {
    const resultado = ServiceExercicios.Triangulos(10, 10, 10);
    expect(resultado).toBe(10);
  });

  it("Triangulos negativos", () => {
    const resultado = ServiceExercicios.Triangulos(-10, -10, -10);
    expect(resultado).toBe(0);
  });

  it("Triangulos decimais", () => {
    const resultado = ServiceExercicios.Triangulos(10.5, 10.5, 10.5);
    expect(resultado).toBe(10.5);
  });
});
