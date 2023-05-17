import { Request, Response } from 'express';
import { calculateCarValue } from '../controllers/carValueController';

describe('carValueController', () => {
  it('should ``', () => {
    // Arrange
    const req: Request = { body: { model: 'corolla', year: 2000 } } as Request;
    const res: Response = { json: jest.fn() } as unknown as Response;

    //Act
    calculateCarValue(req, res);

    //Assert
    expect(res.json).toHaveBeenCalledWith({ car_value: 9600 });
  });

  it('should return an error if missing model atribute ', () => {

    //Arrange
    const req: Request = { body: { year: 1980 } } as Request;
    const res: Response = { json: jest.fn() } as unknown as Response;

    //Act
    calculateCarValue(req, res);

    //Assert
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input' });
  });
});