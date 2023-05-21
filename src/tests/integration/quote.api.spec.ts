import { Server } from 'http'
import request from 'supertest'
import server from '../../server'
import { calculateQuote } from '../../controllers/quotesControllers';
import { Request, Response } from 'express';

// Define a custom type for the mock request object
interface MockRequest extends Request {
    body: {
      carValue: number;
      riskRating: string;
    };
  }

describe('Car Quotes API', () => {
    

    test('it should return car quotes via HTTP request', async () => {
        // Arrange
        const carValue = 5000.5;
        const riskRating = 5;
        const expected = {
          monthPremium: 20.8,
          yearlyPremium: 250,
        };
    
        // Act
        const response = await request(server)
          .get('/api/v1/calc_quote')
          .send({
             "carValue": carValue, 
             "riskRating": riskRating 
            });
    
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expected);
      });
  });
  
