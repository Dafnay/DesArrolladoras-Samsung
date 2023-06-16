const form = document.querySelector("#form");
const user = document.querySelector("#username");
const fLastname = document.querySelector("#f-lastname");
const sLastname = document.querySelector("#s-lastname")
const email = document.querySelector("#email");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const button = document.querySelector("#btn-submit");

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const onlyLetterPattern = /^[a-zA-Zñ\s]+$/;

let hasErrors = false;

button.addEventListener("click", () => {
  checkInputs();
});

form.addEventListener("submit", (event) => {
  if (hasErrors) {
    event.preventDefault();
  }
});

const checkInputs = () => {
  hasErrors = false; // reseteo variable para que se lance el alert al corregir un campo
  const userValue = user.value.trim();
  const fLastnameValue = fLastname.value.trim();
  const sLastnameValue = sLastname.value.trim();
  const loginValue = login.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  

  if (userValue === "") {
    setErrorFor(user, "Rellene este campo");
  } else if (!checkUsername(userValue)) {
    setErrorFor(user, "Este campo solo admite letras");
  } else {
    setSuccessFor(user);
  }


  if (fLastnameValue === "") {
    setErrorFor(fLastname, "Rellene este campo");
  } else if (!checkUsername(fLastnameValue)) {
    setErrorFor(fLastname, "Este campo solo admite letras");
  } else {
    setSuccessFor(fLastname);
  }


  if (sLastnameValue === "") {
    setErrorFor(sLastname, "Rellene este campo");
  } else if (!checkUsername(sLastnameValue)) {
    setErrorFor(sLastname, "Este campo solo admite letras");
  } else {
    setSuccessFor(sLastname);
  }

  if (loginValue === "") {
    setErrorFor(login, "Rellene este campo");
  } else if (!checkUsername(loginValue)) {
    setErrorFor(login, "Este campo solo admite letras");
  } else {
    setSuccessFor(login);
  }

  if (emailValue === "") {
    setErrorFor(email, "Rellene este campo");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Rellene este campo");
  } else if (passwordValue.length > 8) {
    setErrorFor(password, "No debe tener más de 8 caracteres");
  } else {
    setSuccessFor(password);
  }

  // setTimeout(() => {
  //   if (!hasErrors) {
  //     alert("La inscripción ha sido correcta");
  //   }
  // }, 10);
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
  hasErrors = true;
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const isEmail = (email) => {
  return emailPattern.test(email);
};

const checkUsername = (username) => {
  return onlyLetterPattern.test(username);
};
