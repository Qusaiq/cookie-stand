/* eslint-disable indent */
'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11m', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  Min: 23,
  Max: 65,
  AvgCookie: 6.3,
  hourlySales: [],
  dailySales: 0,

  numberOfCustmer: function () {
    let range = this.Max - this.Min;
    let randomCounter = Math.random() * range + this.Min;
    return Math.ceil(randomCounter);
  },

  hourlyDailySale: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
      this.hourlySales.push(numberOfCookies);
      this.dailySales += numberOfCookies;

    }

  },
  render: function () {
    let containaer = document.getElementById('Seattle');
    let h2 = document.createElement('h2');
    h2.innerText = this.location;
    containaer.appendChild(h2);
    let list = document.createElement('ul');
    containaer.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listData = document.createElement('li');
      listData.innerText = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listData);
    }
    let total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(total);
  },


};
seattle.hourlyDailySale();
seattle.render();

let tokyo = {
  location: 'Tokyo',
  Min: 3,
  Max: 24,
  AvgCookie: 1.2,
  hourlySales: [],
  dailySales: 0,

  numberOfCustmer: function () {
    let range = this.Max - this.Min;
    let randomCounter = Math.random() * range + this.Min;
    return Math.ceil(randomCounter);
  },

  hourlyDailySale: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
      this.hourlySales.push(numberOfCookies);
      this.dailySales += numberOfCookies;

    }

  },
  render: function () {
    let containaer = document.getElementById('Tokyo');
    let h2 = document.createElement('h2');
    h2.innerText = this.location;
    containaer.appendChild(h2);
    let list = document.createElement('ul');
    containaer.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listData = document.createElement('li');
      listData.innerText = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listData);
    }
    let total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(total);
  },


};
tokyo.hourlyDailySale();
tokyo.render();

let dubai = {
  location: 'Dubai',
  Min: 11,
  Max: 38,
  AvgCookie: 3.7,
  hourlySales: [],
  dailySales: 0,

  numberOfCustmer: function () {
    let range = this.Max - this.Min;
    let randomCounter = Math.random() * range + this.Min;
    return Math.ceil(randomCounter);
  },

  hourlyDailySale: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
      this.hourlySales.push(numberOfCookies);
      this.dailySales += numberOfCookies;

    }

  },
  render: function () {
    let containaer = document.getElementById('Dubai');
    let h2 = document.createElement('h2');
    h2.innerText = this.location;
    containaer.appendChild(h2);
    let list = document.createElement('ul');
    containaer.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listData = document.createElement('li');
      listData.innerText = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listData);
    }
    let total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(total);
  },


};
dubai.hourlyDailySale();
dubai.render();


let paris = {
  location: 'Paris',
  Min: 20,
  Max: 38,
  AvgCookie: 2.3,
  hourlySales: [],
  dailySales: 0,

  numberOfCustmer: function () {
    let range = this.Max - this.Min;
    let randomCounter = Math.random() * range + this.Min;
    return Math.ceil(randomCounter);
  },

  hourlyDailySale: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
      this.hourlySales.push(numberOfCookies);
      this.dailySales += numberOfCookies;

    }

  },
  render: function () {
    let containaer = document.getElementById('Paris');
    let h2 = document.createElement('h2');
    h2.innerText = this.location;
    containaer.appendChild(h2);
    let list = document.createElement('ul');
    containaer.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listData = document.createElement('li');
      listData.innerText = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listData);
    }
    let total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(total);
  },


};
paris.hourlyDailySale();
paris.render();



let lima = {
  location: 'Lima',
  Min: 2,
  Max: 16,
  AvgCookie: 4.6,
  hourlySales: [],
  dailySales: 0,

  numberOfCustmer: function () {
    let range = this.Max - this.Min;
    let randomCounter = Math.random() * range + this.Min;
    return Math.ceil(randomCounter);
  },

  hourlyDailySale: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookies = Math.ceil(this.numberOfCustmer() * this.AvgCookie);
      this.hourlySales.push(numberOfCookies);
      this.dailySales += numberOfCookies;

    }

  },
  render: function () {
    let containaer = document.getElementById('Lima');
    let h2 = document.createElement('h2');
    h2.innerText = this.location;
    containaer.appendChild(h2);
    let list = document.createElement('ul');
    containaer.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listData = document.createElement('li');
      listData.innerText = hours[i] + ' : ' + this.hourlySales[i] + ' cookies';
      list.appendChild(listData);
    }
    let total = document.createElement('li');
    total.innerText = 'Total: ' + this.dailySales + ' cookies';
    list.appendChild(total);
  },


};
lima.hourlyDailySale();
lima.render();



