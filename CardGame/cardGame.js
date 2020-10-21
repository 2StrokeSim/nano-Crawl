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

        if (template.path.generator != undefined)
        {
            this.path = template.path.generator(template.path);
        }
        else
        {
            this.path = pathLink.incrementalFromCoords(template.path);
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

    //TODO: Poolry named. Meh.
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

        card.x = this.path.index.x;
        card.y = this.path.index.y;
        
        this.path.increment();

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

        card.x = this.path.start.x;        
        card.y = this.path.start.y;
        
        this.path.increment();

      //  this._calculateBounds();        
	}
	
	pop()
	{
        var card = this.cards.pop();
		this.removeChild(card);
             
        this.path.decrement();

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
        this.path.decrement();
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
    
    component_via_path(path)
    {
        var component = this;
        
        for (var i = 0; i < path.descent.length; i++)
        {
            component = component.cards[path.descent[i]];
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
        
        item = item.component_via_path(path);

        return item;
    }    
    
    update_component(path)
    {
        var component = this.component_via_path(path);
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
        super({ path: { X: x, Y: y, R: r, deltaX: deltaX, deltaY: deltaY, deltaR: deltaR } });
    }
    
    push(card)
	{
		this.cards.push(card);

        card.x += this.path.index.x;        
        card.y += this.path.index.y;
	}
	
	pop()
	{   
        var card = this.cards.pop();

        card.x -= this.path.index.x;
        card.y -= this.path.index.y;             
     //   this.path.decrement();

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

var cardGame = function(PIXI,Width=550,Height=400)
{       
    screenWidth = Width;
    screenHeight = Height;
    
    registry.player = new Card(0, PIXI, "android_omni", {visual: {visible:true}});

    var entrance = new Card(0, PIXI, "cave_entrance", {visual: {visible:true}});
    entrance.cards[0].push(registry.player);
    registry.player.y = (144*1.5+(400-144*1.5)/2);

    registry.interaction = new Card(0, PIXI, "interaction", {visual: {visible:true}});

    var vestibule = new Card(0,PIXI, "vestibule", {visual: {visible:true}});

    vestibule.cards[1].include(entrance);
    entrance.cards[1].include(vestibule);
        
    camera = entrance;
    camera.x = cardW/2+20;
    camera.y = cardH;

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
        for (i in camera.children)
        {
            camera.children[i].enterFrame();
        //            registry.interaction.action();
        }
        
        
    }.bind(this)

    var intervalId;

    return this;
}

var process_turn  = function()
{
    registry.location = camera;
        registry.biome = registry.location.cards[0];
    
            for (var i = 0; i < registry.biome.cards.length; i++)
            {
                registry.actor = registry.biome.cards[i];
                    registry.deck = registry.actor.cards[2];
                    
                registry.actor.action();
            }
            
            var junk = registry.interaction.cards[0];
            registry.interaction.action();
}

class Sound
{
//    static start = PIXI.sound.Sound.from('snd/boing.mp3');
}
