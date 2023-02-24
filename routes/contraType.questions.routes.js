const router = require('express').Router()
const contractTypeQuestions = require('../controllers/contractType.questions.controller')


router.post('/', contractTypeQuestions.affectQuestionToContractType)
router.get('/', contractTypeQuestions.findAll)
router.get('/Contract', contractTypeQuestions.findContractbyQuesId)
router.delete('/:questions_id/:contract_types_id', contractTypeQuestions.deleteRelation)
router.get('/:contract_id/:lang', contractTypeQuestions.findQuestionsOfSpecificContract)
module.exports = router