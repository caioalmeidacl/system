let usuarios = {
    'Caio':{ 
        cargo: 'ADM',
        senha: '12345'
    },
    'Diego': { 
        cargo: 'Usuario',
        senha: '1234'
    }
}

// PRIMEIRA PAGINA
function checkLogin(){ 
    let campoLogin = document.getElementById("login-usuario").value
    let campoSenha = document.getElementById("senha-usuario").value
    let dadosLogin = usuarios[campoLogin]
    
    if(dadosLogin && campoSenha === dadosLogin.senha) {
        localStorage.setItem('login', campoLogin)
        localStorage.setItem('cargo', dadosLogin.cargo)
        window.location.href = "/sistema/autenticacao.html"
    } else {
        alert('Login ou senha incorretos')
    }   
   
}


// Já autenticado
function updateUser() {
    let nameLogin = document.getElementById("nameLogin") 
    let cargo = document.getElementById("cargo")

    nameLogin.textContent =  localStorage.getItem('login')
    cargo.textContent =  localStorage.getItem('cargo')

}


// Area administrativa 

function adm() {
    let cargo = localStorage.getItem('cargo')

    
    if(cargo === 'Usuario') {
        alert('Você não tem cargo para acessar')
        window.location.href = "#"
    } else if(cargo === 'ADM'){
        window.location.href = "../sistema/adm.html"
    }

}