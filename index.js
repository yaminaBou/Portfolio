const form = document.querySelector('#contact-form');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  if (!nom.value || !email.value || !message.value) {
    event.preventDefault();
    alert('Veuillez remplir tous les champs du formulaire.');
  }
});
