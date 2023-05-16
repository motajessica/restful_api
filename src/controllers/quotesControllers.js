import * as quoteService from "../services/quoteService.js";

export const calculateQuote = (req, res) => {
  try {
    const carValue = req.body.carValue;
    const riskRating = req.body.riskRating;

    const carQuote = quoteService.calculateQuote(carValue, riskRating);
    res.status(200).json(carQuote);
  } catch (err) {
    res.status(403).json({ error: "This is an error." });
  }
};


