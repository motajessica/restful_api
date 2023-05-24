import app from '../../app';
import request, { Response } from 'supertest';


const sendApiRequest = (claimHistory: string) => {
  return request(app)
    .get('/api/v1/calc_risk_rating')
    .query({ claim_history: claimHistory });
};

const validateApiResponse = (res: Response, expected: object) => {
  expect(res.status).toEqual(200);
  expect(res.body).toEqual(expected);
};

describe('Risk Rating', () => {
  test('should calculate the risk rating correctly - Case 1', async () => {
    const claimHistory = "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.";
    const expected = { risk_rating: 3 };

    const res = await sendApiRequest(claimHistory);

    validateApiResponse(res, expected);
  });

  test('should calculate the risk rating correctly - Case 2', async () => {
    const claimHistory = "I collided with another vehicle, and it caused a scratch on my car.";
    const expected = { risk_rating: 2 };

    const res = await sendApiRequest(claimHistory);

    validateApiResponse(res, expected);
  });

  test('should calculate the risk rating correctly - Case 3', async () => {
    const claimHistory = "I experienced a minor bump while parking my car.";
    const expected = { risk_rating: 1 };

    const res = await sendApiRequest(claimHistory);

    validateApiResponse(res, expected);
  });

  test('should calculate the risk rating correctly - Case 4', async () => {
    const claimHistory = "My car collided and crashed into another vehicle, resulting in scratches and bumps.";
    const expected = { risk_rating: 4 };

    const res = await sendApiRequest(claimHistory);

    validateApiResponse(res, expected);
  });

  test('should calculate the risk rating correctly - Case 5', async () => {
    const claimHistory = "I scratched my car on a gate, and it left a noticeable scratch.";
    const expected = { risk_rating: 2 };

    const res = await sendApiRequest(claimHistory);

    validateApiResponse(res, expected);
  });

});