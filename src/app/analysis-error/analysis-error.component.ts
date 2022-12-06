import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { AnalysisError } from '../models/analysis-error';
import { EntityTag } from '../models/entityTag';

@Component({
  selector: 'app-analysis-error',
  templateUrl: './analysis-error.component.html',
  providers:[DatePipe]
})
export class AnalysisErrorComponent implements OnInit {

  constructor(public datepipe: DatePipe,public ref: DynamicDialogRef, public config: DynamicDialogConfig,  private messageService: MessageService) { }
  analysisError:AnalysisError;
  errorForm:FormGroup

  data = null;

  tooltip:any = Config.tooltip;

  ngOnInit(): void {
    let x = this.config.data;
    this.analysisError = new AnalysisError();
    this.analysisError.analysisId = x.analysisId
    // this.analysisError.errorDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')??"";
    // this.analysisError.errorTime = this.datepipe.transform(new Date(), 'hh:mm:ss a')??"";
    this.analysisError.errorDateTime = new Date();
    this.analysisError.actualError = x.actualError
  }
  value:any = new Date().getUTCDate()

  applyData() {
    this.analysisError.tag = EntityTag.added;
    this.ref.close(this.analysisError);
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
