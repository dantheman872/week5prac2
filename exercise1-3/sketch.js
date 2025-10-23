let player = {

    x: 50,
    y: 50,
    size: 50,
    dirX: 0,
    dirY: 0
}

let obstacle = {

    x: 150,
    y: 100,
    width: 100,
    height: 200
}



function setup(){

    createCanvas(400,400)
}

function draw(){

    background(200,100,80)
    fill(80,200,70)
    rect(player.x, player.y, player.size, player.size)

    fill(60,100,200)
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    movePlayer()
}

function movePlayer(){

    if(!playerCollision(obstacle.x, obstacle.y, obstacle.width, obstacle.height)){
        player.x += (player.dirX * 1)
        player.y += (player.dirY * 1)
    }
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){

        player.dirX = -1
        player.dirY = 0
    } else

    if(keyCode === RIGHT_ARROW){

        player.dirX = 1
        player.dirY = 0
    } else

    if(keyCode === UP_ARROW){

        player.dirX = 0
        player.dirY = -1
    } else

    if(keyCode === DOWN_ARROW){

        player.dirX = 0
        player.dirY = 1
    } else {

        player.dirX = 0
        player.dirY = 0
    }


}

function playerCollision(x, y, width, height){

    //Checks the left side
    if((((player.x + player.size) === x ) && player.dirX === 1) && !(player.y + player.size < obstacle.y || player.y > obstacle.y + height)){
        return true
    }

    //Checks the right side
    if(((player.x === x + width) && player.dirX === -1) && !(player.y + player.size < obstacle.y || player.y > obstacle.y + height)){
        return true
    }

    //Checks the top side
    if((((player.y + player.size) === y ) && player.dirY === 1) && !(player.x + player.size < obstacle.x || player.x > obstacle.x + width)){
        return true
    }

    //Checks the bottom side
    if(((player.y === y + height) && player.dirY === -1) && !(player.x + player.size < obstacle.x || player.x > obstacle.x + width)){
        return true
    }
}