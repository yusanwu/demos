class Sky{
    constructor(props){}
    static get inputProperties(){
        return ['--star-density', '--star-opacity'];
    }
    paint(ctx, geom, properties){
        const xMax = geom.width;
        const yMax = geom.height;
        ctx.fillRect(0,0,xMax,yMax);
        // 设置星星密度
        const starDensity = properties.get('--star-density').toString() || 1;
        // 设置星星透明度
        const starOpacity = properties.get('--star-opacity').toString() || 1;
        // 设置星星数量
        const hmTimes = Math.round((xMax + yMax) * starDensity);
        for(let i = 0; i <= hmTimes; i++){
            const x = Math.floor(Math.random() * xMax + 1); 
            const y = Math.floor(Math.random() * yMax + 1);
            const size = Math.floor(Math.random() * 2 + 1);
            const hue = Math.floor(Math.random() * 360 + 1);
            const opacity1 = Math.floor(Math.random() * 9 + 1);
            const opacity2 = Math.floor(Math.random() * 9 + 1);
            const opacity = +("."+(opacity1+opacity2)) * starOpacity;
            ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`; 
            ctx.fillRect(x, y, size, size);
        }
    }
}
registerPaint('sky', Sky);