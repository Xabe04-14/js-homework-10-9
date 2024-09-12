var id=0;
var total=0;
function Add(){
    id++;
    var pname= frm.pname.value;
    var qty= frm.qty.value;
    var price= frm.price.value;
    var sub = qty*price;
    total +=sub;
    var row="<tr>";
    row +="<td>"+ id + "</td>";
    row +="<td>"+ pname + "</td>";
    row +="<td>"+ qty + "</td>";
    row +="<td>"+ price + "</td>";
    row +="<td>"+ sub + "</td>";
    row +="<tr>";
    
    document.getElementById('tbody').innerHTML +=row;
    document.getElementById('Total').innerHTML =total;

}