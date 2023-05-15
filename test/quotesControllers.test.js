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

it('Negative year scenario', () => {
  const req = { body: { model: 'Prius', year: -2018 } };
  const res = {
    json: function(data) {
      expect(data).to.deep.equal({ error: 'Invalid input' });
    }
  };

  calculateCarValue(req, res);
  });

it('Empty year scenario', () => {
  const req = { body: { model: 'Toyota' } };
  const res = {
    json: function(data) {
      expect(data).to.deep.equal({ error: 'Invalid input' });
    }
  };

  calculateCarValue(req, res);
  });


  it('should handle empty model name and return an error message', () => {
    const req = { body: { model: '', year: 2023 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });

  it('should handle year provided as a string instead of a number and return an error message', () => {
    const req = { body: { model: 'C200', year: 'twenty twenty' } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });
  

});