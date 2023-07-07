class Triangle {
    constructor(xA,yA,xB,yB,xC,yC){
        this.segmentAB = new Segment (xA,yA,xB,yB)
        this.segmentBC = new Segment (xB,yB,xC,yC)
        this.segmentCA = new Segment (xC,yC,xA,yA)
    }

    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length
    }

    get area(){
        const sP = this.perimeter / 2
        return Math.sqrt(sP*(sP-this.segmentAB.length)*(sP-this.segmentBC.length)* (sP-this.segmentCA.length))

    }

    isRectangle(){
        return Math.sqrt((this.segmentBC.length**2)+(this.segmentCA.length**2)) === this.segmentAB.length ? true : false
    }   

}