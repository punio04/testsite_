import '../images/script.49358ae4.js';

const form$1 = document.getElementById("form_bottom");
const requiredElements$1 = form$1.querySelectorAll("[required]");
const method_contact$1 = form$1.querySelectorAll(
  "[name=method_contact]"
);
const mailForm$1 = form$1.querySelector("[name=Email]");
const mailFormat$1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactMethodFieldset$1 = form$1.querySelector("#contact-method");
const radioButtons$1 = form$1.querySelectorAll(
  "input[type='radio']"
);
const submit$1 = form$1.querySelector(
  "button[type='submit']"
);
document.addEventListener("DOMContentLoaded", function() {
  const emptyRequiredElements = [];
  const updateEmptyRequiredElements = () => {
    emptyRequiredElements.forEach((element) => {
      element.classList.remove("blank");
    });
    emptyRequiredElements.length = 0;
    requiredElements$1.forEach((element) => {
      if (element.value.trim() === "") {
        emptyRequiredElements.push(element);
      }
    });
    const isAnyRadioButtonSelected = [...radioButtons$1].some((radioButton) => {
      return radioButton.checked;
    });
    if (method_contact$1[1].checked && !mailFormat$1.test(mailForm$1.value.trim())) {
      emptyRequiredElements.unshift(mailForm$1);
    } else if (method_contact$1[1].checked && mailFormat$1.test(mailForm$1.value.trim())) {
      const mailFormIndex = emptyRequiredElements.indexOf(mailForm$1);
      if (mailFormIndex !== -1) {
        emptyRequiredElements.splice(mailFormIndex, 1);
      }
    } else if (!isAnyRadioButtonSelected && emptyRequiredElements[0].name === "name") {
      emptyRequiredElements.unshift(contactMethodFieldset$1);
    } else if (isAnyRadioButtonSelected && emptyRequiredElements[0].name === "name") {
      const contactMethodFieldsetIndex = emptyRequiredElements.indexOf(
        contactMethodFieldset$1
      );
      if (contactMethodFieldsetIndex !== -1) {
        emptyRequiredElements.splice(contactMethodFieldsetIndex, 1);
      }
    }
    if (emptyRequiredElements.length === 0) {
      submit$1.classList.add("blank");
    } else {
      emptyRequiredElements[0].classList.add("blank");
    }
  };
  requiredElements$1.forEach((element) => {
    element.addEventListener("input", updateEmptyRequiredElements);
  });
  mailForm$1.addEventListener("input", updateEmptyRequiredElements);
  updateEmptyRequiredElements();
});

const form = document.getElementById("form_top");
const requiredElements = form.querySelectorAll("[required]");
const method_contact = form.querySelectorAll("[name=method_contact]");
const mailForm = form.querySelector("[name=Email]");
const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactMethodFieldset = form.querySelector("#contact-method");
const radioButtons = form.querySelectorAll("input[type='radio']");
const submit = form.querySelector("button[type='submit']");
document.addEventListener("DOMContentLoaded", function() {
  const emptyRequiredElements = [];
  const updateEmptyRequiredElements = () => {
    emptyRequiredElements.forEach((element) => {
      element.classList.remove("blank");
    });
    emptyRequiredElements.length = 0;
    requiredElements.forEach((element) => {
      if (element.value.trim() === "") {
        emptyRequiredElements.push(element);
      }
    });
    const isAnyRadioButtonSelected = [...radioButtons].some((radioButton) => {
      return radioButton.checked;
    });
    if (method_contact[1].checked && !mailFormat.test(mailForm.value.trim())) {
      emptyRequiredElements.unshift(mailForm);
    } else if (method_contact[1].checked && mailFormat.test(mailForm.value.trim())) {
      const mailFormIndex = emptyRequiredElements.indexOf(mailForm);
      if (mailFormIndex !== -1) {
        emptyRequiredElements.splice(mailFormIndex, 1);
      }
    } else if (!isAnyRadioButtonSelected && emptyRequiredElements[0].name === "name") {
      emptyRequiredElements.unshift(contactMethodFieldset);
    } else if (isAnyRadioButtonSelected && emptyRequiredElements[0].name === "name") {
      const contactMethodFieldsetIndex = emptyRequiredElements.indexOf(contactMethodFieldset);
      if (contactMethodFieldsetIndex !== -1) {
        emptyRequiredElements.splice(contactMethodFieldsetIndex, 1);
      }
    }
    if (emptyRequiredElements.length === 0) {
      submit.classList.add("blank");
    } else {
      emptyRequiredElements[0].classList.add("blank");
    }
  };
  requiredElements.forEach((element) => {
    element.addEventListener("input", updateEmptyRequiredElements);
  });
  mailForm.addEventListener("input", updateEmptyRequiredElements);
  updateEmptyRequiredElements();
});
