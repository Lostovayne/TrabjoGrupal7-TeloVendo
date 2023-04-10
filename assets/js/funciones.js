let Input_name = document.querySelector('.input_name')
let Input_email = document.querySelector('.input_email')
let Textarea_message = document.querySelector('.textarea-message')
let Form = document.querySelector('.form')

// Event Listeners y Funcion
Form.addEventListener('submit', e => {
  e.preventDefault()
  if (Input_name.value.trim() === '') {
    alert('Por favor, ingrese su nombre')
    return
  }
  if (Input_email.value.trim() === '') {
    alert('Por favor, ingrese su email')
    return
  }
  if (Textarea_message.value.trim() === '') {
    alert('Por favor, ingrese su mensaje')
    return
  }
  alert('¡Gracias por enviar tu mensaje!  ' + Input_name.value.trim())
})
