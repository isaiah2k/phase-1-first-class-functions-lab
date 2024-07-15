const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']) 
// Function to return the first two drivers from the array
const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]]
// Function to return the last two drivers from the array
const returnLastTwoDrivers = drivers => [drivers[2], drivers[3]]
// Function for selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// Function to make a fare multiplier
const createFareMultiplier = (multiplier) => {
  // Returns fare multiplied by specified multiplier
  return (fare) => {
  return multiplier * fare
  }
}
// Function to double fare
const fareDoubler = createFareMultiplier(2)
// Function to triple fare
const fareTripler = createFareMultiplier(3)
// Function to select different drivers from the array using a specified function
const selectDifferentDrivers = (arrayOfDrivers, fn) => fn(arrayOfDrivers);