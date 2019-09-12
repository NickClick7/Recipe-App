import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirektive {

  constructor(private element: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.element.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    this.element.nativeElement.querySelector('.dropdown-toggle').setAttribute('aria-expanded', this.isOpen );
  }

}
