export const calculateQuote = (carValue:number, riskRating:number) => {
  
    const yearlyPremium = Math.floor((carValue * riskRating) / 100);
    const monthPremium = yearlyPremium / 12;
  
    const output = {
      yearlyPremium: yearlyPremium,
      monthPremium: monthPremium,
    };
  
    return output;
  };