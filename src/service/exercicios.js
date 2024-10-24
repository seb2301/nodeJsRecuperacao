class ServiceExercicios {
  Graus(num1) {
    if (isNaN(num1)) {
      throw new Error("Informe os graus");
    }
    return (9 * num1 + 160) / 5;
  }

  Imc(sexo, altura) {
    if (isNaN(sexo) || isNaN(altura)) {
      throw new Error("Informe o valor do sexo e da altura");
    }
    if ((sexo = M)) {
      return 72.7 * altura - 58;
    }
    if ((sexo = F)) {
      return 62.1 * altura - 44.7;
    } else {
      return "Digite corretamente os valores!";
    }
  }

  Nota(nota1, nota2, nota3) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      throw new Error("Informe as notas");
    }
    return nota1 * 0.2 + nota2 * 0.3 + nota3 * 0.5;
  }

  Tabuada(num) {
    if (isNaN(num)) {
      throw new Error("Informe um valor");
    }
    for (let i = 0; i <= 10; i++) {
      return num + " x " + i + " = " + num * i;
    }
  }

  Triangulos(a, b, c) {
    if (!a || !b || !c) {
      return "Não é um triangulo";
    }
    if (a + b < c || a + c < b || b + c < a) {
      return "Nao é um triangulo";
    } else if (a == b || a == c) {
      return "Equilatero";
    } else if (a == b || a == c || b == c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
}

module.exports = ServiceExercicios;
