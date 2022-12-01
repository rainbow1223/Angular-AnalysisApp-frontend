import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { AnalysisCompensator } from '../models/analysis-compensator';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';

@Component({
  selector: 'app-analysis-compensator',
  templateUrl: './analysis-compensator.component.html',
})
export class AnalysisCompensatorComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
    //public dataSvc: DataService
  ) { }
  analysisCompensator: AnalysisCompensator;
  compensatorForm: FormGroup;
  errorList: any[] = [];
  actualAppList: any[] = [];
  tooltip: any = Config.tooltip;
  ngOnInit(): void {
    let data = this.config.data;
    this.analysisCompensator = new AnalysisCompensator();
    this.analysisCompensator.errorId = data.analysisCompensator.errorId;
    this.analysisCompensator.analysisId = data.analysisCompensator.analysisId;
    this.analysisCompensator.actualCompensator = data.analysisCompensator.actualCompensator;
    this.analysisCompensator.compensatorDateTime = data.analysisCompensator.compensatorDateTime;;
    this.setErrorListForDDL(data);

    this.actualAppList = [
      {value:'Title-1',text:'Title-1'},
      {value:'Title-2',text:'Title-2'},
      {value:'Title-3',text:'Title-3'},
      {value:'Title-4',text:'Title-4'},
    ]
   
  }

  setErrorListForDDL(data){
    if (data) {
      this.errorList = data.errorList.map(x => {
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


  save(submitData: NgForm) {
    try {
      var formData = <AnalysisCompensator>submitData.form.value;
      formData.tag = EntityTag.added;
      this.ref.close(formData);
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
