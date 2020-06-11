import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { PessoaJuridica } from '../../models/pessoa-juridica.model';
import { ResourceForm } from 'src/app/shared/models/resource-form.model';

@Component({
  selector: 'form-pessoa-juridica',
  templateUrl: './form-pessoa-juridica.component.html',
  styleUrls: ['./form-pessoa-juridica.component.scss']
})
export class FormPessoaJuridicaComponent implements OnInit {

  public teste: any;
  

  @Input()
  resource: ResourceForm;

  constructor(private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.resource.entity.pessoa = new PessoaJuridica();
    this.resource.form.controls.pessoa = this.formBuilder.formGroup(this.resource.entity.pessoa);
  }
}
