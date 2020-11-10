class background extends PIXI.Sprite
{
}

class illustration extends PIXI.Container
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

    static SkyParallax = PIXI.BaseTexture.fromImage("./img/sky.png");
    static FarGrassyMountainsParallax = PIXI.BaseTexture.fromImage("./img/far_grassy_mountains.png");
    static GrassyMountainsParallax = PIXI.BaseTexture.fromImage("./img/grassy_mountains.png");
    static GrassyHillParallax = PIXI.BaseTexture.fromImage("./img/grassy_hill.png");

    static WarpedCaveBackGroundParallax = PIXI.BaseTexture.fromImage("./img/warped_cave_background.png");
    static WarpedCaveMiddleGroundParallax = PIXI.BaseTexture.fromImage("./img/warped_cave_middleground.png");

    static CountryPlatformTileset = PIXI.BaseTexture.fromImage("./img/country-platform-tileset.png");

    static CavernBackgroundParallax = PIXI.BaseTexture.fromImage("./img/cavern_background.png");
    static CavernWallParallax = PIXI.BaseTexture.fromImage("./img/cavern_wall.png");

    static CavernTileset = PIXI.BaseTexture.fromImage("./img/cavern_tiles.png");

    static library = 
    {        
        android_omni:
        {
            sheet:
            {        
                idle: 
                [
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(0, 0, 50, 37)),                 
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(50, 0, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(100, 0, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(150, 0, 50, 37))                  
                ],
 
                run: 
                [
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(50, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(100, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(150, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(200, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(250, 37, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(300, 37, 50, 37)),                    
                ],
 
                rising_slash: 
                [
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(150, 185, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(200, 185, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(250, 185, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(300, 185, 50, 37)),
                    
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(0, 222, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(50, 222, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(100, 222, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(150, 222, 50, 37)),                    
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(200, 222, 50, 37)),
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(250, 222, 50, 37)),                    
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(300, 222, 50, 37)),                   
                    
                    new PIXI.Texture(illustration.AndroidOmniSheetImage, new PIXI.Rectangle(0, 259, 50, 37)),                    
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
        
        parallax_field:
        {
            sheet:
            {
                idle: 
                [
                    new PIXI.Texture(illustration.SkyParallax, new PIXI.Rectangle(0, 0, 384, 216)),
                    new PIXI.Texture(illustration.FarGrassyMountainsParallax, new PIXI.Rectangle(0, 0, 384, 216)),
                    new PIXI.Texture(illustration.GrassyMountainsParallax, new PIXI.Rectangle(0, 0, 384, 216)),
                    new PIXI.Texture(illustration.GrassyHillParallax, new PIXI.Rectangle(0, 0, 384, 216))
                ]    
            }            
        },  
        
        parallax_cave:
        {
            sheet:
            {           
                idle: 
                [
                    new PIXI.Texture(illustration.WarpedCaveBackGroundParallax, new PIXI.Rectangle(0, 0, 240, 176)),                
                    new PIXI.Texture(illustration.WarpedCaveMiddleGroundParallax, new PIXI.Rectangle(0, 0, 272, 176))
                ]    
            }            
        },

        parallax_cavern:
        {
            sheet:
            {
                
                idle: 
                [
                    new PIXI.Texture(illustration.CavernBackgroundParallax, new PIXI.Rectangle(0, 0, 192, 288)),                
                    new PIXI.Texture(illustration.CavernWallParallax, new PIXI.Rectangle(0, 0, 512, 288))
                ]    
            }            
        },

        country_platform_tileset:
        {
            sheet:
            {
               
                tiles:
                [              
                    new PIXI.Texture(illustration.CountryPlatformTileset, new PIXI.Rectangle(32, 106, 33, 54)),                
                    new PIXI.Texture(illustration.CountryPlatformTileset, new PIXI.Rectangle(65, 106, 32, 54)),                
                    new PIXI.Texture(illustration.CountryPlatformTileset, new PIXI.Rectangle(97, 106, 15, 54)),
                    new PIXI.Texture(illustration.CountryPlatformTileset, new PIXI.Rectangle(32, 18, 126, 89)),                   
 
                ],
                
                idle: 
                [
                    new PIXI.Texture(illustration.WarpedCaveBackGroundParallax, new PIXI.Rectangle(0, 0, 240, 176)),                
                    new PIXI.Texture(illustration.WarpedCaveMiddleGroundParallax, new PIXI.Rectangle(0, 0, 272, 176))
                ]    
            }            
        },     

        cavern_tileset:
        {
            sheet:
            {
               
                tiles:
                [              
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 64, 16, 16)),                
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 80, 16, 16)),               
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 128, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 144, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(112, 160, 16, 16)),
                    
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 64, 16, 16)),                
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 80, 16, 16)),               
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 128, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 144, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(128, 160, 16, 16)),                    

                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 64, 16, 16)),                
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 80, 16, 16)),               
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 128, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 144, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(144, 160, 16, 16)),
          
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(176, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(176, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(176, 128, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(176, 144, 16, 16)),  

                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(192, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(192, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(192, 128, 16, 16)),
                                      

                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(208, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(208, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(208, 128, 16, 16)),
 




                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(256, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(256, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(256, 128, 16, 16)),
                                      
                    
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(272, 96, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(272, 112, 16, 16)),
                    new PIXI.Texture(illustration.CavernTileset, new PIXI.Rectangle(272, 128, 16, 16)),
                                                                              
                ],
                
                idle: 
                [
                    new PIXI.Texture(illustration.WarpedCaveBackGroundParallax, new PIXI.Rectangle(0, 0, 240, 176)),                
                    new PIXI.Texture(illustration.WarpedCaveMiddleGroundParallax, new PIXI.Rectangle(0, 0, 272, 176))
                ]    
            }            
        },
        
    }

    build_image(originX, originY, template)
    {    
        for (var i = 0; i < this.background_tiles.length; i++)
        {
            this.background.removeChild(this.background_tiles[i]);
        }
    
        for (var i = 0; i < template.length; i++)
        {
            this.background_tiles[i] = new PIXI.Sprite(illustration.library[template[i].texture].sheet.tiles[template[i].index]);
            this.background_tiles[i].x = template[i].x + originX;
            this.background_tiles[i].y = template[i].y + originY;
            this.background_tiles[i].anchor.set(0);
            
            this.background.addChild(this.background_tiles[i]);
        }      
    }


    set_background(originX, originY, background)
    {
        this.build_image(originX, originY, background);
    //    this.addChild(this.background);
  //      this.background.anchor.set(0.5);
    //    this.addChild(this.character);
    //    this.mask = null;
    }
    
    set_animation(animation)
    {
        this.character.stop();
        this.character.textures = illustration.library[this.texture].sheet[animation.action];
        this.character.animationSpeed = animation.speed;
        this.character.loop = true;
        
        this.animation_time = animation.time;
        
        this.character.play();      
    }

    constructor(texture, template) 
    {	
        super();
            
        var player;
        var cardTexture;
        
   /*     if (template.background != undefined)
        {
            this.background = new PIXI.Sprite(illustration.library[template.background].sheet.idle[0]);
        }
        else
        {
            this.background = new PIXI.Sprite(illustration.library.black_textured_background.sheet.idle[0]);
        }
        
//        this.background = new PIXI.Sprite(illustration.library.cave_background.sheet.idle[0]);
        this.background.anchor.set(0.5);
        this.addChild(this.background);*/

        this.background = new PIXI.Container();
        this.background_tiles = [];
        this.addChild(this.background);

        this.texture = texture; 
        this.animation_time = 50;

         


        if (template.tiles)
        {
            
            
/*          var tiles = [];            
            
            for (var i = 0; i < template.tiles.length; i++)
            {
                tiles[i] = new PIXI.Sprite(illustration.library[template.tiles[i].texture].sheet.tiles[template.tiles[i].index]);
                tiles[i].x = template.tiles[i].x;
                tiles[i].y = template.tiles[i].y;
                tiles[i].anchor.set(0);
                
                this.background.addChild(tiles[i]);                
            }      */

            parent.opacities = template.tiles;
        }
        else
        {
            player = new PIXI.AnimatedSprite(illustration.library[texture].sheet.idle);
                
            player.anchor.set(0.5);
            player.animationSpeed = .1;
            player.loop = true;
            
            player.play();
            this.character = player;

            this.y = -cardH/6
            
            this.addChild(player);
            
//            this.anchor.x = .5;
//            this.anchor.y = .5;
        }
    }	
	
    enterFrame()
    {
        if (this.character)
        {
            this.animation_time--;
            if (this.animation_time == 0)
            {
                this.character.stop();
                this.character.textures = illustration.library[this.texture].sheet.idle;
                this.animation_time = 100;
                this.character.animationSpeed = .1;
                this.character.play();
            }
        }
    }	
}