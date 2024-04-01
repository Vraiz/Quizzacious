//THE CODE ITSELF IS ALREADY AN APRIL FOOLS PRANK!

import { finScreen, quiz1, quiz2, sharkTest } from "./quizobj.js"

var state = 0
var count = 0
var health = 100
var sound = 'none'
var QuizStorage


//Color
const topBar = document.getElementById("topBar")
const utilButton = document.getElementsByClassName("utilButton")
const lOption = document.getElementsByClassName("lOption")
const cOption = document.getElementsByClassName("option")
const progColor = document.getElementById("progressBar")
const bottomButton = document.getElementsByClassName("bottomButton")

const mainColor1 = $(lOption).css('background-color')
const mainColorH = $('.lOption:hover').css('background-color')

const colorArray = ["#7BD3EA", "#A1EEBD", "#FFB996", '#F6F7C4', '#756AB6', '#A5DD9B', '#FFBE98', '#F2C18D']
//Math.floor(Math.random() * 8)

//Main Menu
const links = document.getElementById("quizLinkHolder")//ShowME
//links
const iQuiz1 = document.getElementById("quiz1")
const iQuiz2 = document.getElementById("quiz2")
const SharkTest = document.getElementById("SharkTest")

//Main Question
const question = document.getElementById("QuestionHolder")//HideME
const answers = document.getElementById("AnswerHolder")//HideME
const progress = document.getElementById("progress")//HideME
const utilHolder = document.getElementById("bottomHolder")//HideME
const topUtilHOlder = document.getElementById("utilHolder")//HideME


//Question + Progress Bar
const QuesionNumber = document.getElementById("number")
const QuestionText = document.getElementById("QuestionText")

const ProgressBar = document.getElementById("progressBar")

//Answer Scale
const Scale = document.getElementById("scale")

const ScaleQ1 = document.getElementById("oneS")
const ScaleQ2 = document.getElementById("twoS")
const ScaleQ3 = document.getElementById("threeS")
const ScaleQ4 = document.getElementById("fourS")
const ScaleQ5 = document.getElementById("fiveS")

//Answer Options
const layerUP = document.getElementById("layerUP")
const layerDown = document.getElementById("layerDown")

const layerQ1 = document.getElementById("oneL")
const layerQ2 = document.getElementById("twoL")
const layerQ3 = document.getElementById("threeL")
const layerQ4 = document.getElementById("fourL")


function win() {
    $('#imgQuest').show()
    $(answers).hide()
    $(progress).hide()
    $(utilHolder).hide()
    $(topUtilHOlder).hide()
    $(QuesionNumber).text("7.")
    $(QuestionText).text('Find and click the hidden barbie doll (unlimited clicks)')
}

function win2() {
    
    $('#win').css('background-image', 'url("' + finScreen[Math.floor(Math.random()*3)] + '")')
    $('#win').show()
    $("<audio></audio>").attr({
        'src':'./Victory!.mp3',
        'volume':5,
        'autoplay':'autoplay'
    }).appendTo("body");
    localStorage.clear()
}

/*
function update() {
    let pop = Number(QuizStorage[count])
    if(pop == 1){
        $('#oneL').css("background-color", "black")
    }else if(pop == 2){
        $('#twoL').css("background-color", "black")
    }else if(pop == 3){
        $('#threeL').css("background-color", "black")
    }else if(pop == 4){
        $('#fourL').css("background-color", "black")
    }else if(pop == 5){

    }
}
*/


$(iQuiz1).click(function(){
    
    document.title = "Illogical Quiz!"
    localStorage.setItem('sound', 'none')

    $(links).hide()
    $('#disclaimer').show()
    health = 100
    localStorage.setItem('health', health)

    state = 1
    localStorage.setItem("state", state)
    $(question).show()
    $(answers).show()
    $(progress).show()
    $(utilHolder).show()
    $(topUtilHOlder).show()

    $(Scale).hide()

    $('#number').text("1.")
    $('#QuestionText').text(quiz1.Question[count])
    $('#oneL').text(quiz1.answer1[count])
    $('#twoL').text(quiz1.answer2[count])
    $('#threeL').text(quiz1.answer3[count])
    $('#fourL').text(quiz1.answer4[count])
    $('#progressBar').css("width", "100%")
}) 

$('#quiz2').click(function(){
    document.title = "Illogical Quiz!"
    localStorage.setItem('sound', 'none')

    $(links).hide()
    $('#disclaimer').show()
    health = 100
    localStorage.setItem('health', health)

    state = 2
    localStorage.setItem("state", state)
    $(question).show()
    $(answers).show()
    $(progress).show()
    $(utilHolder).show()
    $(topUtilHOlder).show()

    $(Scale).hide()

    $('#number').text("1.")
    $('#QuestionText').text(quiz2.Question[count])
    $('#oneL').text(quiz2.answer1[count])
    $('#twoL').text(quiz2.answer2[count])
    $('#threeL').text(quiz2.answer3[count])
    $('#fourL').text(quiz2.answer4[count])
    $('#progressBar').css("width", "100%")
})

/*
$('#SharkTest').click(function(){
    document.title = "Shark Test"

    $(links).hide()
    $('#disclaimer').show()

    state = 3
    localStorage.setItem("state", state)
    $(question).show()
    $(answers).show()
    $(progress).show()
    $(utilHolder).show()
    $(topUtilHOlder).show()

    $(Scale).show()
    $(layerUP).hide()
    $(layerDown).hide()

})
*/


$('#back').click(function(){
    state = 0
    count = 0
    state = localStorage.setItem('state', state)
    localStorage.setItem('count', count)
    location.reload()
})

$('#restartQuiz').click(function(){//---------------work on me later
    count = 0
    QuizStorage = []
    health = 100

    localStorage.setItem('health', health)
    quiz1.SelectedAnswer.forEach(element => {
        element = 0
    });
    localStorage.setItem('count', count)
    location.reload()
    //paste code here
})

$('#prevButton').click(function(){//---------------work on me later
    if(count != 0){
        count--
        localStorage.setItem('count', count)
        location.reload()
    }
})

$('#nextButton').click(function(){//---------------work on me later
    if(count < 5){
        count++
        localStorage.setItem('count', count)
        location.reload()
    } else if(count == 5) {
        console.log('win')
        win()
    }
})



//----------Options

$('#oneL').click(function(){
    let correct = 1
    if(quiz1.CorrectAnswer[count] == correct && state == 1 || quiz2.CorrectAnswer[count] == correct  && state == 2){
        localStorage.setItem('sound', 'r')
    }else{
        localStorage.setItem('sound', 'w')
        health = health - 10
        localStorage.setItem('health', health)
    }

    if(count < 5){
        localStorage.setItem('Quiz', QuizStorage)
        count++
        localStorage.setItem('count', count)
        location.reload()
        
    }else if(count == 5){
        console.log('win')
        win()
    }
    
    
})

$('#twoL').click(function(){
    let correct = 2
    if(quiz1.CorrectAnswer[count] == correct && state == 1 || quiz2.CorrectAnswer[count] == correct  && state == 2){
        localStorage.setItem('sound', 'r')
    }else{
        localStorage.setItem('sound', 'w')
        health = health - 10
        localStorage.setItem('health', health)
    }

    if(count < 5){
        localStorage.setItem('Quiz', QuizStorage)
        count++
        localStorage.setItem('count', count)
        location.reload()
        
    }else if(count == 5){
        console.log('win')
        win()
    }
    
})

$('#threeL').click(function(){
    let correct = 3
    if(quiz1.CorrectAnswer[count] == correct && state == 1 || quiz2.CorrectAnswer[count] == correct  && state == 2){
        localStorage.setItem('sound', 'r')
    }else{
        localStorage.setItem('sound', 'w')
        health = health - 10
        localStorage.setItem('health', health)
    }

    if(count < 5){
        localStorage.setItem('Quiz', QuizStorage)
        count++
        localStorage.setItem('count', count)
        location.reload()
        
    }else if(count == 5){
        console.log('win')
        win()
    }
    
})

$('#fourL').click(function(){
    let correct = 4
    if(quiz1.CorrectAnswer[count] == correct && state == 1 || quiz2.CorrectAnswer[count] == correct  && state == 2){
        localStorage.setItem('sound', 'r')
    }else{
        localStorage.setItem('sound', 'w')
        health = health - 10
        localStorage.setItem('health', health)
    }

    if(count < 5){
        localStorage.setItem('Quiz', QuizStorage)
        count++
        localStorage.setItem('count', count)
        location.reload()
        
    }else if(count == 5){
        console.log('win')
        win()
    }
    location.reload()
})

//---------Scales


//----------End

$('#disclaimer').click(function(){
    document.title = "Illogical Quiz!"
    $('#disclaimer').hide()
}) 

$('#win').click(function(){
    location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})

$('#imgQuest').click(function(){
    win2()
})

window.onload = async function() {
    
    $('#loader').show()
    $('#disclaimer').hide()
    $('#imgQuest').hide()
    $('#win').hide()

    let steak
    if(localStorage.getItem('state') != null){
        steak = localStorage.getItem('state')
    } else {
        steak = 0
    }
    state = Number(steak)

    if(localStorage.getItem('count') != null){
        count = Number(localStorage.getItem('count'))
    } else {
        count = 0
    }


    if(localStorage.getItem('health') != null){
        health = Number(localStorage.getItem('health'))
    } else {
        health = 100
    }
    let percentage = health.toString() + "%"
    console.log(percentage, count, state)

    if(localStorage.getItem('sound') != null){
        sound = localStorage.getItem('sound')
    } else {
        sound = 'none'
    }

    

    if (health <= 0){
        state = 0
        count = 0
        state = localStorage.setItem('state', state)
        localStorage.setItem('count', count)
        health = 100
        localStorage.setItem('health', 100)
        location.reload()
        
    }

    if (sound == "w" && count > 0){
        $("<audio></audio>").attr({
            'src':'./Wrong.wav',
            'volume':1,
            'autoplay':'autoplay'
        }).appendTo("body");
    }else if (sound == "r" && count > 0){
        $("<audio></audio>").attr({
            'src':'./Correct.mp3',
            'volume':1,
            'autoplay':'autoplay'
        }).appendTo("body");
    }


    /*
    if(localStorage.getItem('Quiz') != null && localStorage.getItem('Quiz') != undefined){
        QuizStorage = localStorage.getItem('Quiz')
        
    } else {
        console.log(state)
        switch (new Date().getDay()) {
            case 0:
                QuizStorage = []
              break;
            case 1:
                QuizStorage = quiz1.SelectedAnswer
              break;
            case 2:
                QuizStorage = quiz2.SelectedAnswer
              break;
            case 3:
                QuizStorage = sharkTest.SelectedAnswer
              break;
        }
        localStorage.setItem('Quiz', QuizStorage)
    }
    */
    
    
    let q1Color = colorArray[0]
    let q2Color = colorArray[1]
    let q3Color = colorArray[6]

    let mainColor = colorArray[Math.floor(Math.random() * 8)]

    let counter = count + 1

    if (state == 0){

        $(iQuiz1).css("background-color", q1Color)
        $(iQuiz2).css("background-color", q2Color)
        $(SharkTest).css("background-color", q3Color)
        $('#quiz3').css("background-color", colorArray[7])
        $('#quiz4').css("background-color", colorArray[2])
        $('#quiz5').css("background-color", colorArray[5])
        $('#quiz6').css("background-color", colorArray[4])

        $(question).hide()
        $(answers).hide()
        $(progress).hide()
        $(utilHolder).hide()
        $(topUtilHOlder).hide()

        
    } else if(state == 1){


        $(links).hide()
        $(question).show()
        $(answers).show()
        $(progress).show()
        $(utilHolder).show()
        $(topUtilHOlder).show()
       
        $(layerUP).show()
        $(layerDown).show()
        $(Scale).hide()

        $('#number').text((counter).toString() + ".")
        $('#QuestionText').text(quiz1.Question[count])
        $('#oneL').text(quiz1.answer1[count])
        $('#twoL').text(quiz1.answer2[count])
        $('#threeL').text(quiz1.answer3[count])
        $('#fourL').text(quiz1.answer4[count])
        $('#progressBar').css("width", percentage)//
        //update()
    
    }else if(state == 2){


        $(links).hide()
        $(question).show()
        $(answers).show()
        $(progress).show()
        $(utilHolder).show()
        $(topUtilHOlder).show()
       
        $(layerUP).show()
        $(layerDown).show()
        $(Scale).hide()

        $('#number').text((counter).toString() + ".")
        $('#QuestionText').text(quiz2.Question[count])
        $('#oneL').text(quiz2.answer1[count])
        $('#twoL').text(quiz2.answer2[count])
        $('#threeL').text(quiz2.answer3[count])
        $('#fourL').text(quiz2.answer4[count])
        $('#progressBar').css("width", percentage)//
        //update()
    
    } else if(state == 3){
        $(links).hide()

        $(question).show()
        $(answers).show()
        $(progress).show()
        $(utilHolder).show()
        $(topUtilHOlder).show()
    
        $(Scale).show()
        $(layerUP).hide()
        $(layerDown).hide()
    }
    $('#loader').hide()


}


