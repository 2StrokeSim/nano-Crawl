class pathNode
{
    constructor(x, y, r) 
    {	
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

class pathLink
{
    static MODE_INCREMENTAL = 0;
    static MODE_LIST = 1;
    
    static incrementalFromCoords(coords)
    {
        return new pathLink([new pathNode(coords.X, coords.Y, coords.R), new pathNode(coords.deltaX, coords.deltaY, coords.deltaR)], pathLink.MODE_INCREMENTAL);
    }
    
    static listFromCoords(coords)
    {
        var list = [];
        
        for (var i = 0; i < coords.elements.length; i++)
        {
            list[i] = new pathNode(coords.elements[i].X, coords.elements[i].Y, coords.elements[i].R);
        }
        
        return new pathLink(list, pathLink.MODE_LIST);
    }    
    
    static Index_Delta_Increment()
    {
        this.index.x += this.elements[1].x;
        this.index.y += this.elements[1].y;
        this.index.r += this.elements[1].r;
    }
    
    static Index_Delta_Decrement()
    {
        this.index.x -= this.elements[1].x;
        this.index.y -= this.elements[1].y;
        this.index.r -= this.elements[1].r;
    }    
    
    static Index_List_Increment()
    {
        this.index_number++;
        this.index = this.elements[this.index_number];
    }
    
    static Index_List_Decrement()
    {
        this.index_number--;
        this.index = this.elements[this.index_number];
    }    
    
    static incremental_set =
    {
        increment: pathLink.Index_Delta_Increment,
        decrement: pathLink.Index_Delta_Decrement
    }
    
    static list_set =
    {
        increment: pathLink.Index_List_Increment,
        decrement: pathLink.Index_List_Decrement
    }    
    
    static modes =
    [
        pathLink.incremental_set,
        pathLink.list_set,        
    ]
    
    constructor(elements, mode = MODE_INCREMENTAL) 
    {	
        this.elements = elements;       
        this.index = elements[0];
        this.index_number = 0;
        
        this.increment = pathLink.modes[mode].increment;
        this.decrement = pathLink.modes[mode].decrement;        
    }
}