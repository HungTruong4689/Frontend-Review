import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]',
})
export class BetterHighlightDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  //remember that better with renderer2 ??? why
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  //mouseover,mouseleave with angular
  @HostListener('mouseover', ['$event']) mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave', ['$event']) mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
  }
}
