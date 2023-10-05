const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

// register
// const loginButton = document.querySelector(".btn-login");
// const registerButton = document.querySelector(".btn-register");
// const name = document.querySelector(".username");
// const password = document.querySelector(".password");

// registerButton.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === "" || name.value === null) {
//       messages.push('Name is required')
//   }

//   if (password.value.length <= 6) {
//     messages.push(Password must be longer than 6 characters)
//   }

//   if (password.value.length >= 20) {
//     messages.push(Password must be less than 20 characters)
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be small capital')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// });
