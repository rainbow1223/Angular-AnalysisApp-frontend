import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnalysisAnswerComponent } from '../analysis-answer/analysis-answer.component';
import { AnalysisCompensatorComponent } from '../analysis-compensator/analysis-compensator.component';
import { AnalysisErrorComponent } from '../analysis-error/analysis-error.component';
import { AnalysisFeedbackComponent } from '../analysis-feedback/analysis-feedback.component';
import { AnalysisQuestionComponent } from '../analysis-question/analysis-question.component';
import { AnalysisComponent } from '../analysis/analysis.component';
import { ArticleComponent } from '../article/article.component';
import { DataService } from '../services/user-defined/data.service';

@Component({
  selector: 'app-analysis-article',
  templateUrl: './analysis-article.component.html',
  styleUrls: ['./analysis-article.component.css'],
  providers: [DialogService],
})
export class AnalysisArticleComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService,
    public dataSvc: DataService,
  ) { }

  articleStatus: any = {};
  articleList: any = [];

  
  ngOnInit() {
   

    this.getArticle();


    //   this.items = [
    //     {
    //         label: 'File',
    //         items: [{
    //                 label: 'New', 
    //                 icon: 'pi pi-fw pi-plus',
    //                 items: [
    //                     {label: 'Project'},
    //                     {label: 'Other'},
    //                 ]
    //             },
    //             {label: 'Open'},
    //             {label: 'Quit'}
    //         ]
    //     },
    //     {
    //         label: 'Edit',
    //         icon: 'pi pi-fw pi-pencil',
    //         items: [
    //             {label: 'Delete', icon: 'pi pi-fw pi-trash'},
    //             {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
    //         ]
    //     }
    // ];



    // this.articleList = [
    //   {
    //     id: 1,
    //     heading: `Article-1`,
    //     text: `It is a long established fact that a reader will be distracted by the readable
    //     content of a page when looking at its layout. The point of using Lorem
    //     Ipsum is that it has a more-or-less normal distribution of letters,
    //     as opposed to using 'Content here, content here', making it look like readable English.
    //     Many desktop publishing packages and web page editors now use Lorem Ipsum as their
    //     default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    //     Various versions have evolved over the years,
    //     sometimes by accident, sometimes on purpose (injected humour and the like).
    //     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    //     `,
    //     summary: ``,
    //     status: {
    //       totalAnalysis: '',
    //       totalError: '',
    //       totalCompensator: '',
    //       totalFeedback: '',
    //       totalProblem: '',
    //       totalQuestion: '',
    //       totalAnswer: ''
    //     }
    //   },
    //   // {
    //   //   id:2,
    //   //   heading:`Article-2`,
    //   //   text: `It is a long established fact that a reader will be distracted by the readable
    //   //   content of a page when looking at its layout. The point of using Lorem
    //   //   Ipsum is that it has a more-or-less normal distribution of letters,
    //   //   as opposed to using 'Content here, content here', making it look like readable English.
    //   //   Many desktop publishing packages and web page editors now use Lorem Ipsum as their
    //   //   default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    //   //   Various versions have evolved over the years,
    //   //   sometimes by accident, sometimes on purpose (injected humour and the like).
    //   //   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    //   //  `,
    //   //   summary:``
    //   // },
    //   // {
    //   //   id:3,
    //   //   heading:`Article-3`,
    //   //   text: `It is a long established fact that a reader will be distracted by the readable
    //   //   content of a page when looking at its layout. The point of using Lorem
    //   //   Ipsum is that it has a more-or-less normal distribution of letters,
    //   //   as opposed to using 'Content here, content here', making it look like readable English.
    //   //   Many desktop publishing packages and web page editors now use Lorem Ipsum as their
    //   //   default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    //   //   Various versions have evolved over the years,
    //   //   sometimes by accident, sometimes on purpose (injected humour and the like).
    //   //   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    //   //  `,
    //   //   summary:``
    //   // }
    // ];

    // this.getArticleStatus();

  }

  addAnalysis(article: any) {
    const ref = this.dialogService.open(AnalysisComponent, {
      data: article,
      header: `Analysis Dialog`,
      width: '60%',
    });
    ref.onClose.subscribe((res: any) => {
      this.getArticleStatus(res.aricleId);
    });
  }

  getArticleStatus(articleID:any) {
    try {
      this.dataSvc.getArticleStatus(articleID).subscribe(
        (response) => {
          let index = this.articleList.findIndex(a => a.id == articleID);
          this.articleList[index].status = response.body;
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (e) {
      throw e;
    }
  }




  getArticle() {
    try {
      this.dataSvc.getArticle().subscribe(
        (response) => {
          this.articleList = response.body;
        },
        (error) => {
        }
      );
    } catch (e) {
      throw e;
    }
  }

  error() {
    const ref = this.dialogService.open(AnalysisErrorComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Error Identification Dialog',
      width: '40%',
    });
  }
  compensator() {
    const ref = this.dialogService.open(AnalysisCompensatorComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Compensator Dialog',
      width: '40%',
    });
  }
  question() {
    const ref = this.dialogService.open(AnalysisQuestionComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Analysis Question Dialog',
      width: '40%',
    });
  }
  answer() {
    const ref = this.dialogService.open(AnalysisAnswerComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Respond Analysis Question Dialog',
      width: '40%',
    });
  }
  feedback() {
    const ref = this.dialogService.open(AnalysisFeedbackComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Feedback Dialog',
      width: '40%',
    });
  }


 

  showArticleModal() {
    const ref = this.dialogService.open(ArticleComponent, {
      header: `New Article`,
      width: '60%',
    });
    ref.onClose.subscribe((res: any) => {
      if (res) {

        res.status = {
          totalAnalysis: 0,
          totalError: 0,
          totalCompensator: 0,
          totalFeedback: 0,
          totalProblem: 0,
          totalQuestion: 0,
          totalAnswer: 0
        };

        this.articleList.push(res);
      }
    });
  }




}
