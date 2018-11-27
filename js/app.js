const $canvas = document.querySelector('#canvas')
const $canvas2 = document.querySelector('#canvas-2')
const ctx = $canvas.getContext('2d')
const ctx2 = $canvas2.getContext('2d')
let vector = []
let confettisTab = []


 /* RESIZE */
const resize = () =>
{
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight
    $canvas2.width = window.innerWidth
    $canvas2.height = window.innerHeight
}
 window.addEventListener('resize', resize)
resize()


 /* CURSOR */
const cursorStatus = 
{
    x : 0,
    y : 0,
    state : 0,
    press : false,
    pressLength : 0,
    pressAngle : 0,
    speed : {x : 0, y : 0},
}

/************************** FIRST CANVAS ***/
 const drawLine = (vector) =>
{
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
    else
    {
        // ctx.clearRect(0, 0, $canvas.width, $canvas.height)
    }
})


 window.addEventListener('mousedown', (_e) =>
{
    // reset()
    cursorStatus.press = true
    cursorStatus.state = 1
    
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
    cursorStatus.state = 2
    
    const x = _e.clientX
    const y = _e.clientY
     vector[1] = {
        x,
        y
    }
})

const reset = () =>
{
    vector[0] = {x : 0, y : 0}
    vector[1] = {x : 0, y : 0}
}

 const loop = () =>
{
    ctx.clearRect(0,0, $canvas.width, $canvas.height)
    
    window.requestAnimationFrame(loop)
    if(cursorStatus.state === 2)
    {
        cursorStatus.pressLength = Math.hypot(vector[1].x - vector[0].x, vector[0].y - vector[0].y)
        cursorStatus.pressAngle = Math.atan2(vector[0].y - vector[1].y, vector[0].x - vector[1].x)
        cursorStatus.speed.x = (Math.cos(cursorStatus.pressAngle))
        cursorStatus.speed.y = (Math.sin(cursorStatus.pressAngle))
        
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))  
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))  
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))  
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        }))  
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        confettisTab.push(new Confetti({
            context : ctx,
            width   : $canvas.width, 
            height  : $canvas.height,
            x  : vector[0].x,
            y : vector[0].y,
            angle   : cursorStatus.pressAngle,
            length  : cursorStatus.pressLength,
            speedX  : cursorStatus.speed.x,
            speedY  : cursorStatus.speed.y
        })) 
        
    }
    for(_confetti of confettisTab)
    {
        _confetti.draw()
    }
    confettisTab = confettisTab.filter(_confetti => !_confetti.isOut)

    cursorStatus.state = 0
}
loop() 

