# LIVE URL: https://simmi019.github.io/Currency-convertor/

# CURRENCY CONVERTER

A simple web-based currency converter application that fetches exchange rates from a remote API and allows users to convert between various currencies.

Features
 
* Supports conversions between major currencies
* Displays current exchange rates
* Allows users to select the currency to convert from and to
* Provides a clear and intuitive user interface

Technology Stack

* Frontend: HTML, CSS, JavaScript (using Bootstrap for styling)
* Backend: No backend required, data fetched directly from API

Getting Started

1. Clone the repository to your local machine by running `git clone https://github.com/your-username/currency-converter.git`
2. Open the `index.html` file in a web browser to use the application

Contributing

Contributions are welcome! If you'd like to add a new feature or fix an issue, please fork the repository, make your changes, and submit a pull request.

API Documentation

The application uses the ExchangeRate-API (https://www.exchangerate-api.com/) to fetch current exchange rates.

API Endpoints

* `GET /latest/1/EUR` - Returns the current exchange rate for EUR (European Euro)
* `GET /latest/1/USD` - Returns the current exchange rate for USD (United States Dollar)
* `GET /latest/1/GBP` - Returns the current exchange rate for GBP (British Pound)

API Parameters

* `base` - The base currency (e.g., EUR, USD, GBP)
* `symbols` - The symbol for the currency (e.g., EUR for Euro, USD for US Dollar)

License

This project is licensed under the MIT License. See LICENSE.txt for details.

Acknowledgments

* ExchangeRate-API for providing the exchange rate data
* Bootstrap for styling the application

