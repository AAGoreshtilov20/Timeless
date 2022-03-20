var maxHints = 4;
var hints = 1;
var correct = 0;
var questions = [];
var i =  Math.trunc(Math.random() * 7);;
var check;
questions[0] = "Кое въстание избухва в Копривщица";
questions[1] =  "Кое въстание е организирано от  ВМОРО в Одринско";
questions[2] =   "То е първия масов въоражен протест на македонските българи срещу сръбския режим";
questions[3] =    "Избухва 2 месеца след междусъюзническата война";
questions[4] =     "Опит на БРЦК да организира  общо въстание";
questions[5] =      "Взима помощ от хабсбургските войски" ;
questions[6] =       "Започва по време на война за превземането на Константинопол" ;
questions[7] =        "Избухва по време на война между Османската Имерия и Полша,Венециея и Русия";
var questionNumber = 2;
var answers = [];
answers[0] =    "Априлското въстание";
answers[1] =    "Илинденско-Преображенското въстание";
answers[2] =    "Тиквешкото въстание";
answers[3] =    "Охридско-Дебърското въстание";
answers[4] =    "Старозагорското въстание";
answers[5] =    "Чипровско въстание";
answers[6] =    "Първо търновско въстание";
answers[7] =    "Второ търновско въстание";

var hintsArr = [];
hintsArr[0] = "Избухва през 1876 на 20 април"; 
hintsArr[1] = "Избухва през  1903 август 2 ";
hintsArr[2] = "Избухва при Тиквешко";
hintsArr[3] = "Въстанието е общо на българи и албанци";
hintsArr[4] = "Избухва през 1875 септември";
hintsArr[5] = "Избухва пре пролетта на 1688";
hintsArr[6] = "Избухва през 1598";
hintsArr[7] = "Избухва през 80-те години на 17 век";
function question()
{
        document.getElementById("questionText").innerHTML = questions[i];
        document.getElementById("start").innerHTML = " ";
}


function getAnswer()
{
    var answer = document.getElementById("answer").value;
    check = answers[i];
    if(answer == check)
    {
        alert("Вярно");
        correct++;
    }
    else
    {
        alert("Грешно");
    }
    
}

function nextPage()
{
        if(questionNumber < 9)
        {
            i = Math.trunc(Math.random() * 7);
            document.getElementById("questionText").innerHTML = questions[i];
            document.getElementById("start").innerHTML = " ";
            
        }

        if(maxHints > 0)
        {
            if(questionNumber < 9)
            {
                document.getElementById("question").innerHTML = questionNumber;
                questionNumber++;
                maxHints -= (1 -hints);
                hints = 1;
                document.getElementById("hints").innerHTML = hints;
                document.getElementById("maxHints").innerHTML = maxHints;
            }
            else
            {
                alert("Познахте "+ correct +" от 8!");
                return;
            }

                
        }
        else
        {

            if(questionNumber < 9)
            {
                document.getElementById("question").innerHTML = questionNumber;
                questionNumber++;
            }
            else
            {
                alert("Познахте "+ correct + " от 8!");
                return;
            }

        
        }
            

            
    }
    function useHint()
     {
        if(hints > 0)
        {
            hints -= 1;
            document.getElementById("hints").innerHTML = hints;
            document.getElementById("maxHints").innerHTML = maxHints;
            alert(hintsArr[i]);
        }
        else if(hints <= 0 && maxHints <= 0)
        {
            document.getElementById("a").innerHTML = "Използвахте всички жокери";
            document.getElementById("b").innerHTML = " ";
        }

    

    
}
