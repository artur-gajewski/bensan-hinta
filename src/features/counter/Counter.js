import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  counterSlice as counter,
  currentPriceSelector,
  consumptionSelector,
  distanceSelector,
} from './counterSlice';
import './Counter.css';

const calculate = (price, consumption, distance) => {
  const outcome = ((distance / 100) * consumption) * price;
  const rounded = Math.round(outcome * 100) / 100;
  const formatted = parseFloat(rounded).toFixed(2);
  return formatted;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const formatToTwoDecimals = (number) => {
  return parseFloat(number).toFixed(2);
} 

const getEqualsTo = (outcome) => {
  const items = [
    {name: "kpl vessapaperirullaa", price: 0.45},
    {name: "kpl naudan 400g jauhelihapakettia", price: 4.49},
    {name: "tuoppia olutta", price: 7},
    {name: "kpl röökiaskia", price: 9.5},
    {name: "kpl mikropizzaa", price: 1.25},
    {name: "kpl kunnon pizzaa", price: 9},
    {name: "kuukautta Netflixiä", price: 7.99},
    {name: "kpl Juhla Mokkaa", price: 6.49},
    {name: "kpl lottoriviä", price: 1},
  ];

  const randomInt = getRandomInt(items.length);

  return "Sillä saisit " + Math.floor((outcome/items[randomInt].price)) + " " + items[randomInt].name;
}

export function Counter() {
  const currentPrice = useSelector(currentPriceSelector);
  const currentConsumption = useSelector(consumptionSelector);
  const currentDistance = useSelector(distanceSelector);
  const outcome = calculate(currentPrice, currentConsumption, currentDistance);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        Bensan hinta: {formatToTwoDecimals(Math.round(currentPrice * 100) / 100)} &euro;
      </div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.actions.decreaseCurrentPrice())}
        >
          -
        </button>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(counter.actions.increaseCurrentPrice())}
        >
          +
        </button>
      </div>
      <div className="row">
        Kulutus: {Math.round(currentConsumption * 100) / 100} l/100 km
      </div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.actions.decreaseConsumption())}
        >
          -
        </button>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(counter.actions.increaseConsumption())}
        >
          +
        </button>
      </div>
      <div className="row">
        Matka: {currentDistance} km
      </div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(counter.actions.decreaseDistance())}
        >
          -
        </button>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(counter.actions.increaseDistance())}
        >
          +
        </button>
      </div>
      <div className="row">
        <span className="value">
          {outcome} &euro;
        </span>
      </div>
      <div className="row">
        {getEqualsTo(outcome)}
      </div>
    </div>
  );
}
