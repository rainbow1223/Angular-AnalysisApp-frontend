import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AnalysisReference } from '../models/analysis-reference';

@Component({
  selector: 'app-analysis-guideline-ref',
  templateUrl: './analysis-guideline-ref.component.html',
  styleUrls: ['./analysis-guideline-ref.component.css']
})
export class AnalysisGuidelineRefComponent implements OnInit {

  
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  guideLine: AnalysisReference;

  ngOnInit(): void {
    this.guideLine = new AnalysisReference();
  }
  applyData() {
    this.ref.close(this.guideLine);
  }
}
