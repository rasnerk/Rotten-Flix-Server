const Movie = require('../models/movie')

const MovieController = {

    // GET all movies
    getAllMovies : async (req, res) => {
        try {
            const allMovies = await Movie.find()
            res.json(allMovies)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // GET movie by Id
    getMovieById : async (req, res) => {
        try {
            const { id } = req.params
            const movie = await Movie.findById(id)
            res.json(movie)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // POST create new movie
    createNewMovie : async (req, res) => {
        try {
            await Movie.create(req.body)
            res.json({ message: `A new movie was created!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // PUT edit movie by Id
    editMovieById : async (req, res) => {
        try {
            const { id } = req.params
            await Movie.findByIdAndUpdate(id, req.body)
            res.json({ message: `Movie was edited successfully!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // DELETE movie by Id
    deleteMovieById : async (req, res) => {
        try {
            const { id } = req.params
            await Movie.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted movie!` })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = MovieController