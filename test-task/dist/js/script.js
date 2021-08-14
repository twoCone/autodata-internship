const carsData = [
    {
        id: 1,
        name: "Aston Martin",
        modifications: ["Suspension Upgrades", "Turbochargers and Superchargers", "Sport Seats"],
        maxSpeed: 320,
        photo: "img/aston_martin.webp"
    },
    {

        id: 2,
        name: "Audi R8",
        modifications: ["Paint Jobs", "Window Tint", "Nitrous Oxide"],
        maxSpeed: 350,
        photo: "img/audi_r8.webp"
    },
    {

        id: 3,
        name: "Bugatti Veyron",
        modifications: ["Nitrous Oxide", "Suspension Upgrades", "Paint Jobs"],
        maxSpeed: 330,
        photo: "img/buggati.webp"
    },
    {

        id: 4,
        name: "Corvette ZR1",
        modifications: ["Underbody Neon Lights", "Racing Harnesses", "Catalytic Converter"],
        maxSpeed: 470,
        photo: "img/corvette.webp"
    },
    {

        id: 5,
        name: "Dodge Viper",
        modifications: ["Racing Harnesses", "Excessive Ride Height Adjustments"],
        maxSpeed: 390,
        photo: "img/dodge_viper.webp"
    },
    {

        id: 6,
        name: "Koenigsegg Regera",
        modifications: ["Nitrous Oxide", "Racing Harnesses", "Paint Jobs"],
        maxSpeed: 290,
        photo: "img/regera.webp"
    }
];


function modifications(modifications) {
    return `
  <h4 class="car__modificationstitle">Modifications</h4>
  <ul class="car__modification">
  ${modifications.map(modification => `<li>${modification}</li>`).join("")}
  </ul>
  `;
}

function carTemplate(car) {
    return `
      <div class="car" id = "${car.id}">
      <img class="car__image" src="${car.photo}">
      <h2 class="car__name">${car.name} </h2>
      <p><strong>Maximum speed :</strong> ${car.maxSpeed}</p>
      ${modifications(car.modifications)}
      <div class="button">
      <button class="button__edit" id = "button_edit${car.id}">Edit</button>
      <button class="button__delete" id = "button_delete${car.id}">Delete</button>
      </div>
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Cars </h1>
    ${carsData.map(carTemplate).join("")}
  `;

// edit button
for (let item of carsData) {
    $(`#button_edit${item.id}`).click(function () {
        let $div = $(`#${item.id}`), isEditable = $div.is('.editable');
        $(`#${item.id}`).prop('contenteditable', !isEditable).toggleClass('editable')
        isEditable ? $(`#button_edit${item.id}`).html('Edit') : $(`#button_edit${item.id}`).html('Save')
    })
}

// delete button
for (let car of carsData) {
    $(`#button_delete${car.id}`).click(function () {
        $(`#${car.id}`).remove();
    })
}
