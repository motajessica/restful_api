export function calculateRiskRating(input: { claim_history: string }): { risk_rating: number } | Error {
    const keywordList = ["collide", "crash", "scratch", "bump", "smash"];

    if (!input || !input.claim_history || typeof input.claim_history !== 'string') {
        return new Error('Invalid input');
    }
    const claimHistory = input.claim_history.toLowerCase();
    let riskRating = 0;

    keywordList.forEach(keyword => {
        const occurrences = claimHistory.split(keyword).length - 1;
        riskRating += occurrences;
    });

    return { risk_rating: riskRating };
}