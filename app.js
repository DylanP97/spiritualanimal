
//----------

const questionAPossibleChoices = document.querySelectorAll("#fish, #bird, #tropical, #countryside, #snow")
let questionAChoice

questionAPossibleChoices.forEach(questionAPossibleChoices => questionAPossibleChoices.addEventListener('click', (e) => {
    questionAChoice = e.target.id
    document.getElementById('Q1').style.display = "none"
    Quiz()
}))


                                                      
function Quiz () {
  if (questionAChoice == "fish")
  {document.getElementById('Q3').style.display = "block"}
  else if (questionAChoice == "bird") {document.getElementById('Q2').style.display = "block"}
  else
{document.getElementById('questionAresult').textContent = "please answer"}
}



