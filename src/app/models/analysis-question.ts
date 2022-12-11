import { Guid } from "../services/global.service";


export class AnalysisQuestion {
    constructor(
      public id:string = Guid.newGuid(),
      public questionPointTo:string = null,
      public actualQuestion:string = null,
      public questionDate:Date = new Date(),
      public analysisId:string =Guid.newGuid(),
      public aricleId:string =Guid.newGuid(),
      // public answerList:Array<AnalysisAnswer> = [],
      public tag:number = 0,
    ) { }
}
