export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction => {
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];
        
        const color = 'green';
        ctx.stroleStylt = color;
        ctx.font = '20px Arial';
        ctx.fillStyle = color;
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.fillText(text,x,y-2)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    });


}