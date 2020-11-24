const source = $('#recipes-template').html();
const template = Handlebars.compile(source)

class Render {
    constructor(data) {
        this.data = data
    }
    render(data) {
        $.get(`/sanity/${data}`, function (recipes) {
            let someHTML = template({ recipes });
            $("#viewRecipes").append(someHTML);
        })
    }
}


