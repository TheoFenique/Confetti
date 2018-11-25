const $canvas = document.querySelector('#canvas')
const ctx = $canvas.getContext('2d')
let vector = []
let confettisTab = []


/* RESIZE */
const resize = () =>
{
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
}
window.addEventListener('resize', resize)
resize()


/* CURSOR */
const cursorStatus = {
    x : 0,
    y : 0,
    press : false
}

const drawLine = (vector) =>
{
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
    ctx.beginPath()
    ctx.moveTo(vector[0].x, vector[0].y)
    ctx.lineTo(cursorStatus.x, cursorStatus.y)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#fff'
    ctx.stroke()
}

window.addEventListener('mousemove', (_e) =>
{
    cursorStatus.x = _e.clientX
    cursorStatus.y = _e.clientY

    if(cursorStatus.press)
    {
        drawLine(vector)
    }
})

window.addEventListener('mousedown', (_e) =>
{
    cursorStatus.press = true
    const x = _e.clientX
    const y = _e.clientY

    vector[0] = {
        x,
        y
    } 

    
   
})

window.addEventListener('mouseup', (_e) =>
{
    cursorStatus.press = false
    const x = _e.clientX
    const y = _e.clientY

    vector[1] = {
        x,
        y
    }
    
    confettisTab.push(new Confetti({
        vector  : vector,
        angle   : cursorStatus.angle,
        length  : cursorStatus.length,
        context : ctx,
        width   : $canvas.width, 
        height  : $canvas.height
    }))
    console.log(confettisTab)
})


/* CONFETTIS */



/* ANIMATION */
const loop = () =>
{
    window.requestAnimationFrame(loop)
    for(const _confetti of confettisTab)
    {
        _confetti.draw()
        if(_confetti.vector[0].y > $canvas.height)
        {
            _confetti.speed.y = window.height
            console.log('touché')
        }
    }
    confettisTab = confettisTab.filter(_confetti => !_confetti.isOut)
} 

loop()
