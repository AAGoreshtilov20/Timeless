var maxHints = 6;
var hints = 2;
var questionNumber = 2;
function getAnswer()
{
    var answer = document.getElementById("answer").value;

}
function nextPage()
{

    if(maxHints > 0)
    {
        document.getElementById("question").innerHTML = questionNumber;
        questionNumber++;
            maxHints -= (2 -hints);
            hints = 2;
            document.getElementById("hints").innerHTML = hints;
            document.getElementById("maxHints").innerHTML = maxHints;
    }
    else
    {
        document.getElementById("a").innerHTML = "No more hints";
        document.getElementById("b").innerHTML = " ";
    }
}
function useHint() {
    if(hints > 0)
    {
        hints -= 1;
        document.getElementById("hints").innerHTML = hints;
        document.getElementById("maxHints").innerHTML = maxHints;
    }
    else
    {
        document.getElementById("a").innerHTML = "No more hints";
        document.getElementById("b").innerHTML = " ";
    }

}
