console.log( 'js' );

$(document).ready(readyNow);

function readyNow(){
  console.log( 'JQ' );
//make onClick to run function collectEmp that pushes input fields to an array
$( '#submitEmp' ).on( 'click', addEmployee );
$( '#submitEmp' ).on( 'click', showEmployee );
}//end readyNow



let staff = [];

class Employee{
  constructor( firstName, lastName, empId, jobTitle, annualSalary ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.empId = empId;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  } // end constructor
} // end Employee class

function addEmployee() {
  console.log( 'in collectEmp' );
  //push Employee properties to an array
  let firstName =  $( '#firstnameInput' ).val();
  let lastName =   $( '#lastnameInput' ).val();
  let empId =   $( '#idInput' ).val();
  let jobTitle =   $( '#jobtitleInput' ).val();
  let annualSalary =   $( '#salaryInput' ).val();
  console.log( firstName );
  console.log( lastName );
  console.log( empId );
  console.log( jobTitle );
  console.log( annualSalary );
  let newEmp = new Employee ( $( '#firstnameInput').val(), $( '#lastnameInput' ).val(), $( '#idInput' ).val(), $( '#jobtitleInput' ).val(), $( '#salaryInput' ).val() );
  console.log( 'Adding:', newEmp );
  staff.push(newEmp);
  $( "#firstnameInput").val('');
  $( "#lastnameInput").val('');
  $( "#idInput").val('');
  $( "#jobtitleInput").val('');
  $( "#salaryInput").val('');
  calculateMonth();
  console.log(staff);
}//end addEmployee

function calculateMonth() {
  console.log( 'in calculateMonth' );
  //add up total in annualSalary and divide by 12
  let sum = 0;
  for (salary of staff) {
    sum += parseInt(salary.annualSalary);
  }//end for of
  $( '#monthTotal' ).empty();
  $( '#monthTotal' ).append( '<h3>Monthly Totals:' + ' ' + '$' + (sum/12).toFixed(2) + '</h3>' );

  if (sum > 20000) {
    //turn background red
    $( '#monthTotal' ).css( 'background-color', 'red');
  }//end if over budget
}//end calculateMonth




function showEmployee() {
  console.log( 'in showEmployee' );

  //target output element and save in a variable
  let el = $( '#empTable' );
  //empty the output element
  el.empty();
  //loop through array
  for ( employee of staff ) {
    //append each employee to table
    let outputString = '<tr>';
        outputString += '<td>' + employee.firstName +  '</td>';
        outputString += '<td>' + employee.lastName +  '</td>';
        outputString += '<td>' + employee.empId +  '</td>';
        outputString += '<td>' + employee.jobTitle +   '</td>';
        outputString += '<td>' + employee.annualSalary +  '</td>';
        outputString += '</tr>';

    el.append ( outputString );
  }// end for of
}//end showEmployee


//DONE - The application should have an input form that
//DONE - collects in a function that pushes to an array employee first name, last name, ID number, job title, annual salary.

//DONE store the information to calculate monthly costs,
//DONE append information to the DOM and
//DONE clear the input fields.

//Using the stored information,
//DONE calculate monthly costs and
//DONE append this to the to DOM.

//If the total monthly cost exceeds $20,000,
//add a red background color to the total monthly cost.
