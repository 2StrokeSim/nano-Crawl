const totalCards = 144 ;

/**distance between each card */
const deltaY = 1.5 ;

var screenWidth;
var screenHeight;

var transferPile;
var camera;
// Blood effect sheet building:
// 800, 550 start
// 200 X 175 dimension


class collection extends PIXI.Sprite
{
    constructor(template)
    {
        super();

		this.anchor.x = .5;
		this.anchor.y = .5;
        
		this.cards = [];
        this.meta = template.meta;

        if (template.geometry.generator != undefined)
        {
            this.geometry = template.geometry.generator(template.geometry);
        }
        else
        {
            this.geometry = Geometry.incrementalFromCoords(template.geometry);
        }
    }

    remove_shift_transfer(card, target)
    {
        target.push(this.remove());
    }
    
    travel(destination)
    {
        this.detach();
        destination.cards[0].push(this);
    }
    
    shift_push_transfer(target)
    {
        target.push(this.shift());
    }

    //TODO: Poorly named. Meh.
    get_overvisual()
    {
        if (this.visual)
        {
            return this.visual;
        }
        else if (this.parent)
        {
            return this.parent.get_overvisual();
        }
    }

    push(card)
	{
		this.cards.push(card);
		this.addChild(card);

        this.geometry.attach(card);

        if (card.visual)
        {
            card.visual.set_overvisual(this.get_overvisual());
        }

      //  this._calculateBounds();
	}
    
    include(card)
    {
		this.cards.push(card);        
    }

    merge(card)
	{
		this.cards.push(card);
		this.addChild(card);

        this.geometry.attach(card);
	}
	
	pop()
	{
        var card = this.cards.pop();
		this.removeChild(card);
             
        this.geometry.decrement();

        return card;
	}
	
	shift()
	{
		return this.cards.shift();
	}	
	
	unshift()
	{
		
	}
    
    remove(card)
    {
        this.removeChild(card);
        this.cards.splice(this.cards.indexOf(card), 1);
        // TODO: a lot more than this
        this.geometry.decrement();
    }
	
    empty()
    {
        for (; 0 < this.cards.length;)
        {
            this.pop();
        }
    }
    
	reverse()
	{
		this.cards = this.cards.reverse();
	}
    
    clicked()
    {
        var card = this.pop();
        transferPile.lastY = this.lastY + this.y;
    //    card.y = 0;//this.lastY;
        card.x = this.x;
        
        transferPile.transfer(card, this.target);  
    }
    
    transfer(card, target)
    {
        this.push(card);
        card.move(target.x,
                  target.lastY + target.y,
                  this,
                  target
                  );        
    }
    
    get_meta(meta)
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            for (var j = 0; j < this.cards[i].meta.length; j++)
            {
                if (this.cards[i].meta[j] == meta)     
                return this.cards[i];
            }
        }
    }
	
    status_update()
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].status_update();
        }
    }    
    
    component_via_geometry(geometry)
    {
        var component = this;
        
        for (var i = 0; i < geometry.descent.length; i++)
        {
            component = component.cards[geometry.descent[i]];
        }

        return component;
    }    
    
    item_via_path(path)
    {
        var item = this;
        
        for (var i = 0; i < path.ascent; i++)
        {
            item = item.parent;
        }
        
        item = item.component_via_geometry(path);

        return item;
    }    
    
    update_component(path)
    {
        var component = this.component_via_geometry(path);
        component.status_update();
    }
    
	enterFrame()
    {
       for(var i = 0 ; i<this.cards.length ; i++)
       {
            this.cards[i].enterFrame();
       }
    }
}

class Selection extends collection
{
    constructor(x, y, r, deltaX = 0, deltaY = 0, deltaR = 0, meta = [], clicked = false)
    {
        super({ geometry: { X: x, Y: y, R: r, deltaX: deltaX, deltaY: deltaY, deltaR: deltaR } });
    }
    
    push(card)
	{
		this.cards.push(card);

        card.x += this.geometry.index.x;        
        card.y += this.geometry.index.y;
	}
	
	pop()
	{   
        var card = this.cards.pop();

        card.x -= this.geometry.index.x;
        card.y -= this.geometry.index.y;             
     //   this.geometry.decrement();

        return card;
	}
	
	shift()
	{
		return this.cards.shift();
	}	
	
	unshift()
	{
		
	}
    
    remove(card)
    {
        this.removeChild(card);
        this.cards.splice(this.cards.indexOf(card), 1);
    }
    
    empty()
    {
        for (; 0 < this.cards.length;)
        {
            this.pop();
        }
    }
	
	reverse()
	{
		this.cards = this.cards.reverse();
	}
    
    clicked()
    {
        var card = this.pop();
        transferPile.lastY = this.lastY + this.y;
    //    card.y = 0;//this.lastY;
        card.x = this.x;
        
        transferPile.transfer(card, this.target);  
    }
    
    transfer(card, target)
    {
        this.push(card);
        card.move(target.x,
                  target.lastY + target.y,
                  this,
                  target
                  );        
    }
    
    get_meta(meta)
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            for (var j = 0; j < this.cards[i].meta.length; j++)
            {
                if (this.cards[i].meta[j] == meta)     
                return this.cards[i];
            }
        }
    }
	
	enterFrame()
    {
       for(var i = 0 ; i<this.cards.length ; i++)
       {
            this.cards[i].enterFrame();
       }
    }
    
    action()
    {
        for (var i = 0; i < this.cards.length; i++)
        {
            this.cards[i].action();
        }
    }
}

var camera;
var selection;
var registry = {};

//var camera = { subject: undefined, anchor: undefined, map: undefined, root: undefined }

var cardGame = function(PIXI,Width=800,Height=600)
{       
    screenWidth = Width;
    screenHeight = Height;

    stage_background = new PIXI.Sprite();

    stage_background.height = 1;
    app.stage.addChild(stage_background);
        
    registry.open_hands = [];

    var meadow = new Card(0, PIXI, "meadow", {visual: {visible:true}});
    var cave = new Card(0, PIXI, "cave", {visual: {visible:true}});
    
    meadow.y = -30;

    var entrance = meadow.cards[0];
    var vestibule = cave.cards[0];

    var arpeture = new Card(0, PIXI, "cave_entrance", {visual: {visible:true}}, undefined, undefined, [vestibule]);

    entrance.cards[2].push(arpeture);
    
    registry.location = entrance;
    registry.player = new Card(0, PIXI, "android_omni", {visual: {visible:true}});    
    
    entrance.cards[0].push(registry.player);    
    
    entrance.camera_open_location(entrance);

    
  //  arpeture.set_input({ input: [{ event: 'pointerdown', response: "set_context", parameters: ["drop_down_hand"] }] });

  

    
//    registry.player.parent.parent.x = (300);
//    registry.player.parent.parent.y = (120);
//    registry.player.parent.parent.visual.portal.drawRect(-cardW * 100, -cardH * 100, cardW * 100, cardH * 100);
    registry.interaction = new Card(0, PIXI, "interaction", {visual: {visible:true}});
        
    camera = meadow;
    camera.x = cardW/2+20;
    camera.y = cardH;

    camera.visual.muralize();

    selection = new Selection(0, -20, 0, 0, 0, 0);

    PIXI.loader
    .add(
        Card.URLs
    )
    .load(setupGame);

    function setupGame()
    {
   //     var protagonistCard = camera.cards[0];
        
   //     protagonistCard.camera_travel(vestibule);
  //      registry.player = protagonistCard;
    }

    this.enterFrame = function()
    {
        for (var i in camera.children)
        {
            camera.children[i].enterFrame();
        //  registry.interaction.action();
        }
        
        
    }.bind(this)

    var intervalId;

    return this;
}

var process_turn  = function()
{
    registry.area = camera;
        registry.location = registry.area.cards[0];
            registry.biome = registry.location.cards[0];
        
                for (var i = 0; i < registry.biome.cards.length; i++)
                {
                    registry.actor = registry.biome.cards[i];
                        registry.components = registry.actor.cards[3];
                        registry.deck = registry.actor.cards[3];              
                            registry.actor.action();
                }

                for (var i = 0; i < registry.open_hands.length; i++)
                {
                    registry.open_hands[i].update();
                }
              
                var junk = registry.interaction.cards[0];
                registry.interaction.action();
}

        var tilingSprites = [];


    var stage_background;
    var muralize = function(texture)
    {
        for (var i = 0; i < tilingSprites.length; i++)
        {
            stage_background.removeChild(tilingSprites[i]);            
        }
        for (var i = 0; i < illustration.library[texture].sheet.idle.length; i++)
        {
            tilingSprites[i] = new PIXI.TilingSprite(
                illustration.library[texture].sheet.idle[i],
                240,
                170,
            );
            
            tilingSprites[i].width *= 800;
            tilingSprites[i].height *= 100;
            
            tilingSprites[i].tileScale.x = 800 / illustration.library[texture].sheet.idle[i].width;
            tilingSprites[i].tileScale.y = (600 / illustration.library[texture].sheet.idle[i].height);
            
            tilingSprites[i].anchor.set(0.0);
            
            tilingSprites[i].zIndex = i - illustration.library[texture].sheet.idle.length;
          
            stage_background.addChild(tilingSprites[i]);
        }
        
    //    this.x = 0; this.y = 0;
    //    this.background.y = 0;        
    }

class Sound
{
//    static start = PIXI.sound.Sound.from('snd/boing.mp3');
}
