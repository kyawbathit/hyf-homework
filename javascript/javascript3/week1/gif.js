//Fetch data
function fetchData (url){
    return fetch(url)
    .then(response => response.json());
}

//Render fetched data
function renderResult (list) {
    const outputGifs = document.getElementById('output');
    outputGifs.innerHTML = "";
    list.forEach(x => {
        const object = x.images;
        const li = document.createElement('li');
        li.style.listStyle = "none";
        const img = document.createElement('img');

        for (let key in object) {
           if (key === "original") {
               img.setAttribute("src", object[key].url);
               img.setAttribute("alt", x.title);
               li.appendChild(img);
               outputGifs.appendChild(li);
           }
        }
    });
}

//Add event listener
const btn = document.getElementById('get-gifs');
btn.addEventListener("click", findGifs);
function findGifs () {
    const KEY = "vIngNgIWOHHdTi7yoBTdgKFxPZFciFO6";
    const searchVal = document.getElementById('search-column').value;
    const numOfGifs = document.getElementById('search-num').value;
    const srcUrl = `http://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=${KEY}&limit=${numOfGifs}`;
        if (searchVal === "") {
            const para = document.getElementById('alert');
            para.innerHTML = "Type a key word first."
        }
        refreshView()
        fetchData (srcUrl).then (data => {
            renderResult(data.data)
        });
}
//Refrech inputs
function refreshView () {
    const searchCol = document.getElementById('search-column');
    searchCol.value = "";
    const number = document.getElementById('search-num');
    number.value = "";
}