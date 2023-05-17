import { calculateCarValue } from '../services/carValueService';

describe('calculateCarValue', () => {

  it('should return the correct car value for the happy path scenario', () => {
    const model = 'civic';
    const year = 2014;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 6614 });
  });

  it('should return the correct car value as numbers only are acceptable', () => {
    const model = '911';
    const year = 2020;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 2020 });
  });

  it('should return an error for negative year scenario', () => {
    const model = 'Prius';
    const year = -2018;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for year provided as a string instead of a number', () => {
    const model = 'C200';
    const year = "Twenty Twenty";

    const result = calculateCarValue(model, year as any);

    expect(result).toEqual({ error: 'Invalid input' });
  });
});