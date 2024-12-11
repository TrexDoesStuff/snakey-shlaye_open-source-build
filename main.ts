namespace SpriteKind {
    export const Snakepart = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const EstEgg = SpriteKind.create()
    export const GOB = SpriteKind.create()
    export const INFO = SpriteKind.create()
    export const ENM = SpriteKind.create()
}

function GMEF() {
    if (MP == 2) {
        if (User.overlapsWith(GMAN) || User3.overlapsWith(GMAN)) { 
            GMAN.sayText("ya found me! :D")
        } else{
            GMAN.sayText("")
        }
    }

}

function SNAKE() {
if (controller.left.isPressed() || controller.right.isPressed() || controller.up.isPressed() || controller.down.isPressed()) {
    User2.follow(User)
    User3.follow(User2)
    User4.follow(User3)
} else {
    User2.follow(U2)
    User3.follow(U3)
    User4.follow(U4)
}

}

let Title = sprites.create(assets.image`title`)
console.log("onTitle")
pauseUntil(() => controller.B.isPressed())
console.log("Starting playing")
Title.destroy()
let Speed = 1.9
let User4 = sprites.create(assets.image`User4`, SpriteKind.Snakepart) // green
let User3 = sprites.create(assets.image`User3`, SpriteKind.Snakepart) // blue
let User2 = sprites.create(assets.image`User2`, SpriteKind.Snakepart) // orange
let User = sprites.create(assets.image`User`, SpriteKind.Player)
let RM = sprites.create(assets.image`him`, SpriteKind.EstEgg)
let GMAN = sprites.create(assets.image`GMAN`, SpriteKind.GOB)
let SPKY = sprites.create(assets.image`Spooked`, SpriteKind.EstEgg)
let Camera = sprites.create(assets.image`Nano`, SpriteKind.Camera)
let TORT = sprites.create(assets.image`TUT`, SpriteKind.INFO)
let Suny = sprites.create(assets.image`Suny`, SpriteKind.EstEgg)
let Mady = sprites.create(assets.image`mady`, SpriteKind.ENM)
let U2 = sprites.create(assets.image`Nano`, SpriteKind.Snakepart)
let U3 = sprites.create(assets.image`Nano`, SpriteKind.Snakepart)
let U4 = sprites.create(assets.image`Nano`, SpriteKind.Snakepart)
let MP = 1
info.score()
info.life() // 500 400
U2.follow(User2)
U3.follow(User3)
U4.follow(User4)
Mady.y = 400
Mady.x = 500
Suny.y = 609
Suny.x = 70
TORT.y = 100
TORT.x = 50
RM.y = 126
RM.x = 126
GMAN.y = 240
GMAN.x = 240
SPKY.y = 240
SPKY.x = 50
Mady.follow(User)
controller.moveSprite(User)
Camera.follow(User)
scene.cameraFollowSprite(Camera)
scene.setTileMapLevel(assets.tilemap`level`)

forever(function() {
SNAKE()
})

forever(function(){
info.setScore(User.x)
info.setLife(User.y)
})

forever(function(){
if (User.overlapsWith(RM) || User3.overlapsWith(RM) ) {
RM.sayText("Hello Snake")
} else {
RM.sayText("")}


if (User.overlapsWith(SPKY) || User3.overlapsWith(SPKY)) {
SPKY.sayText("hello! whats up")
} else {
SPKY.sayText("")

}

if (User.overlapsWith(Suny) ||  User.overlapsWith(Suny)) {
Suny.sayText("hello palo!")
pause(200)
Suny.sayText("Im here to tell you this is v 0.0.1")
pause(3000)
} else {
Suny.sayText("")
}

if (User.overlapsWith(TORT) || User3.overlapsWith(TORT)) {
    TORT.sayText("hello walk into stuff to talk to it, and some times theres a challenge press A to start one")
} else {
    TORT.sayText("")

}

})

forever(function() {
if (MP == 1) {
    if (User.overlapsWith(GMAN) || User3.overlapsWith(GMAN)) {
        GMAN.sayText("ello! this is my maze! press A to Play")
        if (controller.A.isPressed()) {
            GMAN.say("now explore the maze and find me!")
            pause(700)
            MP = 2
            GMAN.y = 11
            GMAN.x = 280
            PRGM()
        }
    }
}
})

forever(function() {
if (User.overlapsWith(Mady)) {
    game.over(false)
}
})

function PRGM() {
    forever(function() {
        GMEF()
    })
}
