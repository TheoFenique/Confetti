const $canvas = document.querySelector('#canvas')
const ctx = $canvas.getContext('2d')
let vector = []


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
    press : false,
    pressGeo : {x : 0, y :0},
    pressAngle : 0,
    pressLength : 0,
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
        cursorStatus.pressAngle = Math.atan2(_e.clientX - vector[0].x, _e.clientY - vector[0].y) *180 / Math.PI
        cursorStatus.pressLength = Math.hypot(_e.clientX - vector[0].x, _e.clientY - vector[0].y)
    }
    else
    {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height)
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
    
    
})


const loop = () =>
{
    window.requestAnimationFrame(loop)
    
}

loop()