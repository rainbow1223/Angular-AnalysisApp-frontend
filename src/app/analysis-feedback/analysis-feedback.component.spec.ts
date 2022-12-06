import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFeedbackComponent } from './analysis-feedback.component';

describe('AnalysisFeedbackComponent', () => {
  let component: AnalysisFeedbackComponent;
  let fixture: ComponentFixture<AnalysisFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
