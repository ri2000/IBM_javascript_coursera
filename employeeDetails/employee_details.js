const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "Javascript"},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python"},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java"},
    //... More employee records can be added here
];

function displayEmployees(){
   const totalEmployees = employees.map(employee=> `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
   
   document.getElementById("employeeDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const total = employees.reduce((acc, salary) => acc + salary, 0);

    alert("Total Salaries: ${total}");
}

function displayHREmployees(){
    const hrEmployees = employees.filter((employee) => employee.department === `HR`);

    const hrEmployeesDisplay = hrEmployees.map((employee) => <p>`${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}`</p>).join('');

    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

function findEmployeeSpecialization(specialization){
    document.getElementById("employeesDetails").innerHTML = employees.filter((employee) => employee.specialization === specialization).map((employee) => `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`).join('');
}