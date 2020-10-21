class background extends PIXI.Sprite
{
}

class illustration extends PIXI.Sprite
{
    
	static AndroidOmniSheetImage = PIXI.BaseTexture.fromImage("./img/adventurer-v1.5-Sheet.png");
	static AndroidLaborSheetImage = PIXI.BaseTexture.fromImage("./img/derp.png");
	static ActionEffectSlashSheetImage = PIXI.BaseTexture.fromImage("./img/sword_slash_effect_collection_by_redballbomb-dbz1bas.png");
	static ActionEffectThrustSheetImage = PIXI.BaseTexture.fromImage("./img/Thrusts 1 SpriteSheet.png");
//	static ActionEffectShootSheetImage = PIXI.BaseTexture.fromImage("./img/Thrusts 1 SpriteSheet.png");
	static StatusEffectBleedSheetImage = PIXI.BaseTexture.fromImage("./img/bleed9-small.png");
    static StatusEffectVitalEnergySheetImage = PIXI.BaseTexture.fromImage("./img/13_vortex_spritesheet.png");
    static StatusEffectMetabolismSheetImage = PIXI.BaseTexture.fromImage("./img/electronic_heart.png");
    static PlayButtonSheetImage = PIXI.BaseTexture.fromImage("./img/play.png");
    static EventDeathSheetImage = PIXI.BaseTexture.fromImage("./img/deathface.png");
    static EventEngageSheetImage = PIXI.BaseTexture.fromImage("./img/engage.png");
    
    static TravelSheetImage= PIXI.BaseTexture.fromImage("./img/travel.png");
    
    static BlackTextureBackgroundSheetImage = PIXI.BaseTexture.fromImage("./img/black_texture_background.png");
    static CaveBackgroundSheetImage = PIXI.BaseTexture.fromImage("./img/cave_background.png");

    static CaveEntranceSheetImage = PIXI.BaseTexture.fromImage("./img/cave_entrance1.png");


    static library = 
    {        
        android_omni:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(50, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(100, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(150, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(200, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(250, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(300, 37, 50, 37)),                    
                ]    
            }
        },
        
        android_labor:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.AndroidLaborSheetImage, new PIXI.Rectangle(0, 0, 29, 28))
                ]    
            }
        }, 

        action_slash:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(547, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(569, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(591, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(613, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(635, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(657, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(679, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(701, 175, 22, 25)),
                    new PIXI.Texture(illustration.ActionEffectSlashSheetImage, new PIXI.Rectangle(723, 175, 22, 25))
                ]    
            }            
        },
        
        action_thrust:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 0, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 32, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 64, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 96, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 128, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 160, 64, 32))
                ]    
            }            
        },  

        action_shoot:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 0, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 32, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 64, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 96, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 128, 64, 32)),
                    new PIXI.Texture(illustration.ActionEffectThrustSheetImage, new PIXI.Rectangle(0, 160, 64, 32))
                ]    
            }            
        },  

        status_bleed:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(0, 0, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(80, 0, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(160, 0, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(240, 0, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(320, 0, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(0, 70, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(80, 70, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(160, 70, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(240, 70, 80, 70)),
                    new PIXI.Texture(illustration.StatusEffectBleedSheetImage, new PIXI.Rectangle(320, 70, 80, 70))                    
                ]    
            }            
        },   

        status_vital_energy:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 0, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 0, 25, 25)),

                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 25, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 25, 25, 25)),

                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 50, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 50, 25, 25)),

                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 75, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 75, 25, 25)),

                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 100, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 100, 25, 25)),

                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 125, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 125, 25, 25)),
                    
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(125, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(150, 150, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(175, 150, 25, 25)),
                   
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(0, 175, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(25, 175, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(50, 175, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(75, 175, 25, 25)),
                    new PIXI.Texture(illustration.StatusEffectVitalEnergySheetImage, new PIXI.Rectangle(100, 175, 25, 25))                 
                ]    
            }            
        },         
        
        status_metabolism:
        {
            sheet:
            {
                idle: 
                [
                    new PIXI.Texture(illustration.StatusEffectMetabolismSheetImage, new PIXI.Rectangle(0, 0, 35, 35))                    
                ]    
            }            
        }, 
        
        button_play:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.PlayButtonSheetImage, new PIXI.Rectangle(0, 0, 32, 32))
                ]    
            }            
        },  
        
        event_death:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.EventDeathSheetImage, new PIXI.Rectangle(0, 0, 39, 40))
                ]    
            }            
        },  

        event_engage:
        {
            sheet:
            {
                idle: 
                [
                    new PIXI.Texture(illustration.EventEngageSheetImage, new PIXI.Rectangle(0, 0, 64, 48))
                ]    
            }            
        },            
        
        black_textured_background:
        {
            sheet:
            {
        
                idle: 
                [
                    new PIXI.Texture(illustration.BlackTextureBackgroundSheetImage, new PIXI.Rectangle(0, 0, 100, 90)),                    
                ]    
            }
        },            

        cave_background:
        {
            sheet:
            {
                idle: 
                [
                    new PIXI.Texture(illustration.CaveBackgroundSheetImage, new PIXI.Rectangle(0, 0, 200, 100)),                    
                ]    
            }
        },        

        cave_entrance:
        {
            sheet:
            {
                idle: 
                [
                    new PIXI.Texture(illustration.CaveEntranceSheetImage, new PIXI.Rectangle(0, 0, 100, 100)),                    
                ]    
            }
        },       

        event_travel:
        {
            sheet:
            {

                idle: 
                [
                    new PIXI.Texture(illustration.TravelSheetImage, new PIXI.Rectangle(0, 0, 64, 48))
                ]    
            }            
        },  
    }


    set_background(background)
    {
        this.background = background;
        this.addChild(this.background);
        this.background.anchor.set(0.5);
        this.addChild(this.character);
    }

    constructor(texture, template) 
    {	
        super();
            
        var player;
        var cardTexture;
        
        if (template.background != undefined)
        {
            this.background = new PIXI.Sprite(illustration.library[template.background].sheet.idle[0]);
        }
        else
        {
            this.background = new PIXI.Sprite(illustration.library.black_textured_background.sheet.idle[0]);
        }
        
//        this.background = new PIXI.Sprite(illustration.library.cave_background.sheet.idle[0]);
        this.background.anchor.set(0.5);
        this.addChild(this.background);
 
        player = new PIXI.AnimatedSprite(illustration.library[texture].sheet.idle);
            
        player.anchor.set(0.5);
        player.animationSpeed = .5;
        player.loop = true;
        
        player.play();
        this.character = player;

        this.y = -cardH/6
        
        this.addChild(player);
		
		this.anchor.x = .5;
		this.anchor.y = .5;
    }	
	
    enterFrame()
    {

    }	
}