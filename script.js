const characterCard = ({ name, species, status, image }) => {
  /*   const name = characterData.name;
  const species = characterData.species;
  const status = characterData.status;
  const image = characterData.image; */

  //   const { name, species, status, image } = characterData;

  return `<div class="card">
  <h2>${name}</h2>
  <h3 class=${species}>${species}</h3>
  <h4>${status}</h4>
  <img src=${image} />
  </div>
  `;
};

/*
    `
    <div class="card"> ${characterData.name} </div>
`;
*/

const characterComponent = (characterData) => `
<div class="characters"> ${characterData
  .map((characterData) => characterCard(characterData))
  .join("")} </div>
`;

const makeDomFromData = (data, rootElement) => {
  rootElement.insertAdjacentHTML("beforeend", characterComponent(data.results));
};

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    /*     data.results.forEach((characterData) => {
      document
        .querySelector("#root")
        .insertAdjacentHTML("beforeend", characterCard(characterData));
    }); */

    /*     document
      .querySelector("#root")
      .insertAdjacentHTML("beforeend", characterComponent(data.results)); */

    makeDomFromData(data, document.querySelector("#root"));
  });

//chatgpt

/* fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((err) => console.error("Fetch error:", err));
 */
