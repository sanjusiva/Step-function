exports.handler = async (event) => {
  try {
    // Extract the result from the first Lambda's output
    const resultFromFirstLambda = event;
    console.log('event: ',event);
    // Perform some processing using the result from the first Lambda
    const finalResult = processSecondLambda(resultFromFirstLambda);
    console.log("2nd")
    return {
      finalResult: finalResult,
    };
  } catch (e) {
    return {
      finalResult: e,
    };
  }
};

function processSecondLambda(resultFromFirstLambda) {
  // Your processing logic here
  return `Processed: ${resultFromFirstLambda}`;
}
