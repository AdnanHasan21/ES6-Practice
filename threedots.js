const age = [10,20,30];
const age2 = [40,50,60];
const age3 = [70,80,90];
//const total_age = age.concat(age2).concat(age3);
//const total_age= [age, age2, age3];
const total_age = [...age, ...age2, ...age3];
console.log(total_age);


const adnan = [300000, 10000, 200];
const tanvir = [25000,2500000,100000];
const munsur = [500,1000,50000];
const beshi_taka = Math.max(...adnan,...tanvir,...munsur);
console.log(beshi_taka);