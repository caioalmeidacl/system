let users = {
    'Caio':{ 
        cargo: 'ADM',
        senha: '12345'
    },
    'User2': { 
        cargo: 'Usuario',
        senha: '1234'
    }
}

// PRIMEIRA PAGINA
document.addEventListener("click", function() {
    function checkLogin(){ 
        let campoLogin = document.getElementById("login").value
        let campoSenha = document.getElementById("password").value
        let dadosLogin = users[campoLogin]

        if(dadosLogin){
            if(dadosLogin && campoSenha === dadosLogin.senha) {
                localStorage.setItem('login', campoLogin)
                localStorage.setItem('cargo', dadosLogin.cargo)
                window.location.href = "../pages/autenticacao.html"
            }  else {
                alert('Login ou senha incorretos')
            }   
        } else { 
            alert('Usuário não existe')
        }
    }
    let verify = document.getElementById("button")
    verify.onclick = checkLogin
})


// Já autenticado
function updateUser() {
    let nameLogin = document.getElementById("nameLogin") 
    let cargo = document.getElementById("cargo")

    nameLogin.textContent =  localStorage.getItem('login')
    cargo.textContent =  localStorage.getItem('cargo')
}


// Area administrativa 
document.addEventListener("click", function(){
    function adm() {
        let cargo = localStorage.getItem('cargo')
        
        if(cargo === 'Usuario') {
            alert('You do not have the required access level')
            window.location.href = "#"
        } else if(cargo === 'ADM'){
            window.location.href = "../pages/adm.html"
        }
    }
    let area = document.getElementById("adm")
    area.onclick = adm
})    


// Links
document.addEventListener("click", function(){ 
    function getOut() {
        window.location.href = '../login.html'
    }
    
    function home() {
        window.location.href = '../pages/autenticacao.html'
    }
    
    let goBack = document.getElementById("leave")
    goBack.onclick = getOut
    
    let aut = document.getElementById("home")
    aut.onclick = home
})