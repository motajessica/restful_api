import { Quote } from "../types/Quote";

export const calculateQuote = (carValue: number, riskRating: number): Quote => {
  if (
    typeof carValue !== "number" ||
    typeof riskRating !== "number"
  ) {
    throw new Error("This is an type error.");
  }
  if(
    riskRating < 1 ||
    riskRating > 5 ||
    carValue < 0   ||
    carValue > Number.MAX_SAFE_INTEGER
  ) {
    throw new Error("Input value is out of range.");
  }

  const yearlyPremium = Math.floor((carValue * riskRating) / 100);
  const number = yearlyPremium / 12;
  const monthPremium = Math.round(number * 10) / 10;

  const output: Quote = {
    monthPremium: monthPremium,
    yearlyPremium: yearlyPremium,
  };

  return output;
};

