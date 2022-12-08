import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { IAnalysisProblem } from '../models/analysis-problem';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';

@Component({
  selector: 'app-analysis-problem',
  templateUrl: './analysis-problem.component.html',
})
export class AnalysisProblemComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) { }
  //analysisAnswer: IAnalysisProblem;
  compensatorForm: FormGroup;
  errorList: any[] = [];
  tooltip: any = Config.tooltip;
  ngOnInit(): void {

    let data = this.config.data;

    this.initForm(data.model);
    this.setQuestionListForDDL(data.errorList);

  }
  setQuestionListForDDL(data) {
    if (data) {
      this.errorList = data.map(x => {
        let newString = '';
        if (x.actualError) {
          let split = x.actualError.split(' ');
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
        }
      })
    }
  }

  // onChangeSelectQuestion(e) {
  //   const obj = this.questionList.filter(x => x.value == e.value)[0];
  //   if (obj) {
  //     this.form.get('questionPointTo').setValue(obj.questionPointTo);
  //   }else{
  //     this.form.get('questionPointTo').setValue('');
  //   }
  // }

  save(data: IAnalysisProblem) {
    try {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
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
      errorId: new FormControl(data?.errorId, Validators.required),
      actualError: new FormControl(data?.actualError),
      problemName: new FormControl(data?.problemName, Validators.required),
      actualProblem: new FormControl(data?.actualProblem, Validators.required),
      problemDescription: new FormControl('', Validators.required),
      problemDateTime: new FormControl(new Date(), Validators.required),
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
