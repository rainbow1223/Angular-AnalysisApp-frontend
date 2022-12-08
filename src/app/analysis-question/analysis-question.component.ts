import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { AnalysisQuestion } from '../models/analysis-question';
import { EntityTag } from '../models/entityTag';
import { DataService } from '../services/user-defined/data.service';

@Component({
  selector: 'app-analysis-question',
  templateUrl: './analysis-question.component.html'
})
export class AnalysisQuestionComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public dataSvc: DataService,
    private messageService: MessageService
  ) {}
  analysisQuestion: AnalysisQuestion;
  errorForm: FormGroup;
  tooltip: any = Config.tooltip;
  ngOnInit(): void {
    let data = this.config.data;
    this.analysisQuestion = new AnalysisQuestion();
    this.analysisQuestion.actualQuestion = data.actualQuestion;
  }

  save(submitData: NgForm) {
    try {
      var formData =<AnalysisQuestion>submitData.form.value;
      formData.tag = EntityTag.added;
      formData.questionDate = new Date();//.toISOString().slice(0, 10);
      
      this.ref.close(formData);
     
     
     
     
      // this.dataSvc.saveQuestion(formData).subscribe(
      //   (response) => {
      //     console.log(response);
      //     //this.submitted = true;
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );

       
 
    } catch (e) {
      throw e;
    }
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
