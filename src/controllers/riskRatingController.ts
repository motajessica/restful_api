import { Request, Response } from 'express';

export const calculateRiskRating = (req: Request, res: Response) => {
try {
    // Retrieve the claim history from the query parameters
    const claim_history = req.query.claim_history as string;

    // Define the keyword list
    const keywords = ['collide', 'crash', 'scratch', 'bump', 'smash'];

    // Count the occurrences of keywords in the claim history
    const riskRating = keywords.reduce(
        (count, keyword) => count + (claim_history.toLowerCase().split(keyword).length - 1),
        0
    );

    // Send the risk rating as the response
    res.status(200).json({ risk_rating: riskRating });
} catch (err) {
    // Handle errors and send an error response
    res.status(403).json({ error: 'There is an error.' });
    }
};