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
      "This is an error."
    );
  });
});
