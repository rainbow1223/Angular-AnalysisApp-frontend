import { Component, DEFAULT_CURRENCY_CODE, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { PanePropertiesModel } from '@syncfusion/ej2-angular-layouts';
import { MenuItem } from 'primeng/api/menuitem';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { AnalysisCompensatorComponent } from '../analysis-compensator/analysis-compensator.component';
import { AnalysisErrorComponent } from '../analysis-error/analysis-error.component';
import { AnalysisGuidelineRefComponent } from '../analysis-guideline-ref/analysis-guideline-ref.component';
import { AnalysisQuestionComponent } from '../analysis-question/analysis-question.component';
import { Analysis } from '../models/analysis';
import { AnalysisCompensator } from '../models/analysis-compensator';
import { AnalysisError } from '../models/analysis-error';
import { AnalysisQuestion } from '../models/analysis-question';
import { AnalysisReference } from '../models/analysis-reference';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';
import { DataService } from '../services/user-defined/data.service';
import { ModelService } from '../services/user-defined/model.service';
import { DxButtonModule, DxComponent } from "devextreme-angular";
import { Config } from '../config';
import { TokenStorageService } from '../_services/token-storage.service';
import { AnalysisAnswerComponent } from '../analysis-answer/analysis-answer.component';
import { IAnalysisAnswer } from '../models/analysis-answer';
import { IAnalysisProblem } from '../models/analysis-problem';
import { AnalysisProblemComponent } from '../analysis-problem/analysis-problem.component';
import { IAnalysisFeedback } from '../models/analysis-feedback';
import { AnalysisFeedbackComponent } from '../analysis-feedback/analysis-feedback.component';
import { MessageService } from 'primeng/api';
import { style } from '@angular/animations';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  @ViewChild('actualAnalysisRef') actualAnalysisRef: ElementRef;
  model: Analysis;
  public paneSettings: PanePropertiesModel[] = [
    { collapsible: true, size: '50%' },
    { collapsible: true, size: '50%' },
  ];

  companies: any[];
  isSelectionText: boolean = true;
  hideAnalysisBtn: boolean = false;
  cssClass: any;

  totalCompensator: number = 0;
  totalError: number = 0;

  tooltip: any = Config.tooltip;
  collapsed = false;




  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  pager: any = {
    allowedPageSizes: 10,
    displayMode: "compact",
    infoText: "Page {0} of {1} ({2} items)",
    showInfo: true,
    showNavigationButtons: true,
    showPageSizeSelector: true,
    visible: true
  };


  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,

    public dialogService: DialogService,
    public dataSvc: DataService,
    public modelSvc: ModelService,
    private tokenStorageService: TokenStorageService,
    private messageService: MessageService
  ) {
    this.model = modelSvc.analysisEntity;
    this.companies = [
      { header: 'Analysis', key: "ID", },
      { header: 'Analysis Question' },
    ]

    this.cssClass = "customCSS";
  }

  entityUnderAnalysis = `
  From Person: Jean Dolphin
  To Person: Michel David
  Application Name: Data Reader: Data Display
  Communication Function: Read Data from Instrument: Code Display
  Communication Signal: Red
  Communication Date: 4/20/2012`;

  demoAnalysis = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;


  items: MenuItem[] = [];

  entityUnderAnalysisContextMenuItems: any[] = [];
  actualAnalysisContextMenuItems: any[] = [];

  //Models
  analysisQuestion: AnalysisQuestion;
  analysisAnswer: IAnalysisAnswer;
  analysisProblem: IAnalysisProblem;
  analysisError: AnalysisError;
  analysisCompensator: AnalysisCompensator;
  analysisReference: AnalysisReference;
  analysisFeedback: IAnalysisFeedback;

  analysisQuestionList: any = [];

  @ViewChild('analysisForm') analysisForm: NgForm;
  ngOnInit() {
    let data = this.config.data;
    this.getExistingAnalysis(data);
    this.setCurrentUser();
    this.analysisQuestion = new AnalysisQuestion();
    // this.analysisAnswer = new AnalysisAnswer();
    this.analysisError = new AnalysisError();
    this.analysisCompensator = new AnalysisCompensator();
    this.analysisReference = new AnalysisReference();

    //data list
    this.dataSvc.getQuestion().subscribe(
      (response) => {
        this.analysisQuestionList = response.body;
        //this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );



    this.actualAnalysisContextMenuItems = [
      {
        text: 'Idenify Selection as Analysis Question',
        icon: 'pi pi-fw pi-calendar',
        badge: 'actualAnalysis',
        disabled: true
      },
      {
        text: 'Idenify Selection as Compensator',
        icon: 'pi pi-fw pi-calendar',
        badge: 'actualAnalysis',
        disabled: true
      },
      {
        text: 'Insert Analysis Guideline Reference',
        icon: 'pi pi-fw pi-calendar',
        badge: 'actualAnalysis',
        disabled: true
      },
    ];

    this.entityUnderAnalysisContextMenuItems = [
      {
        text: 'Idenify Selection as Error',
        icon: 'pi pi-fw pi-calendar',
        badge: 'underAnalysis',
        disabled: true
      },
    ];
  }



  guideLine() {
    //const ref = this.dialogService.open(ErrorDialogComponent, {
    var selection = window.getSelection();

    const ref = this.dialogService.open(AnalysisGuidelineRefComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Analysis Guideline Reference',
      width: '30%',
      style: { top: '10%' },
    });
    ref.onClose.subscribe((res: AnalysisReference) => {
      if (res) {
        //this.analysis += res.gidelineText + res.gidelineNumber;
      }
    });
  }

  getExistingAnalysis(article: any) {
    try {
      this.initAnalysisModel(article);
      // this.dataSvc.getAnalysis(article.id).subscribe(
      //   (response) => {
      //     let existingData = response.body;
      //     if (existingData.id != '00000000-0000-0000-0000-000000000000')
      //       this.model = existingData;
      //     else this.initAnalysisModel(article.id.toString());
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    } catch (error) {
      throw error;
    }
  }

  initAnalysisModel(aricle: any) {
    try {
      if (this.model == null) {
        this.model = new Analysis();
        this.model.id = Guid.newGuid();
        this.model.aricleId = aricle.id;
        // this.model.entityUnderAnalysis =;
        this.model.entityUnderAnalysis = aricle.text;
        this.model.tag = EntityTag.added;
        this.totalCompensator = 0;
        this.totalError = 0;
        // this.model.questionList.push(new AnalysisQuestion());
        // this.model.questionList.push(new AnalysisQuestion());
      }
    } catch (error) {
      throw error;
    }
  }

  openQuestionModal(e: any) {
    var selection = window.getSelection();
    const textSeleted = selection.toString();
    if (textSeleted) {
      this.analysisQuestion.actualQuestion = textSeleted;
      this.analysisQuestion.analysisId = this.model.id;
      this.analysisQuestion.aricleId = this.model.aricleId;
    }
    const ref = this.dialogService.open(AnalysisQuestionComponent, {
      data: this.analysisQuestion,
      header: 'Analysis Question Dialog',
      width: '40%',
    });
    ref.onClose.subscribe((res: AnalysisQuestion) => {
      if (res) {
        res.id = Guid.newGuid();
        // const  template = `<span style='background-color:#ED5EDD'>${textSeleted}</span>`;
        // this.model.actualAnalysis = this.model.actualAnalysis.replace(textSeleted,template);
        this.model.questionList.push(res);
      }
    });
  }


  openAnswerModal(e?: AnalysisQuestion) {
    this.analysisAnswer = {
      questionId: e?.id,
      questionPointTo: e?.questionPointTo,
      actualQuestion: e?.actualQuestion,
      analysisId: this.model.id,
      aricleId: this.model.aricleId
    } as IAnalysisAnswer;

    const obj = {
      model: this.analysisAnswer,
      questionList: this.model.questionList,
    }

    const ref = this.dialogService.open(AnalysisAnswerComponent, {
      data: obj,
      header: 'Answer Analysis Question',
      width: '40%',
    });
    ref.onClose.subscribe((res: IAnalysisAnswer) => {
      if (res) {
        this.model.answerList.push(res);
      }
    });
  }

  openErrorModal(e: any) {
    var selection = window.getSelection();
    const textSeleted = selection.toString();
    if (textSeleted) {
      this.analysisError.actualError = textSeleted;
      this.analysisError.analysisId = this.model.id;
      this.analysisQuestion.aricleId = this.model.aricleId;
    }

    const ref = this.dialogService.open(AnalysisErrorComponent, {
      data: this.analysisError,
      header: 'Analysis Error Dialog',
      width: '40%',
    });
    ref.onClose.subscribe((res: AnalysisError) => {
      if (res) {
        res.id = Guid.newGuid();
        const template = `<span style='background-color:#f74a5e'>${textSeleted}</span>`;
        this.model.entityUnderAnalysis = this.model.entityUnderAnalysis.replace(textSeleted, template);
        this.model.errorList.push(res);

        this.countError();
      }
    });
  }

  openCompensatorModal(e: any) {
    var selection = window.getSelection();
    const textSeleted = selection.toString();
    if (textSeleted) {
      this.analysisCompensator.actualCompensator = textSeleted;
      this.analysisCompensator.analysisId = this.model.id;
      this.analysisQuestion.aricleId = this.model.aricleId;
    }
    const ref = this.dialogService.open(AnalysisCompensatorComponent, {
      data: {
        analysisCompensator: this.analysisCompensator,
        errorList: this.model.errorList,
      },
      header: 'Compensator Dialog',
      width: '40%',
      style: 'z-index:1502 !important'
    });
    ref.onClose.subscribe((res: AnalysisCompensator) => {
      if (res) {
        res.id = Guid.newGuid();
        const template = `<span style='background-color:#00ff00'>${textSeleted}</span>`;
        this.model.actualAnalysis = this.model.actualAnalysis.replace(textSeleted, template);
        this.model.compensatorList.push(res);
        this.countCompensator();
      }
    });
  }
  openProblemModal(e?: AnalysisError) {
    this.analysisProblem = {
      errorId: e?.id,
      actualError: e?.actualError,
      analysisId: this.model.id,
      aricleId: this.model.aricleId
    } as IAnalysisProblem;

    const obj = {
      model: this.analysisProblem,
      errorList: this.model.errorList,
    }

    const ref = this.dialogService.open(AnalysisProblemComponent, {
      data: obj,
      header: 'Problem Identification Dialog',
      width: '40%',
    });
    ref.onClose.subscribe((res: IAnalysisProblem) => {
      if (res) {
        this.model.problemList.push(res);
      }
    });
  }
  openAnalysisGuideline(e: any) {
    const ref = this.dialogService.open(AnalysisGuidelineRefComponent, {
      data: this.analysisReference,
      header: 'Analysis Guideline Reference',
      width: '40%',
    });
    ref.onClose.subscribe((res: AnalysisReference) => {
      if (res) {
        this.model.actualAnalysis += ' ' + res.guidelineText;
        // var htmlObject = document.createElement();
        //   htmlObject.innerHTML = res.guidelineText;
        //   this.model.actualAnalysis = htmlObject.textContent;
      }
    });
  }

  // error(e: any) {
  //   debugger;
  //   var selection = window.getSelection();
  //   if (selection) {
  //     let text = selection.anchorNode?.nodeValue;
  //     this.analysisError.actualError = text?.toString();
  //   }
  //   const ref = this.dialogService.open(AnalysisErrorComponent, {
  //     data: this.analysisError,
  //     header: 'Error Identification Dialog',
  //     width: '40%',
  //   });
  //   ref.onClose.subscribe((res: AnalysisError) => {
  //     if (res) {
  //       console.log(res);
  //       // this.messageService.add({severity:'info', summary: 'Product Selected', detail: error.name});
  //     }
  //   });
  // }
  submitted = false;
  saveAnalysis() {
    try {

      this.submitted = true;
      if (this.analysisForm.invalid) {
        return;
      }
      var x = this.model;
      // if(this.model.tag == EntityTag.added){
      //   x.id = Guid.newGuid();
      // }

      this.dataSvc.saveQuestion(x).subscribe(
        (response) => {
          this.ref.close(response.body);
          //this.submitted = true;
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (e) {
      throw e;
    }
  }

  removeAnalysisQuestion(entity: AnalysisQuestion) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.questionList = this.model.questionList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.questionList.find(
          (x) => x.id == entity.id
        );
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  removeAnalysisAnswer(entity: IAnalysisAnswer) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.answerList = this.model.answerList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.answerList.find(
          (x) => x.id == entity.id
        );
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }
  removeAnalysisError(entity: AnalysisError) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.errorList = this.model.errorList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.errorList.find((x) => x.id == entity.id);
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  removeAnalysisCompensator(entity: AnalysisCompensator) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.compensatorList = this.model.compensatorList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.compensatorList.find(
          (x) => x.id == entity.id
        );
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }
  removeAnalysisProblem(entity: IAnalysisProblem) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.problemList = this.model.problemList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.problemList.find(
          (x) => x.id == entity.id
        );
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }
  prepActualAnalysisCtxMenu(e) {
    try {
      var selection = window.getSelection();
      const textSeleted = selection.toString();
      if (textSeleted != '' && textSeleted != null) {
        this.actualAnalysisContextMenuItems.forEach((x) => {
          if (x.badge == 'actualAnalysis') x.disabled = false;
        });
      } else {
        this.actualAnalysisContextMenuItems.forEach((x) => {
          if (x.badge == 'actualAnalysis') x.disabled = true;
        });
      }
    } catch (error) {
      throw error;
    }
  }

  prepUnderAnalysisCtxMenu() {
    try {
      var selection = window.getSelection();
      const textSeleted = selection.toString();
      if (textSeleted != '' && textSeleted != null) {
        this.entityUnderAnalysisContextMenuItems.forEach((x) => {
          if (x.badge == 'underAnalysis') x.disabled = false;
        });
      } else {
        this.entityUnderAnalysisContextMenuItems.forEach((x) => {
          if (x.badge == 'underAnalysis') x.disabled = true;
        });
      }
    } catch (error) {
      throw error;
    }
  }

  onClickCtxMenuItem(e) {
    if (e.itemData.text == 'Idenify Selection as Analysis Question') {
      this.openQuestionModal(e)
    }
    else if (e.itemData.text == 'Idenify Selection as Compensator') {
      this.openCompensatorModal(e)
    }
    else if (e.itemData.text == 'Insert Analysis Guideline Reference') {
      this.openAnalysisGuideline(e)
    } else if (e.itemData.text == 'Idenify Selection as Error') {
      this.openErrorModal(e)
    }
  }

  onTabChange(tab) {
    try {
      const selectedTab = tab.addedItems[0].title
      if (selectedTab == 'Analysis') {
        this.hideAnalysisBtn = false;
      } else {
        this.hideAnalysisBtn = true;
      }
    } catch (error) {
      throw error;
    }
  }

  countCompensator() {
    try {
      this.totalCompensator = this.model.compensatorList.length;
    } catch (error) {
      throw error;
    }
  }

  countError() {
    try {
      this.totalError = this.model.errorList.length;
    } catch (error) {
      throw error;
    }
  }


  setCurrentUser() {
    try {
      //if (!!this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.modelSvc.userList.push(user);
      console.log(user)
      // }
    } catch (error) {
      throw error;
    }
  }


  /*********     feedback tab      *********/

  removefeedback(entity: IAnalysisFeedback) {
    try {
      if (entity.tag == EntityTag.added) {
        this.model.feedbackList = this.model.feedbackList.filter(
          (x) => x.id != entity.id
        );
      } else {
        var existingData = this.model.feedbackList.find(
          (x) => x.id == entity.id
        );
        if (existingData) {
          existingData.tag = EntityTag.deleted;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  openFeedbackModal(e?: IAnalysisFeedback) {
    this.analysisFeedback = {
      analysisId: this.model.id,
      aricleId: this.model.aricleId
    } as IAnalysisFeedback;

    const obj = {
      model: this.analysisFeedback,
      errorList: this.model.errorList,
      compensatorList: this.model.compensatorList
    }

    const ref = this.dialogService.open(AnalysisFeedbackComponent, {
      data: obj,
      header: 'Apply Feedback',
      width: '40%',
    });
    ref.onClose.subscribe((res: IAnalysisFeedback) => {
      if (res) {
        this.model.feedbackList.push(res);
      }
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
