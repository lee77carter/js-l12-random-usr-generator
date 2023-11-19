// Random User Generator: refreshes a new random user automatically

// HTML document element
const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users")
//console.log(selectUserNumber);
//console.log(randomFolks);
// API setup
const getData = async function (numUsers) {
  const usersRequest = await fetch(`https://randomuser.me/api?result=${numUsers}`);
  const data = await usersRequest.json();

  const userResults = data.results;
  displayUsers(userResults);
};
// Run: retrieve data by specfic number
getData(4);

// Display random users function 
const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";
  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
    randomFolks.append(userDiv);
  }
};
// Event Listener on change
selectUserNumber.addEventListener("change", function (e) {
  numUsers = e.target.value;
  getData(numUsers);
});