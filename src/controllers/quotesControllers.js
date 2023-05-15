import * as carValueService from '../services/quoteService.js';

export const calculateCarValue = (req, res) => {
  const { model, year } = req.body;

  const serviceResponse = carValueService.calculateCarValue(model, year);

  if (serviceResponse.error) {
    return res.json({ error: serviceResponse.error });
  } else {
    return res.json({ car_value: serviceResponse.car_value });
  }
}

export const calculateRiskRating  = (req, res) => {
  
}

export const calculateQuote = (req, res) => {
  
}