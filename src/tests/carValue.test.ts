import { calculateCarValue } from '../services/carValueService';

describe('calculateCarValue', () => {
  interface TestCase {
    description: string;
    model: string;
    year: number | string;
    expected: { car_value?: number; error?: string };
  }

  const testCases: TestCase[] = [
    { description:'Happy path', model: 'Civic', year: 2014, expected: { car_value: 6614 } },
    { description:'Numbers only are acceptable', model: '911', year: 2020, expected: { car_value: 2020 } },
    { description:'Negative year', model: 'Prius', year: -2018, expected: { error: 'Invalid input' } },
    { description:'Year provided as a string instead of a number', model: 'C200', year: 'twenty twenty', expected: { error: 'Invalid input' } },
    { description:'Empty year', model: 'Toyota', year: '', expected: { error: 'Invalid input' } },
    { description:'Empty model name', model: '', year: 2023, expected: { error: 'Invalid input' } },
    { description:'Minimum valid year', model: 'I30', year: 1830, expected: { error: 'Invalid input' } },
    { description:'Year in the future', model: 'Camry', year: 2025, expected: { error: 'Invalid input' } },
    { description:'Model with -', model: 'CR-V', year: 2021, expected: { car_value: 6321 } },
    { description:'Model with number are acceptable', model: 'A4', year: 2019, expected: { car_value: 2119 } },
    { description:'Year with decimal number', model: 'Civic', year: 2020.05, expected: { error: 'Invalid input' } },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return the correct result for test case ${index + 1}`, () => {
      const { model, year, expected } = testCase;
      const isNumberYear = typeof year === 'number';
      const result = calculateCarValue(model, isNumberYear ? year : parseInt(year as string, 10));
      expect(result).toEqual(expected);
    });
  });
});