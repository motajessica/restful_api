import * as carValueService from '../services/quoteService.js';

export const calculateCarValue = (req, res) => {
  const { model, year } = req.body;

  if (!model || !year || typeof model !== 'string' || typeof year !== 'number' || year < 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const serviceResponse = carValueService.calculateCarValue(model, year);

  res.json(serviceResponse);
};

export const calculateRiskRating  = (req, res) => {
  
}

export const calculateQuote = (req, res) => {
  
}