class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        /*this.load.image("rightArm", "arm_redA.png");
        this.load.image("leftArm", "arm_yellowB.png");
        this.load.image("legs", "leg_greenC.png");
        this.load.image("eyes", "eye_psycho_light.png");
        this.load.image("eye", "eye_psycho_dark.png");
        this.load.image("smile", "mouth_closed_teeth.png");
        this.load.image("fangs", "mouthJ.png");
        this.load.image("whiteA", "detail_white_antenna_small.png");
        this.load.image("greenA", "detail_green_horn_small.png");*/
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //my.sprite = {};
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // body 
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        // arms
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_greenB.png");
        my.sprite.leftArm.flipX = true;
        // legs
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 70, this.bodyY + 120, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 70, this.bodyY + 120, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.flipX = true;
        // eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_psycho_light.png");
        // mouths 
        my.sprite.smiling = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_teeth.png");
        my.sprite.fangsOut = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthJ.png");
        // accessories
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 60, this.bodyY - 60, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX - 60, this.bodyY - 60, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn.flipX = true;

        // make fangs invisible
        my.sprite.fangsOut.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // keep smiling after pressing key S
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S))) {
            my.sprite.smiling.visible = true;
            my.sprite.fangsOut.visible = false;
        }

        // keep fangs out after pressing key F
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F))) {
            my.sprite.smiling.visible = false;
            my.sprite.fangsOut.visible = true;
        }

        // make the monster move
        // monster moves left when pressing key A
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A))) {
            this.isApressed = true;
        }
        if (Phaser.Input.Keyboard.JustUp(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A))) {
            this.isApressed = false;
        }
        if (this.isApressed == true) {
            my.sprite.body.x -= 1;
            my.sprite.rightArm.x -= 1;
            my.sprite.leftArm.x -= 1;
            my.sprite.rightLeg.x -= 1;
            my.sprite.leftLeg.x -= 1;
            my.sprite.eye.x -= 1;
            my.sprite.smiling.x -= 1;
            my.sprite.fangsOut.x -= 1;
            my.sprite.rightHorn.x -= 1;
            my.sprite.leftHorn.x -= 1;
        }

        // monster moves right when pressing key D
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D))) {
            this.isDpressed = true;
        }
        if (Phaser.Input.Keyboard.JustUp(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D))) {
            this.isDpressed = false;
        }
        if (this.isDpressed == true) {
            my.sprite.body.x += 1;
            my.sprite.rightArm.x += 1;
            my.sprite.leftArm.x += 1;
            my.sprite.rightLeg.x += 1;
            my.sprite.leftLeg.x += 1;
            my.sprite.eye.x += 1;
            my.sprite.smiling.x += 1;
            my.sprite.fangsOut.x += 1;
            my.sprite.rightHorn.x += 1;
            my.sprite.leftHorn.x += 1;
        }
       
    }
