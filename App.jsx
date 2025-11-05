// Weather
const getWeather = async () => {
  if (!city) return alert("Please enter a city name!");
  setLoadingWeather(true);
  try {
    const data = { temperature: 25, windspeed: 10, condition: "Sunny" };
    setWeather(data);
  } catch (err) {
    alert("Error fetching weather data!");
  } finally {
    setLoadingWeather(false);
  }
};

// Currency Converter
const convertCurrency = () => {
  if (!inr) return alert("Enter INR amount!");
  setUsd((inr * 0.012).toFixed(2));
  setEur((inr * 0.011).toFixed(2));
};

// Quotes
const getQuote = async () => {
  setLoadingQuote(true);
  try {
    const quotes = [
      "Believe in yourself!",
      "You can do it!",
      "Never give up!",
      "Stay positive, work hard, make it happen!"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  } catch (err) {
    setQuote("Failed to fetch quote!");
  } finally {
    setLoadingQuote(false);
  }
};
