let weathercon = document.getElementById("weathercon");
var d = new Date();
document.getElementById("date").innerHTML = d;

const tempStatus = "{%tempstatus%}";

//condition to check sunny or cloudy
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}