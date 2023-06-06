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
document.addEventListener("click", function() {
    function checkLogin(){ 
        let campoLogin = document.getElementById("login-usuario").value
        let campoSenha = document.getElementById("senha-usuario").value
        let register = document.getElementById("cadastro")
        let dadosLogin = usuarios[campoLogin]

        if(dadosLogin){
            if(dadosLogin && campoSenha === dadosLogin.senha) {
                localStorage.setItem('login', campoLogin)
                localStorage.setItem('cargo', dadosLogin.cargo)
                window.location.href = "/sistema/autenticacao.html"
            }  else {
                alert('Login ou senha incorretos')
            }   
        } else { 
            alert('Usuário não existe')
            register.hidden = false
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
            alert('Você não tem cargo para acessar')
            window.location.href = "#"
        } else if(cargo === 'ADM'){
            window.location.href = "../sistema/adm.html"
        }
    }
    let area = document.getElementById("adm")
    area.onclick = adm
})    


// Links
document.addEventListener("click", function(){ 
    function getOut() {
        window.location.href = '/index.html'
    }
    
    function home() {
        window.location.href = '/sistema/autenticacao.html'
    }
    
    let leave = document.getElementById("leave")
    leave.onclick = getOut
    
    let aut = document.getElementById("home")
    aut.onclick = home
})