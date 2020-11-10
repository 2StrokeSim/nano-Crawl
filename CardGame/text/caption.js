class caption extends PIXI.Text
{
    static empty_string = "";
    
    constructor(template, parent) {
        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 12,
          //  fontStyle: 'italic',
          //  fontWeight: 'bold',
          //  fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#000000',
            strokeThickness: 1,
         //   dropShadow: false,
         //   dropShadowColor: '#000000',
         //   dropShadowBlur: 4,
         //   dropShadowAngle: Math.PI / 6,
         //   dropShadowDistance: 6,
            wordWrap: true,
         //   wordWrapWidth: 440,
        });

        super(caption.empty_string, style);
        this.name = template.title;
    } 

    mural_title()
    {
        this.y = -100;
        this.x += 350;//(app.stage._width / 2);// - (this.width / 2);
    }

    iconize()
    {
        this.text = "";
    }    
    
    refresh()
    {
        var stuff = this.parent.value;

        if (this.parent.parent.value != undefined)
        {
            this.text = this.parent.parent.value;
            if (this.parent.parent.max_value != undefined)
            {
                this.text += "/" + this.parent.parent.max_value;
            }
            
            this.text += " ";
        }
        else 
        {
            this.text = "";
        }
        
        if (this.parent.iconized)
        {
            this.x = -cardW/2 + 10 + 20;
            this.y = -cardH/2 + 60;

        }
        else
        {
            this.text += this.name.slice();  
            this.x = -cardW/2 + 10;
            this.y = -cardH/2;        
        }
        
        if (this.parent.parent.quantity != undefined)
        {
            this.text += " X " + this.parent.parent.quantity;
        }

    }
}

/*
⣿⣿⣿⠿⠟⠛⠛⣉⢉⣉⣉⣤⣬⣥⣤⣤⣤⣤⣬⣭⣈⣉⡙⠻⣿⣿⣿⣿⣿⣿
⣿⣿⢠⣶⣶⣿⣿⢫⢷⢋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿
⣿⣿⠀⣿⣿⠟⡛⠛⠳⣾⣿⣿⣿⣿⣿⣿⡿⢋⡤⠀⠉⢿⣿⡇⠿⠛⠛⢿⣿⣿
⣿⣿⡀⣿⣏⠈⣁⢤⣠⢻⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠄⣸⣿⡇⠀⣾⣿⣘⠛⢿
⣿⣿⠇⣿⣧⡽⠟⣛⣛⣛⣛⠛⢛⡛⣛⣛⣛⣛⢛⡛⠿⣿⣿⣶⣷⣿⢻⣿⣇⠸
⣿⠃⣼⣿⣿⣧⡠⣍⣿⣿⣧⣤⣽⣿⣿⣿⣿⣿⣩⡅⣠⣿⣿⣿⣿⣟⣾⣿⡟⢰
⠇⣼⣿⢻⣿⣿⣿⣶⣭⣝⣙⣻⠻⠻⠛⠿⣟⣉⣭⣾⣿⣿⣿⣿⠿⠛⣋⣬⣤⣾
⣇⠻⣿⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⣿
⣿⣷⣬⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿
⣿⣿⣿⠀⣿⣿⣿⣿⣿⣶⣶⢠⣤⣤⣤⡄⢰⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣦⣉⣛⣛⠛⣛⣉⣁⣼⣿⣿⣿⣷⣌⡛⠛⠛⠛⢛⣋⣤⣿⣿⣿⣿⣿⣿
*/
/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣿⡿⣫⣿⣿⠟⠁⠀⣼⠁⠀⠈⣿⣿⢿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣾⢟⣩⣾⠿⠋⠁⠀⢠⣴⣧⣤⣤⣤⣿⡏⠈
⣿⣿⢿⣿⣿⡿⠟⠽⠛⠉⠀⠚⠉⠚⠋⠉⠀⠀⠀⠤⠒⠉⠀⠀⠀⠀⢀⡿⠉⠂
⣿⠏⢸⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀
⣿⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀
⡇⠀⣀⣤⣤⣤⣴⣶⣶⣶⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣶⣤⣤⣤⣀
⣩⣿⡿⠟⣿⣿⣿⣿⣿⣯⠙⠳⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣯⠙⠻⢿
⠹⣿⠀⠀⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⢈
⡀⠈⠂⡀⣙⢩⢿⡿⠝⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⠻⣿⠃⠀⢀⡘
⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠉⠉⠉⠉⠁⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣶⣶⠶⠟⠋⠙⢶⣤⣴⠄⠀⠀⠀⠀⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼
⣮⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿*/
/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡖⠁⠀⠀⠀⠀⠀⠀⠈⢲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢀⣀⣤⣤⣤⣤⣀⡀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣔⢿⡿⠟⠛⠛⠻⢿⡿⣢⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣤⣶⣾⣿⣿⣿⣷⣤⣀⡀⢀⣀⣤⣾⣿⣿⣿⣷⣶⣤⡀⠀⠀⠀⠀
⠀⠀⢠⣾⣿⡿⠿⠿⠿⣿⣿⣿⣿⡿⠏⠻⢿⣿⣿⣿⣿⠿⠿⠿⢿⣿⣷⡀⠀⠀
⠀⢠⡿⠋⠁⠀⠀⢸⣿⡇⠉⠻⣿⠇⠀⠀⠸⣿⡿⠋⢰⣿⡇⠀⠀⠈⠙⢿⡄⠀
⠀⡿⠁⠀⠀⠀⠀⠘⣿⣷⡀⠀⠰⣿⣶⣶⣿⡎⠀⢀⣾⣿⠇⠀⠀⠀⠀⠈⢿⠀
⠀⡇⠀⠀⠀⠀⠀⠀⠹⣿⣷⣄⠀⣿⣿⣿⣿⠀⣠⣾⣿⠏⠀⠀⠀⠀⠀⠀⢸⠀
⠀⠁⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⢇⣿⣿⣿⣿⡸⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠈⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⢤⣀⣀⢀⣀⣠⣴⣿⣿⠿⠋⠙⠿⣿⣿⣦⣄⣀⠀⠀⣀⡠⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀*/