/* eslint-disable class-methods-use-this */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonalInfoFormService } from 'src/app/shared/services/personal-info-form.service';
import { ValidationFormsService } from 'src/app/shared/services/validation-forms.service';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.scss'],
  providers: [PersonalInfoFormService],
})
export class PassengerItemComponent implements OnInit {
  @Input() public passenger!: string;

  @Input() public index!: number;

  public formGroup!: FormGroup;

  public constructor(
    private personalInfoFormService: PersonalInfoFormService,
    private validationFormsService: ValidationFormsService
  ) {}

  public ngOnInit(): void {
    this.formGroup = this.personalInfoFormService.personalFormGroup;
    this.validationFormsService.addForm(this.formGroup);
  }

  public get passengerInfoFormGroup(): FormGroup {
    return this.formGroup as FormGroup;
  }
}
