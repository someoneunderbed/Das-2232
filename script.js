let user1 = {
  name: "Aram",
  // surname: "Martirosyan",
  // age: 25,
  // address: "3rd Mas, Yerevan",
  boo: function () {
    console.log(
      `Hello my name is ${this.name} ${this.surname}, and I'm ${this.age} years old. I live in ${this.address}.`
    );
  },
};
console.log(user1);
user1.boo();

let user2 = {
  name: "Anush",
  // surname: "Hakobyan",
  // age: 19,
  // address: "Shengavit, Yerevan",
};
console.log(user2);
user1.boo.bind(user2)();

let user3 = {
  name: "Davit",
  // surname: "Manukyan",
  // age: 35,
  // address: "Masiv, Yerevan",
};

console.log(user3);
user1.boo.bind(user3)();

let Allusersinfo = [];
let Allusers = {
  surname: (document.getElementById("yr").value,
  age: document.getElementById("age").value,
  address: document.getElementById("address").value,
};

let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  Allusersinfo.push(Allusers);
  console.log(Allusersinfo);
});

// ***********************************//********************* */
