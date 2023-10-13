// Create an object to store input values and checkbox state
const inputs = { checked: 0 };

// Create a form element
const form = document.createElement("form");
form.method = "get";
form.id = "myForm";

// Define input fields and error paragraphs
const inputFields = [
  { type: "text", name: "name", id: "name", label: "Name" },
  { type: "number", name: "age", id: "age", label: "Age" },
  { type: "email", name: "email", id: "email", label: "Email" },
  { type: "date", name: "date", id: "date", label: "Date" },
  { type: "checkbox", name: "interest", id: "sports", label: "Sports" },
  { type: "checkbox", name: "interest", id: "pottery", label: "Pottery" },
];

// Create form elements and error paragraphs
inputFields.forEach((field) => {
  // Create a label element
  const label = document.createElement("label");
  label.htmlFor = field.id;
  label.textContent = field.label;

  // Create an input element
  const input = document.createElement("input");
  input.type = field.type;
  input.name = field.name;
  input.id = field.id;

  // Create an error paragraph
  const errorParagraph = document.createElement("p");
  errorParagraph.id = `${field.id}Error`;
  errorParagraph.className = "error";

  // Append label, input, and error paragraph to the form
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(errorParagraph);
});

// Append the form to the document body
document.body.appendChild(form);

const ref = document.getElementById("myForm");
const errorsRef = document.getElementsByClassName("error");

const joiSchema = {
  name: Joi.string().min(3).max(15),
  age: Joi.number().min(0).max(130).integer(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "co.uk"] },
  }),
  date: Joi.date().max("now"),
  sports: Joi.allow(""),
  pottery: Joi.allow(""),
};

function clearErrors() {
  for (const errorRef of errorsRef) {
    errorRef.innerHTML = "";
  }
}

function getErrorsAsObject(errors) {
  const errorsMod = {};

  // Convert the errors to a nice object
  errors.details.forEach((error) => {
    errorsMod[error.context.key + "Error"] = error.message;
  });

  return errorsMod;
}

function setCheckboxError() {
  const sportsCheckbox = document.getElementById("sports");
  const potteryCheckbox = document.getElementById("pottery");
  const errorRef = document.getElementById("sportsError");
  if (!sportsCheckbox.checked && !potteryCheckbox.checked) {
    errorRef.innerHTML = "Please tick at least one checkbox";
  }
}

function validate() {
  clearErrors();
  setCheckboxError();
  Joi.validate(inputs, joiSchema, { abortEarly: false }, (errors) => {
    if (errors) {
      const errorsMod = getErrorsAsObject(errors);
      for (const errorRef of errorsRef) {
        if (errorsMod[errorRef.id]) {
          errorRef.innerHTML = errorsMod[errorRef.id];
        }
      }
    }
  });
}

ref.addEventListener("input", (e) => {
  inputs[e.target.id] = e.target.value;
  if (e.target.type === "checkbox") {
    inputs.checked =
      document.getElementById("sports").checked ||
      document.getElementById("pottery").checked;
  }

  validate();
});
