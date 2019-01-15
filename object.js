// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.keys(session);

//console.log(values);

// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

//console.log(entries);
// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    //console.log(`${key}: ${value}`);
});

// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
const character = Object.assign(name, details);

console.log(character);