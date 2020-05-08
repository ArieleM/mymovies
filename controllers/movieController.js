const {Movie} = require ("../models");

const movieController = {
    index:async (req, res) =>{
        const movies = await Movie.findAll({
            include:{
                model: Movie,
                as: "movie"
            }
        })
    },
    create: (_req, res) => res.render('movie'),
    store: async (req, res) => {
        const [photo] = req.files;
        const {nameMovie, descriptionMovie, watchedMovie} = req.body;

        const newMovie = Movie.create({
            name: nameMovie,
            description: descriptionMovie,
            poster:photo,
            watched: watchedMovie,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        
    }
}

module.exports = movieController;