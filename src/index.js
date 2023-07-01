

const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  PNotify.success({
    text: 'Данні форми були відправлені',
  });
});
