import searchInfo from "./getInfo";

function displayInfo() {
  const user = document.getElementById('user');
  const submit = document.querySelector('.submit');

  submit.addEventListener('click', () => {
    searchInfo(user.value);
  });
}

export { displayInfo }