import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

   
  constructor(private el:ElementRef, private render: Renderer2) { 

    // el.nativeElement.style.backgroundColor = 'black';
    // el.nativeElement.style.color = 'yellow';
    // el.nativeElement.style.height = '50px'
    // el.nativeElement.style.width = '100px'

    render.setStyle(el.nativeElement,'backgroundColor','red')

  }
   
  
}

