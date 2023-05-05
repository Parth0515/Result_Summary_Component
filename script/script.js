import data from './data.json' assert{ type: 'json'};

let sum = 0;
let count = 0;
let cat = document.querySelectorAll("div.category-block");

for(let i=0; i < data.length; i++){
    cat[i].querySelector("img.icon").innerHTML = data[i].icon
    cat[i].querySelector("p.category").innerHTML = data[i].category
    cat[i].querySelector("strong").innerHTML = data[i].score

    sum = sum + data[i].score
    count++;
}

let avg = Math.floor(sum/count);
let total_score = document.querySelector("h1.avg-score");

total_score.innerHTML = avg;

