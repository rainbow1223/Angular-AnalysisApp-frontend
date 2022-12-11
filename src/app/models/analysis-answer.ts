import { Guid } from "../services/global.service";
import { EntityTag } from "./entityTag";

// Analysis

export interface IAnalysisAnswer {
  id:string ;
  analysisId:string ;
  aricleId:string ;
  questionId:string ;
  questionPointTo:string ;
  actualQuestion:string ;
  answerPointTo:string ;
  answerDateTime:Date ;
  actualAnswer:string ;
  tag:number ;
}
