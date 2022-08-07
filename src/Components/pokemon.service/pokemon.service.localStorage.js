
// ADD localStorage Items
export default function addToLocalStorage (data) {
    //add items to local Storage
    localStorage.setItem("pokedex", JSON.stringify(data));
}