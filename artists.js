const reponse = await fetch(`https://groupietrackers.herokuapp.com/api/artists`);
const artists = await reponse.json()