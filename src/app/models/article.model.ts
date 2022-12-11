import { Guid } from "../services/global.service";


export class Article {
    constructor(
      public id:string = Guid.newGuid(),
      public heading:string = null,
      public text:string = null,
      public summary:string = null,
      public tag:number = 0
    ) { }
}
