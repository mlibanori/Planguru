import { Pessoa } from './pessoa.model';

export class PessoaFisica extends Pessoa{
    public cpf?:string;
    public rg?:string;
    public sexo?:string;
    public profissao?: string;
    public data_nascimento?: Date
}
