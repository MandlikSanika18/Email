const scriptURL = 'https://script.google.com/macros/s/AKfycbwSuSkqBuuJrGWHgjAZhoBrwJTuVXOnPD7qXGO3CI45ycsjVKxqAUS8QfENrKZxu6V-cA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subsrcibing!"
        msg.style.display="block";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})