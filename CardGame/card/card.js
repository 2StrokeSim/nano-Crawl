const   cardW = 100,
        cardH = 140;

var null_function = function(){};
    
class Card extends collection
{    
    static URLs = [
        "./img/white_card_boundary.png",
   ];
    
    null_function(){}

    set_quantity(quantity)
    {
        this.quantity = quantity;
        if (this.visual) this.visual.refresh();
    }
    
    set_value(value, max_value)
    {
        this.value = value;
        
        if (max_value != undefined) 
        {
            this.max_value = max_value;
        }
        
        if (this.max_value != undefined && this.value > this.max_value)
        {
            this.value = this.max_value;
        }
        
        if (this.visual) this.visual.refresh();
    }
    
    remove_card_from_selection()
    {
        
    }
    
    NPC_actor_update()
    {
        this.cards[1].cards[1].status_update();
        
/*        registry.deck.cards[0].pick_cards(); 
        registry.deck.cards[0].empty();        
        
        registry.deck.cards[4].status_update();  
        registry.deck.cards[4].empty();   */                               
    }    
    
    
    
    client_actor_update()
    {
        this.cards[1].cards[1].status_update();
     //   registry.deck.cards[0].cards[0].empty();                                       
     //   registry.deck.cards[0].cards[0].action();            
      
     //   registry.deck.cards[0].cards[1].action();

             
        registry.deck.cards[4].status_update(); 
        registry.deck.cards[4].empty(); 
    }
         
    collection_action()
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].action();
        }        
    }
    
    status_update()
    {
        this.action();
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].status_update();
        }
    }
    
    set_input(template)
    {
        this.visual.interactive = true;
        this.visual.buttonMode = true;

        this.visual.on(template.input[0].event, this.visual[template.input[0].event + '_handler']);
        this.visual[template.input[0].event + '_handler_mapping'] = template.input[0].action;        
    }
    
    set_collection_input(template)
    {        
        for ( var i = 0 ; i<this.cards.length ; i++ )
        {
            this.cards[i].set_input(template);
        }            
    }
    
    set_location_input(template)
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].set_collection_input(template);
        }            
    }
    
    target_first_adjacent()
    {
        var location_inventory = registry.actor.parent.cards;
        
        for (var i = 0; i < location_inventory.length; i++)
        {
            if (location_inventory[i] != registry.actor)
            {
                registry.actor.reference[0] = location_inventory[i];
                break;
            }
        }
    }
    
    pick_cards()
    {
        var card = this.cards[Math.floor(this.cards.length*Math.random())];
        registry.deck.cards[4].push(card);

//        card.action();//frame.add_card_to_selection();
    }
    
    contribute_visual_layer()
    {
        if (this.visual)
        {
            return this.visual.contribute_layer();
        }
        else if (this.parent)
        {
            this.parent.contribute_visual_layer();
        }
            
    }
    
    add_card_to_target_inventory(target, inventory, template, parameters)
    {
        var subject = encounter.get_meta(target);
        var item = new Card(this, PIXI, template,{visual: {visible:true}});

        subject.push_via_meta(item, inventory);
    };


    add_malfunction_to_target_component(target, geometry, template, value, quantity)
    {
        registry.actor.set_animation({action: "rising_slash", time: 20, speed: 0.5});
        
        var sound = PIXI.sound.Sound.from('./snd/sword/MetalSlash5.wav');
        sound.play();
        
        var item = new Card(this, PIXI, template, {visual: {visible:true}}, value, quantity);

        var reference = undefined;
        
        var container = target.cards[1].cards[1];//target.item_via_path(1);
        
        for (var i = 0; i < container.cards.length; i++)
        {
            if (container.cards[i].template == item.template)
            {
                reference = container.cards[i];
                break;
            }
        }
        
        if (reference == undefined)
        {
            // CAVEAT: push into the cards list only in the first, render and list in second
            container.include(item);
            target.cards[2].push(item);
        }
        else
        {
            reference.merge(item);            
        }
    };
    
    interaction_update()
    {
        var junk = this.cards[0].cards;
        for (var i = 0; i < this.cards[0].cards.length; i++)
        {
            this.cards[0].cards[i].action();
        }
        
        this.cards[0].empty();
    }

    effect_against_target(target, geometry, template, value, quantity)
    {
        var card = new Card(0, PIXI, "effect_cut", {visual: {visible:true}});
        
        var reference = [this.reference[0]];
        var parameters = [...card.action_mapping[0].parameters];
        parameters[0] = reference[0];
        
        card.action_mapping[0].parameters = parameters;
//      card.action_mapping[0].parameters[0] = reference[0];
        registry.interaction.cards[0].push(card);
    };
    
    set_target_death_response()
    {
        var target = registry.actor.reference[0];
        
        target.cards[0].cards[1].zero_threshold.push({response:"victory", parameters: []});
    }
    
    victory()
    {
        this.switch_player_pack(3);
    }
    
    push_via_meta(item, meta)
    {
        var container = this.get_meta(meta);
        container.push(item);        
    }
    
    merge(other)
    {
        if (other.value)
        {
            this.addValue(other.value);
        }
        
        if (other.quantity)
        {
            this.addQuantity(other.Quantity);
        }
    }
    
    push_status(status)
    {
        this.push_via_meta(status, "status");
    }
    
    iconize()
    {
        this.visual.iconize();
        this.iconized = true;
        if (this.visual) this.visual.refresh();
    }
    
    modify_quantity(index, amount)
    {
        var thingie = this.parent;
        
        if (index  == 0)
        {
            thingie = thingie.parent;
            thingie = thingie.cards[0];
            thingie = thingie.cards[0];
            this.parent.parent.cards[0].cards[index].addQuantity(amount);
        }
        else 
        {
            thingie = thingie.parent;
            thingie = thingie.cards[0];
            thingie = thingie.cards[1];
            this.parent.parent.cards[0].cards[index].addQuantity(amount);
        }
    }
    
    detach()
    {
        this.parent.remove(this);
    }

    set_context(template)
    {
        this.gui.activate(template);
    }
    
    modify_value(path, amount, max)
    {
        if (path < 3)
        {
            path = { ascent: 0, descent: [1, path] };
            
            var item = registry.actor.item_via_path(path);
            
            item.addValue(amount, max);
        }
        else
        {
            path = { ascent: 0, descent: [1, 0] };
            
            var item = registry.actor.item_via_path(path);
            
            item.addValue(amount, max);
        }
    }
    
    modify_value_by_value(index, scale, max)
    {
        this.modify_value(index, this.value * scale)
    }

    modify_value_by_component_value(component_geometry, index, scale, max)
    {
        var component = this;
        
        for (var i = 0; i < component_geometry.length; i++)
        {
            component = component.cards[component_geometry[i]];
        }
        
        this.modify_value(index, component.value * -1)
    } 
    
    discard()
    {
      //  this.cards[2].empty();
    }

    execute_name_list(list)
    {
        for (var i = 0; i < list.length; i++)
        {
            this[list[i].response].call(this, ...list[i].parameters);
        }       
    }
    
    execute_list(list)
    {
        for (var i = 0; i < list.length; i++)
        {
            list[i].response.call(this, ...list[i].parameters);
        }
    }
    
    action()
    {
        this.execute_list(this.action_mapping);
    /*    for (var i = 0; i < this.action_mapping.length; i++)
        {
            this.action_mapping[i].response.call(this, ...this.action_mapping[i].parameters);
        }   */
    }  

    camera_move(destination)
    {
        destination = this.reference[0];
                
        app.stage.removeChild(camera);
        
        this.parent.visible = false;
        registry.actor.travel(destination);
        this.parent.visible = true;
                
        registry.location = destination;
        registry.biome = destination.cards[0];
                
        registry.location.x = (300);
        registry.location.y = (120);
        
        camera = destination;
        camera.x = cardW/2+20;
        camera.y = cardH;
        
        app.stage.addChild(camera);                     
    }

    center()
    {
        this.x = (300);
        this.y = (40);    

        var root = this;
        var x = 0;
        var y = 0;
        
        for (;root != undefined; root = root.parent)
        {
            x += root.x;
            y += root.y;
        }
    }

    camera_open_location()
    {
        this.parent.visible = true;
        this.visible = true;
              
        registry.location = this;
        registry.biome = this.cards[0];
                
        this.center();
        
        this.set_location_input({ input: [{ event: 'pointerover', 
                                  action: [
                                                {response: "set_context", parameters: ["drop_down_hand"]},
                                                {response: "remove_handler", parameters: ["pointerover_handler_mapping"]}
                                          ] 
                                  
                                  }] })
          
        camera = this.parent;
        camera.x = cardW/2+20;
        camera.y = cardH;
        
        app.stage.addChild(camera); 
        camera.visual.muralize();
    }
    
    camera_travel(destination)
    {
        var sound = PIXI.sound.Sound.from('./snd/door/DoorClose1.wav');
        
        sound.play();
        registry.actor.set_animation({action: "run", time: 100, speed: 0.3});
        destination = this.reference[1];
                
        app.stage.removeChild(camera);
        
        this.parent.visible = false;
        registry.actor.travel(destination);

        destination.camera_open_location();
    }
    
	constructor(container,PIXI=null,template=null,parameters=null,value=undefined,quantity=undefined, reference=[],collection=[]) 
    {      
        template = Card.library[template];
        super(template);

        this.set_animation = null_function;
        this.template = template;
            
        this.reference = reference;    
            
        this.meta = template.meta;    
        this.container = container;


        // TODO: get all of these things separated. Cards that can 
        // have frames or no frames and illustrations or no illustrations
        // in any combination
        if (template.visual != undefined)
        {
            this.visual = new visual(template.visual, parameters.visual);
            this.addChild(this.visual);                        
            
            this.set_animation = this.visual.set_animation;
		}
        
        this.iconized = false;        
        
		this.anchor.x = .5;
		this.anchor.y = .5;
		//this.r0 = this.rotation = (Math.random()-.5)/10;		
		
		this.targetX = 0;
        this.targetY = 0;		
		
		this.geometryFrame = 0;
		
		this.visuals = 6;	
                
        if (template.zero_threshold) this.zero_threshold = template.zero_threshold;
        else this.zero_threshold = [{ response: "null_function", parameters: [] }];

        if (template.max_threshold) this.zero_threshold = template.max_threshold;
        else this.max_threshold = [{ response: "null_function", parameters: [] }];
        
        if (template.input)
        {
            this.visual.interactive = true;
            this.visual.buttonMode = true;

            this.visual.on(template.input[0].event, this.visual[template.input[0].event + '_handler']);
            this.visual[template.input[0].event + '_handler_mapping'] = template.input[0].action;
        }
        
        if (template.action)
        {
        //    this.visual.interactive = true;
        //    this.visual.buttonMode = true;

         //   this.visual.on(template.action[0].event, this.action);
            this.action_mapping = []; 
            for (var i = 0; i < template.action.length; i++)
            {
                var parameters = [...template.action[i].parameters];
                this.action_mapping[i] = { response: this[template.action[i].response], parameters: parameters };             
            }            
        }
        
        if (template.context)
        {
            this.context = template.context;
        }
        
        this.gui = new GUI(this, "drop_down_hand");
        this.addChild(this.gui);
        
        if (template.inventory != undefined)
        {  
            for (var i = 0; i < template.inventory.length; i++)
            {
                var item = template.inventory[i];
                    
                var card = new Card(this, PIXI, item.template, item, item.value, item.quantity, []);
                if (item.iconize) card.iconize();                                   

                if (item.visual){ this.push(card); }
                else { this.include(card); card.visible = false;}                
            }   
        }
        
        if (parameters.inventory != undefined)
        {  
            for (var i = 0; i < parameters.inventory.length; i++)
            {
                var item = parameters.inventory[i];
                    
                var card = new Card(this, PIXI, item.template, item, item.value, item.quantity, []);
                if (item.iconize) card.iconize();                                   

                if (item.visual){ this.push(card); }
                else { this.include(card); card.visible = false;}                
            }   
        }
        
        if (quantity != undefined) this.set_quantity(quantity);
        if (value  != undefined) this.set_value(value.initial, value.max);        
        
        if (this.visual) 
        {this.visual.refresh()};
    }	
	
    addQuantity(quantity)
    {
        this.quantity += quantity;
        if (this.visual) this.visual.refresh();
    }
    
    addValue(value, max = 0)
    {
        this.value += value;
        
        if ( this.value <= 0 ) 
        {
            this.execute_name_list(this.zero_threshold);
            this.value = 0;
        }
        else if ( this.max_value != undefined )
        {
            this.max_value += max;
            if ( this.value > this.max_value )
            {
                this.execute_name_list(this.max_threshold);
                this.value = this.max_value;
            }
        }
        
        if (this.visual) this.visual.refresh();
    }
    
	setX(value)
    {
        this.targetX = this.x = value;
    }
	
	setY(value)
    {
        this.targetY = this.y = value;
    }
	
    enterFrame()
    {    
//        this.position.update();
        
        for (var i in this.children)
        {
            this.children[i].enterFrame();
        //  registry.interaction.action();
        }
    }	
}




class GUI extends PIXI.Container
{
    static library = 
    {
        drop_down_hand:
        {
            geometry: 
            { 
                generator: Geometry.radialListFromCoords, 
                elements: 
                [   
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 }
                    
                ]
            }
        },
        
        location_inventory:
        {
            geometry: 
            { 
                generator: Geometry.radialListFromCoords, 
                elements: 
                [   
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 },
                    { Theta: 3*(Math.PI)/2, Radius: 0, Rotation: 0 }
                    
                ]
            }
        }        
    }
    
    constructor(object, template)
    {
        super();
        this.object = object;
        this.get_overvisual = object.get_overvisual.bind(object);                                       
    }

    detach()
    {
    }

    empty()
    {
        this.geometry.reset();        
        for (;this.children.length > 0;)
        {
            this.removeChild(this.children[0]);
        }        
    }

    set_input()
    {
        for ( var i = 0 ; i<this.cards.length ; i++ )
        {
            this.cards[i].set_input(template);
        }
    }

    push(card)
    {
        this.addChild(card);        
        this.geometry.attach(card);
    }

    activate(template)
    {
        template = GUI.library[template];
        this.geometry = template.geometry.generator(template.geometry);
        
        this.empty();        
    //    var pack = new Card(0, PIXI, this.object.context[0], {}, undefined, undefined, [this.object.cards[0], this.object.reference[0]]);
        
        registry.open_hands.pop();
        registry.open_hands.push(this);
        this.delta = { velocity: 5, limit: 200 };

        for (var i = 0; i < this.object.context.length; i++)
        {
            this.empty();
            
            for (var i = 0; i < this.object.context.length; i++)
            {
                var card = new Card(0, PIXI, this.object.context[i], {visual: {visible:true}}, undefined, undefined, [this.object, this.object.reference[0]]);
                card.set_input({ input: [{ event: 'pointerdown', action: [{response: "add_card_to_selection", parameters: []}] }] });         
                this.push(card);
            }
        }

        this.geometry.dropandFanHand();
        
        this.update();
    }
    
    action()
    {
    }
    
    update()
    {

    }
    
    enterFrame()
    {
        if (this.visual)
        { this.visual.enterFrame(); }
        
        for (var i = 0; i < this.children.length; i++)
        {
            this.geometry.enterFrame();
        }        
        
        for (var i = 0; i < this.children.length; i++)
        {
            this.children[i].enterFrame();
        }
    }
}
/*  ░░░░░░░░░░▄▄█▀▀▄░░░░ 
    ░░░░░░░░▄█████▄▄█▄░░░░ 
    ░░░░░▄▄▄▀██████▄▄██░░░░ 
    ░░▄██░░█░█▀░░▄▄▀█░█░░░▄▄▄▄ 
    ▄█████░░██░░░▀▀░▀░█▀▀██▀▀▀█▀▄ 
    █████░█░░▀█░▀▀▀▀▄▀░░░███████▀ 
    ░▀▀█▄░██▄▄░▀▀▀▀█▀▀▀▀▀░▀▀▀▀ 
    ░▄████████▀▀▀▄▀░░░░ 
    ██████░▀▀█▄░░░█▄░░░░ 
    ░▀▀▀▀█▄▄▀░██████▄░░░░ 
    ░░░░░░░░░█████████░░░░ */