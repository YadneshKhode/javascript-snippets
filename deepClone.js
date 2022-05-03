function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== "object") {
      return objectpassed;
    }
    // give temporaryStorage the original obj's constructor
    var temporaryStorage = objectpassed.constructor();
    for (var key in objectpassed) {
      temporaryStorage[key] = keepCloning(objectpassed[key]);
    }
    return temporaryStorage;
  }
  var employeeDetailsOriginal = {
    name: "yadnes",
    age: 24,
    Profession: "Software Engineer",
  };
  var employeeDetailsDuplicate = keepCloning(employeeDetailsOriginal);
  employeeDetailsOriginal.name = "NameChanged";
  console.log(employeeDetailsOriginal);
  console.log(employeeDetailsDuplicate);
  