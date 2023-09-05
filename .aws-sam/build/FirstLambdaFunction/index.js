const knex = require('knex');

exports.handler = async (event) => {
  try {
    // Your logic here
    const inputData = event.inputData; // Assuming you pass input data to the Lambda
    console.log("event: ",event.inputData)
    // Perform some processing using the inputData
    const result = processData(inputData);
    // throw "expected injected error";
    console.log("1st")
    return {
      statusCode:200,
      resultFromFirstLambda: result,
      layerResult:knex.greet(event.inputData)
    };
  } catch (e) {
    console.log(e);
    return {
      resultFromFirstLambda: e,
    };
  }
};

function processData(inputData) {
  // Your processing logic here
  return inputData.toUpperCase();
}



// to run : sam local invoke FirstLambdaFunction -e event/event.json