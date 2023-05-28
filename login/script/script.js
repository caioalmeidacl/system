let usuario = {
    login: 'caio', 
    senha: '12345',
    cargo: 'ADM'
}

let usuario2 = {
    login: 'Diego',
    senha: '1234', 
    cargo: 'Usuário'
}

// PRIMEIRA PAGINA
function checkLogin(){ 
    var campoLogin = document.getElementById("login-usuario").value
    var campoSenha = document.getElementById("senha-usuario").value

    if(campoLogin === usuario.login && campoSenha == usuario.senha) {
        window.location.href = "/sistema/autenticacao.html"
    } else if(campoLogin === usuario2.login && campoSenha == usuario2.senha ) {
        window.location.href = "/sistema/autenticacao.html"
    }  else { 
        document.getElementById("senha-usuario").value = ""
        alert('Login ou senha incorretos')
    }
    
    
}

// Já autenticado
document.addEventListener("DOMContentLoaded", function() {
    let nameLogin = document.getElementById("nameLogin") 
    let cargo = document.getElementById("cargo")

    nameLogin.textContent = usuario.login
    cargo.textContent = usuario.cargo
})

document.addEventListener("DOMContentLoaded", function() {
    let nameLogin = document.getElementById("nameLogin") 
    let cargo = document.getElementById("cargo")

    nameLogin.textContent = usuario2.login
    cargo.textContent = usuario2.cargo
})

// Area administrativa 

