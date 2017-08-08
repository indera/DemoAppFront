export class WithinISUOutcome {
  private _name = '';
  private _noRepeats = 0;
  private _spacing = 0;
  private _covarianceMatrix = [];

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get noRepeats(): number {
    return this._noRepeats;
  }

  set noRepeats(value: number) {
    this._noRepeats = value;
  }

  get spacing(): number {
    return this._spacing;
  }

  set spacing(value: number) {
    this._spacing = value;
  }

  get covarianceMatrix(): Array<number> {
    return this._covarianceMatrix;
  }

  set covarianceMatrix(value: Array<number>) {
    this._covarianceMatrix = value;
  }
}
