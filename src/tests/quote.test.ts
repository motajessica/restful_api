import { calculateQuote } from "../services/quoteService";
import { Quote } from "../types/Quote";

describe("calculateQuote", () => {
  test("Testing with an average car value and a highest risk rating", () => {
    //Arrange
    const carValue = 6614;
    const riskRating = 5;

    // Act
    const expected = {
      monthPremium: 27.5,
      yearlyPremium: 330,
    };

    // Assert
    const actual = calculateQuote(carValue, riskRating);
    expect(actual).toStrictEqual(expected);
  });

  test("riskRating out of the lower bound", () => {
    // Arrange
    const carValue = 6614;
    const riskRating = 0;
  
    // Act and Assert
    expect(() => calculateQuote(carValue, riskRating)).toThrow(
      "Input value is out of range."
    );
  });

  test("riskRating out of the upper bound", () => {
    // Arrange
    const carValue = 6614;
    const riskRating = 6;
  
    // Act and Assert
    expect(() => calculateQuote(carValue, riskRating)).toThrow(
      "Input value is out of range."
    );
  });

  test("Negative value", () => {
    // Arrange
    const carValue= -5000;
    const riskRating = 4;
  
    // Act and Assert
    expect(() => calculateQuote(carValue, riskRating)).toThrow(
      "Input value is out of range."
    );
  });

  test("Testing with an average car value and a highest risk rating", () => {
    //Arrange
    const carValue = 0;
    const riskRating = 3;

    // Act
    const expected = {
      monthPremium: 0,
      yearlyPremium: 0,
    };

    // Assert
    const actual = calculateQuote(carValue, riskRating);
    expect(actual).toStrictEqual(expected);
  });


  test("Testing with max largest value in car value and the lowest risk rating", () => {
    //Arrange
    const carValue = Number.MAX_SAFE_INTEGER;
    const riskRating = 1;

    // Act
    const expected = {
      monthPremium: 7505999378950.8,
      yearlyPremium: 90071992547409,
    };

    // Assert
    const actual = calculateQuote(carValue, riskRating);
    expect(actual).toStrictEqual(expected);
  });

  test("Testing with a decimal car value and the highest risk rating", () => {
    //Arrange
    const carValue = 5000.5;
    const riskRating = 5;

    // Act
    const expected = {
      monthPremium: 20.8,
      yearlyPremium: 250,
    };

    // Assert
    const actual = calculateQuote(carValue, riskRating);
    expect(actual).toStrictEqual(expected);
  });

  test("Testing with an average car value and a decimal risk rating", () => {
    //Arrange
    const carValue = 6614;
    const riskRating = 3.5;

    // Act
    const expected = {
      monthPremium: 19.3,
      yearlyPremium: 231,
    };

    // Assert
    const actual = calculateQuote(carValue, riskRating);
    expect(actual).toStrictEqual(expected);
  });
});
