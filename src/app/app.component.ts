// import { Component, OnInit } from '@angular/core';
// import { MenuItem, PrimeNGConfig } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';
// import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
// import { InputTextModule } from 'primeng/inputtext';
// import { AnalysisGuidelineRefComponent } from './analysis-guideline-ref/analysis-guideline-ref.component';
// import { AnalysisCompensatorComponent } from './analysis-compensator/analysis-compensator.component';
// import { AnalysisAnswerComponent } from './analysis-answer/analysis-answer.component';
// import { AnalysisFeedbackComponent } from './analysis-feedback/analysis-feedback.component';
// import { AnalysisComponent } from './analysis/analysis.component';
// import { AnalysisErrorComponent } from './analysis-error/analysis-error.component';
// import { AnalysisQuestionComponent } from './analysis-question/analysis-question.component';
// import { DataService } from './services/user-defined/data.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [DialogService],
// })
// export class AppComponent implements OnInit {
//   constructor(
//     private primengConfig: PrimeNGConfig,
//     public dialogService: DialogService,
//     public dataSvc: DataService
//   ) {}

//   articleStatus: any = {};
//   items: MenuItem[] = [];
//   articleList: any = [];

//   ngOnInit() {
//     this.primengConfig.ripple = true;

//     this.articleList = [
//       {
//         id: 1,
//         heading: `Article-1`,
//         text: `It is a long established fact that a reader will be distracted by the readable
//         content of a page when looking at its layout. The point of using Lorem
//         Ipsum is that it has a more-or-less normal distribution of letters,
//         as opposed to using 'Content here, content here', making it look like readable English.
//         Many desktop publishing packages and web page editors now use Lorem Ipsum as their
//         default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
//         Various versions have evolved over the years,
//         sometimes by accident, sometimes on purpose (injected humour and the like).
//         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
//         `,
//         summary: ``,
//       },
//       // {
//       //   id:2,
//       //   heading:`Article-2`,
//       //   text: `It is a long established fact that a reader will be distracted by the readable
//       //   content of a page when looking at its layout. The point of using Lorem
//       //   Ipsum is that it has a more-or-less normal distribution of letters,
//       //   as opposed to using 'Content here, content here', making it look like readable English.
//       //   Many desktop publishing packages and web page editors now use Lorem Ipsum as their
//       //   default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
//       //   Various versions have evolved over the years,
//       //   sometimes by accident, sometimes on purpose (injected humour and the like).
//       //   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
//       //  `,
//       //   summary:``
//       // },
//       // {
//       //   id:3,
//       //   heading:`Article-3`,
//       //   text: `It is a long established fact that a reader will be distracted by the readable
//       //   content of a page when looking at its layout. The point of using Lorem
//       //   Ipsum is that it has a more-or-less normal distribution of letters,
//       //   as opposed to using 'Content here, content here', making it look like readable English.
//       //   Many desktop publishing packages and web page editors now use Lorem Ipsum as their
//       //   default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
//       //   Various versions have evolved over the years,
//       //   sometimes by accident, sometimes on purpose (injected humour and the like).
//       //   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
//       //  `,
//       //   summary:``
//       // }
//     ];

//     this.getArticleStatus();
//   }

//   addAnalysis(article: any) {
//     const ref = this.dialogService.open(AnalysisComponent, {
//       // const ref = this.dialogService.open(AnalysisGuidelineRefComponent, {
//       data: article,
//       header: 'Analysis Dialog',
//       width: '60%',
//     });
//     ref.onClose.subscribe((res: any) => {
//       this.getArticleStatus();
//     });
//   }

//   getArticleStatus() {
//     try {
//       this.dataSvc.getArticleStatus('1').subscribe(
//         (response) => {
//           this.articleStatus = response.body;
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } catch (e) {
//       throw e;
//     }
//   }

//   error() {
//     const ref = this.dialogService.open(AnalysisErrorComponent, {
//       data: {
//         id: '51gF3',
//       },
//       header: 'Error Identification Dialog',
//       width: '40%',
//     });
//   }
//   compensator() {
//     const ref = this.dialogService.open(AnalysisCompensatorComponent, {
//       data: {
//         id: '51gF3',
//       },
//       header: 'Compensator Dialog',
//       width: '40%',
//     });
//   }
//   question() {
//     const ref = this.dialogService.open(AnalysisQuestionComponent, {
//       data: {
//         id: '51gF3',
//       },
//       header: 'Analysis Question Dialog',
//       width: '40%',
//     });
//   }
//   answer() {
//     const ref = this.dialogService.open(AnalysisAnswerComponent, {
//       data: {
//         id: '51gF3',
//       },
//       header: 'Respond Analysis Question Dialog',
//       width: '40%',
//     });
//   }
//   feedback() {
//     const ref = this.dialogService.open(AnalysisFeedbackComponent, {
//       data: {
//         id: '51gF3',
//       },
//       header: 'Feedback Dialog',
//       width: '40%',
//     });
//   }
// }














import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './config';
import { TokenStorageService } from './_services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  userInfo:any = {};
  constructor(private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
     this.userInfo = this.tokenStorage.getUser();
     if(this.userInfo)
     {
       Config.setUserInfo(this.userInfo);
     }
     else{
       Config.clearUserInformation();
     }
  }
}