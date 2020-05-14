import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputDirective } from './form-input.directive';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [FormInputDirective, HeaderComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormInputDirective,
    HeaderComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
