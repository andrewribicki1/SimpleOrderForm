function myFunction() {
    document.getElementById("myForm").reset();  //grabs form and clears entrys
}   
function myFunction2() {
	document.getElementById("myForm1").reset(); // clears bottom form
}
//function myFunction1() 
// {
  //   var field1 = document.getElementById("field1").value.trim(); //checks length of first name
 //    var field2 = document.getElementById("field2").value.trim(); //checks length of last name
  //   if ( field1.length == 0 || field2.length == 0)  // if they are set to 0 then report alert
  //   {
 //       alert("Please Fill In Form Correctly");
  //   } 
  //   else                                          // if filled in report this following alert
  //   {
 //       alert("Thank You for Submitting");
 //   }
 //}
 
 

function myFunction1()
{
  var field1 = document.getElementById("field1").value.trim();
  var field1Valid= true;
 var field2 = document.getElementById("field2").value.trim();  // checks to see that a value is inputed 
var field2Valid= true;
 var field3 = document.getElementById("field3").value.trim();
var field3Valid= true;
  var field4 = document.getElementById("field4").value.trim();
var field4Valid= true;
if ( field1.length == 0)
 {
        field1Valid= false;
 }                                  // the following checks to see if anything is inputed and returns a true or false/yes or no
 if ( field2.length == 0)
 {
        field2Valid= false;
 }
 if ( field3.length == 0)
 {
        field3Valid= false;
 }
 if ( field4.length == 0)
 {
        field4Valid= false;
 }
var formValid= field1Valid && field2Valid && field3Valid && field4Valid; //true if all fields are valid else false 
if( !formValid){
    var alertMessage= 'Please fill in the following ';          //sets a var alert message if it meets criteria
    if( !field1Valid){ alertMessage+= '[First Name] '; }
    if( !field2Valid){ alertMessage+= '[Last Name] '; }       // adds the following fields to the alert if they did not meet criteria of being full
    if( !field3Valid){ alertMessage+= '[Price] '; }
    if( !field4Valid){ alertMessage+= '[Quantity] '; }
    alert(alertMessage);
    return false;
}
else{
     var alertMessage= 'Thanks for the order '+ field1+ ' '+ field2+ '. Your total is $'+ String(parseInt(field3) * parseInt(field4) )+ '.00.';
    alert(alertMessage);
    return true;           // pushes out alert message by using field1 and field 2 and then multipling field 3 and 4 together to get a total
}


}
