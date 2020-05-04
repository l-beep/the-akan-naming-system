var Century, year, month, dayOfMOnth, dayOfWeek, day;
//Get input
century=parseInt(document.getElementById("century").value);
year=parseInt(document.getElementById("year").value);
month=parseInt(document.getElementById("month").value);
dayOfMOnth=parseInt(document.getElementById("monthday").value);
// dayOfWeek=parseInt(document.getElementById("weekday").value);

if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }
}

//calculate the func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + 
    ((26*(month+1)/10)) + dayOfMOnth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if  (dayOfWeek < 0) {
        dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > o) {
        return dayOfWeek;
    }
}

//main caller func
function checkDayOfWeek() {
    day = calculateDay();
    checkGender();
    console.log("The function runs");//Test checkDayOfWeek function

}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday",
"thursday", "friday", "saturday"];
let maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];

//get selected radio button
function checkGender(){
    var gen = document.getElementsByName("rads");
    if(gen[0]).checked == true){
        var gender = "male"
    }else if(gen)[1].checked == true){
        var gender = "female";
    }else if {
        console.log("pass");//Test the radio buttons
    }
    switch(gender){
        case gender = "male":
            switch(day){
                case (0 || -0):
                    document.getElementById("result").innerHTML
                    = "The day is on a sunday." + " " + "Your akan name is " + maleNames[0];
                    break;
                    case (1 || -1):
                    document.getElementsById("result").innerHTML = "The day is on monday." + "Your akan name is " + maleNames[1];
                    break;
                    case (2 || -2):
                    document.getElementsById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is "+ maleNames[2];
                    break;
                    caes


                    