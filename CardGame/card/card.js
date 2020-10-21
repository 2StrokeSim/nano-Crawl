const   cardW = 100,
        cardH = 140;

class Card extends collection
{
    
    static URLs = [
   //     "./img/card.png",
   //     "./img/card2.png",
   //     "./img/card3.png",
   //     "./img/card4.png",
   //     "./img/card5.png",
   //     "./img/adventurer-v1.5-Sheet.png",
   //     "./img/derp.png",
        "./img/white_card_boundary.png",
   //     "./img/sword_slash_collection_by_redballbomb-dbz1bas.png"
    ];
    
    static Actions = 
    [
        "action_slash",  
        "action_thrust", 
        "action_shoot"       
    ];
    
    static Statuses = 
    [
        "status_bleed"   
    ];

    null_function(){};

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
        this.cards[2].cards[0].pick_cards();                
        this.cards[2].cards[4].status_update();  
        this.cards[2].cards[4].empty();          
                
        this.cards[0].cards[1].status_update();
        this.cards[2].cards[0].empty();        
        this.cards[2].cards[0].action();         
    }    
    
    client_actor_update()
    {
        selection.empty(); 
        var junk = this.cards[2].cards[0];
        this.cards[2].cards[4].status_update(); 
        this.cards[2].cards[4].empty();          
        
        this.cards[0].cards[1].status_update();
        this.cards[2].cards[0].empty();        
        this.cards[2].cards[0].action(); 
    }
        
    status_update()
    {
        this.action();
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].status_update();
        }
    }

    open_pack(card_number, card_count, card_set)
    {
        for ( var i = 0 ; i<card_count ; i++ )
        {
            var cardTexture = card_set[Math.floor(card_number*Math.random())];
            var cardItem = new Card(this,PIXI,cardTexture,{visual: {visible:true}});

            registry.deck.cards[0].push(cardItem);
        }
    }
    
    set_collection_input()
    {
        for ( var i = 0 ; i<this.cards.length ; i++ )
        {
            var template = { input: [{ event: 'pointerdown', response: "add_card_to_selection", parameters: [] }] };

            this.cards[i].visual.interactive = true;
            this.cards[i].visual.buttonMode = true;

            this.cards[i].visual.on(template.input[0].event, this.cards[i].visual[template.input[0].event + '_handler']);
            this.cards[i].visual[template.input[0].event + '_handler_mapping'] = { response: this.cards[i].visual[template.input[0].response], parameters: template.input[0].parameters };
        }        

// TODO: Have this show up somewhere, I guess. Though probably not? Being able to change cards in the queue before
// play should be good enough, I'm hoping...
//        var cardItem = new Card(this,PIXI,"button_play",{visual: {visible:true}});     
//        this.push(cardItem);        
//        cardItem.x = 180;
//        cardItem.y = -200;        
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
    
    deal_cards()
    {
        registry.deck.cards[1].action();
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


    add_malfunction_to_target_component(target, path, template, value, quantity)
    {
        var item = new Card(this, PIXI, template, {visual: {visible:true}}, value, quantity);

        var reference = undefined;
        
        var container = target.item_via_path(path);
        
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
            target.cards[1].push(item);
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

    effect_against_target(target, path, template, value, quantity)
    {
        var card = new Card(0, PIXI, "effect_cut", {visual: {visible:true}});
    
    /*  var new_params = [];
        for (var i = 0; i < new_params.length; i++)
        {
            new_params[i] = card.action_mapping[0].parameters[i];
        }
        
        card.action_mapping[0].parameters = new_params;*/
        
        var reference = [...registry.actor.reference];
        var parameters = [...card.action_mapping[0].parameters];
        parameters[0] = reference[0];
        
        card.action_mapping[0].parameters = parameters;
//      card.action_mapping[0].parameters[0] = reference[0];
        registry.interaction.cards[0].push(card);
        
        var crap = registry.interaction.cards[0].cards;
     //   registry.interaction.action();
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
    
    sudoku()
    {
        registry.actor.detach();        
    }
    
    switch_player_pack(index)
    {
        registry.player.cards[2].cards[1] = registry.player.cards[2].cards[2].cards[index];             
    }    
    
    switch_pack(index)
    {
        registry.deck.cards[1] = registry.deck.cards[2].cards[index];             
    }
    
    death()
    {
        this.switch_pack(1);     
    }
    
    modify_value(path, amount, max)
    {
        if (path < 2)
        {
            path = { ascent: 0, descent: [0, path] };
            
            var item = registry.actor.item_via_path(path);
            
            item.addValue(amount, max);
        }
        else
        {
            path = { ascent: 0, descent: [0, 0] };
            
            var item = registry.actor.item_via_path(path);
            
            item.addValue(amount, max);            
        }
    }
    
    modify_value_by_value(index, scale, max)
    {
        this.modify_value(index, this.value * scale)
    }

    modify_value_by_component_value(component_path, index, scale, max)
    {
        var component = this;
        
        for (var i = 0; i < component_path.length; i++)
        {
            component = component.cards[component_path[i]];
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

    camera_travel(destination)
    {
        destination = registry.location.cards[1].cards[destination];
        
        
        app.stage.removeChild(camera);        
        
        this.parent.visible = false;
        registry.actor.travel(destination);
        this.parent.visible = true;
                
        registry.actor.y = (144*1.5+(400-144*1.5)/2);        
                
        camera = destination;
        camera.x = cardW/2+20;
        camera.y = cardH;
        
        app.stage.addChild(camera);                     
    }
    
    actor_travel(destination)
    {
        this.parent.visible = false;
        this.travel(destination);
        this.parent.visible = true;
    }    
    
	constructor(container,PIXI=null,template=null,parameters=null,value=undefined,quantity=undefined, reference=[],collection=[]) 
    {
        
        if (template == "primary_player_deck")
        {
            var meh = "meh";
        }        
            
        template = Card.library[template];
        super(template);

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
		}
        
        this.iconized = false;        
        
		this.anchor.x = .5;
		this.anchor.y = .5;
		//this.r0 = this.rotation = (Math.random()-.5)/10;		
		
		this.targetX = 0;
        this.targetY = 0;
		
		this.xPath = [];
		this.yPath = [];
		this.rPath = [];		
		
		this.pathFrame = 0;
		
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
            this.visual[template.input[0].event + '_handler_mapping'] = { response: this.visual[template.input[0].response], parameters: template.input[0].parameters };
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
                this.action_mapping[i] = { response: this[template.action[i].response], parameters: template.action[i].parameters };             
            }            
        }
        
        if (template.inventory != undefined)
        {  
            for (var i = 0; i < template.inventory.length; i++)
            {
                var item = template.inventory[i];

                if (item.meta == "prepared" || item.meta == "executing" || item.meta == "player deck")
                {
                    var meh = "meh";
                }
                    
                var card = new Card(this, PIXI, item.template, item, item.value, item.quantity, []);
                if (item.iconize) card.iconize();                   
                
                if (item.meta == "prepared" || item.meta == "executing" || item.meta == "player deck")
                {
                    var meh = "meh";
                }

                if (item.visual){ this.push(card); }
                else { this.include(card); card.visible = false;}
                
            }

            if ( template == Card.library.android_omni || template == Card.library.android_labor )
            {
                registry.actor = this;
                registry.deck = registry.actor.cards[2];
                registry.deck.cards[0].action();
            }            
           
        }
        
        if (quantity != undefined) this.set_quantity(quantity);
        if (value  != undefined) this.set_value(value.initial, value.max);
        
        
        if (this.visual) this.visual.refresh();
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
	
    move(x, y, source, destination)
    {
		
        this.xPath = [] ;
        this.yPath = [] ;
        this.pathFrame = 0 ;

        var cX = this.x ;
        var cY = this.y ;

        this.targetX = x ;
        this.targetY = y ;

        var deltaX = this.targetX - cX ;
        var deltaY = this.targetY - cY ;

        var dx = deltaX/this.visuals ;
        var dy = deltaY/this.visuals ;

        for(var i = 0 ; i<this.visuals-1 ; i++)
        {
            var smoothPrecent = (Math.cos(i/this.visuals*Math.PI)-1)/-2;
            this.xPath.push(cX+dx*smoothPrecent*this.visuals);
            this.yPath.push(cY+dy*smoothPrecent*this.visuals);
            this.rPath.push(this.r0+(Math.sin(Math.PI*2*(i/this.visuals)))/8);
        }

        this.xPath.push(this.targetX);
        this.yPath.push(this.targetY);
        this.rPath.push(this.r0);
        
        
        this.source_pile = source;
        this.destination_pile = destination;
    }	
	
    enterFrame()
    {
        if(this.xPath.length>0)
        {
            this.x = this.xPath[this.pathFrame];
            this.y = this.yPath[this.pathFrame];
      //      this.rotation = this.rPath[this.pathFrame];
            this.pathFrame++;

            if(this.pathFrame>=this.xPath.length)
            {
                this.xPath = [];
                this.yPath = [];
                this.rPath = [];
                
                this.x = 0//cardW/2;
                
                this.source_pile.remove(this);
                this.destination_pile.push(this);
            }
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