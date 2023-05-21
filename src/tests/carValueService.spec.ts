import { calculateCarValue } from '../services/carValueService';

describe('calculateCarValue', () => {

  it('should return the correct car value for the happy path scenario', () => {
    const model = 'Civic';
    const year = 2014;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 6614 });
  });

  it('should return the correct car value when car model is a string of numbers', () => {
    const model = '911';
    const year = 2020;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 0 });
  });

  it('should return an error for negative year scenario', () => {
    const model = 'Prius';
    const year = -2018;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when year is a string instead of a number', () => {
    const model = 'C200';
    const year = 'twenty twenty';

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when empty year is null', () => {
    const model = 'Toyota';
    const year = null ;

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when model is an empty string', () => {
    const model = '';
    const year = 2023;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when minimum year is before the minimum acceptable', () => {
    const model = 'I30';
    const year = 1830;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for year in the future scenario', () => {
    const model = 'Camry';
    const year = 2025

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return the correct car value when model has an hyphen', () => {
    const model = 'CR-V';
    const year = 2021;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 6321 });
  });

  it('should return the correct car value when model is a mixed string of letters and numbers', () => {
    const model = 'A4';
    const year = 2019;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 2119 });
  });

  it('should return an error when year is a decimal number', () => {
    const model = 'Civic';
    const year = 2020.05;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when year is null', () => {
    const model = 'i30';
    const year = null;

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error when model is nulll', () => {
    const model = null;
    const year = 2015;

    const result = calculateCarValue(model as unknown as string, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });


  it('should return the correct car value when model has Upper case letters', () => {
    const model = 'BMW';
    const year = 2012;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 5812 });
  });

  it('should return the correct car value when model is a string of lowercase letters', () => {
    const model = 'bmw';
    const year = 2012;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 5812 });
  });

  it('should return the correct car value when model it has special characters', () => {
    const model = '@#$%%^&*()+_!@';
    const year = 2012;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 2012 });
  });
});