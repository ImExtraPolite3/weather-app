import currentInfo from "./getInfo";

function displayInfo() {
  const user = document.getElementById('user');
  const submit = document.querySelector('.submit');

  submit.addEventListener('click', () => {
    currentInfo(user.value);
  });
}

export { displayInfo }