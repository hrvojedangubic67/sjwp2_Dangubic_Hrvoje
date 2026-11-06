function randomnumber(){
   return Math.floor (Math.random()*6)+1;
}
let rand1=randomnumber();
let rand2=randomnumber();   



//console.log(rand1 +" " + rand2);
let randimg1="./images/dice"+rand1+".png";
let randimg2="./images/dice"+rand2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randimg1);
document.querySelectorAll("img")[1].setAttribute("src",randimg2);

if(rand1>rand2){
    document.querySelector("h1").textContent("Prvi je veci!");
}
else if(rand1<rand2){
    document.querySelector("h1").textContent("Drugi je veci!");
}
else{
    document.querySelector("h1").textContent("Nerijeseno.");
}