import { Injectable } from '@angular/core';
import { Pet } from "../models/pet";
import { ApiService } from "./api.service";
import { Http } from "@angular/http";


@Injectable()
export class PetService {

  constructor(
    private _apiService: ApiService, private http: Http) {
  }

  private _petsUrl = '/pets';


  getPets(): any {
    return this._apiService.get(this._petsUrl, '');
  }

  getPet(id: number) {
    return this._apiService.get(`${this._petsUrl}/${id}`, '');
  }

  createPet(pet: Pet) {
    var updatedPet: any = {};
    updatedPet.id = pet.id;
    updatedPet.name = pet.name;
    updatedPet.color = pet.color;
    updatedPet.gender = pet.gender;
    updatedPet.breed = pet.breed.hasOwnProperty("id") ? pet.breed : null;
    updatedPet.birthDate = new Date(pet.birthDate);
    return this._apiService
      .post(`${this._petsUrl}`, pet);
  }

  updatePet(pet: Pet) {
    var updatedPet: any = {};
    updatedPet.id = pet.id;
    updatedPet.name = pet.name;
    updatedPet.color = pet.color;
    updatedPet.gender = pet.gender;
    updatedPet.breed = pet.breed.hasOwnProperty("id") ? pet.breed : null;
    updatedPet.birthDate = new Date(pet.birthDate);
    return this._apiService
      .put(`${this._petsUrl}/${pet.id}`, updatedPet);
  }

  deletePet(id: number) {
    return this._apiService.delete(`${this._petsUrl}/${id}`, '');
  }

  searchPets(search): any {
    return this._apiService.post(this._petsUrl + '/search', search);
  }

}



