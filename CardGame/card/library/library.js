
Card.library = 
{
    player_victory:
    {
        
    },

    laborer_die:
    {
        visual: 
        {
            title: "Cave Entrance",
            texture: "android_omni",
        },            
    },

    world:
    {
        visual: 
        { 
            title: "World",
            texture: "android_omni",
        },      

        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [   
                { X: 0, Y: 0, R: 0 },
                { X: 0, Y: (144*1.5+(400-144*1.5)/2), R: 0 }
            ]
        },        
        
        inventory:
        [  
            { 
                template: "cave_entrance", meta: ["status"],  visual: { visible: true }, 
            },
            
            { 
                template: "vestibule", meta: ["status"],  visual: { visible: true }, 
            }            
        ]              
    },

    empty_biome:
    {
        path: 
        {
            generator: pathLink.listFromCoords, 
            elements: 
            [   
                { X: 0, Y: 0, R: 0 },
                { X: 0, Y: 0, R: 0 }
            ]
        },        
        
        inventory:
        [

        ]              
    },

    
    labor_biome:
    {
        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [   
                { X: 0, Y: 0, R: 0 },
                { X: 0, Y: 0, R: 0 }
            ]
        },        
        
        inventory:
        [
            { 
                template: "android_labor", meta: ["status"],  visual: { visible: true }, 
            }
        ]              
    },

    vestibule:
    {
        visual: 
        { 
            title: "Vestibule",
            texture: "cave_entrance",
            opacities: ["cave_background"],
            background: "cave_background"
        },      

        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [   
                { X: 0, Y: 0, R: 0 },
                { X: 0, Y: 0, R: 0 }
            ]
        },        
        
        inventory:
        [

            {
                template: "labor_biome", meta: ["locations"], visual: { visible: true },
            },        
            
            {
                template: "simple_container", meta: ["locations"], visual: { visible: true },
            }
        ]              
    },

    cave_entrance:
    {
        visual: 
        {
            title: "Cave Entrance",
            texture: "cave_entrance",
            opacities: ["cave_background"],
            background: "cave_background"
        },  

        path: 
        { 
            generator: pathLink.listFromCoords, 
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
                template: "simple_container", meta: ["locations"], visual: { visible: true },
            }        
        ]              
    },

    event_player_death:
    {
        visual: 
        {
            title: "Death",
            texture: "event_death",
        },            
        
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},  
        action: [{ response: "sudoku", parameters: []}]        
    },
    
    event_player_engage:
    {
        
        meta: "action",            

        visual: 
        {
            title: "Engage",                
            texture: "event_engage"
        },
        
        path: 
        { 
            generator: pathLink.listFromCoords, 
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
            { response: "switch_pack", parameters: [0] },
            { response: "target_first_adjacent", parameters: [] },
            { response: "set_target_death_response", parameters: [] }
        ]
    }, 

    event_AI_engage:
    {
        
        meta: "action",            

        visual: 
        {
            title: "Engage",                
            texture: "event_engage"
        },
        
        path: 
        { 
            generator: pathLink.listFromCoords, 
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
            { response: "switch_pack", parameters: [0] },
            { response: "target_first_adjacent", parameters: [] }
        ]
    }, 
    
    event_player_travel:
    {
        meta: "travel",

        visual:
        {
            title: "Travel",
            texture: "event_travel"
        },
        
        path: 
        { 
            generator: pathLink.listFromCoords, 
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
            { response: "switch_pack", parameters: [2] }
        ]
    },    
    
    dynamic_entry:
    {
        visual: 
        {
            title: "Dynamic Entry",
            texture: "android_omni",
        },            
        
        path: 
        { 
        },
       
        action: 
        [
            { response: "start_fight", parameters: [] }
        ],        

        inventory:
        [
        ]    
    },
    
    android_omni:
    {
        
        meta: [
        "protagonist"
        ],
        
        visual: 
        {
            title: "Our Intrepid Adventurer",                            
            texture: "android_omni",
            translucencies: {}
        },
        
        action: 
        [
            { response: "client_actor_update", parameters: [] }
        ],            

        path: { 
                generator: pathLink.listFromCoords, 
                elements: 
                [ 
                    { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 },   
                    { X: 110, Y: 90, R: 0 },
                    { X: 200, Y: 20, R: 0 }
                ]
              },
       
        inventory:
        [
            { 
                template: "omni_android_status_pack", meta: ["state"],  visual: { visible: true },
            },
           
            { 
                template: "simple_container", meta: ["status"],  visual: { visible: true }, 
            },     

            { template: "primary_player_deck",  iconize: false, visual: { visible: true } }              
        ]
        
    },
    
    android_labor:
    {

        meta: [
        "antagonist"
        ],
                        
        visual: 
        {
            title: "Tragically Aggro Laborer",                
            texture: "android_labor",
            translucencies: {}
        },
        
        action: 
        [
            { response: "NPC_actor_update", parameters: [] }
        ],
        
        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 },   
                { X: 110, Y: 90, R: 0 },
                { X: 200, Y: 20, R: 0 }
            ]
        },
              
        inventory:
        [
            { 
                template: "labor_android_status_pack", visual: { visible: true },
            },
           
            { 
                template: "simple_container", visual: { visible: true }, 
            },     

            { template: "primary_laborer_deck", iconize: false, visual: { visible: true } }                    
        ]
    },            
    
    action_slash:
    {            
        meta: "action",
        
        visual: 
        {
            title: "Slash",
            texture: "action_slash"
        },

        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 }
            ]
        },
        
        inventory:
        [
            { 
                type: "pile", template: "simple_action_cost_pack", visual: { visible: true },
            },
        ],            
                  
        action: 
        [
            { response: "update_component", parameters: [{ascent: 0, descent:[0, 0]}] },
            {  response: "effect_against_target", references: [{param_index: 0, ref_index: 0}], 
               parameters: ["antagonist", { ascent: 0, descent: [0, 1, 1] }, "status_bleed", {initial: 10}] }
        ]
        
    },  

    action_thrust:
    {
        
        meta: "action",            

        visual: 
        {
            title: "Thrust",                
            texture: "action_thrust"
        },
        
        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 }
            ]
        },
        
        inventory:
        [
            { 
                type: "pile", template: "simple_action_cost_pack", visual: { visible: true },
            },
        ],            
         
        action: 
        [
            { response: "update_component", parameters: [{ascent: 0, descent:[0, 0]}] },
            {  response: "effect_against_target", references: [{param_index: 0, ref_index: 0}], 
               parameters: ["antagonist", { ascent: 0, descent: [0, 1, 1] }, "status_bleed", {initial: 10}] }
        ]
    }, 

    action_shoot:
    {
        
        meta: "action",            

        visual: 
        {
            title: "Shoot",                
            texture: "action_shoot"
        },

        path: 
        { 
            generator: pathLink.listFromCoords, 
            elements: 
            [ 
                { X: -cardW/2 + 10, Y: cardH/2 + 40, R: 0 }
            ]
        },

        inventory:
        [
            { 
                type: "pile", template: "simple_action_cost_pack", visual: { visible: true },
            },
        ],            

        action: 
        [
            { response: "update_component", parameters: [{ascent: 0, descent:[0, 0]}] },
            {  response: "effect_against_target", references: [{param_index: 0, ref_index: 0}], 
               parameters: ["antagonist", { ascent: 0, descent: [0, 1, 1] }, "status_bleed", {initial: 10}] }
        ]
    },

    status_bleed:
    {            
        meta: "status",            

        action: 
        [
            { response: "modify_value_by_value", parameters: [1, -1] },
        ],

        visual: 
        {
            title: "Bleed",                
            texture: "status_bleed"
        },
        
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}
    },

    status_vital_energy:
    {
        
        meta: "status",            

        visual: 
        {
            title: "Stamina",                
            texture: "status_vital_energy"
        },
        
        attributes: {},

        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}            
    },

    effect_cut:
    {
        meta: "status",            

        action: 
        [
            {  response: "add_malfunction_to_target_component", references: [{param_index: 0, ref_index: 0}], 
               parameters: ["antagonist", { ascent: 0, descent: [0, 1, 1] }, "status_bleed", {initial: 10}] }
        ],        
        
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}                    
    },

    interaction:
    {            
        meta: "status",            
        
        action: 
        [
            { response: "interaction_update", parameters: [] }
        ],
                
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
        inventory:
        [
            { 
                template: "simple_container", meta: ["one"], visual: { visible: false },
                inventory: []
            },
            
            { 
                template: "simple_container", meta: ["two"], visual: { visible: false },
                inventory: []
            },
        ],

        attributes: {}            
    },

    status_metabolism:
    {            
        meta: "status",            

        visual: 
        {
            title: "Metabolism",                
            texture: "status_metabolism"
        },
        
        action: 
        [
            { response: "modify_value", parameters: [0, 10] },
        ],
        
        zero_threshold:
        [ { response: "death", parameters: [] } ],
        
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
        inventory:
        [
            { 
                template: "simple_container", meta: ["modification"], visual: { visible: true },
                inventory: []
            },
            
            { 
                template: "simple_container", meta: ["malfunction"], visual: { visible: true },
                inventory: []
            },

        ],

        attributes: {}            
    },

    cost_vital_energy:
    {
        
        meta: "cost",            

        visual: 
        {
            title: "Stamina",                
            texture: "status_vital_energy"
        },
        
        action: 
        [
            { response: "modify_value_by_value", parameters: [2, -1] },
        ],
        
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
        attributes: {}
    }, 

    simple_container:
    {  
        path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}, 
        action: [],
        inventory: [], 
        meta: "simple container" 
    },
    
    value_container:
    {  
        path: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],
        inventory: [], 
        meta: "value container" 
    },

    simple_action_cost_pack:
    {
        path: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],             
        inventory:
        [
            { type: "card", template: "cost_vital_energy", value: {initial: 10}, iconize: true, visual: { visible: true } }
        ]
    },

    omni_android_status_pack:
    {
        path: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],             
        inventory:
        [
            { type: "card", template: "status_vital_energy", value: {initial: 100, max: 100}, iconize: true, visual: { visible: true } },
            { type: "card", template: "status_metabolism", value: {initial: 100, max: 100}, iconize: true, visual: { visible: true } }
        ]
    },
    
    labor_android_status_pack:
    {
        path: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],             
        inventory:
        [
            { type: "card", template: "status_vital_energy", value: {initial: 120, max: 120}, iconize: true, visual: { visible: true } },
            { type: "card", template: "status_metabolism", value: {initial: 150, max: 150}, iconize: true, visual: { visible: true } }
        ]
    },                 
};

