import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputDirective } from './directives/form-input.directive';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
