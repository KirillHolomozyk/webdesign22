
function parse_cleaners(data) {
    data.forEach(cleaners => {
        // console.log(cleaners.title)
        let samples = document.querySelector('.samples');
        let div = document.createElement('div');
        let image_sample = document.createElement('div');
        div.className = 'samples-containers';
        image_sample.className = 'image-sample';
        let image = `<img class="image-samples" src="${cleaners.image}">`;
        
        let vacuum = `
        <p>
            ID: ${cleaners.id}
        </p>
        <h3><span>Name:</span> ${cleaners.title} </h3>
        `;
        image_sample.innerHTML = image;
        div.innerHTML = vacuum;
        // console.log(image_sample);
        div.append(image_sample)
        samples.append(div);
    })

    
}



fetch('http://localhost:3000/cleaners')
    .then((res) => res.json())
    .then((data) => {
        parse_cleaners(data)
    })
    

