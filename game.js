var config = {      //configurações da tela 
    width: 1000,        //largura
    height: 500,        //altura
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}, //centralizar a tela
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 100 },
        },
    },
};

var game = new Phaser.Game(config);  //indicando ao phaser a criar uma instancia com essas configurações

//funções responsaveis pela cena
function preload () { //carregamento
    preLoadAssets(this);
}

function create () { //criação
    createAssets(this);
}

function update () { //atualização
    updateGame(this);
}