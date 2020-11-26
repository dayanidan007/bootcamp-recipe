const source = $('#recipes-template').html();
const template = Handlebars.compile(source)

class Render {
    constructor(data) {
        this.data = data
    }
    render(data) {
            let someHTML = template({ data });
            $("#viewRecipes").append(someHTML);
    }
}


