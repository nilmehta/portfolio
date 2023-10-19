fetch('/items.json')
  .then((response) => response.json())
  .then((items) => {
    let contents = '';
    const itemsDiv = document.querySelector('#items');

    items.forEach(item => {
        // console.log(items);
        contents += "<br /> <strong>" + item.name + "</strong>";
        contents += "<br /> <strong>" + item.description + "</strong>";
        contents += '<br /> <img class="image_url w-screen" src ="' + item.image_url + '" />';
        console.log(contents);

        itemsDiv.innerHTML = contents;

    })
})