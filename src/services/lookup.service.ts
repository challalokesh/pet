import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";


@Injectable()
export class LookupService {

  constructor(
    private _apiService: ApiService) {
  }

  private _breedsUrl = '/breeds';

  getBreeds(): any {
    return this._apiService.get(this._breedsUrl, '');
  }

}
