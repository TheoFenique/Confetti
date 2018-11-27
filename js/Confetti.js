class Confetti
{
    constructor(_options)
    {
        this.ctx    = _options.context
        this.width  = _options.width
        this.height = _options.height
        this.x      = _options.x
        this.y      = _options.y
        this.radius = Math.random()* 10 + 10
        this.angle  = _options.angle
        this.length = _options.length
        this.speedX = (_options.speedX + Math.random() -0.5) * 0.9
        if(this.speedX == 1)
        {
            this.speedX = 0
        }
        this.speedY = (_options.speedY + Math.random() - 0.5) 
        this.color = `hsl(${Math.random() * 360}, 80%, 50%)`
        console.log(this.speedY)
    }

    draw()
    {

        if(this.x < - this.radius || 
           this.x > this.width ||
           this.y < - this.radius ||
           this.y > this.height)
        {
            this.isOut = true
        }

        this.speedX /= 1.1
        this.speedY = (this.speedY / 1.1) + 0.009

        if(this.length < 20)
        {
            this.length = (Math.random() - 0.5) * 30
        }
        this.x += this.speedX * (this.length * 0.2)
        this.y += this.speedY * (this.length * 0.15) + 1
        

        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.radius, this.radius)
        this.ctx.fillStyle = this.color
        this.ctx.globalCompositeOperation = 'alpha'
        this.ctx.fill()
        this.ctx.restore()
    }
}