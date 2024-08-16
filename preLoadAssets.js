//função responsavel pelo carregamento dos sprites
function preLoadAssets (scene) {
    console.log(scene);

    // cenário
    scene.load.image("fundo", "./assets/fundo.png");
    scene.load.image("plat", "./assets/plataforma.png");

    //player
    scene.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48,
    });

    //coletável
    scene.load.image("star", "./assets/star.png");

    //inimigos: bombs
    scene.load.image("bombs", "./assets/bomb.png");
}