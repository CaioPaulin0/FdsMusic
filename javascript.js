function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 60; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

function mobileBotao(){
    const b = document.querySelector('.headerMobileText')

    b.classList.toggle('headerMobileTextAc')
}


const enviarContato = document.getElementById('enviarContato')

enviarContato.addEventListener('click', function(){
    const name = document.getElementById('name')
    const tel = document.getElementById('telefone')
    const email = document.getElementById('email')
    const texto = document.getElementById('texto')

    const emailCompleto = emaiL(email) 
    const nomeCompleto =  nome(name)
    const numeroCompleto = validaNumero(tel)
    const caixaCompleta = caixaTexto(texto)

    console.log(nomeCompleto, emailCompleto, numeroCompleto, caixaCompleta)
    addVali(nomeCompleto, emailCompleto, numeroCompleto, caixaCompleta)

})

function nome(name){
    if(name.value){
        name.style.border = "none"
        return true
        
    } else if(!name.value){
        name.style.border = "1px solid red"
        console.log("nada inserido")        
    }

    return
}

function emaiL(name){

    const email = name.value

    if(valida(email) === true){
        name.style.border = "none"
        return true
        
    } else if(valida(email) === false){
        name.style.border = "1px solid red"
        console.log("nada inserido")        
    }

    return

}

function validaNumero(nuemrot){
    const valor = nuemrot.value

    if(valor.slice(0,8)){
        nuemrot.style.border = "none"
        return true
    } else{
        nuemrot.style.border = "1px solid red"
        console.log("nada inserido") 
    }

    return
}

function valida(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email)
}

function caixaTexto(texto){
    if(!texto.value){
        texto.style.border = "1px solid red"
        console.log("nada inserido")  
    } else{
        texto.style.border = "none"
        return true 
    }

    return

}

function displayValido(valor,valor2){
    let div = document.createElement('div')

    div.classList.add('caixadeteste')

    div.innerHTML = "Formulario Enviado!"


    valor.appendChild(div)

    valor2.style.display = "none"
    
    return
}

function addVali(a1,a2,a3,a4,){
    const contatoCont = document.querySelector('.contatoCont')
    const contatoBox = document.querySelector('.contatoBox')

    if(a1 && a2 && a3 && a4){
       displayValido(contatoCont,contatoBox)
    } else {
        console.log('teste2')
    }
}
