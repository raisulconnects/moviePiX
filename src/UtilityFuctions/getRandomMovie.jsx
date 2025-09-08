export default function getRandomMovie() {
  const initial_placeHolder_movieList = [
    "love",
    "man",
    "girl",
    "dance",
    "high",
    "harry",
  ];

  let randomIndex = Math.floor(
    Math.random() * initial_placeHolder_movieList.length
  );

  let randomMovie_fromList = initial_placeHolder_movieList[randomIndex];

  return randomMovie_fromList;
}
