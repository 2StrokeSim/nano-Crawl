class visual extends PIXI.Sprite
{
    static visualURLs = [
        "./img/white_card_boundary.png"
    ];    
    
	static mySpriteSheetImage = PIXI.BaseTexture.fromImage("./img/white_card_boundary.png");

    static whiteFrameTexture = new PIXI.Texture(visual.mySpriteSheetImage, new PIXI.Rectangle(0, 0, 100, 140));

    request_layer()
    {
        background = this.parent.parent.contribute_visual_layer();
    }

    contribute_layer()
    {
        if ( this.opacities )
        {
            return new PIXI.Sprite(illustration.library[this.opacities[0]].sheet.idle[0]);//this.opacities;
        }
        else if ( this.translucencies )
        {
            //new PIXI.Sprite(illustration.library.cave_background.sheet.idle[0]);
            return this.request_layer();
        }
    }

    iconize()
    {
        this.iconized = true;
        if (this.title) this.title.refresh();
      //  this.removeChild(this.visual);
      
        this.illustration.background.visible = false;
        this.background.visible = false;        
        this.frame.visible = false;        
    }
    
    get_opacities()
    {
        if (this.opacities)
        {
            return this.opacities;
        }
        else if (this.overvisual)
        {
            return this.overvisual.get_opacities();
        }
    }
    
    set_overvisual(overvisual)
    {
        this.overvisual = overvisual;
        
        if (overvisual)
        {
            if (this.translucencies)
            {
                var opacities = overvisual.get_opacities();
                if (opacities)
                {
                    this.illustration.set_background(new PIXI.Sprite(illustration.library[opacities].sheet.idle[0]));
                }
            }
        }
    }
    
    constructor(template) 
    {	
        var cardTexture; 

        super();    

        this.translucencies = template.translucencies;
        this.opacities = template.opacities;

        this.background = new PIXI.Sprite(illustration.library.black_textured_background.sheet.idle[0]);        
        
        this.background.anchor.set(0.5);
        this.background.y = cardH / 6;
        this.addChild(this.background);
    
        this.portal = new PIXI.Graphics();
                  
        this.addChild(this.portal);
        this.portal.x = 0;
        this.portal.y = 0;
        this.portal.lineStyle(0);

        if (template.texture)
        {
            this.illustration = new illustration(template.texture, template);
            this.addChild(this.illustration);
            
            this.illustration.mask = this.portal;

            this.portal.beginFill();
            this.portal.drawRect(-cardW/2, -cardH/2, cardW, cardH/2);
            this.portal.endFill();
        }
        
        cardTexture = visual.whiteFrameTexture;
        this.frame = new PIXI.Sprite(cardTexture);
        this.addChild(this.frame);
        this.frame.anchor.x = .5;
        this.frame.anchor.y = .5;
    
        if (template.title)
        {
            this.title = new caption(template, this);
            this.addChild(this.title);
        }
        
		this.anchor.x = .5;
		this.anchor.y = .5;
    }	
	
    
    refresh()
    {
        if (this.title) this.title.refresh();
    }
    
    selection_action()
    {
        for (var i = 0; i < selection.cards.length; i++ )
        {
   //         selection.cards[i].parent.remove(selection.cards[i]);
   //         registry.player.cards[2].cards[4].push(selection.cards[i]);            
        }
//        selection.transfer_all(registry.player.cards[2].cards[4]);
//        selection.action();
        selection.empty(); 
    }
    
    action()
    {
        this.parent.action_mapping.response.call(this.parent, ...this.parent.action_mapping.parameters);           
    }    
    
    add_card_to_selection()
    {
        this.parent.iconize();
        registry.player.cards[2].cards[4].push(this.parent);            

    //    selection.push(this.parent);
    }
    
    pointerdown_handler()
    {
        // Why not apply? I'm guessing I want to stuff something before the ellipse operator maybe?
        this.pointerdown_handler_mapping.response.call(this, ...this.pointerdown_handler_mapping.parameters);   
    }    
    
    enterFrame()
    {

    }	    
}