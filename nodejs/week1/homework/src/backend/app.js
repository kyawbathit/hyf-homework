const express = require("express");
const app = express();

//import data
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");


//adding routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

//add reviews for all meals
app.get("/meals", async (req, res) => {
  meals.forEach(meal => {
    meal.reviews = [];
    for (let review of reviews) {
      if (meal.id === review.mealId) {
        meal.reviews.push(review);
        delete review.mealId;
      }
    }
  });
  res.send(meals);
});

//cheap meals
app.get("/cheap-meals", async (req, res) => {
  res.send(meals.filter(meal => meal.price <= 75));
});

//large meals
app.get("/large-meals", async (req, res) => {
  res.send(meals.filter(meal => meal.maxNumberOfGuests >= 7));
});
//random meals
app.get("/meal", async (req, res) => {
  res.send(meals[Math.floor(Math.random() * meals.length)]);
});
//reservations
app.get("/reservations", async (req, res) => {
  res.send(reservations);
});
//random reservations
app.get("/reservation", async (req, res) => {
  res.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;