// Kilometer to Meter convert 


function kilometerTometer(meter){
    var kilometer = meter*1000;
    return kilometer;  
}

var testMeter = kilometerTometer(15);
console.log(nanaMeter);


// hotelCost

var day = 78;
var taka = 0;
if (day <=10){
    taka = day * 100;
} else if (day <=20){
    var firstTenDay = 10 * 100;
    var remaining = day - 10;
    var secondTenDay = remaining * 80;
     taka = firstTenDay + secondTenDay;
}
else{
    var firstTenDay = 10*100;
    var secondTenDay = 10*80;
    var remaining = day - 20;
    var third = remaining * 50;
    taka = firstTenDay + secondTenDay + third;
}
console.log(taka);

