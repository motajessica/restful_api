import chai from 'chai';
import { expect } from 'chai'
import spies from 'chai-spies';
chai.use(spies);
import { calculateCarValue } from '../src/controllers/quotesControllers.js';
import { error } from 'console';

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

  it('should handle only numbers for model and return the correct car value', () => {
    const req = { body: { model: '911', year: 2020 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('car_value').to.equal(2020);
      }
    };
    calculateCarValue(req, res);
  });


  it('negative year scenario', () => {
    const req = { body: { model: 'Prius', year: -2018 } };
    const res = {
      status: function(code) {
        this.statusCode = code;
        return this;
      },
      json: function(data) {
        expect(this.statusCode).to.equal(400);
        expect(data).to.deep.equal({ error: 'Invalid input' });
      }
    };
    calculateCarValue(req, res);
  });

  it('empty year scenario', () => {
    const req = { body: { model: 'C200', year: ""} };
    const res = {
      status: function(code) {
        this.statusCode = code;
        return this;
      },
      json: function(data) {
        expect(this.statusCode).to.equal(400);
        expect(data).to.deep.equal({ error: 'Invalid input' });
      }
    };
    calculateCarValue(req, res);
  });
});