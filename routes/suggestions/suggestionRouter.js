const express = require('express')
const {
    getAllSuggestions,
    getSuggestionById,
    getSuggestionByAuthor,
    createSuggestion,
    updateSuggestionByID,
    deleteSuggestionByID
} = require('./controller/suggestionController')
const router = express.Router()

router.get('/get-all-suggestions', getAllSuggestions)
router.get('/get-suggestion-by-id/:id', getSuggestionById)
router.get('/get-suggestion-by-author/', getSuggestionByAuthor)

router.post('/create-suggestion', createSuggestion)

router.put('/update-suggestion-by-id/:id', updateSuggestionByID)

router.delete('/delete-suggestion-by-id/:id', deleteSuggestionByID)

module.exports = router