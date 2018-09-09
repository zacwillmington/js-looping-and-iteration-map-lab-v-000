// Code your solution in this file.

function lowerCaseDrivers (drivers) {
    const reformattedNames = drivers.map(driver => driver.toLowerCase());
    return reformattedNames;
}

function nameToAttributes (drivers) {
const newDrivers = drivers.map(driver => Object.assigin({}, {firstName: splitName(nameStr)[0]), lastName: splitName(nameStr)[1]})
    return newDrivers
}


function splitName(nameStr) {
    let fullName = driver.split(" ");
    return fullName;
}
