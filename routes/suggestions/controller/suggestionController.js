const Suggestion = require('../model/Suggestion')

async function getAllSuggestions(req, res){
    try {
        const foundSuggestions = await Suggestion.find({})
        res.json({message: "Suggestions Found.", payload: foundSuggestions})
    } catch (error) {
        res.status(500).json({message: "Error", error})
    }
}

async function getSuggestionById(req, res){
    try {
        const foundSuggestion = await Suggestion.find({_id: req.params.id})
        res.json({message: "Suggestion Found.", payload: foundSuggestion})
    } catch (error) {
        res.status(500).json({message: "Error", error})
    }
}

async function getSuggestionByAuthor(req, res){
    try {
        const foundSuggestions = await Suggestion.find({author: req.query.author})
        res.json({message: "Suggestions Found.", payload: foundSuggestions})
    } catch (error) {
        res.status(500).json({message: "Error", error})
    }
}

async function createSuggestion(req, res){
    try {
        const newSuggestion = new Suggestion({
                title: req.body.title.toLowerCase(),
                author: req.body.author.toLowerCase(),
                suggestion: req.body.suggestion.toLowerCase(),
                likes: 0,
                anonymous: req.body.anonymous,
                timeCreated: Date.now()
                })
        const savedSuggestion = await newSuggestion.save()
        res.json({message: "Suggestion saved", payload: savedSuggestion})
    }
    catch (error) {
        res.status(500).json({message: error})
    }
}

async function updateSuggestionByID(req, res){
    try {
        const updatedSuggestion = await Suggestion.findByIdAndUpdate(req.params.id, {title: req.body.title, suggestion: req.body.suggestion}, {new: true})
        res.json({message: "Suggestion updated.", payload: updatedSuggestion})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

async function deleteSuggestionByID(req, res){
    try {
        const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id)
        res.json({message: "Suggestion deleted.", payload: deletedSuggestion})
    } catch (error) {
        res.status(500).json({message: "Error", error: error})
    }
}

module.exports = {
    getAllSuggestions,
    getSuggestionById,
    getSuggestionByAuthor,
    createSuggestion,
    updateSuggestionByID,
    deleteSuggestionByID
}