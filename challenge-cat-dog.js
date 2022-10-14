
function Pointdifference(cat, dog) {
  return cat > dog ? cat - dog : dog - cat;
}

function animalsPosition(rex, bob, oli) {
  if (Math.sign(rex) === -1 || Math.sign(bob) === -1 || Math.sign(oli) === -1) {
    return "entrada inválida, insira números inteiros e positivos";
  } else if (
    Number.isInteger(rex) === false ||
    Number.isInteger(bob) === false ||
    Number.isInteger(oli) === false
  ) {
    return "entrada inválida, insira números inteiros e positivos";
  }
  const rexDistance = Pointdifference(oli, rex);
  const bobDistance = Pointdifference(oli, bob);

  if (rexDistance < bobDistance) {
    return "Rex venceu";
  } else if (bobDistance < rexDistance) {
    return "Bob venceu";
  }

  return "O gato fugiu";
}

// teste 01
console.log(animalsPosition(10, 10, 12) === "O gato fugiu");

// teste 02
console.log(animalsPosition(10, 11, 12) === "Bob venceu");

// teste 03
console.log(animalsPosition(8, 5, 12) === "Rex venceu");

// teste 04

console.log(animalsPosition(-1, 5, 12) === "entrada inválida, insira números inteiros e positivos");

// teste 05

console.log(animalsPosition(1, 5.3, 12) === "entrada inválida, insira números inteiros e positivos");

// // teste 06

console.log(animalsPosition("", 5, 12) === "entrada inválida, insira números inteiros e positivos");
