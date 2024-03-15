const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let i = 0;
let totalPrice = 0;  
const outputDiv = document.getElementById("output");
const outputAvg = document.getElementById("avg")

const displayOneLine = () => {
  if (i < freelancers.length) {
    const line = ` ${freelancers[i].name}, ${freelancers[i].price}, ${freelancers[i].occupation}`;
    const lineDiv = document.createElement("div"); 
    lineDiv.textContent = line; 
    outputDiv.appendChild(lineDiv); 
 
    totalPrice += freelancers[i].price;
    console.log(totalPrice);
    let avgPrice = totalPrice/(i + 1);
    console.log(avgPrice);
    const displayAvgp = document.getElementById('avgp');
    displayAvgp.textContent = avgPrice;


    i++;
  } else {
    clearInterval(interval);
  }
};

const interval = setInterval(displayOneLine, 2000);
