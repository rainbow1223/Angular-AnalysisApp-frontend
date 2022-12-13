import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { AnalysisGuidelineRefComponent } from './analysis-guideline-ref/analysis-guideline-ref.component';
import { AnalysisCompensatorComponent } from './analysis-compensator/analysis-compensator.component';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import {BadgeModule} from 'primeng/badge';




import { AnalysisAnswerComponent } from './analysis-answer/analysis-answer.component';
import { AnalysisFeedbackComponent } from './analysis-feedback/analysis-feedback.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AnalysisErrorComponent } from './analysis-error/analysis-error.component';
import { AnalysisQuestionComponent } from './analysis-question/analysis-question.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/user-defined/data.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ModelService } from './services/user-defined/model.service';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import {
  DxDataGridModule,
  DxTabPanelModule,
  DxTemplateModule,
  DxButtonModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxHtmlEditorModule,
  DxContextMenuModule,
  DxPopoverModule,
  DxSelectBoxModule
} from "devextreme-angular";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AnalysisArticleComponent } from './analysis-article/analysis-article.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { AnalysisProblemComponent } from './analysis-problem/analysis-problem.component';
import { RemovetagPipe } from './pipes/remove-tag.pipe';
import {MessageService} from 'primeng/api';
import { ValidateDirective } from './directives/validate.directive';
import { ArticleComponent } from './article/article.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [				
    AppComponent, 
    ErrorDialogComponent, 
    AnalysisGuidelineRefComponent, 
    AnalysisCompensatorComponent, 
    AnalysisAnswerComponent, 
    AnalysisFeedbackComponent, 
    AnalysisComponent, 
    AnalysisErrorComponent, 
    AnalysisQuestionComponent, 
    LoginComponent, 
    RegisterComponent, 
    HomeComponent, 
    ProfileComponent, 
    BoardAdminComponent, 
    BoardModeratorComponent, 
    BoardUserComponent, 
    AnalysisArticleComponent,
    TooltipDirective,
    AnalysisProblemComponent,
    RemovetagPipe,
    ValidateDirective,
    ArticleComponent,
      AdminRegisterComponent,
      AdminLoginComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ToastModule,
    MenubarModule,
    BadgeModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxButtonModule,
    DxHtmlEditorModule,
    DxContextMenuModule,
    DxPopoverModule,
    DxSelectBoxModule,
    InputTextModule,
    TabMenuModule,
    SplitterModule,
    CalendarModule,
    EditorModule,
    InputTextareaModule,
    ContextMenuModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    DropdownModule
  ],
  exports: [
    ToastModule,
    DxButtonModule,
    CalendarModule,
    RemovetagPipe
  ],
  providers: [
    ApiService,
    DataService,
    ModelService,
    MessageService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
