/* Mobile prices:
HP = 10000
Nokia = 12000
Samsung = 15000
Motorola = 11000
Apple = 30000

Laptop prices:
HP = 40000
Nokia = 35000
Samsung = 45000
Motorola = 38000
Apple = 80000
*/

$(document).ready(function(){
    $("#billbtn").click(function(){
        let brand = $("#brand").val();
        let qty = $("#qty").val();
        let total = 0;

        let mobileprice = {
            HP: 10000,
            Nokia: 12000,
            Samsung: 15000,
            Motorola: 11000,
            Apple: 30000
        };

        let laptopprice = {
            HP: 40000,
            Nokia: 35000,
            Samsung: 45000,
            Motorola: 38000,
            Apple: 80000
        };
        if($("#phone").is(":checked"))
            total += mobileprice[brand] * qty;
        if($("#laptop").is(":checked"))
            total += laptopprice[brand] * qty;
        if(total === 0)
            alert("Please select at least one device");
        else alert("Total amount = ₹" + total);
    });
});