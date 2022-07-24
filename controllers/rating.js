const Rating = require('../models/rating')

const RatingController = {

    // GET all ratings
    getAllRatings : async (req, res) => {
        try {
            const allRatings = await Rating.find()
            res.json(allRatings)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // GET rating by Id
    getRatingById : async (req, res) => {
        try {
            const { id } = req.params
            const rating = await Rating.findById(id)
            res.json(rating)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // POST create new rating
    createNewRating : async (req, res) => {
        try {
            await Rating.create(req.body)
            res.json({ message: `A new rating was created!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // PUT edit rating by Id
    editRatingById : async (req, res) => {
        try {
            const { id } = req.params
            await Rating.findByIdAndUpdate(id, req.body)
            res.json({ message: `Rating was edited successfully!` })
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // DELETE rating by Id
    deleteRatingById : async (req, res) => {
        try {
            const { id } = req.params
            await Rating.findByIdAndDelete(id)
            res.json({ message: `Successfully deleted rating!` })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = RatingController