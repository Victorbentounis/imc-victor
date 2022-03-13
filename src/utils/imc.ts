export function getImc(weight: number, height: number) {
  return weight / (height * height);
}

export function getImcLabel(imc: number) {
  let label;
  if (imc < 16) {
    label = "Magreza grave";
  } else if (imc >= 16 && imc < 17) {
    label = "Magreza moderada";
  } else if (imc >= 17 && imc < 18.5) {
    label = "Magreza leve";
  } else if (imc >= 18.5 && imc < 25) {
    label = "Saudável";
  } else if (imc >= 25 && imc < 30) {
    label = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    label = "Obesidade Grau I";
  } else if (imc >= 35 && imc < 40) {
    label = "Obesidade Grau II";
  } else if (imc >= 40) {
    label = "Obesidade Grau III";
  }

  return label;
}
