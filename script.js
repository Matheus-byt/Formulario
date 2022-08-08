const formLogin = document.forms.formLogin

const formValid = () => {
    addEventListener('submit', function(event){
        const {data, timeone, timeend, assinatura_tecnico} = formLogin

        if(data.value, timeone.value, timeend.value, assinatura_tecnico.value == ''){
            event.preventDefault()
            console.log('todos os campos vázios')
        }

    })
}

formValid()
