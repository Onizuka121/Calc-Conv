let schermo = document.getElementById("schermo");
let schermo_out_valuta = document.getElementById("schermo-out-valuta");
let numero_temporaneo = 0;
let operazione = "";
let valuta = false;

SetOperazioneValuta();
document
  .getElementById("selectOperazioneSerial")
  .addEventListener("change", SetOperazioneValuta);

function ClearSchermo(ce = false) {
  schermo.innerText = "0";
  schermo_out_valuta.innerText = "0";
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
  if (valuta) {
    Converti(parseInt(schermo.textContent));
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

function Converti(valore) {
  let valore_usa = valore * 1.07;
  schermo_out_valuta.innerText = valore_usa;
}

function SetOperazioneValuta() {
  let calc_elements = document.getElementsByName("calc-element");
  let conv_elements = document.getElementsByName("conv-element");
  let display_calc_elements;
  let display_conv_elements;
  if (document.getElementById("selectOperazioneSerial").value == "conv-val") {
    valuta = true;
    display_calc_elements = "none";
    display_conv_elements = "block";
  } else {
    display_conv_elements = "none";
    display_calc_elements = "block";
  }
  calc_elements.forEach((div_btn) => {
    div_btn.style.display = display_calc_elements;
  });
  conv_elements.forEach((div_btn) => {
    div_btn.style.display = display_conv_elements;
  });
}
