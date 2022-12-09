import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Config } from '../config';
import { Article } from '../models/article.model';
import { EntityTag } from '../models/entityTag';
import { Guid } from '../services/global.service';
import { DataService } from '../services/user-defined/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    public dataSvc: DataService,
  ) { }

  form: FormGroup;
  tooltip: any = Config.tooltip;
  submitted = false;
  isVisible: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  save(data: Article) {
    try {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

      data.tag = EntityTag.added;

      this.dataSvc.saveArticle(data).subscribe(
        (response) => {
          this.ref.close(response.body);
        },
        (error) => {
          this.submitted = false;
        }
      );
    } catch (e) {
      throw e;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(Guid.newGuid(), Validators.required),
      heading: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    });
  }

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
