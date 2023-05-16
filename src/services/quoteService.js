"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateQuote = void 0;
const calculateQuote = (carValue, riskRating) => {
    const yearlyPremium = Math.floor((carValue * riskRating) / 100);
    const monthPremium = yearlyPremium / 12;
    const output = {
        monthPremium: monthPremium,
        yearlyPremium: yearlyPremium,
    };
    return output;
};
exports.calculateQuote = calculateQuote;
