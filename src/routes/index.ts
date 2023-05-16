import express from 'express';
import env from 'dotenv'
import { Router } from 'express';
import * as quotesController from '../controllers/quotesController';
import * as carValueController from '../controllers/carValueController';
import * as riskRatingController from '../controllers/riskRatingController';

env.config();

const router: Router = express.Router();

router.get('/calc_car_value', carValueController.calculateCarValue);

router.get('/calc_risk_rating', riskRatingController.calculateRiskRating);

router.get('/calc_quote', quotesController.calculateQuote);

export default router;
