Card.library = 
{   
    action_slash:
    {            
        meta: "action",
        
        visual: 
        {
            title: "Slash",
            texture: "action_slash"
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
            { response: "modify_value_by_value", parameters: [2, -1] },
        ],

        visual: 
        {
            title: "Bleed",                
            texture: "status_bleed"
        },
        
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}
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

        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}            
    },

    effect_cut:
    {
        meta: "status",            

        action: 
        [
            {  response: "add_malfunction_to_target_component", references: [{param_index: 0, ref_index: 0}], 
               parameters: ["antagonist", { ascent: 0, descent: [0, 1, 1] }, "status_bleed", {initial: 10}] }
        ],        
        
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}                    
    },

    interaction:
    {            
        meta: "status",            
        
        action: 
        [
            { response: "interaction_update", parameters: [] }
        ],
                
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
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
            { response: "modify_value", parameters: [1, 10] },
        ],
        
        zero_threshold:
        [ { response: "death", parameters: [] } ],
        
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
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
            { response: "modify_value_by_value", parameters: [3, -1] },
        ],
        
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},            
        
        attributes: {}
    }, 

    outer_ring:
    {  
    
        geometry: 
        {         
            generator: Geometry.radialListFromCoords, 
            elements: 
            [   
                { Theta: 0, Radius: 200, Rotation: 0 },
                { Theta: 90, Radius: 0, Rotation: 0 },
                { Theta: 180, Radius: 0, Rotation: 0 },
                { Theta: 270, Radius: 0, Rotation: 0 }
            ]
        }, 
        action: [],
        inventory: [], 
        meta: "simple container" 
    },

    simple_container:
    {  
        geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0}, 
        action: [],
        inventory: [], 
        meta: "simple container" 
    },
   
    
    value_container:
    {  
        geometry: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],
        inventory: [], 
        meta: "value container" 
    },

    simple_action_cost_pack:
    {
        geometry: { X: 0, Y: 0, R: 0, deltaX: 60, deltaY: 0, deltaR: 0}, 
        action: [],             
        inventory:
        [
            { type: "card", template: "cost_vital_energy", value: {initial: 10}, iconize: true, visual: { visible: true } }
        ]
    },
               
};

