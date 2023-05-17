import { Request, Response } from 'express';
import { calculateCarValue } from '../controllers/carValueController';

describe('carValueController', () => {
  it('should return the calculated car value', () => {
    // Arrange
    const req: Request = { body: { model: 'corolla', year: 2000 } } as Request;
    const res: Response = { json: jest.fn() } as unknown as Response;

    //Act
    calculateCarValue(req, res);

    //Assert
    expect(res.json).toHaveBeenCalledWith({ car_value: 9600 });
  });

  it('should return an error for invalid input', () => {

    //Arrange
    const req: Request = { body: { model: '', year: 1980 } } as Request;
    const res: Response = { json: jest.fn() } as unknown as Response;

    //Act
    calculateCarValue(req, res);

    //Assert
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input' });
  });
});