// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);


const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);