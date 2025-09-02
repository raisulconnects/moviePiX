export default function getRandomMovie() {
  const initial_placeHolder_movieList = [
    "Avengers",
    "Naruto",
    "Harry",
    "Spider-Man",
  ];

  let randomIndex = Math.floor(
    Math.random() * initial_placeHolder_movieList.length
  );

  let randomMovie_fromList = initial_placeHolder_movieList[randomIndex];

  return randomMovie_fromList;
}
