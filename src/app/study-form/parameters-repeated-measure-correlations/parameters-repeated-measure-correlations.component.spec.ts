import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MockBackend} from '@angular/http/testing';
import {ActivatedRoute, Router} from '@angular/router';

import { ParametersRepeatedMeasureCorrelationsComponent } from './parameters-repeated-measure-correlations.component';
import {LoggerModule, NGXLogger, NGXLoggerMock} from 'ngx-logger';
import {CorrelationMatrixComponent} from '../correlation-matrix/correlation-matrix.component';
import {CorrelationMatrixService} from '../correlation-matrix/correlationMatrix.service';
import {StudyService} from '../study.service';

import 'rxjs/add/operator/switchMap';
import {ActivatedRouteStub, RouterStub} from '../../../testing/router-stubs';
import {testEnvironment} from '../../../environments/environment.test';

let component: ParametersRepeatedMeasureCorrelationsComponent;
let fixture: ComponentFixture<ParametersRepeatedMeasureCorrelationsComponent>;
let activatedRoute: ActivatedRouteStub;

describe('ParametersRepeatedMeasureCorrelationsComponent', () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    activatedRoute.testParamMap = {name: 'Test'};
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        LoggerModule.forRoot({
          serverLoggingUrl: testEnvironment.serverLoggingUrl,
          level: testEnvironment.loglevel,
          serverLogLevel: testEnvironment.loglevel
        })
      ],
      declarations: [
        ParametersRepeatedMeasureCorrelationsComponent,
        CorrelationMatrixComponent
      ],
      providers: [
        StudyService,
        CorrelationMatrixService,
        {provide: Router, useClass: RouterStub},
        {provide: HttpClient, useClass: MockBackend},
        {provide: NGXLogger, useClass: NGXLoggerMock},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersRepeatedMeasureCorrelationsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
