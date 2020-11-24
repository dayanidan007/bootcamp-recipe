const express = require('express')
const router = express.Router()
const urllib = require('urllib')
router.use(express.urlencoded({ extended: false }))
router.use(express.json())


router.get(`/sanity/:recipes`, function (req, res) {
    let recipe = req.params.recipes
    console.log(recipe)
    let recipes = []
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${recipe}`, function (err, response) {
        let data = JSON.parse(response.toString())
        let results = data.results
        for(result of results){
            recipes.push({
                ingredients: 
                result.ingredients,
                title: result.title,
                thumbnail: result.thumbnail,
                href: result.href
            }) 
        }
        res.send(recipes)
    })
})

module.exports = router
