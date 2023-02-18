function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IMck87tRe/model.json', modelReady);
}

function gotResults(error, results){

    console.log("Resultados OK");

    document.getElementById("result_label").innerHTML = 'Escucho: ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición; ' +results[0].confidence * 100;

    img = document.getElementById("Smiley Face");
    img1 = document.getElementById("Bill");
    img2 = document.getElementById("Shiny");
    img3 = document.getElementById("Star");

    if(results[0].label == "Aplausos"){
    img.src = "Smiley.gif";
    im1.src = " Billete.png";
    img2.src = "Star.png";
    img3.src = "Shiny.png";
  } else if( results[0].label == "Risa"){
    img1.src = "Billete.gif";
    img.src = "Smiley.png";
    img2.src = "Star.png";
    img3.src = "Shiny.png";
  } else if ( results[0].label == "Roncar"){
    img2.src = "Star.gif";
    img1.src = "Billete.png";
    img.src = "Smiley.png";
    img3.src = "Shiny.png";
  } else{
    img3.src = "Shiny.gif";
    img2.src = "Star.png";
    img1.src = "Billete.png";
    img.src = "Smiley.png";

  }
}

function modelReady(){
  classifier.classify(gotResults);
}