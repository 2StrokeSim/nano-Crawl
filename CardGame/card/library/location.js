Card.library.cave =
{
    visual: 
    { 
        title: "Cave",
        texture: "event_death",
        mural:
        {
            layers: ["parallax_cavern"]
        }
    },      

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 0, Y: 0, R: 0 }
        ]
    },        
    
    inventory:
    [  
        { 
            template: "vestibule", meta: ["status"],  visual: { visible: true }, 
        },          
    ]              
},

Card.library.meadow =
{
    visual: 
    { 
        title: "Meadow",
        texture: "event_death",
        mural:
        {
            layers: ["parallax_field"]
        }
        
    },      

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 0, Y: 0, R: 0 }
        ]
    },        
    
    inventory:
    [  
        { 
            template: "meadow_clearing", meta: ["status"],  visual: { visible: true }, 
        },          
    ]              
},

Card.library.player_biome =
{
    geometry: 
    {
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 0, Y: 0, R: 0 }
        ]
    },        
    
    inventory:
    [
        { 
            template: "android_omni", meta: ["status"],  visual: { visible: true }, 
        }
    ]                
};

Card.library.empty_biome =
{
    geometry: 
    {
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 0, Y: 0, R: 0 }
        ]
    },        
    
    inventory:
    [

    ]              
};

Card.library.labor_biome =
{
    geometry: 
    { 
        generator: Geometry.radialListFromCoords, 
        elements: 
        [   
            { Theta: 0, Radius: 120, Rotation: 0 },
            { Theta: 90, Radius: 120, Rotation: 0 },
            { Theta: 180, Radius: 0, Rotation: 0 },
            { Theta: 270, Radius: 0, Rotation: 0 }
        ]
    }, 
    
    inventory:
    [
        { 
            template: "android_labor", meta: ["status"],  visual: { visible: true }, 
        }
    ]
};


Card.library.vestibule =
{
    visual: 
    { 
        title: "Vestibule",
        texture: "meadow_clearing",
        opacities: 
        {
            originX:-60,
            originY:-60,
            tiles: 
            [
                { texture: "cavern_tileset", index: 0, x: 0, y: 0 },
                { texture: "cavern_tileset", index: 1, x: 0, y: 16 },
                { texture: "cavern_tileset", index: 2, x: 0, y: 32 },
                { texture: "cavern_tileset", index: 3, x: 0, y: 48 },                 
                { texture: "cavern_tileset", index: 4, x: 0, y: 64},
                { texture: "cavern_tileset", index: 5, x: 0, y: 80},                 
                { texture: "cavern_tileset", index: 6, x: 0, y: 96},
                
                { texture: "cavern_tileset", index: 7, x: 16, y: 0 },
                { texture: "cavern_tileset", index: 8, x: 16, y: 16 },
                { texture: "cavern_tileset", index: 9, x: 16, y: 32 },
                { texture: "cavern_tileset", index: 10, x: 16, y: 48 },                 
                { texture: "cavern_tileset", index: 11, x: 16, y: 64},
                { texture: "cavern_tileset", index: 12, x: 16, y: 80},                 
                { texture: "cavern_tileset", index: 13, x: 16, y: 96},
                
                { texture: "cavern_tileset", index: 14, x: 32, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 32, y: 16 },
                { texture: "cavern_tileset", index: 16, x: 32, y: 32 },
                { texture: "cavern_tileset", index: 17, x: 32, y: 48 },                 
                { texture: "cavern_tileset", index: 18, x: 32, y: 64},
                { texture: "cavern_tileset", index: 19, x: 32, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 32, y: 96},
                
                { texture: "cavern_tileset", index: 14, x: 48, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 48, y: 16 },
                { texture: "cavern_tileset", index: 21, x: 48, y: 32 },
                { texture: "cavern_tileset", index: 22, x: 48, y: 48 },                 
                { texture: "cavern_tileset", index: 23, x: 48, y: 64},
                { texture: "cavern_tileset", index: 19, x: 48, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 48, y: 96},

                { texture: "cavern_tileset", index: 14, x: 64, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 64, y: 16 },
                { texture: "cavern_tileset", index: 24, x: 64, y: 32 },
                { texture: "cavern_tileset", index: 25, x: 64, y: 48 },                 
                { texture: "cavern_tileset", index: 26, x: 64, y: 64},
                { texture: "cavern_tileset", index: 19, x: 64, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 64, y: 96},

                { texture: "cavern_tileset", index: 14, x: 80, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 80, y: 16 },
                { texture: "cavern_tileset", index: 27, x: 80, y: 32 },
                { texture: "cavern_tileset", index: 28, x: 80, y: 48 },                 
                { texture: "cavern_tileset", index: 29, x: 80, y: 64},
                { texture: "cavern_tileset", index: 19, x: 80, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 80, y: 96},

                { texture: "cavern_tileset", index: 14, x: 96, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 96, y: 16 },
                { texture: "cavern_tileset", index: 30, x: 96, y: 32 },
                { texture: "cavern_tileset", index: 31, x: 96, y: 48 },                 
                { texture: "cavern_tileset", index: 32, x: 96, y: 64},
                { texture: "cavern_tileset", index: 19, x: 96, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 96, y: 96},

                { texture: "cavern_tileset", index: 14, x: 112, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 112, y: 16 },
                { texture: "cavern_tileset", index: 33, x: 112, y: 32 },
                { texture: "cavern_tileset", index: 34, x: 112, y: 48 },                 
                { texture: "cavern_tileset", index: 35, x: 112, y: 64},
                { texture: "cavern_tileset", index: 19, x: 112, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 112, y: 96},

                { texture: "cavern_tileset", index: 14, x: 128, y: 0 },
                { texture: "cavern_tileset", index: 15, x: 128, y: 16 },
                { texture: "cavern_tileset", index: 36, x: 128, y: 32 },
                { texture: "cavern_tileset", index: 37, x: 128, y: 48 },                 
                { texture: "cavern_tileset", index: 38, x: 128, y: 64},
                { texture: "cavern_tileset", index: 19, x: 128, y: 80},                 
                { texture: "cavern_tileset", index: 20, x: 128, y: 96},
            ]            
        },
        background: "cave_background",
        placard: {},
    },      

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 160, R: 0 },            
            { X: 0, Y: 160, R: 0 },
            { X: 0, Y: 160, R: 0 },            
            { X: 0, Y: 160, R: 0 }            
        ]
    },        
    
    inventory:
    [    
        {
            template: "simple_container", meta: ["locations"], visual: { visible: true },
        },
        
        {
            template: "labor_biome", meta: ["locations"], visual: { visible: true },
        },              

        {
            template: "outer_ring", meta: ["locations"], visual: { visible: true },
        },             
 
        {
            template: "simple_container", meta: ["locations"], visual: { visible: true },
        },
    ]              
};
   
    
    
Card.library.simple_area_ground_travel_player =
{
        meta: "travel",

        visual:
        {
            title: "Travel",
            texture: "event_travel"
        },
        
        geometry: 
        { 
            generator: Geometry.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 }
            ]
        },
        
        inventory:
        [
        ],
         
        action: 
        [
            { response: "camera_travel", parameters: [0] },
      //      { response: "switch_pack", parameters: [2] }
        ]    
}

Card.library.simple_location_ground_travel_player =
{
        meta: "travel",

        visual:
        {
            title: "Travel",
            texture: "event_travel"
        },
        
        geometry: 
        { 
            generator: Geometry.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 }
            ]
        },
        
        inventory:
        [
        ],
         
        action: 
        [
            { response: "camera_travel", parameters: [0] },
       //     { response: "switch_pack", parameters: [2] }
        ]    
}

Card.library.simple_location_ground_geometry = 
{
    visual: 
    {
        title: "Cave Entrance",
        texture: "meadow_clearing",
//        opacities: ["cave_background"],
        background: "cave_background"
    },  

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [
            { X: 0, Y: 0, R: 0 },            
            { X: 0, Y: (144*1.5+(400-144*1.5)/2), R: 0 }
        ]
    },        
    
    inventory:
    [
        {
            template: "empty_biome", meta: ["locations"], visual: { visible: true },
        },   
        
        {
            template: "simple_container", meta: ["geometrys"], visual: { visible: true },
        }        
    ]  
}

Card.library.meadow_clearing =
{
    visual: 
    {
        title: "A Cave Entrance",
        texture: "meadow_clearing",
        opacities: 
        {  
            originX:-20,
            originY:-90,        
            tiles: 
            [
                {
                    texture: "country_platform_tileset", 
                    index: 0,
                    x: -30,
                    y: 90
                },
                
                {
                    texture: "country_platform_tileset", 
                    index: 1,
                    x: 3,
                    y: 90
                },
                
                {
                    texture: "country_platform_tileset", 
                    index: 2,
                    x: 35,
                    y: 90
                },            
                
                {
                    texture: "country_platform_tileset", 
                    index: 3,
                    x: -30,
                    y: 2
                },                           
            ]        
        },
        background: "cave_background",
        placard: {},

    },  

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [
            { X: 0, Y: 160, R: 0 },            
            { X: 0, Y: 160, R: 0 },
            { X: 0, Y: 160, R: 0 },            
            { X: 0, Y: 160, R: 0 }
            
        ]
    },        
    
    inventory:
    [
        {
            template: "simple_container", meta: ["locations"], visual: { visible: true },
        },    
    
        {
            template: "simple_container", meta: ["locations"], visual: { visible: true },
        },  

        {
            template: "outer_ring", meta: ["locations"], visual: { visible: true },
        },    
        
        {
            template: "empty_biome", meta: ["locations"], visual: { visible: true },
        },      
    ]              
};

Card.library.cave_entrance =
{
    context:
    [
        "simple_area_ground_travel_player",
    ],
    
    visual: 
    {
        title: "Arperture",
        texture: "cave_entrance",
        background: "cave_background",
        translucencies: {}
    },  

    geometry: 
    {
        generator: Geometry.listFromCoords, 
        elements: 
        [
            { X: 0, Y: 120, R: 0 },
            { X: 100, Y: 120, R: 0 }
        ]
    },

//    action: [ { response: "open_travel_pack", parameters: [ 1, 1, [ "event_player_travel" ] ] } ],
    action: [ { response: "set_context", parameters: [ "simple_player_travel_event_pack" ] } ],


    inventory:
    [
   
    ]
};
