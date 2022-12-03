export default abstract class AbsEntidadeDominio {
  protected _id?: string;
  constructor(id?: string) {
    this._id = id;
  }
  protected get id(): string | undefined {
    return this._id;
  }
  protected set id(id: string | undefined) {
    this._id = id
  }

}