// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appAutoFocus]'
// })
// export class AutoFocusDirective {

//   constructor() { }

// }
import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[autoFocus]'
})
export class AutofocusDirective implements AfterContentInit {

    @Input() public appAutoFocus: boolean | undefined;

    public constructor(private el: ElementRef) {

    }

    public ngAfterContentInit() {

        setTimeout(() => {

            this.el.nativeElement.focus();

        }, 500);

    }

}
