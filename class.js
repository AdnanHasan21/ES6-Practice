class mobile {
    constructor(name, model, os){
        this.name = name;
        this.model = model;
        this.os = os;
    }
}

const mobile1 = new mobile("Samsung","A50","Android");
const mobile2 = new mobile("iphone","XI","iOS");
const mobile3 = new mobile("Xiaomi","Redmi Note 8","Android");
const mobile4 = new mobile("Oppo","R7 note plus","Android");

console.log(mobile1,mobile2,mobile3,mobile4);

