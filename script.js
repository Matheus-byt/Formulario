const formLogin = document.forms.formLogin

const formValid = () => {
    addEventListener('submit', function(event){
        const {data, timeone, timeend, assinatura_tecnico} = formLogin

        if(data.value, timeone.value, timeend.value, assinatura_tecnico.value == ''){
            event.preventDefault()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Você esqueceu de preencher um campo!',
                iconColor: '#002d68',
                confirmButtonColor: '#002d68'
                //footer: '<a href="">Why do I have this issue?</a>'
              })
        }

    })
}

formValid()
