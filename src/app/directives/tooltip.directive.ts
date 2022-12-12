import { Directive, ElementRef, NgZone, AfterViewInit, Input, HostListener } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective extends Tooltip implements AfterViewInit {
  constructor(public el: ElementRef, public zone: NgZone, public config: PrimeNGConfig) {
    super(el, zone, config);
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      switch (this.tooltipEvent) {
        case 'hover':
          this.initHoverForTooltipEvent();
          break;
        case 'focus':
          this.initFocusForTooltipEvent();
          break;
        case 'hover|focus':
          this.initHoverForTooltipEvent();
          this.initFocusForTooltipEvent();
          break;
      }
    });
  }

  private initHoverForTooltipEvent(): void {
    this.mouseEnterListener = this.onMouseEnter.bind(this);
    this.mouseLeaveListener = this.onMouseLeave.bind(this);
    this.clickListener = this.onClick.bind(this);
    this.el.nativeElement.addEventListener('mouseenter', this.mouseEnterListener);
    this.el.nativeElement.addEventListener('mouseleave', this.mouseLeaveListener);
    this.el.nativeElement.addEventListener('click', this.clickListener);
  }

  private initFocusForTooltipEvent(): void {
    this.focusListener = this.onFocus.bind(this);
    this.blurListener = this.onBlur.bind(this);
    this.el.nativeElement.addEventListener('focus', this.focusListener);
    this.el.nativeElement.addEventListener('blur', this.blurListener);
  }


  @HostListener('mouseenter', ['$event']) 
  onMouseEnter(e: Event) {
      if(this.tooltipEvent === 'hover' || this.tooltipEvent === 'hover|focus' || this.tooltipEvent === 'focus|hover') {
          this.show();
      }
  }
  
  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(e: Event) {
      if(this.tooltipEvent === 'hover' || this.tooltipEvent === 'hover|focus' || this.tooltipEvent === 'focus|hover') {
          this.hide();
      }
  }
  
  @HostListener('focus', ['$event']) 
  onFocus(e: Event) {
      if(this.tooltipEvent === 'focus' || this.tooltipEvent === 'hover|focus' || this.tooltipEvent === 'focus|hover') {
          this.show();
      }
  }
  
  @HostListener('blur', ['$event']) 
  onBlur(e: Event) {
      if(this.tooltipEvent === 'focus' || this.tooltipEvent === 'hover|focus' || this.tooltipEvent === 'focus|hover') {
          this.hide();
      }
  }

  @Input('appTooltip') set textAccessible(text: string) {
    this.text = text;
  }
}