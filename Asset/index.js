let formGroupTable = document.querySelectorAll(".form-group");

formGroupTable.forEach((form_group, index) => {
  form_group
    .getElementsByClassName("elemroot")[0]
    .addEventListener("click", () => {
      form_group
        .getElementsByClassName("elemroot")[0]
        .setAttribute("placeholder", "");
      form_group.getElementsByTagName("span")[0].style.visibility = "visible";
      form_group.getElementsByTagName("span")[0].classList.add("move");
      console.log("ok", index);
      console.log(form_group.getElementsByTagName("span")[0]);
    });
});

const btnSend = document.querySelector("#btn-send");
const firstName = document.querySelector("#first-name");
const lastMessage = document.querySelector("#last-message");
const lastSubject = document.querySelector("#last-subject");
const secondMessage = document.querySelector("#second-message");

// Envoi des données à un serveur ou traitement des données ici
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
  // Réinitialisation des champs de saisie
  firstName.value = "";
  lastMessage.value = "";
  lastSubject.value = "";
  secondMessage.value = "";
});

function sendMail() {
  let params = {
    name: firstName.value,
    email: lastMessage.value,
    subject: lastSubject.value,
    message: secondMessage.value,
  };
  const serviceId = "service_lxek19a";
  const templateId = "template_e53vgp9";

  emailjs
    .send(serviceId, templateId, params)

    .then((res) => {
      console.log(res);
      document.querySelector(".alert").style.transition ="visible 0.2s"
      document.querySelector(".alert").style.visibility ="visible"
      setTimeout(()=>{
        document.querySelector(".alert").style.visibility ="hidden"
      },2000)

    })

    .catch((err) => console.log(err));
}
