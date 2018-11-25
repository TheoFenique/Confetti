class Confetti
{
    constructor(_options)
    {
        this.vector  = _options.vector
        this.length  = Math.hypot(vector[1].y - vector[0].y, vector[1].x -vector[0].x)
        this.ctx     = _options.context
        this.width   = _options.width
        this.height  = _options.height
        this.gravity = _options.gravity

        this.speed   = {}
        this.angle   = Math.atan2(vector[0].y - vector[1].y, vector[0].x -vector[1].x)
        this.speed.x = (Math.cos(this.angle)) * this.length / 75
        this.speed.y = (Math.sin(this.angle)) * this.length / 75

        this.radius  = Math.random() +10
        this.color   = `hsl(${Math.random() *360}, 80%, 50%)`

        this.isOut   = false

    }

    draw()
    {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height)
        if(this.vector[0].x < - this.radius || 
           this.vector[0].x > this.width ||
           this.vector[0].y < - this.radius ||
           this.vector[0].y > this.height)
        {
            this.isOut = true
            this.speed.x = 0
            this.speed.y = 0
        }

        this.vector[0].x += this.speed.x 
        this.vector[0].y += (this.speed.y * 0.9)

        

        this.ctx.save()

        this.ctx.beginPath()
        this.ctx.rect(this.vector[0].x, this.vector[0].y, this.radius, this.radius)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.restore()
    }
}