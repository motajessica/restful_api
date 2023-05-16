import { calculateQuote } from "../services/quoteService";

test("Testing with an average car value and a highest risk rating", () => {
    //Arrange
    const carValue = 6614;
    const riskRating = 5;

    const expected = {
        monthPremium: 27.5,
        yearlyPremium: 330
    }; // Act

    const actual = calculateQuote(carValue, riskRating); // Assert
    console.log(actual)
    expect(actual).toStrictEqual(expected);
  });
