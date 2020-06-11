import {mask, prop, required} from '@rxweb/reactive-form-validators';
export class Endereco{
    public id?:number;
    @mask({mask:'99999-999' })
    public cep?:string;
    @prop()
    public logradouro?: string;
    @prop()
    public numero?: string;
    @prop()
    public bairro?: string;
    @prop()
    public complemento?:string;
    @prop()
    public uf?: string;
    @prop()
    public localidade?: string;

    


}