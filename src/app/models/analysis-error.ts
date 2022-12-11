export class  AnalysisError {
  constructor(
    public id:string = null,
    public actualError:string = null,
    public fromActualComm:string = null,
    public errorPointTo:string = null,
    public errorDateTime:Date = null,
    public errorDescription:string = null,
    public analysisId:string = null,
    public aricleId:string =null,
    public tag:number = 0
  ){}
} 