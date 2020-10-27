Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90 
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
    }
console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BMCT4EZok/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log("Error");
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label

        if (results[0].label == "Perfect"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        else if (results[0].label == "Thumbs up"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        else if (results[0].label == "Thumbs down"){
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        else if (results[0].label == "Fingers crossed"){
            document.getElementById("update_emoji").innerHTML = "&#129310";
        }
        else if (results[0].label == "Swag"){
            document.getElementById("update_emoji").innerHTML = "&#129311";
        }
        else if (results[0].label == "stop"){
            document.getElementById("update_emoji").innerHTML = "&#129306";
        }
    }
}