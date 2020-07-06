namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
scene.onHitWall(SpriteKind.Player, function (sprite) {
    mySprite.say("Uy!", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 4 4 1 1 1 1 1 1 1 1 1 1 4 4 2 
2 2 4 4 1 1 1 1 1 1 1 1 4 4 2 2 
2 2 2 4 4 4 4 4 4 4 4 4 4 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite.setPosition(110, 30)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000202020202020703080d0d0d0d0d0d0d0202020202020703080d0d0d0d0d0d0d0202020202020703080d0d0d0d0d0d0d0202020202020703080d0d0d0d0d0d0d0202020202020703080d0d0d0d0d0d0d020202020204030303050d0d0d0d0d0d0606060606030303030306060606060603030303030303030303030303030303090909090903030303030909090909090d0d0d0d0d0a0303030b0202020202020d0d0d0d0d0d070308020202020202020d0d0d0d0d0d070308020202020202020d0d0d0d0d0d070308020202020202020d0d0d0d0d0d070308020202020202020d0d0d0d0d0d070308020202020202020d0d0d0d0d0d07030802020202020202`,
            img`
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 2 . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . 2 2 . . . 2 2 . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass3],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(6)
