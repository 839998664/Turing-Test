import Main from './Main';
const main = new Main();
const result = main.runTest();
for (let i = 0; i < result.length; i++) {
    console.log(result[i].toString());
};