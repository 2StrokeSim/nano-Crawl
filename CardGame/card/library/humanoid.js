    


Card.library.android_omni =
{
    
    meta: [
    "protagonist"
    ],
    
    visual: 
    {
        title: "Our Intrepid Adventurer",                            
        texture: "android_omni",
        translucencies: {x: 0, y: 0} 
    }, 
    
    context:
    [
    ],
    
    action: 
    [
        { response: "client_actor_update", parameters: [] }
    ],            

    geometry: { 
            generator: Geometry.listFromCoords, 
            elements: 
            [
                { X: 0, Y: 0, R: 0 },               
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 },   
                { X: 110, Y: 90, R: 0 },
                { X: 200, Y: 20, R: 0 }
            ]
          },
   
    inventory:
    [    
        { 
            template: "simple_container", meta: ["status"],  visual: { visible: true }, 
        },
        
        { 
            template: "omni_android_status_pack", meta: ["state"],  visual: { visible: true },
        },
       
        { 
            template: "simple_container", meta: ["status"],  visual: { visible: true }, 
        },     

        { template: "primary_player_deck",  iconize: false, visual: { visible: true } }              
    ]
    
};

Card.library.android_labor =
{

    meta: [
    "antagonist"
    ],
                    
    visual: 
    {
        title: "Tragically Aggro Laborer",                
        texture: "android_labor",
        translucencies: {x: 0, y: 0}
    },
    
    context:
    [
        "action_slash",
        "action_thrust",
        "action_shoot"   
    ],
    
    action: 
    [
        { response: "NPC_actor_update", parameters: [] }
    ],
    
    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [ 
            { X: 0, Y: 0, R: 0 },         
            { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 },   
            { X: 110, Y: 90, R: 0 },
            { X: 200, Y: 20, R: 0 }
        ]
    },
          
    inventory:
    [
        { 
            template: "simple_container", meta: ["status"],  visual: { visible: true }, 
        },
        
        { 
            template: "labor_android_status_pack", visual: { visible: true },
        },
       
        { 
            template: "simple_container", visual: { visible: true }, 
        },     

        { template: "primary_laborer_deck", iconize: false, visual: { visible: true } }                    
    ]
};

Card.library.omni_android_status_pack =
{
    geometry: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0 }, 
    action: [],             
    inventory:
    [
        { type: "card", template: "status_vital_energy", value: {initial: 100, max: 100}, iconize: true, visual: { visible: true } },
        { type: "card", template: "status_metabolism", value: {initial: 100, max: 100}, iconize: true, visual: { visible: true } }
    ]
};

Card.library.labor_android_status_pack =
{
    geometry: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0 }, 
    action: [],             
    inventory:
    [
        { type: "card", template: "status_vital_energy", value: {initial: 120, max: 120}, iconize: true, visual: { visible: true } },
        { type: "card", template: "status_metabolism", value: {initial: 150, max: 150}, iconize: true, visual: { visible: true } }
    ]
};  