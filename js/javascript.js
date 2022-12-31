function verificacao(){
    var tamanhoEmail = document.getElementById("email").value.length
    var tamanhoNome = document.getElementById("nome").value.length
    var tamanhoSenha = document.getElementById("senha").value.length
    if(tamanhoEmail === 0){
        document.getElementById("email").classList.remove("is-valid")
        document.getElementById("email").classList.add("is-invalid")
    }else{
        document.getElementById("email").classList.add("is-valid")
        document.getElementById("email").classList.remove("is-invalid")
    }

    if(tamanhoSenha === 0){
        document.getElementById("senha").classList.remove("is-valid")
        document.getElementById("senha").classList.add("is-invalid")
    }else{
        document.getElementById("senha").classList.add("is-valid")
        document.getElementById("senha").classList.remove("is-invalid")
    }

    if(tamanhoNome === 0){
        document.getElementById("nome").classList.remove("is-valid")
        document.getElementById("nome").classList.add("is-invalid")
    }else{
        document.getElementById("nome").classList.add("is-valid")
        document.getElementById("nome").classList.remove("is-invalid")
    }
    
}
function verificacao(){
    var tamanhoEmail = document.getElementById("email").value.length
    var tamanhoNome = document.getElementById("nome").value.length
    var tamanhoSenha = document.getElementById("senha").value.length
    if(tamanhoEmail === 0){
        document.getElementById("email").classList.remove("is-valid")
        document.getElementById("email").classList.add("is-invalid")
    }else{
        document.getElementById("email").classList.add("is-valid")
        document.getElementById("email").classList.remove("is-invalid")
    }

    if(tamanhoSenha === 0){
        document.getElementById("senha").classList.remove("is-valid")
        document.getElementById("senha").classList.add("is-invalid")
    }else{
        document.getElementById("senha").classList.add("is-valid")
        document.getElementById("senha").classList.remove("is-invalid")
    }

    if(tamanhoNome === 0){
        document.getElementById("nome").classList.remove("is-valid")
        document.getElementById("nome").classList.add("is-invalid")
    }else{
        document.getElementById("nome").classList.add("is-valid")
        document.getElementById("nome").classList.remove("is-invalid")
    }
    
}

function verificacao2(){
    var tamanhoEmail = document.getElementById("email").value.length
    if(tamanhoEmail === 0){
        document.getElementById("email").classList.remove("is-valid")
        document.getElementById("email").classList.add("is-invalid")
    }else{
        document.getElementById("email").classList.add("is-valid")
        document.getElementById("email").classList.remove("is-invalid")
    }
}

function verificacao1(){
    var tamanhoNome = document.getElementById("nome").value.length

    if(tamanhoNome === 0){
        document.getElementById("nome").classList.remove("is-valid")
        document.getElementById("nome").classList.add("is-invalid")
    }else{
        document.getElementById("nome").classList.add("is-valid")
        document.getElementById("nome").classList.remove("is-invalid")
    }
}

function verificacao3(){
    var tamanhoSenha = document.getElementById("senha").value.length

    if(tamanhoSenha === 0){
        document.getElementById("senha").classList.remove("is-valid")
        document.getElementById("senha").classList.add("is-invalid")
    }else{
        document.getElementById("senha").classList.add("is-valid")
        document.getElementById("senha").classList.remove("is-invalid")
    }
}

function tamanho(){
    console.log(window.screen.width)
    if(window.screen.width <= 425){
        document.getElementById("registro").classList.remove("px-5")
        document.getElementById("registro").classList.add("px-0")
    }else{
        document.getElementById("registro").classList.remove("px-0")
        document.getElementById("registro").classList.add("px-5")
    }
}