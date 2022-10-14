function cipher(text, rotacion) {
  if (Math.sign(rotacion) === -1) {

    return "entrada inválida, insira números inteiros e positivos";

  } else if (Number.isInteger(rotacion) === false) {
    
    return "entrada inválida, insira números inteiros e positivos";
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ciphertext = "";
  const textUpperCase = text.toUpperCase();

  for (i in textUpperCase) {
    const encondedLetterIndex = (textUpperCase.charCodeAt(i) - 65 + rotacion) % 26;
    ciphertext += alphabet[encondedLetterIndex];
  }

  return ciphertext;
}

console.log(cipher("ola", -7));
