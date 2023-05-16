interface Quote {
  yearlyPremium: number;
  monthPremium: number;
}

export const calculateQuote = (carValue: number, riskRating: number): Quote => {
  const yearlyPremium = Math.floor((carValue * riskRating) / 100);
  const monthPremium = yearlyPremium / 12;

  const output: Quote = {
    monthPremium: monthPremium,
    yearlyPremium: yearlyPremium,
  };

  return output;
};
