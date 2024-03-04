console.log("Let's get this party started!");
const $input = $('#input');
const $gallery = $('#giphy-gallery')


$("#remove").on('click',(e)=> {
    e.preventDefault();
    $gallery.empty();
})

$("#submit").on('click',async function getGiphy(e) {
    e.preventDefault()
    let searchTerm = $input.val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let imgURL = response.data.data[Math.floor(Math.random()*response.data.data.length)].images.fixed_height.url;
    addGiphy(imgURL);
})

function addGiphy(url) {
    let newImg = document.createElement('img');
    newImg.src=`${url}`;
    $gallery.append(newImg);
}