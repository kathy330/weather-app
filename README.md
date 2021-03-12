# Getting Started with Weather App

This project is an weather app using openweather api to get the sydney weather.

### Install node modules
`npm i`

### Get openweathmap api
[https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)
create a .env file in the root directory, then pur your api key there
`REACT_APP_WEATHER_API_KEY='API_KEY'`

### Run the project 
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### Stop the project
ctrl + c in the terminal.

### deploy your project to aws s3
`npm run build && npm run deploy`, before you deploy this to your aws s3, please change the s3 path in the package.json
