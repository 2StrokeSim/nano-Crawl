Card.library.auto_hand =
{
    title: "AI Hand",
    
    meta: "hand",           

    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},                          
    
    action: 
    [
        { response: "deal_cards", parameters: [] }
    ],            
    
    path: { X: 0, Y: 0, R: 0, deltaX: cardW + 10, deltaY: 0, deltaR: 0},
    
    attributes: {}
};           

Card.library.laborer_reserve = 
{
    title: "Aggro Laborer Action",

    meta: [
    "deck"
    ],
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                    

    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},                       

               
    inventory:
    [  
        { 
            template: "simple_attack_action_pack", meta: ["deck"], visual: { visible: false },                                 
        },                       
        
        { 
            template: "simple_player_death_event_pack", meta: ["deck"], visual: { visible: false },                                 
        },
        
        { 
            template: "simple_AI_engage_event_pack", meta: ["deck"], visual: { visible: false },                                 
        },        
    ]
};
        
Card.library.primary_laborer_deck =
{
    title: "Aggro Laborer Action",

    meta: [
    "deck"
    ],
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                 

    path: 
    { 
        generator: pathLink.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: 400, Y: 400, R: 0 }
        ]
    },      
                     

    inventory:
    [
        { 
            type: "card", meta: ["hand"], template: "auto_hand", visual: { visible: true },
        },
       
        { 
            template: "simple_AI_engage_event_pack", meta: ["deck"], visual: { visible: false },                                 
        },     

        { 
            template: "laborer_reserve", meta: ["reserve"], visual: { visible: false },                                 
        }, 

        { 
            type: "card", meta: ["prepared"], template: "prepared", visual: { visible: true },
        },  

        { 
            type: "card", meta: ["executing"], template: "executing", visual: { visible: true },
        },                    
    ]
};

Card.library.button_play =
{
    
    visual: 
    {
        title: "Play Cards",                
        texture: "button_play",
    },
    
    meta: "hand",            
    
    input: [{ event: 'pointerdown', response: "selection_action", parameters: [] }],  
    
    path: { X: 0, Y: 0, R: 0, deltaX: cardW + 10, deltaY: 0, deltaR: 0},
    
    attributes: {}
};

Card.library.manual_hand =
{
    title: "Player Hand",
    
    meta: "hand",            
    
    action: 
    [
        { response: "deal_cards", parameters: [] },
        { response: "set_collection_input", parameters: [] }        
    ],            
    
    path: { X: 0, Y: 0, R: 0, deltaX: cardW + 10, deltaY: 0, deltaR: 0},
    
    attributes: {}
};

Card.library.prepared =
{
    meta: "prepared",
    path: { X: 0, Y: 0, R: 0, deltaX: cardW + 10, deltaY: 0, deltaR: 0}, 
    action: [],
    inventory: [], 
    meta: "simple container" 
};

Card.library.executing =
{  
    meta: "executing",
    path: { X: 0, Y: 0, R: 0, deltaX: cardW + 2, deltaY: 0, deltaR: 0}, 
    action: [],
    inventory: [], 
    meta: "simple container" 
};

Card.library.player_reserve = 
{
    title: "Aggro Laborer Action",

    meta: [
    "deck"
    ],
    
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                    

    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},                       

               
    inventory:
    [  
        { 
            template: "simple_attack_action_pack", meta: ["deck"], visual: { visible: false },                                 
        },                       
        
        { 
            template: "simple_player_death_event_pack", meta: ["deck"], visual: { visible: false },                                 
        },
        
        { 
            template: "simple_player_engage_event_pack", meta: ["deck"], visual: { visible: false },                                 
        },      

        { 
            template: "simple_player_travel_event_pack", meta: ["deck"], visual: { visible: false },                                 
        }        
    ]
};

Card.library.primary_player_deck =
{
    title: "Aggro Laborer Action",

    meta: [
    "player deck"
    ],
    
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                    
    path: 
    { 
        generator: pathLink.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: (cardW * 5), Y: (-cardH/2), R: 0 },
            { X: (cardW * -1), Y: (-cardH/2), R: 0 }
        ]
    },      
    
 //   path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},                       

               
    inventory:
    [
        { 
            type: "card", meta: ["hand"], template: "manual_hand", visual: { visible: true }
        },
       
        { 
            template: "simple_player_travel_event_pack", meta: ["deck"], visual: { visible: false },
        },

        { 
            template: "player_reserve", meta: ["reserve"], visual: { visible: false },                                 
        },          
        
        { 
            type: "card", meta: ["prepared"], template: "prepared", visual: { visible: true },
        },  

        { 
            type: "card", meta: ["executing"], template: "executing", visual: { visible: true },
        },                   
    ]
};