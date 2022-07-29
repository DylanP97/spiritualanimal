//----------

// let nbrQuestions = [1, 2, 3, 4];
// for (let question in nbrQuestions) {
//   console.log(question);
// }

const LaunchQuiz = document.getElementById("launch");
const Q1PossibleChoices = document.querySelectorAll("#Q1 button");
let Q1choice;
const Q2PossibleChoices = document.querySelectorAll("#Q2 button");
let Q2choice;
const Q3PossibleChoices = document.querySelectorAll("#Q3 button");
let Q3choice;
const Q4PossibleChoices = document.querySelectorAll("#Q4 button");
let Q4choice;
let finaldiv = document.getElementById("finaldiv");
let finalresult = document.getElementById("result");

let rnbr = Math.floor(Math.random() * 2);

//------------------------------------------------------------

LaunchQuiz.addEventListener("click", (e) => {
  document.getElementById("Q1").style.display = "flex";
  document.getElementById("presentation").style.display = "none";
});

Q1PossibleChoices.forEach((Q1PossibleChoices) =>
  Q1PossibleChoices.addEventListener("click", (e) => {
    document.getElementById("Q2").style.display = "flex";
    document.getElementById("Q1").style.display = "none";
    Q1choice = e.target.id;
  })
);

Q2PossibleChoices.forEach((Q2PossibleChoices) =>
  Q2PossibleChoices.addEventListener("click", (e) => {
    document.getElementById("Q3").style.display = "flex";
    document.getElementById("Q2").style.display = "none";
    Q2choice = e.target.id;
  })
);

Q3PossibleChoices.forEach((Q3PossibleChoices) =>
  Q3PossibleChoices.addEventListener("click", (e) => {
    document.getElementById("Q4").style.display = "flex";
    document.getElementById("Q3").style.display = "none";
    Q3choice = e.target.id;
  })
);

Q4PossibleChoices.forEach((Q4PossibleChoices) =>
  Q4PossibleChoices.addEventListener("click", (e) => {
    document.getElementById("finaldiv").style.display = "flex";
    document.getElementById("Q4").style.display = "none";
    Q4choice = e.target.id;
    result()
  })
);


//------------------------------------------------------------

function result() {
  console.log(
    Q1choice,
    Q2choice,
    Q3choice,
    Q4choice,
    rnbr
  );

  if (
    Q1choice == "1a" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4b" &&
    rnbr == 0
  ) {
    finaldiv.innerHTML = `<h2>You are a Snake</h2><br>
    <p>The serpent's meaning as a spirit animal is that of transformation and change. Few creatures embody the process of spiritual transformation so well as the snake, who must repeatedly shed its skin in order to grow. A snake is also a powerful healer and a symbol of death and rebirth.</p><br>
    <img src="https://i.pinimg.com/originals/86/9f/6e/869f6e84ae33ccae6234af79ce72c9bb.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4b" &&
    rnbr == 1
  ) {
    finaldiv.innerHTML = `<h2>You are a Fox</h2><br>
    <p>Fox symbolism and meaning include cleverness, independence, playfulness and mischievousness, beauty, protection, and good luck. Foxes inhabit every continent on Earth except Antarctica, so they appear in the mythologies and folklore of many cultures.</p><br>
    <img src="https://wallpaperaccess.com/full/6176575.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are a Bear</h2><br>
    <p>The bear spirit animal is the energy of courage that replenishes you with power. This animal will take you through any challenging situation with your head up, and it will remain to lick your wounds and make you whole again. The bear spirit animal personality makes you fearless.</p><br>
    <img src="https://img5.goodfon.com/wallpaper/nbig/7/fe/medved-les-chelovek-ptitsy-solntse.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2b" &&
    Q3choice == "3a" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are an Eagle</h2><br>
    <p>The eagle spirit animal is associated with ambition, duty, fortitude, and willpower. People who have the eagle as their spirit animal are unperturbed by life's many obstacles. They strive to achieve great heights and are rarely satisfied with anything less than the best that life has to offer.</p><br>
    <img src="https://c4.wallpaperflare.com/wallpaper/593/673/99/eagle-fantasy-art-planet-clouds-wallpaper-preview.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are a Cat</h2><br>
    <p>The cat totem meaning is of intelligence, protection, independence, agility, and curiosity. People that have it in their possession will feel the drive to enlightenment. They will have magnetism, good vibes that will draw others around them.</p><br>
    <img src="https://i.pinimg.com/736x/08/f1/ce/08f1cea5848bddf7401e666193d5185d.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2b" &&
    Q3choice == "3a" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are a Tiger</h2><br>
    <p>Tigers stand for strength, power, courage, and ambition. The animal represents a symbolic release of fears and standing for truth, justice, and integrity.</p><br>
    <img src="https://wallpaperaccess.com/full/4071845.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2a" &&
    Q3choice == "3b" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are an Owl</h2><br>
    <p>Awe-inspiring creatures, owls in particular are known to be mysterious. For them, mythology and spiritualism hold a special place in their hearts. It is common to refer to an owl as the “Night King” because of its prowess as a nocturnal hunter.</p><br>
    <img src="https://spiritualunite.b-cdn.net/articles/wp-content/uploads/2018/05/3DIY-5D-round-Diamond-Painting-Cross-Stitch-Paintings-Mosaic-Kits-Diamond-Embroidery-white-owl-forest-Pictures.jpg_640x640.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2a" &&
    Q3choice == "3b" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are a Whale</h2><br>
    <p>As a symbol of transformation, the whale spirit guide reminds you that you have the power to transform your life in extraordinary ways. No matter how deep you dive, you have the capacity to propel yourself out of the depths and into the fresh air.</p><br>
    <img src="https://w0.peakpx.com/wallpaper/33/659/HD-wallpaper-fantasy-animals-whale.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4b" &&
    rnbr == 0
  ) {
    finaldiv.innerHTML = `<h2>You are a Swan</h2><br>
    <p>The meaning of a swan is grace, beauty, love, trust, and loyalty. Swan symbolism is also linked to inner beauty and self love. A pair of swans represent soul mates for life.</p><br>
    <img src="https://worldbirds.com/wp-content/uploads/2020/05/swan-symbolism9.jpg"></img>`;
  }

  else if (
    Q1choice == "1a" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4b" &&
    rnbr == 1
  ) {
    finaldiv.innerHTML = `<h2>You are a Turtle</h2><br>
    <p>Turtle symbolism and meanings include longevity, perseverance, steadfastness, protection, retreat, healing, tranquility, the Earth, and transformation. For as long as humans have walked the Earth, there have been turtles. Thus, human beings have been telling stories about turtles for a very long time.</p><br>
    <img src="https://www.auntyflo.com/sites/default/files/styles/real_image/public/magics//turtle.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are a Raven</h2><br>
    <p>To many, ravens symbolize death or bad fortune to come, but to others they symbolize rebirth and starting anew, serving as a positive sign," says Dr. Kim. In Norse, Celtic, and Druid mythology, crows and ravens are widely viewed as beacons of intelligence.</p><br>
    <img src="https://www.spiritanimal.info/wp-content/uploads/Raven-Spirit-Animal-1.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4b" &&
    rnbr == 0
  ) {
    finaldiv.innerHTML = `<h2>You are a Bat</h2><br>
    <p>A bat as a spirit animal indicates a person who is aware of his/her own states of consciousness, inner awareness. That is why; such a person is capable of understanding the darkness of night, death, and even the world of dreams. A person with the bat as a spirit animal is the Guardian of the Night.</p><br>
    <img src="https://worldbirds.com/wp-content/uploads/2020/07/Depositphotos_286071324_s-2019.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2a" &&
    Q3choice == "3a" &&
    Q4choice == "4b" &&
    rnbr == 1
  ) {
    finaldiv.innerHTML = `<h2>You are a Beaver</h2><br>
    <p>The Beaver helps people understand the dynamics of teamwork and to appreciate each individual's talents and contributions in order to accomplish anything. He is a builder of the mind, body, and soul and symbolizes creativity, creation, cooperation, persistence and harmony.</p><br>
    <img src="https://i.pinimg.com/736x/3f/26/70/3f26704c065093c123c2ac7ef545d66e--illustration-animals-beavers.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3a" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are a Cheetah</h2><br>
    <p>Cheetah knows there is some risk in using their energy in one big burst. Every day humans also face choices with an element of chance, speculation, or uncertainty. Cheetah Spirit advises seizing the opportunities you’ve been eyeing with so much care. Sit in your place of power, and once this endeavor ends, recharge for the next great adventure.</p><br>
    <img src="https://coolwallpapers.me/th700/6123206-art-luminos-orange-tiger-animal-hope-fantasy-water-flashw-blue.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3a" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are a Wolf</h2><br>
    <p>The wolf offers some of the most striking animal meanings in the realm of spirit animals. The power of the wolf brings forth instinct, intelligence, appetite for freedom, and awareness of the importance of social connections. This animal can also symbolize fear of being threatened and lack of trust. When the wolf shows up in your life, pay attention to what your intuition is telling you.</p><br>
    <img src="https://cdn.wallpapersafari.com/73/49/TZP1R7.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3a" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are a Lion</h2><br>
    <p>Lion symbolism and meaning include majesty, courage, strength, protection, family, wisdom, and other admirable traits. People with a lion as their spirit animal can easily overcome stress by bringing themselves into alignment with the lion's energy of strength and pride of self worth. If a lion spirit animal turns up in your life, you need to step up and take the initiative.</p><br>
    <img src="https://cdn-ajpcj.nitrocdn.com/GXTAmEvbXwrCvAHWalvkWjxRhmmofTnC/assets/static/optimized/rev-be6a927/wp-content/uploads/2020/09/lion-symbolism-meanings.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2a" &&
    Q3choice == "3b" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are a Salmon</h2><br>
    <p>The Native Salmon Symbol symbolizes abundance, fertility, prosperity and renewal. For thousands of years, Salmon have been the primary food source for Northwest Coast Native Americans and are highly respected.</p><br>
    <img src="https://numeralpaint.com/wp-content/uploads/2021/03/Salmon-Fish-paint-by-number.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2a" &&
    Q3choice == "3b" &&
    Q4choice == "4a"
  ) {
    finaldiv.innerHTML = `<h2>You are an Elephant</h2><br>
    <p>Elephant traits include patience, wisdom, strength, loyalty, and strong familial bonds. If an elephant spirit animal shows up, then it means you have these traits in you. It also means that you are sensitive, nurture compassion, and value commitment.</p><br>
    <img src="https://i.pinimg.com/originals/63/88/f5/6388f5bd173fb662b60abc7e10d7d909.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4b"
  ) {
    finaldiv.innerHTML = `<h2>You are a Butterfly</h2><br>
    <p>Butterflies are beautiful and have mystery, symbolism, and meaning and are a metaphor representing spiritual rebirth, transformation, change, hope, and life. The magnificent, yet short life of the butterfly closely mirrors the process of spiritual transformation and serves to remind us that life is short.</p><br>
    <img src="https://www.millersguild.com/wp-content/uploads/2022/01/Spiritual-Meaning-of-Butterflies.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4a" &&
    rnbr == 0
  ) {
    finaldiv.innerHTML = `<h2>You are a Deer</h2><br>
    <p>As can be seen, deer symbolism varies from culture to culture. But, it typically means gentleness, awareness of surroundings, unconditional love, and mindfulness. A deer represents innocence, kindness, grace, and good luck. Seeing a deer is usually a good omen and means that your spirit guides are watching over you.</p><br>
    <img src="https://assets.puzzlefactory.pl/puzzle/325/633/original.jpg"></img>`;
  }

  else if (
    Q1choice == "1b" &&
    Q2choice == "2b" &&
    Q3choice == "3b" &&
    Q4choice == "4a" &&
    rnbr == 1
  ) {
    finaldiv.innerHTML = `<h2>You are a Dolphin</h2><br>
    <p>The dolphin spirit is a symbol of balance between the mind and soul because of its extraordinary intelligence and intuitive aptitudes. The dolphin guide has come to teach you this balance. The dolphin spirit animal meaning is of breathing and being in the present moment, living life in total awareness</p><br>
    <img src="https://media.istockphoto.com/vectors/breaching-dolphins-over-universe-vector-id1283436130?k=20&m=1283436130&s=612x612&w=0&h=tJJ6nv4YUNY33BXZ0_1_tq7dMqHwtp7Z04JgolIeMGs="></img><br>
    <img src="https://www.kindearth.net/wp-content/uploads/2018/12/Dolphin-2.jpg;"></img>`
  }

}
