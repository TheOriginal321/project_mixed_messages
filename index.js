//Object to hold Weather Conditions
const weatherConditions = [
    "Sunny",
    "Rainy",
    "Cloudy",
    "Dusty",
    "Snowy",
    "Foggy",
    "Froggy",
    "Extra Dusty",
    "Unbelievably Dusty",
    "Raining Cats and Dogs",
    "Hailing (Golfball size)",
    "Hailing (Baseball size)"
]

//Function to 'predict' weather for given time period
const prediction = () => {
    return weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
}
//Function to return 'predicted' weather for the morning, afternoon, and night
const weatherToday = () => {
    return `This morning will be ${prediction()}, it will be ${prediction()} this afternoon, and tonight without a doubt will be ${prediction()}.`
}


//Test Area
console.log(weatherToday())
