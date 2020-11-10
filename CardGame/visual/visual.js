class visual extends PIXI.Container
{
    static visualURLs = [
        "./img/white_card_boundary.png"
    ];    
    
	static mySpriteSheetImage = PIXI.BaseTexture.fromImage("./img/white_card_boundary.png");
    static whiteFrameTexture = new PIXI.Texture(visual.mySpriteSheetImage, new PIXI.Rectangle(0, 0, 100, 140));

    iconize()
    {
        this.iconized = true;
        if (this.title) this.title.refresh();
      //  this.removeChild(this.visual);
      
    //    this.illustration.background.visible = false;
    //    this.background.visible = false;        
        this.frame.visible = false; 
    }
    

    
    muralize()
    {
        muralize(this.mural.layers[0]);
        
        this.title.mural_title();
        this.frame.visible = false;
        this.illustration.visible = false;
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
                    this.illustration.set_background(opacities.originX, opacities.originY, opacities.tiles);
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
        
        this.set_animation = null_function;

   //     this.background = new PIXI.Sprite(illustration.library.black_textured_background.sheet.idle[0]);        
        
     //   this.background.anchor.set(0.5);
     //   this.background.y = cardH / 6;
     //   this.addChild(this.background);

        this.background = new PIXI.Container();
        
     //   this.background.anchor.set(0.5);
     //   this.background.y = cardH / 6;
        this.addChild(this.background);
    
        this.portal = new PIXI.Graphics();
                  
        this.addChild(this.portal);
        this.portal.x = 0;
        this.portal.y = 0;
        this.portal.lineStyle(0);

        if (template.mural)
        {
            this.mural = template.mural;
        }

        if (template.texture)
        {
                                    
            if (template.placard)
            {
          /*      this.portal.beginFill();
                this.portal.x = 0;
                this.portal.y = 0;
                this.portal.drawRect(-cardW * 10, -cardH * 10, cardW * 10, cardH * 10);
                this.portal.endFill(); */             
            }
            else
            {
                this.illustration = new illustration(template.texture, template);
                this.addChild(this.illustration);
                
                this.set_animation = this.illustration.set_animation.bind(this.illustration);
                
       /*         this.illustration.mask = this.portal;            

                this.portal.beginFill();
                this.portal.drawRect(-cardW/2, -cardH/2, cardW, cardH/2);
                this.portal.endFill();*/
                
//                this.illustration.mask = null;
//                this.removeChild(this.portal);
            }
        }
        
        cardTexture = visual.whiteFrameTexture;
        this.frame = new PIXI.Sprite(cardTexture);
        this.addChild(this.frame);
        this.frame.anchor.x = .5;
        this.frame.anchor.y = .5;
    
        if (template.placard)
        {
            this.frame.width = 2;                       
            this.frame.height = 2;           
        }    
    
        if (template.title)
        {
            this.title = new caption(template, this);
            this.addChild(this.title);
        }
        
        if (template.tiles)
        {
            this.tiles = template.tiles;
        }
        
//		this.anchor.x = .5;
//		this.anchor.y = .5;
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
//        this.parent.action_mapping.response.call(this.parent, ...this.parent.action_mapping.parameters);           
        this.parent.action();           
    }    
    
    set_context(template)
    {
        this.parent.set_context(template);
    }
    
    add_card_to_selection()
    {
        this.parent.iconize();
        registry.player.cards[3].cards[4].push(this.parent);
    }
    
    remove_handler()
    {
        this.pointerover_handler_mapping = [];
    }
    
    execute_list(list)
    {
        for (var i = 0; i < list.length; i++)
        {
            this[list[i].response].call(this, ...list[i].parameters);             
        }
    }
    
    pointerdown_handler()
    {
        // Why not apply? I'm guessing I want to stuff something before the ellipse operator maybe?
        this.execute_list(this.pointerdown_handler_mapping);   
    }    
    
    pointerover_handler()
    {
        // Why not apply? I'm guessing I want to stuff something before the ellipse operator maybe?
        this.execute_list(this.pointerover_handler_mapping);  
    }    
    
    
    enterFrame()
    {
        if (this.illustration != undefined)
        { this.illustration.enterFrame(); }
           
    }	    
}