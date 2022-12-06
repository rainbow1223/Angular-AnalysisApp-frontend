import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { IAnalysisFeedback } from '../models/analysis-feedback';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';

@Component({
  selector: 'app-analysis-feedback',
  templateUrl: './analysis-feedback.component.html',
  styleUrls: ['./analysis-feedback.component.css']
})
export class AnalysisFeedbackComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  appNameList:any[] = [];
  comFunctionList:any[] = [];
  errorList: any[] = [];
  compensatorList: any[] = [];
  tooltip: any = Config.tooltip;

  ngOnInit(): void {
    let data = this.config.data;
    this.initForm(data.model);
    this.setErrorListForDDL(data.errorList);
    this.setCompensatorListForDDL(data.compensatorList);
    this.setAppNameList();
    this.setComFunctionList();
  }

  setErrorListForDDL(data) {
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
          text: newString
        }
      })
    }
  }

  setCompensatorListForDDL(data) {
    if (data) {
      this.compensatorList = data.map(x => {
        let newString = '';
        if (x.actualCompensator) {
          let split = x.actualCompensator.split(' ');
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
          text: newString
        }
      })
    }
  }
  setAppNameList(){
    this.appNameList = [
      {value: 'App Name 1', text: 'App Name 1'},
      {value: 'App Name 2', text: 'App Name 2'},
      {value: 'App Name 3', text: 'App Name 3'},
      {value: 'App Name 4', text: 'App Name 4'},
      {value: 'App Name 5', text: 'App Name 5'},
    ]
  }

  setComFunctionList(){
    this.comFunctionList = [
      {value: 'function 1', text: 'function 1'},
      {value: 'function 2', text: 'function 2'},
      {value: 'function 3', text: 'function 3'},
      {value: 'function 4', text: 'function 4'},
      {value: 'function 5', text: 'function 5'},
    ]
  }

  onChangeCompensator(e) {
    const obj = this.compensatorList.filter(x => x.value == e.value)[0];
    if (obj) {
      this.form.get('actualCompReplaced').setValue(obj.text);
    }else{
      this.form.get('actualCompReplaced').setValue('');
    }
  }
  

  save(data: IAnalysisFeedback) {
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

  closeModal(){
    this.ref.close();
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
      errorId: new FormControl(null, Validators.required),
      applicaitonName: new FormControl(null, Validators.required),
      commFunction: new FormControl(null, Validators.required),
      compensatorId: new FormControl(null, Validators.required),
      actualCompReplaced: new FormControl(null, Validators.required),
      feedbackSubject: new FormControl(null, Validators.required),
      feedbackApp: new FormControl(null, Validators.required),
      tag: new FormControl(EntityTag.added, Validators.required),
    });
  }
}
