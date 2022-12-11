export class AnalysisCompensator {constructor(
    public id:string = null,
    public analysisId:string = null,
    public aricleId:string =null,
    public errorId:string = null,
    public actualCompensator:string = null,
    public inActualAppComm:string = null,
    public compensatorDateTime:Date = new Date(),
    public compensatorDescription:string = null,
    public tag:number = 0
  ) { }
}