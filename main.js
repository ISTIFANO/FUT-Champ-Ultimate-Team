const Rating = document.querySelector("#container").querySelectorAll(".itemsRating");
let cal=0; 
let RA=0; 
Rating.forEach(ele=>{ 
    RA+=parseInt(ele.textContent.trim()
                     }); console.log(RA);
cal=RA/11;
console.log(cal);