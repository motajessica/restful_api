import chai from 'chai';
import { expect } from 'chai'
import spies from 'chai-spies';
chai.use(spies);
import { calculateCarValue } from '../src/controllers/quotesControllers.js';

describe('calculateCarValue', () => {
  it('should return the correct car value for the best scenario', () => {
    const req = { body: { model: 'Civic', year: 2014 } };

    const res = {
      json: function (data) {
        expect(data).to.have.property('car_value').to.equal(6614);
      }
    };

    calculateCarValue(req, res);
  });

  // Add more test cases as needed
});

// describe('calculateCarValue', () => {
//   //happy paths
//   it('return the correct car value for the best scenario', () => {
//     const req = { body: { model: 'Civic', year: 2020 } };
//     const res = { json: jest.fn() };

//     calculateCarValue(req, res);

//     expect(res.json).toHaveBeenCalledWith({ car_value: 6600 });
//   });

//   it('should handle only numbers for model and return the correct car value', () => {
//     const req = {body: {model: 911, year: 2020 } };
//     const res = { json: jest.fn() };
  
//     calculateCarValue(req, res);
  
//     expect(res.json).toHaveBeenCalledWith({ car_value: 2020 });

//   });

  // it('the minimum year accepted is 1970', () => {
  //   const req = { body: { model: 'Accord', year: 0 } };
  //   const res = { json: jest.fn() };

  //   calculateCarValueController(req, res);

  //   expect(res.json).toHaveBeenCalledWith({ car_value: {} })
  // });

  //error scenarions 

  // it('should return an error message for negative year scenario', () => {
    
  // });

  // it('should return an error message for empty year scenario', () => {
    
  // });

  // it('should return an error message for empty year scenario', () => {
    
  // });

  // it('Should return an error message for empty model name scenario', () => {

  // })

  // it('Should return an error message for year in future scenario', () => {

  // })

  // it('Should return an error message for year provided as a string instead of a number', () => {

  // })


  
// });