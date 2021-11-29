let content = document.getElementById('content');
let inputText = document.getElementById('input-field');
let validate = document.getElementById('validate');

let apiURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=34c0d918&app_key=835a171319469229104b3b731a36812c&imageSize=REGULAR'

inputText.addEventListener('search', async (e) => {
    e.preventDefault();

    try{
        let response = await fetch(apiURL);
        if(!response.ok){
            throw new Error('Network problem, try again later!')
        }
        let data = await response.json()
        let parameter = e.target.value;
        console.log(data.hits)
        console.log(parameter)

        let result = data.hits;
        let html = '';

        for(titles of result){
            let recipe = titles.recipe

            html += `
            <div class="container results">
            <div class="row center">
            <div class="card col-6">
            <img src="${recipe.image}" class="card-img-top size" alt="picture of food">
            <h2 class="card-title">${recipe.label}</h2>
            <p>Calories: ${recipe.calories}</p>

            </div>
            </div>
            </div>`
        }

        content.innerHTML = html

    } catch(error) {
        console.log(error);
    }
    

});
