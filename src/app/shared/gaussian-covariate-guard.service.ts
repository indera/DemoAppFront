import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StudyService} from '../study-form/study.service';
import {Subscription} from 'rxjs/Subscription';
import {isNullOrUndefined} from 'util';
import {GaussianCovariate} from './GaussianCovariate';
import {NGXLogger} from 'ngx-logger';

/**
 * GaussianCovariate guard allows access to a route if and only if the currently loaded StudyDesign has a
 * gaussian covariate defined.
 */
@Injectable()
export class GaussianCovariateGuard implements CanActivate {
  private gaussianCovariate: GaussianCovariate;
  private gaussianCovariatesSubscription: Subscription;

  constructor(private router: Router, private study_service: StudyService, private log: NGXLogger) {
    this.gaussianCovariatesSubscription = this.study_service.gaussianCovariate$.subscribe(gaussianCovariate => {
        this.gaussianCovariate = gaussianCovariate;
      }
    );
  }

  /**
   * @param {ActivatedRouteSnapshot} route The route to guard
   * @param {RouterStateSnapshot} state RouterStateSnapshot allows method to inspect properties of the router at the time it was called.
   * @returns {boolean} grant or deny access
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.log.debug('GaussianCovariateGuard#canActivate called');
    const stage = this.study_service.stage;
    this.log.debug(stage);
    if (
      !isNullOrUndefined(this.gaussianCovariate)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
