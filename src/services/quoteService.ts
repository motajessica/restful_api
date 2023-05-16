import { Quote } from "../types/Quote";

export const calculateQuote = (carValue: number, riskRating: number): Quote => {
  if (
    riskRating < 1 ||
    riskRating > 5 ||
    typeof carValue !== "number" ||
    typeof riskRating !== "number"
  ) {
    throw new Error("This is an error.");
  }

  const yearlyPremium = Math.floor((carValue * riskRating) / 100);
  const monthPremium = yearlyPremium / 12;

  const output: Quote = {
    monthPremium: monthPremium,
    yearlyPremium: yearlyPremium,
  };

  return output;
};
