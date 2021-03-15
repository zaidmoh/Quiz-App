var questions=[
    {
        question:"Which of the following correctly declares an array?",
        choices:["int geeks[20];",
                    "int geeks;",
                    "geeks{20};",
                    "array geeks[20];"        
            ],
        answer:1
    },
    {
        question:"Process of inserting an element in Stack is called .......",
        choices:["Create",
                    "Push",
                    "Evaluation",
                    "Pop"        
            ],
        answer:2
    },
    {
        question:"Which of the following is not the application of Stack?",
        choices:["A parentheses balancing program",
                    "Tracking of local variables at run time",
                    "Compiler Syntax Analyzer",
                    "Data Transfer between two asynchronous process"        
            ],
        answer:4
    },
    {
        question:"What is the value of the postfix expression 6 3 2 4 + – *?",
        choices:[1,
                    40,
                    74,
                    -18        
            ],
        answer:4
    },
    {
        question:"What is the complexity of adding an element to the heap.",
        choices:["O(log n)",
                    "O(h)",
                    "O(log n) & O(h)",
                    "O(n)"
            ],
        answer:3
    },
    {
        question:"Heap can be used as .......",
        choices:["Priority queue",
                    "Stack",
                    "A decreasing order array",
                    "Normal Array"
            ],
        answer:1
    },
    {
        question:"Which of the following properties does a simple graph not hold?",
        choices:["Must be connected",
                    "Must be unweighted",
                    "Must have no loops or multiple edges",
                    "Must have no multiple edges"
            ],
        answer:1
    },
    {
        question:"A graph with all vertices having equal degree is known as a ........",
        choices:["Multi Graph",
                    "Regular Graph",
                    "Simple Graph",
                    "Complete Graph"
            ],
        answer:2
    },
    {
        question:"Which of the following ways can be used to represent a graph?",
        choices:["Adjacency List and Adjacency Matrix",
                    "Incidence Matrix",
                    "Adjacency List, Adjacency Matrix as well as Incidence Matrix",
                    "No way to represent"
            ],
        answer:3
    },
    {
        question:"Which of the following is the efficient data structure for searching words in dictionaries?",
        choices:["BST",
                    "Linked List",
                    "Balanced BST",
                    "Trie"
            ],
        answer:4
    }
];

var ques=document.getElementById("question");
var option1=document.getElementById("option1");
var option2=document.getElementById("option2");
var option3=document.getElementById("option3");
var option4=document.getElementById("option4");
var questionNo=document.getElementById("question-no");
var totalQues=document.getElementById("total-ques");
var nextBtn=document.getElementById("nextButton");
var prevBtn=document.getElementById('prevButton');
var rightAnswer=document.getElementById('right-answer');
var quizPart=document.getElementById('quiz-part');
var resultPart=document.getElementById('result');
var returnBtn=document.getElementById('return-btn');
var i=0;
var total=10;
var resultArray=[];
for(k=0;k<10;k++){
    resultArray.push(-1);
}
function actualMain(){
    mainFunction();
    startTest(600000);
}
function mainFunction(){
    if(resultArray[i]==-1)
        nextBtn.disabled=true;
    else
        nextBtn.disabled=false;
    returnBtn.classList.add('removeContent');
    resultPart.classList.add('removeContent');
    showQuestion();
    checkCondition();
}
function checkCondition(){
    if(i==0){
        prevBtn.style.visibility="hidden";
    }
    else if(i==9){
        nextBtn.value="Submit";
    }
    else{
        prevBtn.style.visibility="visible";
        nextBtn.value="Next";
    }
}
function showQuestion(){
    questionNo.innerHTML=(i+1);
    totalQues.innerHTML=total;
    ques.innerHTML=questions[i].question;
    option1.innerHTML=questions[i].choices[0];
    option2.innerHTML=questions[i].choices[1];
    option3.innerHTML=questions[i].choices[2];
    option4.innerHTML=questions[i].choices[3];
    if(resultArray[i]!=-1){
        let op=resultArray[i];
        op="flexRadioDefault"+op;
        document.getElementById(op).checked=true;
    }
}

function nextQuestion(){
    optionSelected();
    unchecked();
    if(i==9){
        calculateResult();
        return;
    }
    i++;
    mainFunction();
}
function prevQuestion(){
    i--;
    mainFunction();
}
let result=0;
function calculateResult(){
    quizPart.classList.add('removeContent');
    resultPart.classList.remove('removeContent');
    let temp;
    for(temp=0;temp<10;temp++){
        if(resultArray[temp]==questions[temp].answer){
            result++;
        }
    }
    rightAnswer.innerHTML=result + " of " +total;
    document.getElementById('percentage').innerHTML=(result/total)*100+"%";
}

function enableButton(){
    //console.log("event");
    nextBtn.disabled = false;
}

function unchecked(){
    document.getElementById("flexRadioDefault1").checked=false;
    document.getElementById("flexRadioDefault2").checked=false;
    document.getElementById("flexRadioDefault3").checked=false;
    document.getElementById("flexRadioDefault4").checked=false;
}

function optionSelected(){
    var ele=document.getElementsByName("quiz_question");
    for(j=0;j<ele.length;j++){
        if(ele[j].checked){
            resultArray[i]=j+1;
        }
    }
}

function startTest(distance){
    var x = setInterval(function() {
        distance -=1000; 
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if(minutes<10){
            minutes='0'+minutes;
        }
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "; 
        if (distance < 0) {
          clearInterval(x);
          calculateResult();
        }
      }, 1000);
}




//Show Result Part


var showResult=document.getElementById('show-result');

function showAnswers(){
    quizPart.classList.add('removeContent');
    resultPart.classList.add('removeContent');
    returnBtn.classList.remove('removeContent');
    //let index;
    document.getElementById('correct-answer').innerHTML='Score: '+result+" of "+total;
    document.getElementById('correct-percent').innerHTML=(result/total)*100+"% Correct :";
    for(elem=0;elem<10;elem++){
        let bElement=document.createElement('b');
        let divElement=document.createElement('div');
        let h3Element=document.createElement('h3');
        let pElement=document.createElement('p');
        let childDiv1=document.createElement('div');
        let childDiv2=document.createElement('div');
        let childDiv3=document.createElement('div');
        let childDiv4=document.createElement('div');
        h3Element.innerHTML="Question "+(elem+1)+" :";
        pElement.innerHTML=questions[elem].question;
        if(resultArray[elem]==questions[elem].answer){
            childDiv1.innerHTML=questions[elem].choices[0];
            childDiv2.innerHTML=questions[elem].choices[1];
            childDiv3.innerHTML=questions[elem].choices[2];
            childDiv4.innerHTML=questions[elem].choices[3];
            bElement.innerHTML='Correct Answer';
            if(resultArray[elem]==1){
                childDiv1.appendChild(bElement);
                childDiv1.classList.add('make-child');
            }
            else if(resultArray[elem]==2){
                childDiv2.appendChild(bElement);
                childDiv2.classList.add('make-child');
            }
            else if(resultArray[elem]==3){
                childDiv3.appendChild(bElement);
                childDiv3.classList.add('make-child');
            }
            else{
                childDiv4.appendChild(bElement);
                childDiv4.classList.add('make-child');
            }
        }
        else{
            childDiv1.innerHTML=questions[elem].choices[0];
            childDiv2.innerHTML=questions[elem].choices[1];
            childDiv3.innerHTML=questions[elem].choices[2];
            childDiv4.innerHTML=questions[elem].choices[3];
            bElement.innerHTML='Your Answer';
            if(resultArray[elem]==1){
                childDiv1.appendChild(bElement);
                childDiv1.classList.add('make-child');
            }
            else if(resultArray[elem]==2){
                childDiv2.appendChild(bElement);
                childDiv2.classList.add('make-child');
            }
            else if(resultArray[elem]==3){
                childDiv3.appendChild(bElement);
                childDiv3.classList.add('make-child');
            }
            else{
                childDiv4.appendChild(bElement);
                childDiv4.classList.add('make-child');
            }
            let bElem=document.createElement('b');
            bElem.innerHTML='Actual Answer';
            if(questions[elem].answer==1){
                childDiv1.appendChild(bElem);
                childDiv1.classList.add('make-child');
            }
            else  if(questions[elem].answer==2){
                childDiv2.appendChild(bElem);
                childDiv2.classList.add('make-child');
            }
            else  if(questions[elem].answer==3){
                childDiv3.appendChild(bElem);
                childDiv3.classList.add('make-child');
            }        
            else{
                childDiv4.appendChild(bElem);
                childDiv4.classList.add('make-child');
            }
        }
       
       
        divElement.appendChild(h3Element);
        divElement.appendChild(pElement);
        divElement.appendChild(childDiv1);
        divElement.appendChild(childDiv2);
        divElement.appendChild(childDiv3);
        divElement.appendChild(childDiv4);
        showResult.appendChild(divElement);
        showResult.appendChild(document.createElement('hr'));
        //showResult.appendChild('<hr>');
    }
}