var x=y=z=0
//x-milisec , y-sec , z-min
var myInterval
var start
var state = false
function start_timer()
{
    x=y=z=0
    state=false
    myInterval=setInterval(myTimer,10)
    start = document.getElementById('btn1')
    start.disabled=true         //to disable the start button functionality when stopwatch has started

}

function myTimer()
{
    x=x+1
    if (x===100)
    {
        x=0
        y=y+1
        if(y===60)
        {
            y=0
            z=z+1
            if(z===60)
            {
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML = `<h1>` + String(z).padStart(2,'0')+':'+ String(y).padStart(2,'0') + `</h1>`
}

function pr_timer()
{
    state=!state              //toggle the state variable to pause/resume
    if(state===true)
    {
        clearInterval(myInterval) //stop timer
    }
    else
    {
        myInterval=setInterval(myTimer,10)   //resume timer
    }
}

function clear_timer()
{
    clearInterval(myInterval)
    x=y=z=0
    document.getElementById('result').innerHTML = `<h1>` + String(z).padStart(2,'0')+':'+ String(y).padStart(2,'0') + `</h1>`
    start.disabled=false
}