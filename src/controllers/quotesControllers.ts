import { Request, Response } from 'express';
import * as quoteService from '../services/quoteService';
import { Quote } from "../types/Quote";

export const calculateQuote = (req: Request, res: Response):void => {
  try {
    const carValue = req.body.carValue;
    const riskRating = req.body.riskRating;

    const carQuote:Quote = quoteService.calculateQuote(carValue, riskRating);
    res.status(200).json(carQuote);
  } catch (Error) {
    res.status(403).json({Error});
  }
};



