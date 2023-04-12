const form = document.querySelector("#form");
const numeroInput = document.querySelector("#number");
const validadeInput = document.querySelector("#validity");
const buttonAdd = document.querySelector(".adicionar");
const nomeInput = document.querySelector("#holder");

form.addEventListener("submit", (event) => {
  //    validar antes de enviar
  event.preventDefault();

  // verifica se o nome está vazio o
  if (!validatenumero(numeroInput.value, 16)) {
    alert("Por favor, preencha o numero do cartão com 16 dígitos");
    return;
  }
  // verifica se o a validade  está vazio o
  if (validadeInput.value === "") {
    alert("Por favor, preencha a validade do cartão");
    return;
  }

  form.submit();
});

// função que valida o numero do cartao
function validatenumero(number, minDigits) {
  if (number.length >= minDigits) {
    return true;
  }
  return false;
}

IMask(document.querySelector("#cc-cvv"), {
  //   numero de caracteres e so numero
  mask: "0000",
});
IMask(document.querySelector("#holder"), {
  mask: /^[A-zöüóőúéáà űíÖÜÓŐÚ ÉÁÀŰÍçÇ]{0,50}$/,
});

IMask(document.querySelector("#number"), {
  mask: "0000 0000 0000 0000",
});
// determinando validade dos cartoes
IMask(document.querySelector("#validity"), {
  mask: "MM{/}YY",
  blocks: {
    MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
});

// buttonAdd.addEventListener("click", function () {
//   verificar();
// });
// // adicionar cartao
// function verificar() {
//   if ((validadeInput.value === "") & (nomeInput === "")) {
//     alert("Cartão adicionado com sucesso!");
//     return;
//   }
// }
