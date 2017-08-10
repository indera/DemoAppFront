import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RepeatedMeasure} from '../shared/RepeatedMeasure';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CorrelationMatrixService} from '../shared/correlationMatrix.service';
import {Subscription} from 'rxjs/Subscription';
import {RepeatedMeasureService} from '../shared/repeatedMeasure.service';

@Component({
  selector: 'app-repeated-measure',
  templateUrl: './repeated-measure.component.html',
  styleUrls: ['./repeated-measure.component.scss'],
  providers: [CorrelationMatrixService]
})
export class RepeatedMeasureComponent {

  private _repeatedMeasureForm: FormGroup;
  private _correlationMatrixSubscription: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _correlationMatrixService: CorrelationMatrixService,
    private _repeatedMeasureService: RepeatedMeasureService,
    private _repeatedMeasure: RepeatedMeasure
  ) {
    this.buildForm();
    this.updateCorrelationMatrix();
    this.updateName();
    this.updateNoRepeats();
    this.updateSpacing();
  }

  buildForm(): void {
    this.repeatedMeasureForm = this.fb.group({
      name: [''],
      noRepeats: [''],
      spacing: [''],
      correlationMatrix: ''
    });
  }

  addRepeatedMeasure() {
    this.repeatedMeasureService.updateRepeatedMeasure( this.repeatedMeasure );
  }

  updateCorrelationMatrix() {
    this.correlationMatrixSubscription = this.correlationMatrixService.correlationMatrix$.subscribe(
      correlationMatrix => {
        this.repeatedMeasureForm.get('correlationMatrix').setValue(correlationMatrix);
        this.repeatedMeasure.correlationMatrix = correlationMatrix;
      }
    );
  }

  updateName() {
    const noRepeatsControl = this.repeatedMeasureForm.get('name');
    noRepeatsControl.valueChanges.forEach(
      (value: string) => this.repeatedMeasure.name = value);
  }

  updateNoRepeats() {
    const noRepeatsControl = this.repeatedMeasureForm.get('noRepeats');
    noRepeatsControl.valueChanges.forEach(
      (value: number) => this.repeatedMeasure.noRepeats = value);
  }

  updateSpacing() {
    const noRepeatsControl = this.repeatedMeasureForm.get('spacing');
    noRepeatsControl.valueChanges.forEach(
      (value: number) => this.repeatedMeasure.spacing = value);
  }

  get repeatedMeasure(): RepeatedMeasure {
    return this._repeatedMeasure;
  }

  @Input()
  set repeatedMeasure(value: RepeatedMeasure) {
    this._repeatedMeasure = value;
  }

  get repeatedMeasureForm(): FormGroup {
    return this._repeatedMeasureForm;
  }

  set repeatedMeasureForm(value: FormGroup) {
    this._repeatedMeasureForm = value;
  }

  get correlationMatrixSubscription(): Subscription {
    return this._correlationMatrixSubscription;
  }

  set correlationMatrixSubscription(value: Subscription) {
    this._correlationMatrixSubscription = value;
  }

  get fb(): FormBuilder {
    return this._fb;
  }

  set fb(value: FormBuilder) {
    this._fb = value;
  }

  get repeatedMeasureService(): RepeatedMeasureService {
    return this._repeatedMeasureService;
  }

  set repeatedMeasureService(value: RepeatedMeasureService) {
    this._repeatedMeasureService = value;
  }

  get correlationMatrixService(): CorrelationMatrixService {
    return this._correlationMatrixService;
  }

  set correlationMatrixService(value: CorrelationMatrixService) {
    this._correlationMatrixService = value;
  }
}
