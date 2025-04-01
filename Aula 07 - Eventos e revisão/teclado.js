var entrada = document.getElementById("v1")
entrada.addEventListener('keydown', tratamento)
function tratamento(){
 var resp = window.document.getElementById("res")
 var v1 = window.document.getElementById("v1").value
 resp.innerHTML = (`O valor digitado foi ${v1}.`)

}
