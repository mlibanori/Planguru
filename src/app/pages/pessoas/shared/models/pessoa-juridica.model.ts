import { Pessoa } from './pessoa.model';

export class PessoaJuridica extends Pessoa{
    public razaoSocial?: string;
    public cnpj?: string;
    public ie?: string;
    public im?: string;
}



