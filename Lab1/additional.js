const data = [
    {country: "INDIA", year: 1998, population: 85},
    {country: "INDIA", year: 1999, population: 90},
    {country: "INDIA", year: 2000, population: 100},
    {country: "USA", year: 1998, population: 30},
    {country: "USA", year: 1999, population: 35},
    {country: "USA", year: 2000, population: 40},
    {country: "UK", year: 1998, population: 25},
    {country: "UK", year: 1999, population: 30},
    {country: "UK", year: 2000, population: 35}
];
let rows = "";
for(let i = 0; i < data.length; i++){
    rows += "<tr>";
    if(i % 3 === 0){
        rows += `<td class="country" rowspan="3">${data[i].country}</td>`;
    }
    rows += `<td class="year">${data[i].year}</td><td class="population">${data[i].population}</td>`;
    rows += `</tr>`;
}
document.getElementById("poptable").innerHTML += rows;