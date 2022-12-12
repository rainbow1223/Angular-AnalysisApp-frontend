import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AnalysisGuidelineRefComponent } from '../analysis-guideline-ref/analysis-guideline-ref.component';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
  providers: [DialogService],
})
export class ErrorDialogComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    
    public dialogService: DialogService) { }


    guideLine() {
      //const ref = this.dialogService.open(ErrorDialogComponent, {
      const ref = this.dialogService.open(AnalysisGuidelineRefComponent, {
        data: {
          id: '51gF3',
        },
        header: 'Analysis Guideline Reference',
        width: '30%',
      });
    }
    
  items: MenuItem[] = [];
  ngOnInit() {

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog',}
  ];
  }
  
}
