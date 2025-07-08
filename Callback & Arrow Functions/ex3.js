const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

logData = function(data) {
    console.log("Explanation of the error: ")
}

displayData(console.error, logData, "I like to party")
