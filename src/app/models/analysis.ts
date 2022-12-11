import { IAnalysisAnswer } from "./analysis-answer";
import { AnalysisCompensator } from "./analysis-compensator";
import { AnalysisError } from "./analysis-error";
import { IAnalysisFeedback } from "./analysis-feedback";
import { IAnalysisProblem } from "./analysis-problem";
import { AnalysisQuestion } from "./analysis-question";

export class Analysis {
  constructor(
    public id:string =null,
    public aricleId:string =null,
    public analysisFrom:string =null,
    public analysisSubject:string =null,
    public actualAnalysis:string =null,
    public entityUnderAnalysis:string =null,

    public questionList: Array<AnalysisQuestion>=[],
    public answerList: Array<IAnalysisAnswer>=[],
    public errorList: Array<AnalysisError>=[],
    public compensatorList: Array<AnalysisCompensator>=[],
    public problemList: Array<IAnalysisProblem>=[],
    public feedbackList: Array<IAnalysisFeedback>=[],
    public tag:number = 0,
  ){}
}