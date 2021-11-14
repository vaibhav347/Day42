const Is_Absent=0;
const fullTime=8;
const perHourWage=20;
let wage=0;
let absent=Math.floor((Math.random()*10)%2);
if(absent==Is_Absent)
    {
    console.log("Employee abaent");
    console.log("Wage : 0");
    }
else
    {
        console.log("Employee Present");
        wage=fullTime*perHourWage;
        console.log("Full Day Wage :"+wage);
    }
