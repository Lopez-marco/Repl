let url = 'https://rickandmortyapi.com/api/character/';

       let imageFirst = document.createElement('div');
        imageFirst.setAttribute('class', "image2");
        document.body.appendChild(imageFirst);

        let section = document.createElement('div');
        section.setAttribute('class', "photo");
        document.body.appendChild(section);
  
fetch(url)
.then(function(response){
    console.log(response);

    return response.json();
})
   .then(function(data){
       console.log(data)
       displayResults(data)
       let y = data.results[0].image;
       console.log(y);

  let image = document.createElement('img');
       imageFirst.appendChild(image);
       image.src = y

})
.catch(err => console.error({error:err}))

function displayResults(json){
    console.log(json);
    let x = json.results[1].image;
    console.log(x);

        let image = document.createElement('img');
    section.appendChild(image);
    image.src = x

}
