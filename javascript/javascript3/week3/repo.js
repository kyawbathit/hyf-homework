const fetchRepos = (url) => {
    return fetch(url)
            .then(response => response.json());
}
const reposOfTithi = fetchRepos('https://api.github.com/search/repositories?q=user:tithi1244');
const reposOfKbt = fetchRepos('https://api.github.com/search/repositories?q=user:kyawbathit');
const reposOfKiwi = fetchRepos('https://api.github.com/search/repositories?q=user:cph-kiwi');

function getAllUsers () {
    Promise.all([reposOfTithi, reposOfKbt, reposOfKiwi])
        .then(repoInfo => {
        const mainUl = document.createElement('ul');
        document.body.appendChild(mainUl);
        for(let i = 0; i < repoInfo.length; i++) {
        const mainLi = document.createElement('li');
        mainLi.innerHTML = `${repoInfo[i].items[i].owner.login.toUpperCase()}'s repositories:`;
        mainUl.appendChild(mainLi);
        const innerUl =  document.createElement('ul');
        mainLi.appendChild(innerUl);
        for(let j = 0; j < repoInfo[i].items.length; j++) {
            const innerLi = document.createElement('li');
            innerLi.innerHTML = `Name: ${repoInfo[i].items[j].name} <br> URL: 
            ${repoInfo[i].items[j]["html_url"]}`;
            innerUl.appendChild(innerLi);
        }
    }
})
    .catch(error => console.log(`There is an error ${error}`));
}
getAllUsers();
