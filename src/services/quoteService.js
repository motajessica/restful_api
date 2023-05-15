export const calculateQuote = (carValue, riskRating) => {
  if (
    typeof riskRating !== "number" ||
    typeof carValue !== "number" ||
    riskRating < 1 ||
    riskRating > 5
  ) {
    throw new Error("This is an error.");
  }

  const yearlyPremium = Math.floor((carValue * riskRating) / 100);
  const monthPremium = yearlyPremium / 12;

  const output = {
    yearlyPremium: yearlyPremium,
    monthPremium: monthPremium,
  };

  return output;
};
