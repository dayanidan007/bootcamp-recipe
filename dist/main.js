



$('button').on('click', function () {
    let input = $('#recipeName').val()
    $.get(`/sanity/${input}`, function (recipes) {
    let renderer = new Render()
    renderer.render(recipes)
})


const firstIngredients =  function(ingredients){
let first = ingredients.split(',');
alert(first[0])

}