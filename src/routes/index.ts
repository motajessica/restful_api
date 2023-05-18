import express from 'express'
import * as quotesControllers from '../controllers/quotesControllers'
import * as calculateCarValue from '../controllers/carValueController'
import * as calculateRiskRating from '../controllers/riskRatingController'


const router = express.Router()

router.get('/calc_car_value', calculateCarValue.calculateCarValue); 

router.get('/calc_risk_rating', calculateRiskRating.calculateRiskRating); 

router.get('/calc_quote', quotesControllers.calculateQuote); 

export default router
