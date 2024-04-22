let schermo = document.getElementById("schermo");
let numero_temporaneo = 0;
let operazione = "";

function ClearSchermo(ce = false) {
  schermo.innerText = "0";
  if (ce) {
    numero_temporaneo = 0;
  }
}

function PutNumero(numero) {
  if (schermo.textContent == "0") {
    schermo.innerText = numero;
  } else {
    schermo.innerText += numero;
  }
}

function SetOperazione(oper) {
  operazione = oper;

  if (operazione == "+") {
    numero_temporaneo += parseInt(schermo.textContent);
  } else if (operazione == "-") {
    if (numero_temporaneo == 0) {
      numero_temporaneo = parseInt(schermo.textContent);
    } else {
      numero_temporaneo -= parseInt(schermo.textContent);
    }
  } else if (operazione == "x") {
    if (numero_temporaneo == 0) {
      numero_temporaneo = parseInt(schermo.textContent);
    } else {
      numero_temporaneo *= parseInt(schermo.textContent);
    }
  }
  schermo.innerText = 0;
}

function MostraOutput() {
  if (operazione == "+") {
    schermo.innerText = numero_temporaneo + parseInt(schermo.textContent);
  } else if (operazione == "-") {
    schermo.innerText = numero_temporaneo - parseInt(schermo.textContent);
  } else if (operazione == "x") {
    schermo.innerText = numero_temporaneo * parseInt(schermo.textContent);
  }
  numero_temporaneo = 0;
}
