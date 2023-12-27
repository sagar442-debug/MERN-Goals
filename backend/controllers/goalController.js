
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add text")
    }
}


// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req,res) =>{
    res.status(200).json({ message: 'Set goals'})
}


// @desc Update goals
// @route Put /api/goals/:id
// @access Private
const updateGoal = (req,res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
}


// @desc Delete goals
// @route Delte /api/goals/:id
// @access Private
const deleteGoal = (req,res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal


}