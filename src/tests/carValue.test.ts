import { calculateCarValue } from '../services/carValueService';

describe('calculateCarValue', () => {

  it('should return the correct car value for the happy path scenario', () => {
    const model = 'Civic';
    const year = 2014;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 6614 });
  });

  it('should return the correct car value for Numbers only are acceptable case', () => {
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
    const year = 'twenty twenty';

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for empty year scenario', () => {
    const model = 'Toyota';
    const year = null ;

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for empty model name scenario', () => {
    const model = '';
    const year = 2023;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for minimum valid year scenario', () => {
    const model = 'I30';
    const year = 1830;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for year in the future scenario', () => {
    const model = 'Camry';
    const year = 2025;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return the correct car value for model with hyphen', () => {
    const model = 'CR-V';
    const year = 2021;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 6321 });
  });

  it('should return the correct car value for model with numbers', () => {
    const model = 'A4';
    const year = 2019;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 2119 });
  });

  it('should return an error for year with decimal number scenario', () => {
    const model = 'Civic';
    const year = 2020.05;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for Year defined as null case', () => {
    const model = 'i30';
    const year = null;

    const result = calculateCarValue(model, year as unknown as number);

    expect(result).toEqual({ error: 'Invalid input' });
  });

  it('should return an error for Mode defined as null case', () => {
    const model = null;
    const year = 2015;

    const result = calculateCarValue(model as unknown as string, year);

    expect(result).toEqual({ error: 'Invalid input' });
  });


  it('should return the correct car value for the All Upper case letters case', () => {
    const model = 'BMW';
    const year = 2012;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 5812 });
  });

  it('should return the correct car value for the All lower case letters case', () => {
    const model = 'bmw';
    const year = 2012;

    const result = calculateCarValue(model, year);

    expect(result).toEqual({ car_value: 5812 });
  });
});




// describe('calculateCarValue', () => {
//   interface TestCase {
//     description: string;
//     model: string;
//     year: number | string;
//     expected: { car_value?: number; error?: string };
//   }

//   const testCases: TestCase[] = [
//     { description:'should return the correct result for Happy path case ', model: 'Civic', year: 2014, expected: { car_value: 6614 } },
//     { description:'should return the correct result for Numbers only are acceptable case', model: '911', year: 2020, expected: { car_value: 2020 } },
//     { description:'should return an error for a Negative year case', model: 'Prius', year: -2018, expected: { error: 'Invalid input' } },
//     { description:'should return an error for Year provided as a string instead of a number case', model: 'C200', year: 'twenty twenty', expected: { error: 'Invalid input' } },
//     { description:'should return an error for Empty year case', model: 'Toyota', year: '', expected: { error: 'Invalid input' } },
//     { description:'should return an error for Empty model name case', model: '', year: 2023, expected: { error: 'Invalid input' } },
//     { description:'Should return an error for Minimum valid year case', model: 'I30', year: 1830, expected: { error: 'Invalid input' } },
//     { description:'Should return an error for Year in the future case', model: 'Camry', year: 2025, expected: { error: 'Invalid input' } },
//     { description:'Should return the correct result for Model with - case', model: 'CR-V', year: 2021, expected: { car_value: 6321 } },
//     { description:'should return the correct result for Model with number are acceptable case', model: 'A4', year: 2019, expected: { car_value: 2119 } },
//     { description:'should return an error for Year with decimal number case', model: 'Civic', year: 2020.05, expected: { error: 'Invalid input' } },
//   ];

//   testCases.forEach((testCase, index) => {
//     it(`should return the correct result for test case ${index + 1}`, () => {
//       const { model, year, expected } = testCase;
      
//       const result = calculateCarValue(model, year as number);
//       expect(result).toEqual(expected);
//     });
//   });
// });