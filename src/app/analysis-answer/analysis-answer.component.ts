import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { IAnalysisAnswer } from '../models/analysis-answer';
import { AnalysisQuestion } from '../models/analysis-question';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';

@Component({
  selector: 'app-analysis-answer',
  templateUrl: './analysis-answer.component.html'
})
export class AnalysisAnswerComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
    //public dataSvc: DataService
  ) { }
  //analysisAnswer: IAnalysisAnswer;
  compensatorForm: FormGroup;
  questionList: any[] = [];
  tooltip: any = Config.tooltip;


  ngOnInit(): void {

    let data = this.config.data;

    this.initForm(data.model);
    // this.analysisAnswer = new AnalysisAnswer(data.model);
    // this.analysisAnswer = data.model as IAnalysisAnswer;
    // if (data.model) {
    //   this.form.patchValue(data.model)
    // }
    // this.analysisAnswer.questionId = data.analysisAnswer.questionId;
    // this.analysisAnswer.analysisId = data.analysisAnswer.analysisId;
    // this.analysisAnswer.actualAnswer = data.analysisAnswer.actualAnswer;
    // this.analysisAnswer.questionPointTo = data.analysisAnswer.questionPointTo;
    // this.analysisAnswer.actualQuestion = data.analysisAnswer.actualQuestion;
    // this.analysisAnswer.answerPointTo = data.analysisAnswer.answerPointTo;
    this.setQuestionListForDDL(data.questionList);

  }
  // ngAfterViewInit(){
  //   this.initForm();
  // }
  // ngOnChanges(){
  //   this.initForm();
  // }
  setQuestionListForDDL(data) {
    if (data) {
      this.questionList = data.map(x => {
        let newString = '';
        if (x.actualQuestion) {
          let split = x.actualQuestion.split(' ');
          let count = 0;
          split.forEach(element => {
            if (count <= 10) {
              newString += element + ' ';
            }
            count++;
          });
        }
        return {
          value: x.id,
          text: newString,
          questionPointTo: x.questionPointTo,
        }
      })
    }
  }

  onChangeSelectQuestion(e) {
    const obj = this.questionList.filter(x => x.value == e.value)[0];
    if (obj) {
      this.form.get('questionPointTo').setValue(obj.questionPointTo);
    }else{
      this.form.get('questionPointTo').setValue('');
    }
  }

  save(data: IAnalysisAnswer) {
    try {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      // var formData = formdata as IAnalysisAnswer;
      this.ref.close(data);
    } catch (e) {
      throw e;
    }
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  submitted = false;
  form: FormGroup;
  initForm(data:any) {
    this.form = new FormGroup({
      id: new FormControl(Guid.newGuid(), Validators.required),
      analysisId: new FormControl(data?.analysisId, Validators.required),
      aricleId: new FormControl(data?.aricleId, Validators.required),
      questionId: new FormControl(data?.questionId, Validators.required),
      questionPointTo: new FormControl(data?.questionPointTo, Validators.required),
      actualQuestion: new FormControl(data?.actualQuestion),
      answerPointTo: new FormControl('', Validators.required),
      answerDateTime: new FormControl(new Date(), Validators.required),
      actualAnswer: new FormControl('', Validators.required),
      tag: new FormControl(EntityTag.added, Validators.required),
    });
  }

  isVisible: boolean = false;
  showTooltip(msg: string) {
    if (!this.isVisible) {
      this.isVisible = true;
      this.messageService.add({ key: 'tooltip', severity: 'success', summary: '', detail: this.tooltip[msg], sticky: true });
    }
  }
  closeTooltip() {
    this.isVisible = false;
    this.messageService.clear('tooltip');
  }

}
