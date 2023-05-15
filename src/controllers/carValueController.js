import * as carValueService from '../services/carValueService.js';

export const calculateCarValue = (req, res) => {
  const { model, year } = req.body;
  console.log(model, year)

  const serviceResponse = carValueService.calculateCarValue(model, year);
  if (serviceResponse.error) {
    return res.json({ error: serviceResponse.error });
  } else {
    return res.json({ car_value: serviceResponse.car_value });
  }
}