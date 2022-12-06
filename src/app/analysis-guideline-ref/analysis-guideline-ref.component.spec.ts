import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGuidelineRefComponent } from './analysis-guideline-ref.component';

describe('AnalysisGuidelineRefComponent', () => {
  let component: AnalysisGuidelineRefComponent;
  let fixture: ComponentFixture<AnalysisGuidelineRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisGuidelineRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisGuidelineRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
