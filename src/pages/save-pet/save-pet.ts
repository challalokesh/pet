import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pet } from "../../models/pet";
import { Breed } from "../../models/breed";
import { LookupService } from "../../services/lookup.service";
import { PetService } from "../../services/pet.service";
import { PetsListPage } from "../pets-list/pets-list";
import { AppSettings } from "../../shared/app.settings";

@IonicPage()
@Component({
  selector: 'page-save-pet',
  templateUrl: 'save-pet.html',
})
export class SavePetPage {
  breedObj: Breed = <Breed>{};
  petObj: Pet = <Pet>{ breed: this.breedObj };
  pageTitle: string = AppSettings.PAGETITLE_PET;

  breeds: Breed[];
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private _lookupService: LookupService,
    private _petService: PetService,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this._lookupService.getBreeds().subscribe(breeds => this.breeds = breeds);
    if (this.navParams.data.id) {
      this.petObj.id = this.navParams.data.id;
      this._petService.getPet(this.petObj.id).subscribe(result => {
        if (result)
          this.petObj = <Pet>result;
      });
    }
    else
      this.petObj.id = null;
  }


  savePet() {
    if (this.petObj.birthDate)
      this.petObj.birthDate = new Date(this.petObj.birthDate);
    if (this.petObj.id) {
      this._petService.updatePet(this.petObj)
        .subscribe(() => {
          this.navCtrl.setRoot(PetsListPage);
        })
    }
    else {
      this._petService.createPet(this.petObj)
        .subscribe(() => {
          this.navCtrl.setRoot(PetsListPage);
        })
    }
  }

  deletePet() {
    this.showConfirm('Want to Delete?', 'Are you sure you want to delete this item?', this);
  }


  showConfirm(title, message, petService) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            petService._petService.deletePet(this.petObj.id)
              .subscribe(() => {
                petService.petObj.id = 0;
                petService.navCtrl.setRoot(PetsListPage);
              });

          }
        }
      ]
    });
    confirm.present();
  }




}
