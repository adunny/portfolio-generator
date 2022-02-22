const fs = require("fs");

const profileDataArgs = process.argv.slice(2);

const [profileName, github] = profileDataArgs;

const generatePage = require('./src/page-template.js');


fs.writeFile('./index.html', generatePage(profileName, github), err => {
    if (err) throw new Error(err);
    console.log('Portfolio Complete! Check out index.html to see the output!')
});

// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("============")

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);