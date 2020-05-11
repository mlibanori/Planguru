import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[FormInput]'
})
export class FormInputDirective implements AfterViewInit {
  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }
  ngAfterViewInit() {
    const element: any = this.el.nativeElement;
    const inputElement: any = element.querySelector('input');
    const labelElement: any = element.querySelector('label');

    element.addEventListener("click", () =>  inputElement.focus());

    inputElement.addEventListener("focus", () =>{ 
      labelElement.classList.add('fade');
      element.classList.add('focused');
    });
    
    inputElement.addEventListener("blur", () => {
      element.classList.remove('focused');
      if(inputElement.value.length == 0)
        labelElement.classList.remove('fade');
    });
  }

}
