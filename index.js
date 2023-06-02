const Year = document.getElementById("years")
const Months = document.getElementById("months")
const Days = document.getElementById("days")

const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");



function btnClick(){

    if(inputDay==""||inputMonth==""||inputYear==""){
        inputYear.style.color="red"
        return false
    }
    else{
        const date = new Date();

        const d2 = date.getDate();
        const m2 =1+ date.getMonth();
        const y2= date.getFullYear();

        const mainMonth = [31,28,31,30,31,30,31,30,31,30,31,30,31]

        if(inputDay>d2){
            d2 = d2+mainMonth[m2-1];
            m2 = m2-1;
        }

        if(inputMonth>m2){
            m2 = m2+12;
            y2 = y2-1;
        }

        const d = d2-inputDay.value;
        const m = m2 - inputMonth.value;
        const y = y2 - inputYear.value;

        Year.innerHTML = y;
        Months.innerHTML = m;
        Days.innerHTML = d;
    }
}
