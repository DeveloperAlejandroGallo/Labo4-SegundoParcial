import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorMaterias]'
})
export class ColorMateriasDirective {

  @Input() cupos: number;

  constructor(private element: ElementRef) { 
  }

  ngOnInit() {

    this.element.nativeElement.style.backgroundColor = this.cupos > 20 ? "green" : this.cupos > 10 ? "yellow" : "white";
 
  }
}
