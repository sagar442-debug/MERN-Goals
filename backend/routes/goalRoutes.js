const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')

router.route('/').get(getGoals).post(setGoal)
// Replacing the following code to keep the code clean
// router.get('/', getGoals)
// router.post('/', setGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)
// Replacing the following code to keep the code clean
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)



module.exports = router ;