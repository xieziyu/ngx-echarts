import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({})
export class IconsProviderModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Register common icons used in the application
    // Material uses different approach than ng-zorro for icons
    // Here we're registering SVG icons that you can use with mat-icon
    // Example of how to register a custom icon:
    // this.matIconRegistry.addSvgIcon(
    //   'menu_fold',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu-fold.svg')
    // );
    // For this demo we'll rely on the built-in Material icons
  }
}
