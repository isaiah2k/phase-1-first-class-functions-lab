const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]]
const returnLastTwoDrivers = drivers => [drivers[2], drivers[3]]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = multiplier => fare => fare * multiplier
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (drivers, selectingFunction) => selectingFunction(drivers)