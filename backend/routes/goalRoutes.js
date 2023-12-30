const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController.js')
const {protect} = require('../middleware/authMiddleware.js')

router.route('/').get(protect,getGoals).post(protect, setGoal)
// Replacing the following code to keep the code clean
// router.get('/', getGoals)
// router.post('/', setGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)
// Replacing the following code to keep the code clean
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)



module.exports = router ;