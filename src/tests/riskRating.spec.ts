import { calculateRiskRating } from '../services/riskRatingService';

describe('Risk Rating Calculation', () => {
  it('should calculate the risk rating correctly - Case 1', () => {
    const input = {
      claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes."
    };
    const expectedOutput = {
      risk_rating: 3
    };

    const result = calculateRiskRating(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should calculate the risk rating correctly - Case 2', () => {
    const input = {
      claim_history: "I collided with another vehicle, and it caused a scratch on my car."
    };
    const expectedOutput = {
      risk_rating: 2
    };

    const result = calculateRiskRating(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should calculate the risk rating correctly - Case 3', () => {
    const input = {
      claim_history: "I experienced a minor bump while parking my car."
    };
    const expectedOutput = {
      risk_rating: 1
    };

    const result = calculateRiskRating(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should calculate the risk rating correctly - Case 4', () => {
    const input = {
      claim_history: "My car collided and crashed into another vehicle, resulting in scratches and bumps."
    };
    const expectedOutput = {
      risk_rating: 4
    };

    const result = calculateRiskRating(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should calculate the risk rating correctly - Case 5', () => {
    const input = {
      claim_history: "I scratched my car on a gate, and it left a noticeable scratch."
    };
    const expectedOutput = {
      risk_rating: 2
    };

    const result = calculateRiskRating(input);

    expect(result).toEqual(expectedOutput);
  });
});