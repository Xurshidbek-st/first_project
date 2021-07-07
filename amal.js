let numberOfNews = +prompt("Siz qanchalik yangilik ko'rdingiz?");
const personalNewDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("oxirgi ko''rgan yangiliklarizdan biri"),
  b = prompt("Unga qancha ball bergan bo'lar ediz?");
personalNewDB.news[a] = b;
console.log(personalNewDB);
