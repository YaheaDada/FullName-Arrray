let firstName = [
  "bilal",
  "Alia",
  "Yahea",
  "Masa",
  "Ahmad",
  "Roaa",
  "Taha",
  "Nour ",
  "Esraa",
  "Yazan",
  "mahmoud",
  "Emad ",
  "Rawan ",
  "nasrallah ",
  "Khoder ",
  "Ibrahim ",
  "Khoudr ",
  "Mahmoud",
  "Sidra",
];

let lastName = [
  "daadaa",
  "Al-Gazawi",
  "Zedan",
  "Alshamali",
  "Adi",
  "Dada",
  "alkam",
  "Issa",
  "Hindauoi",
  "Kassar",
  "Al Zenbarakji",
  "hammoud",
  "Albinni",
  "Alhalabi",
  "abo sfeir",
  "Al-Hamwi",
  "Haji",
  "Ibrahim",
  "ataya",
];
// ! with Find
let MyNameByFind =
  firstName.find((element) => element == "Yahea") +
  " " +
  lastName.find((element) => element == "Dada");
console.log(MyNameByFind);
// ! with Filter
let MyNameByFilter = firstName.filter(findMyName);
function findMyName(name) {
  return name == "Yahea";
}
function findMyNickName(nickName) {
  return nickName == "Dada";
}

console.log(MyNameByFilter);
