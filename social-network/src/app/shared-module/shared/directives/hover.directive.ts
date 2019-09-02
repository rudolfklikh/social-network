import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[appHover]'
})
export class HoverDirective {
    @HostBinding('class.hovered') isHoverd = false;

    @HostListener('mouseenter') onmouseenter() {
        this.isHoverd = true;
    }
    @HostListener('mouseleave') onmouseleave() {
        this.isHoverd = false;
    }
}
