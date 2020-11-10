class geometryNode
{
    constructor(x, y, r) 
    {	
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    update()
    {
    }
    
    evaluatecoords()
    {
    }    
}

class radialgeometryNode
{
    constructor(theta, radius, rotation) 
    {	
        this.theta = theta;
        this.radius = radius;
        this.rotation = rotation;
        
        this.radius_limit = this.radius;
        this.radius_delta = 0;
    
        this.theta_limit = this.theta;
        this.theta_delta = 0;

        this.rotation_limit = this.rotation;
        this.rotation_delta = 0;       
    }
    
    update()
    {
        this.radius += this.radius_delta;
        if (this.radius >= this.radius_limit)
        {
            this.radius = this.radius_limit;
            this.radius_delta = 0;
        }
        
        this.theta += this.theta_delta;
        if (this.theta >= this.theta_limit)
        {
            this.theta = this.theta_limit;
            this.theta_delta = 0;
        }

        this.rotation += this.rotation_delta;
        if (this.rotation >= this.rotation_limit)
        {
            this.rotation = this.rotation_limit;
            this.rotation_delta = 0;
        }        
    }
    
    evaluatecoords()
    {

        
        this.subject.x = Math.cos(this.theta) * this.radius;
        this.subject.y = Math.sin(this.theta) * -1 * this.radius;
        this.subject.r = this.rotation;
    }
}

class Geometry
{
    static MODE_INCREMENTAL = 0;
    static MODE_LIST = 1;
    static MODE_RADIALLIST = 2;
    
    static incrementalFromCoords(coords)
    {
        return new Geometry([new geometryNode(coords.X, coords.Y, coords.R), new geometryNode(coords.deltaX, coords.deltaY, coords.deltaR)], Geometry.MODE_INCREMENTAL);
    }
    
    static listFromCoords(coords)
    {
        var list = [];
        
        for (var i = 0; i < coords.elements.length; i++)
        {
            list[i] = new geometryNode(coords.elements[i].X, coords.elements[i].Y, coords.elements[i].R);
        }
        
        return new Geometry(list, Geometry.MODE_LIST);
    }  

    static radialListFromCoords(coords)
    {
        var list = [];
        
        for (var i = 0; i < coords.elements.length; i++)
        {
            list[i] = new radialgeometryNode(coords.elements[i].Theta, coords.elements[i].Radius, coords.elements[i].Rotation);
        }
        
        return new Geometry(list, Geometry.MODE_RADIALLIST);
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
    
    static Index_Cartesian_EvaluateCoords(item)
    {
        item.x = this.index.x;
        item.y = this.index.y;
        item.r = this.index.r;
    }
    
    static Index_Polar_EvaluateCoords(item)
    {
        item.x = Math.cos(this.index.theta) * this.index.radius;
        item.y = Math.sin(this.index.theta) * this.index.radius;
        item.r = this.index.rotation;
    }
    
    static incremental_set =
    {
        increment: Geometry.Index_Delta_Increment,
        decrement: Geometry.Index_Delta_Decrement,
        evaluatecoords: Geometry.Index_Cartesian_EvaluateCoords
    }
    
    static list_set =
    {
        increment: Geometry.Index_List_Increment,
        decrement: Geometry.Index_List_Decrement,
        evaluatecoords: Geometry.Index_Cartesian_EvaluateCoords
    }    
    
    static radial_list_set =
    {
        increment: Geometry.Index_List_Increment,
        decrement: Geometry.Index_List_Decrement,
        evaluatecoords: Geometry.Index_Polar_EvaluateCoords
    }        
    
    static modes =
    [
        Geometry.incremental_set,
        Geometry.list_set,
        Geometry.radial_list_set       
    ]
    
    attach(subject)
    {
        this.index.subject = subject;
        this.evaluatecoords(subject);
        this.subjects++;
        this.increment();
    }
    
    reset()
    {
        this.index = this.elements[0];
        this.index_number = 0;
        this.subjects = 0;
    }
    
    detach(subject)
    {
       for (var i = 0; i < this.elements.length; i++)
       {
           if (this.elements[i].subject != subject) continue;
           this.elements[i].subject = undefined;
           this.subjects--;
           break;
       }
    }
        
    dropandFanHand()
    {
        var path = { 
                        radius_delta: 5, radius_limit: 160, 
                        theta_delta: 0, theta_limit: 3*Math.PI / 2,  
                        rotation_delta: 0, rotation_limit: 0
                   };
                   
        this.setDelta(path);

        this.addDeltaArc();
    }

    addDeltaArc()
    {
        
        var x0 = -0.3 * (this.subjects-1);//this.elements.length / -2;
                
        for (var i = 0, x = x0; i < this.elements.length; i++, x += 0.6)
        {
            this.elements[i].theta_delta += Math.asin(x/10);
            this.elements[i].theta_limit += Math.asin(x);
            
            if (x != 0)
            {
                this.elements[i].radius_delta += 0.5 * Math.abs(x);
                this.elements[i].radius_limit += 8 / Math.abs(x);
            }
        }
    }

    addDelta(path)
    {
        for (var i = 0; i < this.elements.length; i++)
        {
            this.elements[i].radius_delta += path.radius_delta;
            this.elements[i].radius_limit += path.radius_limit;

            this.elements[i].theta_delta += path.theta_delta;
            this.elements[i].theta_limit += path.theta_limit;

            this.elements[i].rotation_delta += path.rotation_delta;
            this.elements[i].rotation_limit += path.rotation_limit;                              
        }         
    }
        
    setDelta(path)
    {
        for (var i = 0; i < this.elements.length; i++)
        {
            this.elements[i].radius_delta = path.radius_delta;
            this.elements[i].radius_limit = path.radius_limit;

            this.elements[i].theta_delta = path.theta_delta;
            this.elements[i].theta_limit = path.theta_limit;

            this.elements[i].rotation_delta = path.rotation_delta;
            this.elements[i].rotation_limit = path.rotation_limit;            
        }        
    }
        
    enterFrame()
    {   
        for (var i = 0; i < this.elements.length; i++)
        {
            this.elements[i].update();
            if (this.elements[i].subject != undefined)
            {
                this.elements[i].evaluatecoords(this.elements[i].subject);   
            }
        }
    }
    
    constructor(elements, mode = MODE_INCREMENTAL) 
    {	
        this.elements = elements;       
        this.reset();
        
        this.increment = Geometry.modes[mode].increment;
        this.decrement = Geometry.modes[mode].decrement;
        this.evaluatecoords = Geometry.modes[mode].evaluatecoords;
    }
}