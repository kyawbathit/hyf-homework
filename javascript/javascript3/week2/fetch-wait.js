//Wait and Fetch
//Promise
function fetchRender(url) {
   fetch(url)
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            const img = document.getElementById('dog');
            img.src = data.message;
            console.log('shown after 3 seconds.');
        }, 3000);

    })
}
fetchRender('https://dog.ceo/api/breeds/image/random');

//Async and Await
async function fetchMore(url) {
    const response = await fetch(url);
    const data = await response.json();
    const img2 = document.getElementById('dog2');
    img2.src = data.message;
    console.log('shown after 6 seconds.');
}
setTimeout(() => { 
    fetchMore('https://dog.ceo/api/breeds/image/random')
}, 6000);


