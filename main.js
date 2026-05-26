//ides
let inputN = document.getElementById("inpN")
let inputS = document.getElementById("inpS")
let pRes = document.getElementById("pRes")
let butao = document.getElementById("butao")

function b(){
  butao.disabled = true
  //verificação se tem alguma coisa na senha e no nome
  if (inputS.value == "" || inputN.value == "") {
  pRes.innerHTML = "ops. coloque uma senha e um nome por favor"
  butao.disabled = false
}else{
  //carregamento em ponto 
  let ponts = 0
  
  let interv = setInterval(()=>{
    ponts++
    if (ponts > 3) {
      ponts = 0
    }
    pRes.innerHTML = "guardando os valores" + ".".repeat(ponts)
  },300)
  
  //promise
  let cadastro =new Promise((resolve, reject) => {
   setTimeout(()=>{
    
    if (inputN.value.length < 3) {
      pRes.innerHTML = "seu nome tem que ter pelo menos 3 caracteres"
      reject("deu errado ")
    }
    if (/\d/.test(inputS.value)) {
    resolve("deu certo ")
    
    } else{
      pRes.innerHTML = "coloque pelo menos um número na sua senha"
      reject("deu errado ")
    }
    
    //terminar interval la de cima
    clearInterval(interv)
    //ativar botao
    butao.disabled = false
   },3000)
   
 })

  cadastro.then((res) =>{
    pRes.innerHTML = "valor salvo com sucesso "
  })
  cadastro.catch((res) =>{
    console.log(res)
  })
 }
}