/*

NAME: Mohmmadazhar Khalifa
File Description: This is the Javascript file which performs the calculation
that is displayed in the table based on input. It also checks for valid inputs
and displays appropriate message to help the user.

*/

function validateForm(e,error) {
    let x = document.getElementById(e);
    let errorP = document.getElementById(error);
    let val = x.value;
   //invalid if
   if(val.length < 1 || val.indexOf(" ") > -1){
       x.classList.remove("is-valid");
       x.classList.add("is-invalid");
       errorP.style.display = "block";
       return false;
   }

  //invalid if
  if (isNaN(val) || val > 50 || val < -50) {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      errorP.style.display = "block";
      return false;
  } else if (val !== " ") {
    //valid if

    x.classList.add("is-valid");
    x.classList.remove("is-invalid");
    errorP.style.display = "none";
    return true;
    }
}


function checkValidation() {
    /*
    This function checks for validation. If it is not a valid input it will display
    an error message stating that and it will also display in the form a little "x"
    */
    validateForm("hr1","hre1");
    validateForm("hr2","hre2");
    validateForm("vr1","vre1");
    validateForm("vr2","vre2");

    if (validateForm("hr1","hre1") && validateForm("hr2","hre2") && validateForm("vr1","vre1") && validateForm("vr2","vre2")) {
        document.getElementById("submitValidation").innerText = "";


        return displayTable();
    } else {
        document.getElementById("submitValidation").innerText = "enter a valid number";


    }
}


function displayTable() {
    /*
    This function takes the input, prints the message for table being scrollable
    and most importantly does the claculation which is displayed in the table
    */



    let hr1 = document.getElementById("hr1").value;
    let hr2 = document.getElementById("hr2").value;

    let largest_hr = Math.max(hr1, hr2);
    let smallest_hr = Math.min(hr1, hr2);

    let vr1 = document.getElementById("vr1").value;
    let vr2 = document.getElementById("vr2").value;

    let largest_vr = Math.max(vr1, vr2);
    let smallest_vr = Math.min(vr1, vr2);

    if( largest_hr > 20 || largest_vr > 20){
        document.getElementById("tooMany").innerText = "If there are many items, table becomes scrollable"
  }

    let hr_array = [];
    let vr_array = [];
    let div = document.getElementById("tableRepeat");
    let clear = div.getElementsByTagName("tr");

    for (let i = 0; i < clear.length; i++) {
        clear[i].innerHTML = "";
  }




  let tb_header = document.getElementById("topRow");
  let x = tb_header.insertCell();
  x.innerHTML = "x";


  for (let i = smallest_hr; i <= largest_hr; i++) {
      hr_array.push(i);
      x = tb_header.insertCell();
      x.innerHTML = i;
  }

  let row = document.getElementById("row");

  for (let i = smallest_vr; i <= largest_vr; i++) {
    vr_array.push(i);
  }

  for (let i = 0; i < vr_array.length; i++) {
      let row1 = row.insertRow();
      let el = row1.insertCell();
      el.innerHTML = vr_array[i];

for (let j = 0; j < hr_array.length; j++) {
    let value = vr_array[i] * hr_array[j];
    el = row1.insertCell();
    el.innerHTML = value;
    }
  }
}

$("#form").validate();
