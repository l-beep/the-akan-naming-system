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
                    caes(3 || -3):
                    document.getElementById("result").innerHTML
                    = "The day is on a wednesday." + maleNames[3];
                    break;
                    case (4 ||-4):
                    document.getElementById("result").innerHTML
                    = "The day is on a thursday." + maleNames[4];
                    break;
                    case (5 ||-5):
                    document.getElementById("result").innerHTML
                    = "The day is on a friday." + maleNames[5];
                    break;
                    case (6 || -6):
                      document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                    break;
                    default:
                    // console.console.log("Pass");//Test male case
                  }
            break;
            case gender = "female":
                    switch(day){
                      case 0 || -0:
                        document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                      break;
                      case 1 || -1:
                        document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                      break;
                      case 2 || -2:
                        document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                      break;
                      case 3 || -3:
                        document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                      break;
                      case 4 || -4:
                        document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                      break;
                      case 5 || -5:
                        document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                      break;
                      case 6 || -6:
                        document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                      break;
    
                  }
            break
            default:
            console.log("pass");//Test gender switch
        }
    }
    



                    