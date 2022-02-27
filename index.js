alert("Velkommen!");
alert(
  "Instrukser for bruk av handlelisten: Bruk input-feltene til å legge til nye varer. Start fra venstre til høyre. På siste felt vil du får en totalsum for handelen din."
);

var enoughList = document.getElementById("enough-list");

var enoughArray = [];

function addGrocery() {
  let enoughInput = document.getElementById("enough-input").value;

  enoughArray.push({
    item: enoughInput,
  });

  console.log(enoughArray);
  groceryArray();
}

function groceryArray() {
  enoughList.innerHTML = "";
  for (let i = 0; i < enoughArray.length; i++) {
    enoughList.innerHTML += ` <li id="grocery-item">
        ${enoughArray[i].item}
        <button id="delete-btn" onclick="deleteItem(${i})">SLETT</button>
        </li>
        `;
  }
}

function deleteItem(i) {
  let confirmDelete = prompt(
    `Er du sikker på at du vil slette "${enoughArray[i].item}"?
    Skriv ja eller nei.`
  );
  if (confirmDelete === "ja") {
    alert(`${enoughArray[i].item} er nå slettet.`);
    enoughArray.splice(i, 1);
    groceryArray();
  } else {
    alert("Sletting kansellert.");
  }
}

//-----------------------------------------------------

var almostEmptyList = document.getElementById("almost-empty-list");

var emptyArray = [];

function addGrocery2() {
  let almostEmptyInput = document.getElementById("almost-empty-input").value;

  emptyArray.push({
    item: almostEmptyInput,
  });

  console.log(emptyArray);
  groceryArray2();
}

function groceryArray2() {
  almostEmptyList.innerHTML = "";
  for (let i = 0; i < emptyArray.length; i++) {
    almostEmptyList.innerHTML += `<li id="grocery-item2">
        ${emptyArray[i].item}
        <button id="delete-btn" onclick="deleteItem2(${i})">SLETT</button>
        </li>
        `;
  }
}

function deleteItem2(i) {
  let confirmDelete2 = prompt(
    `Er du sikker på at du vil slette "${emptyArray[i].item}"?
    Skriv ja eller nei.`
  );
  if (confirmDelete2 === "ja") {
    alert(`${emptyArray[i].item} er nå slettet.`);
    emptyArray.splice(i, 1);
    groceryArray2();
  } else {
    alert("Sletting kansellert.");
  }
}
//------------------------------------------------------------------

var buyMoreList = document.getElementById("buy-more-list");

var buyArray = [];

function addGrocery3() {
  let buyMoreInput = document.getElementById("buy-more-input").value;
  let priceInput = document.getElementById("price-input").value;
  let sumList = document.getElementById("sum-list");

  if ((isNaN(priceInput) || priceInput <= 0) === true) {
    alert("Error!" + "Det må være et tall, høyere enn 0.");
  } else {
    buyArray.push({
      item: buyMoreInput,
      price: priceInput,
    });
    groceryArray3();
    console.log(buyArray);

    function groceryArray3() {
      buyMoreList.innerHTML = "";
      for (let i = 0; i < buyArray.length; i++) {
        buyMoreList.innerHTML += `<li id="grocery-item3">
                ${buyArray[i].item}, ${buyArray[i].price} Kr
                <button id="delete-btn" onclick="deleteItem3(${i})">SLETT</button>
                </li>
                `;
      }
      const prices = buyArray.map((buy) => buy.price);
      let sum = 0;

      for (let i = 0; i < prices.length; i++) {
        sum += +prices[i];
      }
      sumList.innerHTML = `TOTALT Å HANDLE FOR: ${sum} KR`;

      console.log(sum);
    }
  }
}

function deleteItem3(i) {
  let confirmDelete3 = prompt(
    `Er du sikker på at du vil slette "${buyArray[i].item}"?
    Skriv ja eller nei.`
  );
  if (confirmDelete3 === "ja") {
    alert(`${buyArray[i].item} er nå slettet.`);
    buyArray.splice(i, 1);
    groceryArray3();
  } else {
    alert("Sletting kansellert.");
  }
}
