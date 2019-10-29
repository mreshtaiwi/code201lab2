'use strict'
var name = prompt("Could you tell us what's your name please");
document.getElementById("welcome").innerHTML = "Welcome " + name;

alert('please answer the 5 questions yes or no - you can use ( y , n) as answer Only');

var q1 = prompt("my name is sohaib?").toLowerCase();
while(q1 != 'y' && q1 != 'yes' && q1 != 'n' && q1 != 'no'){
    q1 = prompt("my name is sohaib? you can use these options 'yes no y n' only").toLowerCase();
}
if(q1 === 'n' || q1 === 'no'){
    //console.log('corrct');
    //alert('corrct');
    document.getElementById("q1").innerHTML = "Your answer for Q1 is corrct";
    var element = document.getElementById("q1");
    element.classList.add("correct");
}
else{
    console.log('wrong');
    //alert('wrong');
    document.getElementById("q1").innerHTML = "Your answer for Q1 is wrong";
    var element = document.getElementById("q1");
    element.classList.add("wrong");
}

var q2 = prompt("my favourite color is blue?").toLowerCase();
while(q2 != 'y' && q2 != 'yes' && q2 != 'n' && q2 != 'no'){
    q2 = prompt("my favourite color is blue? you can use these options 'yes no y n' only").toLowerCase();
}
if(q2 === 'y' || q2 === 'yes'){
    console.log('corrct');
    //alert('corrct');
    document.getElementById("q2").innerHTML = "Your answer for Q2 is corrct";
    var element = document.getElementById("q2");
    element.classList.add("correct");
}
else{
    console.log('wrong');
    //alert('wrong');
    document.getElementById("q2").innerHTML = "Your answer for Q2 is wrong";
    var element = document.getElementById("q2");
    element.classList.add("wrong");
}

var q3 = prompt("my favourite food is Maqlobeh?").toLowerCase();
while(q3 != 'y' && q3 != 'yes' && q3 != 'n' && q3 != 'no'){
    q3 = prompt("my favourite food is Maqlobeh? you can use these options 'yes no y n' only").toLowerCase();
}
if(q3 === 'y' || q3 === 'yes'){
    console.log('corrct');
    //alert('corrct');
    document.getElementById("q3").innerHTML = "Your answer for Q3 is corrct";
    var element = document.getElementById("q3");
    element.classList.add("correct");
}
else{
    console.log('wrong');
    //alert('wrong');
    document.getElementById("q3").innerHTML = "Your answer for Q3 is wrong";
    var element = document.getElementById("q3");
    element.classList.add("wrong");
}

var q4 = prompt("Do i love Cats?").toLowerCase();
while(q4 != 'y' && q4 != 'yes' && q4 != 'n' && q4 != 'no'){
    q4 = prompt("Do i love Cats? you can use these options 'yes no y n' only").toLowerCase();
}
if(q4 === 'y' || q4 === 'yes'){
    console.log('corrct');
    //alert('corrct');
    document.getElementById("q4").innerHTML = "Your answer for Q4 is corrct";
    var element = document.getElementById("q4");
    element.classList.add("correct");
}
else{
    console.log('wrong');
    //alert('wrong');
    document.getElementById("q4").innerHTML = "Your answer for Q4 is wrong";
    var element = document.getElementById("q4");
    element.classList.add("wrong");
}

var q5 = prompt("Do i live in Amman?").toLowerCase();
while(q5 != 'y' && q5 != 'yes' && q5 != 'n' && q5 != 'no'){
    q5 = prompt("Do i live in Amman? you can use these options 'yes no y n' only").toLowerCase();
}
if(q5 === 'y' || q5 === 'yes'){
    console.log('corrct');
    //alert('corrct');
    document.getElementById("q5").innerHTML = "Your answer for Q5 is corrct";
    var element = document.getElementById("q5");
    element.classList.add("correct");
}
else{
    console.log('wrong');
    //alert('wrong');
    document.getElementById("q5").innerHTML = "Your answer for Q5 is wrong";
    var element = document.getElementById("q5");
    element.classList.add("wrong");
}






// var questions = ["my name is sohaib?","my favourite color is blue?","my favourite food is Maqlobeh?","Do i love Cats?","Do i live in Amman?"];
// var answers = [];
// var correct = ['n','y','y','y'];

// for (var i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i]).toLowerCase();
// }

// while (as) {
    
// }
// if( answers[0] === 'n' || answers[0] === 'no'){
//     alert('correct');
// }else{
//     alert('wrong');
// }
// if (answers[1] === 'y' || answers[1] === 'yes') {
//     alert('correct');
// } else {
//     alert('wrong');
// }
// if (answers[2] === 'y' || answers[2] === 'yes') {
//     alert('correct');
// } else {
//     alert('wrong');
// }
// if (answers[3] === 'y' || answers[3] === 'yes') {
//     alert('correct');
// } else {
//     alert('wrong');
// }


// for (var check = 0; check < answers.length; check++) {
//     if(answers[i] != 'y' || answers[i] != 'n' || answers[i] != 'yes' || answers[i] != 'no'){
//         alert(answers[i]);
//         // switch (answers[i]) {
//         //     case 'y':
                
//         //         break;
//         //     case 'yes':
                
//         //         break;
//         //     case 'n':
                
//         //         break; 
//         //     case 'no':
                
//         //         break;  
//         //     default:
//         //         break;
//         // }
//     }else{
//         for (var i = 0; i < questions.length; i++) {
//             answers[i] = prompt(questions[i]).toLowerCase();
//         }
//     }
// }

// for (var check = 0; check < answers.length; check++) {
//     if((answers[i] === 'y' || answers[i] === 'n') && (answers[i] === 'yes' || answers[i] === 'no')){
//         if(answers[i] === 'y' || answers[i] === 'yes' )
//         {
//             console.log('wrong answer');
//         }else{
//             console.log('correct answer');
//         }
//     }else{
//         for (var i = 0; i < questions.length; i++) {
//             answers[i] = prompt(questions[i]).toLowerCase();
//         }
//     }
// }

// var q2 = prompt().toLowerCase();
// console.log(q2);

// var q3 = prompt().toLowerCase();
// console.log(q3);

// var q4 = prompt().toLowerCase();
// console.log(q4);

// var q5 = prompt().toLowerCase();
// console.log(q5);