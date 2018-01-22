// GLOBAL INIT
const $canvas = document.querySelector('#canvas')
const $canvasBis = document.querySelector('#canvas2')
const ctx = $canvas.getContext('2d')
const ctx_bis = $canvasBis.getContext('2d')
const audio = document.querySelector('audio')

/* Day Cycle */
const lh_stroke = `#ae6c6c`
const lh_fill = `#efefef`
const lh_red = `#e58989`
const waves = 
        ['rgba(99, 128, 191, 0.5)',
        'rgba(128, 170, 221, 0.5)',
        'rgba(99, 148, 191, 0.5)',
        'rgba(99, 119, 191, 0.5)',
        'rgba(194, 212, 234, 0.5)']

        
/* Night Cycle */
const lh_stroke_bis = `#5f3a3a`
const lh_fill_bis = `#fcfcfc56`
const lh_lamp_bis = `#ffd100`
const lh_red_bis = `#8f5656`
const waves_bis = 
        ['rgba(57, 85, 138, 0.5)',
        'rgba(51, 89, 133, 0.5)',
        'rgba(57, 93, 134, 0.5)',
        'rgba(50, 94, 133, 0.5)',
        'rgba(63, 84, 107, 0.5)']
const clear = () => {
    ctx_bis.clearRect(0, 0, $canvasBis.width, $canvasBis.height)
}


const bg = () => {
    grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 400.000)
    grd.addColorStop(0.000, 'rgba(99, 128, 191, 1)')
    grd.addColorStop(0.495, 'rgba(128, 170, 221, 1)')
    grd.addColorStop(1.000, 'rgba(194, 212, 234, 1)')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, 500, 300)
}

const fx = () => {
    grd2 = ctx.createRadialGradient(200.000, 200.000, 0.000, 200.000, 200.000, 220.000)
    grd2.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    grd2.addColorStop(1.000, 'rgba(0, 0, 0, 0.2)')
    ctx.fillStyle = grd2
    ctx.fillRect(0, 0, 400.000, 400.000)
}


// LIGHTHOUSE (Day Cycle)
/* Usual way to draw : from bot to top */
const lighthouse = () => {
    /* Support */
    ctx.fillStyle = lh_fill
    ctx.strokeStyle = lh_stroke    
    ctx.beginPath()
    ctx.moveTo(130, 300)
    ctx.lineTo(125, 320)
    ctx.lineTo(275, 320)
    ctx.lineTo(270, 300)
    ctx.closePath()

    ctx.lineWidth = 5
    ctx.lineJoin = 'round'

    ctx.fill()
    ctx.stroke()


    /* Body */
    ctx.fillStyle = lh_fill
    ctx.beginPath()
    ctx.moveTo(150, 300)
    ctx.lineTo(165, 135)
    ctx.lineTo(235, 135)
    ctx.lineTo(250, 300)
    ctx.closePath()

    ctx.fill()
    ctx.stroke()

    /* Body_RedBanner #1 */
    ctx.fillStyle = lh_red
    ctx.beginPath()
    ctx.moveTo(150, 299)
    ctx.lineTo(152, 269)
    ctx.lineTo(246, 259)
    ctx.lineTo(248, 289)
    ctx.closePath()

    ctx.fill()

    /* Body_RedBanner #2 */    
    ctx.beginPath()
    ctx.moveTo(155, 239)
    ctx.lineTo(157, 209)
    ctx.lineTo(241, 199)
    ctx.lineTo(243, 229)
    ctx.closePath()

    ctx.fill()

    /* Body_RedBanner #3 */   
    ctx.beginPath()
    ctx.moveTo(159, 179)
    ctx.lineTo(163, 149)
    ctx.lineTo(236, 139)
    ctx.lineTo(239, 169)
    ctx.closePath()

    ctx.fill()

    /* Body_Window #1 */
    ctx.fillStyle = 'rgba(194, 212, 234, 0.8)'
    ctx.beginPath()
    ctx.moveTo(195, 200)
    ctx.lineTo(195, 223)
    ctx.lineTo(205, 223)
    ctx.lineTo(205, 200)

    ctx.lineWidth = 10
    ctx.lineJoin = 'round'

    ctx.stroke()
    ctx.fill()

    /* Body_Window #2 */
    ctx.beginPath()
    ctx.arc(200, 200, 5, Math.PI, false)

    ctx.stroke()
    ctx.fill()

    /* Body_Window_Reflects */
    ctx.fillStyle = '#f7f7f78a'
    ctx.beginPath()
    ctx.moveTo(195, 213)
    ctx.lineTo(205, 200)
    ctx.lineTo(205, 213)
    ctx.lineTo(200, 218)
    ctx.lineTo(195, 218)
    ctx.closePath()

    ctx.fill()

    /* Body_Sill */
    ctx.fillStyle = lh_fill
    ctx.beginPath()
    ctx.moveTo(185, 230)
    ctx.lineTo(215, 230)
    ctx.lineTo(210, 223)
    ctx.lineTo(190, 223)
    ctx.closePath()

    ctx.lineWidth = 10
    ctx.lineJoin = 'round'
    
    ctx.stroke()
    ctx.fill()

    /* Body_Stroke */
    ctx.beginPath()
    ctx.moveTo(150, 300)
    ctx.lineTo(165, 135)
    ctx.lineTo(235, 135)
    ctx.lineTo(250, 300)
    ctx.closePath()

    ctx.lineWidth = 5
    ctx.lineJoin = 'round'

    ctx.stroke()


    /* Beam #1 */
    ctx.beginPath()
    ctx.moveTo(150, 135)
    ctx.lineTo(250, 135)
    ctx.lineTo(248, 120)
    ctx.lineTo(152, 120)
    ctx.closePath()

    ctx.fill()
    ctx.stroke()


    /* Lamp */
    ctx.fillStyle = 'rgba(194, 212, 234, 0.8)'
    ctx.beginPath()
    ctx.moveTo(165, 120)
    ctx.lineTo(235, 120)
    ctx.lineTo(235, 100)
    ctx.lineTo(165, 100)
    ctx.closePath()

    ctx.fill()

    /* Lamp_Reflects #1 */
    ctx.fillStyle = '#f7f7f78a'    
    ctx.beginPath()
    ctx.moveTo(175, 120)
    ctx.lineTo(180, 120)
    ctx.lineTo(190, 100)
    ctx.lineTo(185, 100)

    ctx.fill()

    /* Lamp_Reflects #2 */
    ctx.fillStyle = '#f7f7f78a'    
    ctx.beginPath()
    ctx.moveTo(185, 120)
    ctx.lineTo(197, 120)
    ctx.lineTo(207, 100)
    ctx.lineTo(195, 100)

    ctx.fill()

    /* Lamp_Stroke */
    ctx.beginPath()
    ctx.moveTo(165, 120)
    ctx.lineTo(235, 120)
    ctx.lineTo(235, 100)
    ctx.lineTo(165, 100)
    ctx.closePath()

    ctx.stroke()

    /* Lamp_Stroke_Bar */
    ctx.beginPath(185, 120)
    ctx.lineTo(185, 120)
    ctx.lineTo(185, 100)
    ctx.lineTo(215, 100)
    ctx.lineTo(215, 120)

    ctx.lineWidth = 3

    ctx.stroke()


    /* Beam #2 */
    ctx.fillStyle = lh_fill    
    ctx.beginPath()
    ctx.moveTo(155, 100)
    ctx.lineTo(245, 100)
    ctx.lineTo(243, 85)
    ctx.lineTo(157, 85)
    ctx.closePath()

    ctx.lineWidth = 5    

    ctx.fill()
    ctx.stroke()


    /* Hat */
    ctx.fillStyle = lh_red   
    ctx.beginPath()
    ctx.arc(200, 110, 45, Math.PI * 1.2, Math.PI * 1.8, false)

    ctx.fill()
    ctx.stroke()

    
    /* Cherry on the cake */
    ctx.beginPath()
    ctx.arc(200, 55, 10, Math.PI * 2, false)

    ctx.fill()
    ctx.stroke()
}


// WAVES ANIMATION (Day Cycle)
let i = 0
const drawWaves = () => {
    for (let j = waves.length - 1; j >= 0; j--) {
        let offset = i + j * Math.PI * 50
        ctx.fillStyle = (waves[j])
        ctx.beginPath()
        ctx.moveTo(0, (Math.sin(offset / 100) + 1) / 2 * 50 + 285)
        ctx.lineTo(400, (Math.sin((offset / 100) + 10) + 1) / 2 * 50 + 285)
        ctx.lineTo(0, 700)
        ctx.fill()
    }
    i = i + 3
}
setInterval('drawWaves()', 100)


const bg_bis = () => {
    ctx_bis.fillStyle = '#ff8079'
    grd = ctx_bis.createLinearGradient(150.000, 0.000, 150.000, 400.000)
    grd.addColorStop(0.000, 'rgba(45, 38, 79, 1.000)')
    grd.addColorStop(1.000, 'rgba(42, 93, 145, 1.000)')
    ctx_bis.fillStyle = grd    
    ctx_bis.fillRect(0, 0, 500, 300)
}

const fx_bis = () => {
    grd2 = ctx_bis.createRadialGradient(200.000, 200.000, 0.000, 200.000, 200.000, 220.000);
    grd2.addColorStop(0, 'rgba(255, 255, 255, 0)')
    grd2.addColorStop(1.000, 'rgba(0, 0, 0, 0.2)')
    ctx_bis.fillStyle = grd2
    ctx_bis.fillRect(0, 0, 400.000, 400.000)
}


// LIGHTHOUSE (Night Cycle)
/* Still the same way to draw (bot to top) w/ minor exceptions, for layers cohesion */
const lighthouse_bis = () => {
    /* Lamp */
    ctx_bis.save()
    ctx_bis.fillStyle = 'rgba(194, 212, 234, 0.3)'    
    ctx_bis.beginPath()
    if (lamp) {     /* call the keypress function */
        ctx_bis.fillStyle = lh_lamp_bis
        ctx_bis.shadowColor = lh_lamp_bis
        ctx_bis.shadowBlur = 150
    }
    ctx_bis.moveTo(165, 120)
    ctx_bis.lineTo(235, 120)
    ctx_bis.lineTo(235, 100)
    ctx_bis.lineTo(165, 100)
    ctx_bis.closePath()

    ctx_bis.fill()
    ctx_bis.restore()

    /* Lamp_Reflects #1*/
    ctx_bis.fillStyle = '#f7f7f78a'    
    ctx_bis.beginPath()
    ctx_bis.moveTo(175, 120)
    ctx_bis.lineTo(180, 120)
    ctx_bis.lineTo(190, 100)
    ctx_bis.lineTo(185, 100)

    ctx_bis.fill()
    
    /* Lamp_Reflects #2 */
    ctx_bis.fillStyle = '#f7f7f78a'    
    ctx_bis.beginPath()
    ctx_bis.moveTo(185, 120)
    ctx_bis.lineTo(197, 120)
    ctx_bis.lineTo(207, 100)
    ctx_bis.lineTo(195, 100)

    ctx_bis.fill()

    /* Lamp_Stroke */
    ctx_bis.beginPath()
    ctx_bis.moveTo(165, 120)
    ctx_bis.lineTo(235, 120)
    ctx_bis.lineTo(235, 100)
    ctx_bis.lineTo(165, 100)
    ctx_bis.closePath()

    ctx_bis.stroke()

    /* Lamp_Stroke_Bar */
    ctx_bis.strokeStyle = lh_stroke_bis
    ctx_bis.beginPath(185, 120)
    ctx_bis.lineTo(185, 120)
    ctx_bis.lineTo(185, 100)
    ctx_bis.lineTo(215, 100)
    ctx_bis.lineTo(215, 120)
    ctx_bis.lineWidth = 3
    ctx_bis.lineJoin = 'round'

    ctx_bis.stroke()


    /* Support */
    ctx_bis.fillStyle = lh_fill_bis
    ctx_bis.strokeStyle = lh_stroke_bis    
    ctx_bis.beginPath()
    ctx_bis.moveTo(130, 300)
    ctx_bis.lineTo(125, 320)
    ctx_bis.lineTo(275, 320)
    ctx_bis.lineTo(270, 300)
    ctx_bis.closePath()
    
    ctx_bis.lineWidth = 5
    ctx_bis.lineJoin = 'round'

    ctx_bis.fill()
    ctx_bis.stroke()


    /* Body */
    ctx_bis.fillStyle = lh_fill_bis
    ctx_bis.strokeStyle = lh_stroke_bis    
    ctx_bis.beginPath()
    ctx_bis.moveTo(150, 300)
    ctx_bis.lineTo(165, 135)
    ctx_bis.lineTo(235, 135)
    ctx_bis.lineTo(250, 300)
    ctx_bis.closePath()

    ctx_bis.lineWidth = 5
    ctx_bis.lineJoin = 'round'

    ctx_bis.fill()
    ctx_bis.stroke()

    /* Body_RedBanner #1 */
    ctx_bis.fillStyle = lh_red_bis
    ctx_bis.beginPath()
    ctx_bis.moveTo(150, 299)
    ctx_bis.lineTo(152, 269)
    ctx_bis.lineTo(246, 259)
    ctx_bis.lineTo(248, 289)
    ctx_bis.closePath()

    ctx_bis.fill()

    /* Body_RedBanner #2 */
    ctx_bis.beginPath()
    ctx_bis.moveTo(155, 239)
    ctx_bis.lineTo(157, 209)
    ctx_bis.lineTo(241, 199)
    ctx_bis.lineTo(243, 229)
    ctx_bis.closePath()

    ctx_bis.fill()

    /* Body_RedBanner #3 */
    ctx_bis.beginPath()
    ctx_bis.moveTo(159, 179)
    ctx_bis.lineTo(163, 149)
    ctx_bis.lineTo(236, 139)
    ctx_bis.lineTo(239, 169)
    ctx_bis.closePath()

    ctx_bis.fill()

    /* Body_Window #1 */
    ctx_bis.save()
    ctx_bis.fillStyle = 'rgb(95, 105, 140)'    
    ctx_bis.beginPath()
    if (lamp) {     /* call the keypress function */
        ctx_bis.fillStyle = lh_lamp_bis
        ctx_bis.shadowColor = lh_lamp_bis
        ctx_bis.shadowBlur = 150
    }
    ctx_bis.moveTo(195, 200)
    ctx_bis.lineTo(195, 223)
    ctx_bis.lineTo(205, 223)
    ctx_bis.lineTo(205, 200)
    ctx_bis.lineWidth = 10
    ctx_bis.lineJoin = 'round'

    ctx_bis.stroke()
    ctx_bis.fill()

    /* Body_Window #2 */
    ctx_bis.beginPath()
    ctx_bis.arc(200, 200, 5, Math.PI, false)

    ctx_bis.stroke()
    ctx_bis.fill()
    ctx_bis.restore()

    /* Body_Window_Reflects */
    ctx_bis.fillStyle = '#f7f7f78a'
    ctx_bis.beginPath()
    ctx_bis.moveTo(195, 213)
    ctx_bis.lineTo(205, 200)
    ctx_bis.lineTo(205, 213)
    ctx_bis.lineTo(200, 218)
    ctx_bis.lineTo(195, 218)
    ctx_bis.closePath()

    ctx_bis.fill()

    /* Body_Sill */
    ctx_bis.fillStyle = lh_fill_bis
    ctx_bis.beginPath()
    ctx_bis.moveTo(185, 230)
    ctx_bis.lineTo(215, 230)
    ctx_bis.lineTo(210, 223)
    ctx_bis.lineTo(190, 223)
    ctx_bis.closePath()

    ctx_bis.lineWidth = 10
    ctx_bis.lineJoin = 'round'
    
    ctx_bis.stroke()
    ctx_bis.fill()


    /* Body_Stroke */
    ctx_bis.beginPath()
    ctx_bis.moveTo(150, 300)
    ctx_bis.lineTo(165, 135)
    ctx_bis.lineTo(235, 135)
    ctx_bis.lineTo(250, 300)
    ctx_bis.closePath()

    ctx_bis.lineWidth = 5
    ctx_bis.lineJoin = 'round'

    ctx_bis.stroke()


    /* Beam #1 */
    ctx_bis.beginPath()
    ctx_bis.moveTo(150, 135)
    ctx_bis.lineTo(250, 135)
    ctx_bis.lineTo(248, 120)
    ctx_bis.lineTo(152, 120)
    ctx_bis.closePath()

    ctx_bis.fill()
    ctx_bis.stroke()


    /* Beam #2 */
    ctx_bis.beginPath()
    ctx_bis.moveTo(155, 100)
    ctx_bis.lineTo(245, 100)
    ctx_bis.lineTo(243, 85)
    ctx_bis.lineTo(157, 85)
    ctx_bis.closePath()

    ctx_bis.fill()
    ctx_bis.stroke()


    /* Hat */
    ctx_bis.fillStyle = lh_red_bis    
    ctx_bis.beginPath()
    ctx_bis.arc(200, 110, 45, Math.PI * 1.2, Math.PI * 1.8, false)

    ctx_bis.fill()
    ctx_bis.stroke()


    /* Cherry on the cake (although this one is a lie) */
    ctx_bis.beginPath()
    ctx_bis.arc(200, 55, 10, Math.PI * 2, false)

    ctx_bis.fill()
    ctx_bis.stroke()
}


// Turn on the light
let lamp = false

// Turn on the snow
let snow = false
const flakes = []

// Detect keyboard press : N to toggle the snow ; T to toggle the lamp
const detectKeys = () => {
    document.onkeydown = function (event) {
        if (event.keyCode == 83) {
            if (snow) {
                snow = false
            } else {
                snow = true
            }
        } else if (event.keyCode == 84) {
            if (lamp) {
                lamp = false
            } else {
                lamp = true
            }
        }
    }
}


// SNOW CREATION
const drawSnow = () => {
    let flake = {}
    if (snow) {
        /* Create new flakes */
        flake.x = Math.random() * $canvasBis.width
        flake.y = -5
        flake.radius = Math.random() * 4.5 + 0.5
        flake.speed = Math.random() * 5 + 1
        flakes.push(flake)
    }

    /* Draw all the flakes currently in the flakes table */
    for(const flake of flakes)
    {
        ctx_bis.save()
        ctx_bis.beginPath()
        ctx_bis.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx_bis.fillStyle = 'rgba(256, 256, 256, 0.4)'
        /* Blur makes it better but too much perfs issues */
        // ctx_bis.shadowColor = 'rgb(256, 256, 256)'
        // ctx_bis.shadowBlur = 30
        ctx_bis.fill()
        ctx_bis.restore()
    }

    /* Update flakes pos and remove flakes outside of the canvas */
    let i = 0    
    for(const flake of flakes)
    {
        /* Update flakes pos */
        flake.y += flake.speed

        /* Remove flakes */
        if(flake.y > $canvasBis.height)
        {
           flakes.splice(i, 1)
        }
        i++
    }
}


// WAVES ANIMATION (Night Cycle)
let k = 0
const drawwaves_bis = () => {
    for (let l = waves_bis.length - 1; l >= 0; l--) {
        let offset = k + l * Math.PI * 50
        ctx_bis.save()
        ctx_bis.fillStyle = (waves_bis[l])
        ctx_bis.beginPath()
        ctx_bis.moveTo(0, (Math.sin(offset / 100) + 1) / 2 * 50 + 285)
        ctx_bis.lineTo(400, (Math.sin((offset / 100) + 10) + 1) / 2 * 50 + 285)
        ctx_bis.lineTo(0, 700)
        if (lamp) {
            ctx_bis.shadowColor = 'rgba(255, 199, 0, 0.300)'
            ctx_bis.shadowBlur = 600
        }
        
        ctx_bis.fill()
        ctx_bis.restore()
    }
    k = k + 3
}
setInterval('drawwaves_bis()', 100)


// DOM MODIFICATION : Switch the cycle/canvas/text/transitions by pressing the space bar
function switch_night(){
    const cvs = document.querySelector('#canvas')    
    const cvs2 = document.querySelector('#canvas2')
    const ctn = document.querySelector('.container')
    const bg = document.querySelector('body')
    const space = document.querySelector('.space')
    const round = document.querySelector('.round')
    const msg = document.querySelector('.msg')
    const msg2 = document.querySelector('.msg2')
    const n1 = document.querySelector('.n1')
    
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == 32 && ctn.classList.contains('default')){
            ctn.classList.replace('default', 'night')
            cvs2.style.transform = 'rotateY(360deg)'
            cvs2.style.opacity = '1'
            cvs2.style.transition = 'all 1.5s cubic-bezier(0.480, 0.460, 0.395, 1.165)'  
            
            cvs.style.transform = 'rotateY(360deg)'
            cvs.style.transition = 'all 1.5s cubic-bezier(0.480, 0.460, 0.395, 1.165)'
            
            bg.style.background = '#14142b'
            bg.style.transition = 'all 1s ease-in-out'      
            
            space.style.background = '#14142b'
            space.style.transition = 'all 0.7s ease-in-out'

            round.style.background = 'rgb(45, 38, 79)'
            round.style.transition = 'background 1.2s ease-in-out' 

            msg.style.opacity = '0'
            msg.style.transition = 'opacity 0.4s ease-in-out'  
            
            msg2.style.opacity = '1'
            msg2.style.transition = 'opacity 0.4s ease-in-out' 
              
        } else if(event.keyCode == 32 && ctn.classList.contains('night')){
            ctn.classList.replace('night', 'default')
            cvs2.style.transform = 'rotateY(0deg)'
            cvs2.style.opacity = '0'
            cvs2.style.transition = 'all 1.5s cubic-bezier(0.480, 0.460, 0.395, 1.165)'  
            
            cvs.style.transform = 'rotateY(0deg)'
            cvs.style.transition = 'all 1.5s cubic-bezier(0.480, 0.460, 0.395, 1.165)'
            
            bg.style.background = '#ededed'
            bg.style.transition = 'all 1s ease-in-out'      
            
            space.style.background = '#ededed'
            space.style.transition = 'all 0.7s ease-in-out'

            round.style.background = 'rgb(99, 128, 191)'
            round.style.transition = 'background 1.2s ease-in-out'  

            msg.style.opacity = '1'
            msg.style.transition = 'opacity 0.4s ease-in-out' 

            msg2.style.opacity = '0'
            msg2.style.transition = 'opacity 0.4s ease-in-out' 
        } else if(event.keyCode == 83 && ctn.classList.contains('night') && snow === false){
            audio.play()
            audio.muted = false           
        } else if(event.keyCode == 83 && ctn.classList.contains('night') && snow === true){
            audio.muted = true
        }
    })   
}


// Draw canvas
const loop = () => {
    window.requestAnimationFrame(loop)
    clear()

    detectKeys()

    bg()
    lighthouse()
    drawWaves()
    fx()

    bg_bis()
    lighthouse_bis()
    drawSnow()    
    drawwaves_bis()
    fx_bis()
}

switch_night()  
loop()