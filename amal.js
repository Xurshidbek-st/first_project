const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baho bergan bo'lar edingiz?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalNewsDB.news[a] = b;
    console.log("tayyor");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangiliklar o'qilibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("Siz klassik tomoshabinsiz");
} else if (personalNewsDB.count >= 30) {
  console.log("Siz yangilklar ishqibozisiz");
} else {
  console.log("Xato yuz berdi");
}

console.log(personalNewsDB);