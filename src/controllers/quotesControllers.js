import * as quoteService from '../services/quoteService.js'

export const calculateCarValue = (req, res) => {
  const {model, year} = req.params 

  const result = quoteService.calculateCarValue(model, year);
  // implement response 
}

export const calculateRiskRating  = (req, res) => {
  
}

export const calculateQuote = (req, res) => {
  
}

// Just leaving it here for response implementation reference. 
// export const createOneTask = (req, res) => {
//   const name = req.body.name
//   const description = req.body.description

//   const newTask = taskService.createOneTask(name, description)

//   res.send(newTask)
// }

// export const getOneTask = (req, res) => {
//   const taskId = parseInt(req.params.id)

//   try {
//     const matchedTask = taskService.getOneTask(taskId)
//     res.send(matchedTask)
//   } catch (e) {
//     res.status(404).send(e)
//   }
// }

