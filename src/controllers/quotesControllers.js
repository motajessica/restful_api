import * as quoteService from '../services/quoteService.js'
import { calculateCarValue } from '../services/carValueService';

export const calculateCarValueController = (req, res) => {
  const { model, year } = req.body;

  if (!model || !year || typeof model !== 'string' || typeof year !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const carValue = calculateCarValue(model, year);

  res.json({ car_value: carValue });
};

export const calculateRiskRating  = (req, res) => {
  
}

export const calculateQuote = (req, res) => {
  
}