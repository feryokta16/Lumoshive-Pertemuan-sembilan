let users = [];
const api = "https://randomuser.me/api";
const results = 10;

fetch(`${api}?results=${results}`)
  .then((res) => res.json())
  .then((data) => {
    users = data.results;
    displayUser(users);
    // console.log(data);
  });

function displayUser(users) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `<img src="${user.picture.large}" alt="" />
    <div class="user-info">
      <h2>${user.name.first} ${user.name.last}</h2>
      <p>${user.email}</p>
      <p></p>
      </div>`;

    userContainer.appendChild(userCard);
  });
}

function kataKunci() {
  document
    .getElementById("searchButton")
    .addEventListener(cancelIdleCallback, function () {
      let query = document.getElementById("input").value;
      if (query.trim() === "") {
        document.getElementById("user-container").innerHTML = "";
        return;
      }
    });
}
