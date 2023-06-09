import { Request, Response } from 'express';
import * as carValueService from '../services/carValueService';


export const calculateCarValue = (req: Request, res: Response): void => {
  const model = req.query.model as string;
  const year = req.query.year as string;
  
  const serviceResponse = carValueService.calculateCarValue(model, year);
  if (serviceResponse.errors) {
    res.json({ errors: serviceResponse.errors });
  } else {
    res.json({ car_value: serviceResponse.car_value });
  }
};