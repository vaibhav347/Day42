const Is_Absent=0;
const fullTime=8;
const partTime=4;
const perHourWage=20;
const month=30;
let totalWage=0;
let wage=0;
for(i=1;i<=month;i++)
{
let absent=Math.floor((Math.random()*10)%2);
let part=Math.floor((Math.random()*10)%2);
if(absent==Is_Absent)
{
    console.log("employee abaent");
}
else
{
    if(part==0)
    {
    console.log("part time");
    wage=partTime*perHourWage;
    totalWage=totalWage+wage;
    console.log("Half Day Wage :"+wage);
    console.log("--------------");
    }
    else
    {
        console.log("full time");
        wage=fullTime*perHourWage;
        totalWage=totalWage+wage;
        console.log("Full Day Wage :"+wage);
        console.log("--------------");
    }
}
}
console.log("Monthly Wage :"+totalWage);