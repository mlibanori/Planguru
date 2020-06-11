import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.scss']
})
export class FormEnderecoComponent implements OnInit {
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
