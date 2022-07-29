
//----------

const LaunchQuiz = document.getElementById("launch")

const virus = document.getElementById("virus")

console.log(virus)


const question1PossibleChoices = document.querySelectorAll("#alone, #group")
let question1Choice
const question2PossibleChoices = document.querySelectorAll("#independant, #follower")
let question2Choice
const question3PossibleChoices = document.querySelectorAll("#revenge, #wisdom")
let question3Choice
const question4PossibleChoices = document.querySelectorAll("#swim, #normalswim")
let question4Choice
const question5PossibleChoices = document.querySelectorAll("#freedom, #love")
let question5Choice
const question6PossibleChoices = document.querySelectorAll("#bravery, #elegance, #intelligence")
let question6Choice

let RatBollean = false

let finaldiv = document.getElementById("finaldiv")
let finalresult = document.getElementById("result")

//------------------------------------------------------------


LaunchQuiz.addEventListener('click', (e) => {
  document.getElementById('Q1').style.display = "flex"
  document.getElementById('presentation').style.display = "none"
})

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

question6PossibleChoices.forEach(question6PossibleChoices => question6PossibleChoices.addEventListener('click', (e) => {
  question6Choice = e.target.id
  Q6Function()
}))



virus.addEventListener('click', (e) => {
  document.getElementById('virus').style.display = "none";
  document.getElementById('presentation').style.display = "none";
  document.getElementById('Q1').style.display = "none";
  document.getElementById('Q2').style.display = "none";
  document.getElementById('Q3').style.display = "none";
  document.getElementById('Q4').style.display = "none";
  document.getElementById('Q5').style.display = "none";
  document.getElementById('Q6').style.display = "none";
  document.getElementById('finaldiv').style.display = "flex";
  finaldiv.innerHTML = `<h2>Vous êtes un rat c'est pas possible, honte à vous !</h2><br><p>Il fallait pas cliquer...</p><br><img src="https://cdn.mos.cms.futurecdn.net/7GCPeSkqz3duhcXkg7E6H7-320-80.jpg"></img>`
  RatBollean = true;
})

//------------------------------------------------------------

                                                      
function Q1Function () {
  
  if (question1Choice == "alone")
  {document.getElementById('Q3').style.display = "flex"
  document.getElementById('Q1').style.display = "none"}
  else if (question1Choice == "group")
  {document.getElementById('Q2').style.display = "flex"
  document.getElementById('Q1').style.display = "none"}
  else
  {document.getElementById('question1result').textContent = "please answer question 1"}
}


function Q2Function () {

  if (question2Choice == "leader" || "follower")
  {document.getElementById('Q3').style.display = "flex"
  document.getElementById('Q2').style.display = "none"}
  else
  {document.getElementById('question2result').textContent = "please answer question 2"}
}


function Q3Function () {

  if (question3Choice == "revenge" || "wisdom" )
  {document.getElementById('Q4').style.display = "flex"
  document.getElementById('Q3').style.display = "none"}
  else
  {document.getElementById('question3result').textContent = "please answer question 3"}
}


function Q4Function () {

  if (question4Choice == "swim" || "normalswim" )
  {document.getElementById('Q5').style.display = "flex"
  document.getElementById('Q4').style.display = "none"}
  else
  {document.getElementById('question4result').textContent = "please answer question 4"}
}


function Q5Function () {

  if (question5Choice == "freedom" || "love" )
  {document.getElementById('Q6').style.display = "flex"
  document.getElementById('Q5').style.display = "none"}
  else
  {document.getElementById('question4result').textContent = "please answer question 5"}
}


function Q6Function () {

  if (question6Choice == "bravery" || "elegance" || "intelligence" )
  {document.getElementById('finaldiv').style.display = "flex"
  document.getElementById('Q6').style.display = "none";
  console.log(question1Choice, question2Choice, question3Choice, question4Choice, question5Choice, question6Choice);
  result ()
  } 
  else
  {document.getElementById('question4result').textContent = "please answer question 6"}
}


//------------------------------------------------------------


function result (){
  if (question1Choice == "alone" && question3Choice == "revenge" && question4Choice == "swim" && question5Choice == "freedom" && question6Choice == "intelligence"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes un requin !</h2><br><p>Vous en traumatisez plus d'un, vous êtes un requin de la finance, vous êtes prêt à marcher sur les autres pour être le roi de l'océan</p><br><img src="https://www.whio.com/resizer/ozWUUxuQbQgFDwDqzwO28EU3Q-A=/arc-anglerfish-arc2-prod-cmg/public/L2AFTXFSV5H35BUB57DOUS64XI.jpg"></img>`
  }

  else if (question1Choice == "alone" && question3Choice == "revenge" && question4Choice == "normalswim" && question5Choice == "freedom" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes un aigle !</h2><br><p>Vous êtes le roi des airs, vous maitrîser la zone entre terre et ciel, vous êtes majustueux avec vos ailes, et êtes un symbole pour plus d'un (en parlant des oiseaux)!</p><br><img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306062281/1800"></img>`
  }

  else if (question1Choice == "alone" && question3Choice == "wisdom" && question4Choice == "normalswim" && question5Choice == "love" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes un koala !</h2><br><p>Vous êtes un charmant et très tranquille esprit, vous aimez les autres mais vous préférez néanmoins rester tranquille seul à manger des tiges de bamboux !</p><br><img src="https://cdn.shopify.com/s/files/1/0248/5072/6963/articles/Koala.jpg?v=1646049536"></img>`
  }

  else if (question1Choice == "alone" && question3Choice == "wisdom" && question4Choice == "swim" && question5Choice == "freedom" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes une tortue !</h2><br><p>Vous adorez être dans votre monde c'est à dire l'océan et puis vous aimez être tranquille, vous prenez votre temps dans vos tâches, vous adorez collaborer avec Windows pour les fonds d'écran d'ordinateurs</p><br><img src="https://worldbirds.com/wp-content/uploads/2020/05/turtle5.jpg"></img>`
  }

  else if (question1Choice == "group" && question3Choice == "wisdom" && question4Choice == "normalswim" && question5Choice == "love" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes un cerf !</h2><br><p>Vous êtes magnifique et pure, vous vivez d'amour et d'eau fraîche, vous êtes magique et vous traverser les autoroutes (faîtes attention)</p><br><img src="https://www.millersguild.com/wp-content/uploads/2022/01/deer-spiritual-meaning.jpg"></img>`
  }

  else if (question1Choice == "alone" && question3Choice == "revenge" && question4Choice == "normalswim" && question5Choice == "love" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes une panthère !</h2><br><p>Vous avez faim et vous faites tout pour arrivez à vos fins </p><br><img src="https://thewildlifetour.com/wp-content/uploads/2021/02/IMG-9178-1200x675.jpg"></img>`
  }

  else if (question1Choice == "group" && question2Choice == "follower" && question3Choice == "wisdom" && question4Choice == "swim" && question5Choice == "freedom" && question6Choice == "intelligence"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes une loutre !</h2><br><p>Vous aimez passez votre journée à vous amusez, cela est comme une seconde nature d'être libre. Toutefois, vous faîtes preuve de compassion avec vos semblables dans les moments difficiles</p><br><img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"></img>`
  }
  else if (question1Choice == "group" && question2Choice == "independant" && question3Choice == "wisdom" && question4Choice == "normalswim" && question5Choice == "freedom" && question6Choice == "elegance"){
    finaldiv.innerHTML = `<h2>Bravo vous êtes un cheval ! </h2><br><p>Vous êtes l'étalon des plaines, vous insipirez la liberté !</p><br><img src="https://wallpaperaccess.com/full/3776010.jpg"></img>`
  }

  // else if (question1Choice == " " && question2Choice == " " && question3Choice == " " && question4Choice == " " && question5Choice == " " && question6Choice == " "){
  //   finaldiv.innerHTML = `<h2> </h2><br><p></p><br><img src=" "></img>`
  // }

  // else if (question1Choice == " " && question2Choice == " " && question3Choice == " " && question4Choice == " " && question5Choice == " " && question6Choice == " "){
  //   finaldiv.innerHTML = `<h2> </h2><br><p></p><br><img src=" "></img>`
  // }

  // else if (question1Choice == " " && question2Choice == " " && question3Choice == " " && question4Choice == " " && question5Choice == " " && question6Choice == " "){
  //   finaldiv.innerHTML = `<h2> </h2><br><p></p><br><img src=" "></img>`
  // }


}


