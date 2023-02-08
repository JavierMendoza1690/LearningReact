const apiKey = "Co8duB5dyz8UYDyi34vjHIrjHsZyipJE";
const fullLink = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getImage = async () => {
  try {
    const resp = await fetch(fullLink);
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
