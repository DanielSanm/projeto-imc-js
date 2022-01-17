function myScope() {

    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    const container = document.querySelector('.container')
    let resultado = ''

    function calcular(evento) {
        evento.preventDefault()
        
        let valorInvalido = document.querySelector('.invalido')
        let valorValido = document.querySelector('.valido')
        valorInvalido.style.display = 'none'
        valorValido.style.display = 'none'

        if(Number(peso.value) < 2.4 || Number(peso.value) > 200 || isNaN(Number(peso.value))) {
            valorInvalido.innerHTML = 'Peso inválido'
            valorInvalido.style.display = 'block'
        } else if(Number(altura.value) < 0.454 || Number(altura.value) > 2.2 || isNaN(Number(altura.value))) {
            valorInvalido.innerHTML = 'Altura inválida'
            valorInvalido.style.display = 'block'
        } else {
            
            let imc = Number(peso.value) / Number(altura.value) ** 2

            if (imc <= 18.5) {
                resultado = 'Abaixo do peso'
            } else if (imc >= 19.5 && imc <= 24.9) {
                resultado = 'Peso normal'
            } else if (imc >= 25 && imc <= 29.9) {
                resultado = 'Sobrepeso'
            } else if (imc >= 30 && imc <= 34.9) {
                resultado = 'Obesidade grau 1'
            } else if (imc >= 35 && imc <= 39.9) {
                resultado = 'Obesidade grau 2'
            } else if (imc >= 40) {
                resultado = 'Obesidade grau 3'
            }
            
            valorValido.innerHTML = `Seu IMC é ${imc.toFixed(1)} (${resultado})`
            valorValido.style.display = 'block'
        }
    }


    container.addEventListener('submit', calcular)

}

myScope()