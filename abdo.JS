// let a =nembre (prompt("entrez premiere nembre:"));
// let b =nembre (prompt("entrez le deuxsieme nembre:"));
// let opperation = prompt("operation(*,+,-/)");
// let resultat;
// if (opperation ==="+" ){
//     resuletat = a + b;
// }else if(opperation==="-"){
//     resultat = a - b;
// }else if(opperation==="*"){
//     resultat = a * b;
// }else if(opperation==="/"){
//     resultat = a / b;
// }else{
//     resultat = "non resultat"
// }
// console.log("resultat",resultat);
    
// let nombre = 5
// let reponse = prompt("Entre: un nombre entre 1 et 10 :")
 

// let i = 0;
// let num;
// do{
//     num = Number(prompt("entre un nembre  1 tal 10"));
//     if(num == 5){
//         alert("Bravo ! Tu as deviné le bon nombre")
//         break
//     }else{
//         i++
//     }
    
// }while(i < 3)
//     if(num !== 5){
//         alert("ghleti ra9m shih howa 5");
//     }
// let secor =0

// let q1 =prompt("Question 1: La meilleure équipe du Maroc?")
// if(q1=="wydade AC" ||"wydade" ){
//     secor++
// }
// let q2 = prompt("Question 2: Quelle est la capitale du Maroc ?");
// if(q2=="Rabat" || "rabat"){
//     secor++
// }
// let q3 =prompt("Question 3: Quelle est la capitale de la France ?")
// if(q3=="Paris" || "paris"){
//     secor++
// }
// let q4 =prompt("Question 4: Quel est le plus grand continent du monde ?")
// if(q4=="Asie" || "asie"){
//     secor++
// }
// let q5 =prompt("Question 5: Combien de côtés a un triangle ?")
// if(q5=="3"){
//     secor++
// }
// alert("Ton score est : " + secor + "/5")
//     if (secor === 5){
//         alert("Excellent travail") 
//     }else if(secor>=3){
//          alert("Bien joué")
//     }else{
//         alert("Movese note")
//     }

// let dateNaissance = prompt("date de naissence:")
// let annee = 2025
// let age = annee - Number(dateNaissance)

// if(dateNaissance <"1950" || dateNaissance  >"2010"){
//     alert("erreur")
// }else{
// alert("ton age:"+age)
// if(age<18){
//     alert("tu es mineur")
// }else if(age>=18){
//     alert("tu es majeur")
// }else if(age>=60){
//     alert("tu es adulet")
// }else{
//     alert("tu es sinore")
// }
// }

let todoList = [];
console.log("Liste initiale :", todoList);

todoList.push("Acheter pain");
todoList.push("Envoyer mail");
todoList.push("Assister au cours");
console.log("Après ajout de 3 tâches :", todoList);

todoList.unshift("Faire du sport");
console.log("Après ajout au début :", todoList);

let premiereTache = todoList.shift();
console.log("Tâche retirée (début) :", premiereTache);
console.log("Liste après retrait (début) :", todoList);

let derniereTache = todoList.pop();
console.log("Tâche retirée (fin) :", derniereTache);
console.log("Liste après retrait (fin) :", todoList);
