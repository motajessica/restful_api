import { calculateCarValue } from '../services/carValueService';

describe('calculateCarValue', () => {
  it('should return the correct car value', () => {
    const model = 'Civic';
    const year = 2014;
    const expected = { car_value: 6614 };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return the correct car value for numbers only in the model name', () => {
    const model = '911';
    const year = 2020;
    const expected = { car_value: 2020 };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for a negative year', () => {
    const model = 'Prius';
    const year = -2018;
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for an empty year', () => {
    const model = 'Toyota';
    const year: any = ""; 
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for empty model name', () => {
    const model = '';
    const year = 2023;
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for the minimum valid year', () => {
    const model = 'I30';
    const year = 1830;
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for a year in the future', () => {
    const model = 'Camry';
    const year = 2025;
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return the correct car value for a model with "-"', () => {
    const model = 'CR-V';
    const year = 2021;
    const expected = { car_value: 6321 };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return the correct car value for a model with numbers', () => {
    const model = 'A4';
    const year = 2019;
    const expected = { car_value: 2119 };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

  it('should return an error for a year with a decimal number', () => {
    const model = 'Civic';
    const year = 2020.05;
    const expected = { error: 'Invalid input' };

    const result = calculateCarValue(model, year);

    expect(result).toEqual(expected);
  });

});