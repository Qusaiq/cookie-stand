'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11m', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let sum=0;
function SalamonCookies(location, min, max, AvgCookie) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.AvgCookie = AvgCookie;
  this.hourlySales = [];
  this.dailySales = 0;
}
const seattle = new SalamonCookies('Seattle', 23, 65, 6.3);
const tokyo=new SalamonCookies('Tokyo',3,24,1.2);
const dubai=new SalamonCookies('Dubai',11,38,2.3);
const paris=new SalamonCookies('Paris',20,38,2.3);
const lima=new SalamonCookies('Lima',2,16,4.6);

SalamonCookies.prototype.numberOfCustmer = function () {
  let range=this.max-this.min;
  let rNumber=(Math.random()*range)+this.min;
  return(rNumber);
};

SalamonCookies.prototype.hourlyDailySale = function () {
  for (let i = 0; i < hours.length; i++) {
    
    let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
    this.hourlySales.push(numberOfCookies);
    this.dailySales += numberOfCookies;
    sum+=numberOfCookies;
  }

};

let tableRows =function(){

  const container = document.getElementById('salesReport');
  const tableRows = document.createElement('tr');
  let tableHeading = document.createElement('th');
  tableHeading.textContent = 'Store';
  tableRows.appendChild(tableHeading);
  for (let i = 0; i < hours.length; i++) {
    tableHeading = document.createElement('th');
    tableHeading.textContent = hours[i];
    tableRows.appendChild(tableHeading);
  }
  
  tableHeading = document.createElement('th');
  tableHeading.textContent = 'Daily Location Total';
  tableRows.appendChild(tableHeading);
  container.appendChild(tableRows);
};
let hourlySales = [];

for (let i = 0; i < hours.length; i++) {
  hourlySales.push(0);
}
SalamonCookies.prototype.render = function () {
  const container = document.getElementById('salesReport');
  const tableRows = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.location;
  container.appendChild(tableRows);
  tableData.textContent = this.location;
  tableRows.appendChild(tableData);
  for (let i = 0; i < hours.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.hourlySales[i];
    tableRows.appendChild(tableData);
    hourlySales[i] += this.hourlySales[i];
  }
  
  tableData = document.createElement('td');
  tableData.textContent = sum;
  sum=0;
  tableRows.appendChild(tableData);
  

};
function calculateTotal() {
  let dailyTotal = 0;
  for (let i = 0; i < hourlySales.length; i++) {
    dailyTotal += hourlySales[i];
  }
  return dailyTotal;
}
let renderFooter = function () {
  const container = document.getElementById('salesReport');
  const tableRows = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = 'Totals';
  tableRows.appendChild(tableData);
  for (let i = 0; i < hourlySales.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = hourlySales[i];
    tableRows.appendChild(tableData);
  }

  //daily total for all stores
  tableData = document.createElement('td');
  tableData.textContent = calculateTotal();
  tableRows.appendChild(tableData);
  container.appendChild(tableRows);
};

tableRows();

seattle.numberOfCustmer();
seattle.hourlyDailySale();
seattle.render();
//tokyo
tokyo.numberOfCustmer();
tokyo.hourlyDailySale();
tokyo.render();
// //Dubai
dubai.numberOfCustmer();
dubai.hourlyDailySale();
dubai.render();
// //Paris
paris.numberOfCustmer();
paris.hourlyDailySale();
paris.render();
// //Lima
lima.numberOfCustmer();
lima.hourlyDailySale();
lima.render();

renderFooter();
