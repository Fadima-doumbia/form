export class Feature {
    constructor(
        public _id : string,
        public title : string,
        public description : string,
        public price : number,
        public userId : string | null) { }
}