import app from '../../app'
import request, { Response } from 'supertest'
const minimumYear = new Date().getFullYear();
const modelErrorMessage = 'Invalid input, model can\'t be empty '
const yearErrorMessage =  `Invalid input, year must be a number bigger than 1990 and smaller than ${minimumYear}`
const baseErrorMessage =  "Invalid input, both year and model can\'t be empty"

const callApi = (query: object) => {
  return request(app).get('/api/v1/calc_car_value').query(query)
}

const assertExpectation = (res: Response, expected: object) => {
  expect(res.status).toEqual(200);
  expect(res.body).toEqual(expected);
}

describe('Car Value API', () => {
  test('should return the correct car value for the happy path scenario', async () => {
    
    const model = 'Civic';
    const year = 2014;
    const expected = { car_value: 6614 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)
  });

  test('should return the correct car value when car model is a string of numbers', async () => {
    
    const model = '911';
    const year = 2020;
    const expected = { car_value: 2020};

    const res = await callApi({ model, year });;

    assertExpectation(res, expected)
  });

  test('should return an error for negative year scenario', async () => {
    
    const model = 'Prius';
    const year = -2018;
    const expected = { errors: { year: yearErrorMessage  } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when year is a string instead of a number', async () => {
  
    const model = 'C200';
    const year = 'twenty twenty';
    const expected = { errors: { year: yearErrorMessage  } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when empty year is null', async () => {
  
    const model = 'Toyota';
    const year = null;
    const expected = { errors: {base: baseErrorMessage} };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when model is an empty string', async () => {
  
    const model = '';
    const year = 2023;
    const expected = { errors: { base: baseErrorMessage } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when minimum year is before the minimum acceptable', async () => {
  
    const model = 'I30';
    const year = 1830;
    const expected = { errors: { year: yearErrorMessage } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error for year in the future scenario', async () => {
  
    const model = 'Camry';
    const year = 2025;
    const expected = { errors: { year: yearErrorMessage } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return the correct car value when model has an hyphen', async () => {
  
    const model = 'CR-V';
    const year = 2021;
    const expected = { car_value: 6321 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return the correct car value when model is a mixed string of letters and numbers', async () => {
  
    const model = 'CR-V';
    const year = 2021;
    const expected = { car_value: 6321 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when year is a decimal number', async () => {
  
    const model = 'Civic';
    const year = 2020.05;
    const expected = { errors: { year: yearErrorMessage } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return an error when year and number is null', async () => {
    const model = null;
    const year = null;
    const expected = { errors: { base: baseErrorMessage } };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)
  });

  test('should return an error when model is nulll', async () => {
  
    const model = null;
    const year = 2015;
    const expected = { errors: { base: baseErrorMessage } };

    const res = await callApi({ model, year });
    
    assertExpectation(res, expected)
    
  });

  test('should return the correct car value when model has Upper case letters', async () => {
  
    const model = 'BMW';
    const year = 2012;
    const expected = { car_value: 5812 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return the correct car value when model is a string of lowercase letters', async () => {
  
    const model = 'bmw';
    const year = 2012;
    const expected = { car_value: 5812 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

  test('should return the correct car value when model it has special characters', async () => {
  
    const model = '@#$%%^&*()+_!@';
    const year = 2012;
    const expected = { car_value: 2012 };

    const res = await callApi({ model, year });

    assertExpectation(res, expected)

  });

 });