import chai from 'chai';
import { expect } from 'chai'
import spies from 'chai-spies';
chai.use(spies);
import { calculateCarValue } from '../src/controllers/carValueController.js';


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

  it('only numbers for model return the correct car value', () => {
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


  it('empty model name', () => {
    const req = { body: { model: '', year: 2023 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });

  it('year provided as a string instead of a number', () => {
    const req = { body: { model: 'C200', year: 'twenty twenty' } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });

  it('year provided with decimal number', () => {
    const req = { body: { model: 'Civic', year: 2020.05 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });
  

  it('year in the future', () => {
    const req = { body: { model: 'Prius', year: 2025 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });
  

  it('model with number are acceptable', () => {
    const req = { body: { model: 'A4', year: 2019 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('car_value').to.equal(2119);
      }
    };

    calculateCarValue(req, res);
  });

  it('model with hyphen are acceptable', () => {
    const req = { body: { model: 'CR-V', year: 2021 } };
    const res = {
      json: function (data) {
        expect(data).to.have.property('car_value').to.equal(6321);
      }
    };
  
    calculateCarValue(req, res);
  });

  it('minimum valid year expected', () => {
    const req = { body: { model: 'I30', year: 1895} };
    const res = {
      json: function (data) {
        expect(data).to.have.property('error').to.equal('Invalid input');
      }
    };

    calculateCarValue(req, res);
  });


});