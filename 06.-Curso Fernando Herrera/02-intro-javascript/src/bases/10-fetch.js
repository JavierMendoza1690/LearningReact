const apiKey = "Co8duB5dyz8UYDyi34vjHIrjHsZyipJE";
const fullLink = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(fullLink);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch((error) => console.warn);
