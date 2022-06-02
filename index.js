// Write your solution in this file!
const employee = {
    name : "Shaban",
    streetAddress : "4431",
}

function updateEmployeeWithKeyAndValue(employees, key, value) {
    const newObj = { ...employees };

    newObj[key] = value;

     return newObj;
    }

const updatedEmployees = updateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Sam",

)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee.streetAddress = "12 Broadway";

return employee;

}

function deleteFromEmployeeByKey(employee, key) {
  const newObject = Object.assign ({},employee);
  delete newObject[key];
  return newObject;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key];
      return employee;
  }
     


