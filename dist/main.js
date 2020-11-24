



$('button').on('click', function () {
    let input = $('#recipeName').val()
    let renderer = new Render(input)
    renderer.render(input)
})


const firstIngredients =  function(ingredients){
let first = ingredients.split(',');
alert(first[0])

}