//Establish base URL - This is where we want to pull data from:
const baseURL = "https://picsum.photos/v2/list/";

//Search using DOM querySelector 
const myDOMManipulator = document.querySelector(".results");        //Once things are found - stick it in this section in HTML.

//Focus on the FETCH FIRST
fetch(baseURL)                           
.then(function (result) {

    return result.json();
 })
.then(function (json) {
    console.log(json);
    displayResults(json);
});

//FUNCTION
function displayResults(passjson) {
    console.log(passjson)
    passjson.forEach((picsumObject) => {

 
//DISPLAY RESULTS:
    let objectDiv = document.createElement('div');
    objectDiv.setAttribute("class", "oDiv");

    let objectImg = document.createElement("img");
    objectImg.setAttribute("class", "oImg");

    objectImg.src = picsumObject.download_url;
    objectImg.alt = picsumObject.url;

    let photographer = document.createElement('h3');
    photographer.textContent = picsumObject.author;

    myDOMManipulator.appendChild(objectDiv);
    objectDiv.appendChild(objectImg);
    objectDiv.appendChild(photographer);
 })
}

        


