Card.library.primary_laborer_deck =
{
    title: "Aggro Laborer Action",

    meta: [
    "deck"
    ],
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                 

    geometry: 
    { 
        generator: Geometry.listFromCoords, 
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
            type: "card", meta: ["hand"], template: "simple_container", visual: { visible: true },
        },
       
        { 
            template: "simple_container", meta: ["deck"], visual: { visible: false },                                 
        },     

        { 
            template: "simple_container", meta: ["reserve"], visual: { visible: false },                                 
        }, 

        { 
            type: "card", meta: ["prepared"], template: "prepared", visual: { visible: true },
        },  

        { 
            type: "card", meta: ["executing"], template: "executing", visual: { visible: true },
        },                    
    ]
};

Card.library.prepared =
{
    meta: "prepared",
    geometry: { X: 0, Y: 0, R: 0, deltaX: cardW + 10, deltaY: 0, deltaR: 0}, 
    action: [],
    inventory: [], 
    meta: "simple container" 
};

Card.library.executing =
{  
    meta: "executing",
    geometry: { X: 0, Y: 0, R: 0, deltaX: cardW + 2, deltaY: 0, deltaR: 0}, 
    action: [],
    inventory: [], 
    meta: "simple container" 
};


Card.library.primary_player_deck =
{
    title: "Aggro Laborer Action",

    meta: [
    "player deck"
    ],
    
    
    X: 0 , Y: 0,
    
    collection: { X: 0, Y: 0, deltaX: 0, deltaY: 0 },                            
                    
    geometry: 
    { 
        generator: Geometry.listFromCoords, 
        elements: 
        [   
            { X: 0, Y: 0, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: 400, Y: 400, R: 0 },
            { X: (cardW * 5), Y: (-cardH/2), R: 0 },
            { X: (cardW * -1), Y: (-cardH/2), R: 0 }
        ]
    },      
    
 //   geometry: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},                       

               
    inventory:
    [
        { 
            type: "card", meta: ["hand"], template: "simple_container", visual: { visible: true }
        },
       
        { 
            template: "simple_container", meta: ["deck"], visual: { visible: false },
        },

        { 
            template: "simple_container", meta: ["reserve"], visual: { visible: false },                                 
        },          
        
        { 
            type: "card", meta: ["prepared"], template: "prepared", visual: { visible: true },
        },  

        { 
            type: "card", meta: ["executing"], template: "executing", visual: { visible: true },
        },                   
    ]
};