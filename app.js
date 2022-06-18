
//----------

const question1PossibleChoices = document.querySelectorAll("#alone, #group")
let question1Choice
const question2PossibleChoices = document.querySelectorAll("#leader, #follower")
let question2Choice
const question3PossibleChoices = document.querySelectorAll("#blond, #brown, #redhead, #colorful, #bald")
let question3Choice
const question4PossibleChoices = document.querySelectorAll("#fish, #normal, #noswim")
let question4Choice
const question5PossibleChoices = document.querySelectorAll("#jungle, #bird, #tropical, #countryside, #snow, #mountain")
let question5Choice


question1PossibleChoices.forEach(question1PossibleChoices => question1PossibleChoices.addEventListener('click', (e) => {
    question1Choice = e.target.id
    Q1Function()
}))

question2PossibleChoices.forEach(question2PossibleChoices => question2PossibleChoices.addEventListener('click', (e) => {
  question2Choice = e.target.id
  Q2Function()
}))

question3PossibleChoices.forEach(question3PossibleChoices => question3PossibleChoices.addEventListener('click', (e) => {
  question3Choice = e.target.id
  Q3Function()
}))

question4PossibleChoices.forEach(question4PossibleChoices => question4PossibleChoices.addEventListener('click', (e) => {
  question4Choice = e.target.id
  Q4Function()
}))

question5PossibleChoices.forEach(question5PossibleChoices => question5PossibleChoices.addEventListener('click', (e) => {
  question5Choice = e.target.id
  Q5Function()
}))


//----------

                                                      
function Q1Function () {
  
  if (question1Choice == "alone")
  {document.getElementById('Q3').style.display = "block"
  document.getElementById('Q1').style.display = "none"}
  else if (question1Choice == "group")
  {document.getElementById('Q2').style.display = "block"
  document.getElementById('Q1').style.display = "none"}
  else
  {document.getElementById('question1result').textContent = "please answer question 1"}
}


function Q2Function () {

  if (question2Choice == "leader" || "follower")
  {document.getElementById('Q3').style.display = "block"
  document.getElementById('Q2').style.display = "none"}
  else
  {document.getElementById('question2result').textContent = "please answer question 2"}
}


function Q3Function () {

  if (question3Choice == "blond" || "brown" || "redhead" || "colorful" || "bald" )
  {document.getElementById('Q4').style.display = "block"
  document.getElementById('Q3').style.display = "none"}
  else
  {document.getElementById('question3result').textContent = "please answer question 3"}
}


function Q4Function () {

  if (question4Choice == "fish" || "normal" || "noswim" )
  {document.getElementById('Q5').style.display = "block"
  document.getElementById('Q4').style.display = "none"}
  else
  {document.getElementById('question4result').textContent = "please answer question 4"}
}


function Q5Function () {

  if (question4Choice == "fish" || "normal" || "noswim" )
  {document.getElementById('Q6').style.display = "block"
  document.getElementById('Q5').style.display = "none"}
  else
  {document.getElementById('question4result').textContent = "please answer question 5"}
}





//----------
