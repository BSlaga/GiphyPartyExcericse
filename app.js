console.log("Let's get this party started!");
let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let remove = document.querySelector('#remove');
let gallery = document.querySelector('#giphy-gallery')

submit.addEventListener('click',(e)=> {
    e.preventDefault();
    getGiphy(input.value)
})

remove.addEventListener('click',(e)=> {
    e.preventDefault();
    gallery.children.remove;
})

async function getGiphy(giphyType) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${giphyType}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let imgURL = response.data.data[Math.floor(Math.random()*response.data.data.length)].images.fixed_height.url;
    addGiphy(imgURL);
}

function addGiphy(url) {
    let newImg = document.createElement('img');
    newImg.src=`${url}`;
    gallery.append(newImg);
}