import express from 'express'
import * as quotesControllers from '../controllers/quotesControllers.js'

const router = express.Router()

router.get('/calc_car_value', quotesControllers.calculateCarValue); 

router.get('/calc_risk_rating', quotesControllers.calculateRiskRating); 

router.post('/calc_quote', quotesControllers.calculateQuote); 

export default router
