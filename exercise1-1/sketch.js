let rectangles = [];
let count = 0;

function setup(){

    createCanvas(600,600)
    populateRect()
}

function draw(){

    background(200,100,80)
    for(let i in rectangles){

        if((count % 2) === 0){

            fill(0)
        } else {

            fill(255)
        }
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].sizeX, rectangles[i].sizeY)
        count++
    }
}


function populateRect(){

    for (i = 0; i < 100; i++){

        let randomRect = {

            x: random(0, width),
            y: random(0, height),
            sizeX: random(5,10),
            sizeY: random(5,10)
        }
        rectangles.push(randomRect)
    }
}

function keyPressed(){

    if (keyCode === BACKSPACE){

        rectangles = []
        populateRect()
    }
}
