import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateDirective,
    multi: true
  }]
})
export class ValidateDirective implements Validator {

  isSuccess: boolean = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == null || control.value == '') {
      if (control.touched || control.dirty) {
        this.isSuccess = false;
        this.createSibling();
      }
      return { 'phoneNumberInvalid': true };

    }
    this.removeSibling();
    this.isSuccess = true;
    return null;
  }


  @HostBinding('class.is-valid')
  public get isValid(): boolean {
    return this.isSuccess;
  }

  @HostBinding('class.is-invalid')
  public get isInvalid(): boolean {
    return !this.isSuccess;
  }


  private createSibling(): void {
    const tag = this.renderer.createElement('small');
    const text = this.renderer.createText(`This field is required.`);
    this.renderer.addClass(tag,`p-error`);
    this.renderer.addClass(tag,`block`);
    this.renderer.appendChild(tag, text);
    this.renderer.appendChild(this.el.nativeElement.parentElement, tag);
  }

  private removeSibling(): void {
    const parentElement = this.el.nativeElement.parentElement;
    while (parentElement.lastChild) {
      const element = parentElement.lastChild;
      if (element.nodeName == 'SMALL')
        parentElement.removeChild(element);
      else break;
    }

  }
}