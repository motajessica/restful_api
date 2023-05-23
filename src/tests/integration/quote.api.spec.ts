import { Server } from "http";
import request from "supertest";
import app from "../../app";
import { calculateQuote } from "../../controllers/quotesControllers";
import { Request, Response } from "express";

// Define a custom type for the mock request object
interface MockRequest extends Request {
  body: {
    carValue: number;
    riskRating: number;
  };
}

describe("Car Quotes API", () => {

  test("it should return car quotes via HTTP request", async () => {
    const carValue = 5000.5;
    const riskRating = 5;
    const expected = {
      monthPremium: 20.8,
      yearlyPremium: 250,
    };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid type(string) of car value", async () => {
    const carValue = "a";
    const riskRating = 5;
    const expected = { Error: "This is an type error." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid type(boolean) of car value", async () => {
    const carValue = false;
    const riskRating = 5;
    const expected = { Error: "This is an type error." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid type(string) of riskRating", async () => {
    const carValue = 5000;
    const riskRating = "a";
    const expected = { Error: "This is an type error." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid type(boolean) of riskRating", async () => {
    const carValue = 5000;
    const riskRating = false;
    const expected = { Error: "This is an type error." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid negative value of riskRating", async () => {
    const carValue = 5000;
    const riskRating = -1;
    const expected = { Error: "Input value is out of range." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid value upper bound of riskRating", async () => {
    const carValue = 5000;
    const riskRating = 6;
    const expected = { Error: "Input value is out of range." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid value zero of riskRating", async () => {
    const carValue = 5000;
    const riskRating = 0;
    const expected = { Error: "Input value is out of range." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Test invalid value of car value and riskRating", async () => {
    const carValue = "a";
    const riskRating = false;
    const expected = { Error: "This is an type error." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });

  test("Testing with max largest value of car value and the lowest riskRating", async () => {
    const carValue = Number.MAX_SAFE_INTEGER;
    const riskRating = 1;
    const expected = {
      monthPremium: 7505999378950.8,
      yearlyPremium: 90071992547409,
    };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expected);
  });

  test("Testing with max int+1 of car value and the lowest riskRating", async () => {
    const carValue = Number.MAX_SAFE_INTEGER+1;
    const riskRating = 1;
    const expected = { Error: "Input value is out of range." };

    const response = await request(app)
      .get("/api/v1/calc_quote")
      .send({
        carValue: carValue,
        riskRating: riskRating,
      });

    expect(response.status).toBe(403);
    expect(response.body).toEqual(expected);
  });
});
