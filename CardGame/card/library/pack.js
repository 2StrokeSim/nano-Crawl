Card.library.simple_attack_action_pack = 
{ 
    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},
    meta: 
    [ 
        "action_slash",
        "action_thrust",
        "action_shoot"        
    ],    
    action: [ {response: "open_pack", parameters: [ 3, 5, [ "action_slash", "action_thrust", "action_shoot" ] ] } ],               
    inventory: []
};

Card.library.simple_AI_engage_event_pack = 
{ 
    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},
    meta: 
    [ 
        "event_AI_engage"       
    ],    
    
    action: [ {response: "open_pack", parameters: [ 1, 1, [ "event_AI_engage" ] ] } ],               
    inventory: []
};

Card.library.simple_player_travel_event_pack = 
{ 
    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},
    meta: 
    [ 
        "event_player_travel"       
    ],    
    
    action: [ {response: "open_pack", parameters: [ 1, 1, [ "event_player_travel" ] ] } ],               
    inventory: []
};

Card.library.simple_player_engage_event_pack = 
{ 
    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},
    meta: 
    [ 
        "event_player_engage"       
    ],    
    
    action: [ {response: "open_pack", parameters: [ 1, 1, [ "event_player_engage" ] ] } ],               
    inventory: []
};

Card.library.simple_player_death_event_pack = 
{ 
    path: { X: 0, Y: 0, R: 0, deltaX: 0, deltaY: 0, deltaR: 0},
    meta: 
    [ 
        "event_player_death"       
    ],    
    action: [ {response: "open_pack", parameters: [ 1, 1, [ "event_player_death" ] ] } ],               
    inventory: []
};