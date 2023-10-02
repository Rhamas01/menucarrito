function isMobile() {

    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;

    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;

    return false;
}

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '573161217291';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let output = ""
        const parrafos =  document.querySelectorAll('#moco p');
        parrafos.forEach((parrafo) => {
            output += parrafo.textContent + '\n';
            // Opcionalmente, puedes usar innerHTML en lugar de textContent si deseas mantener el HTML dentro de las etiquetas <p>
            // output += parrafo.innerHTML + '\n';
        });
        let name = document.querySelector('#nombreCliente').value
        let dir = document.querySelector('#dirCliente').value
       
        let message = `send?phone=${phone}
        &text=*_Formulario_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A${name}
        %0A*_Direccion_*%0A${dir}%0A*_Pedido_*%0A${output}*%0A`


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});


