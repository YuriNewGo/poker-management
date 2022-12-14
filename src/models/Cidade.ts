import AbsEntidadeDominio from "./AbsEntidadeDominio";
import Estado from './Estado';
export default class Cidade extends AbsEntidadeDominio {
  private _nomeCidade: string;
  private _est: Estado;

  constructor(nomeCidade: string, estado: Estado) {
    super();
    this._nomeCidade = nomeCidade;
    this._est = estado
  }

  get nomeCidade(): string {
    return this._nomeCidade;
  }
  set nomeCidade(nomeCidade: string) {
    this._nomeCidade = nomeCidade;
  }
  get estado(): Estado {
    return this._est;
  }
  set estado(estado: Estado) {
    this._est = estado;
  }
}
