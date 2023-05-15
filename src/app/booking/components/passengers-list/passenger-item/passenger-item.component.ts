/* eslint-disable class-methods-use-this */
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import {
  INITIAL_BAGGAGE,
  MAX_BAGGAGE,
} from 'src/app/shared/constants/string-constants';
import { PersonalInfoFormService } from 'src/app/shared/services/personal-info-form.service';
import { PassengersFormsService } from 'src/app/shared/services/passengers-forms.service';

@Component({
  selector: 'app-passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.scss'],
  providers: [PersonalInfoFormService],
})
export class PassengerItemComponent implements OnInit {
  @Input() public passenger!: string;

  @Input() public index!: number;

  public personalFormGroup!: FormGroup;

  public passengerFormGroup!: FormGroup;

  public isLuggageError = false;

  public constructor(
    private personalInfoFormService: PersonalInfoFormService,
    private passengersFormsService: PassengersFormsService
  ) {}

  public ngOnInit(): void {
    this.passengerFormGroup = new FormGroup({
      personalFormGroup: this.personalInfoFormService.personalFormGroup,
      specialAssistance: new FormControl<boolean>(false),
      luggage: new FormControl<number>(INITIAL_BAGGAGE),
    });

    this.passengersFormsService.addForm(this.passengerFormGroup);
    this.passengersFormsService.passengersInfo(
      this.passengerFormGroup,
      this.passenger
    );
  }

  public get passengersInfo(): FormGroup {
    return this.passengerFormGroup.get('personalFormGroup') as FormGroup;
  }

  public get specialAssistance(): AbstractControl | null {
    return this.passengerFormGroup.get('specialAssistance');
  }

  public get luggage(): AbstractControl | null {
    return this.passengerFormGroup.get('luggage');
  }

  public get luggageValue(): number {
    return this.luggage?.value || 0;
  }

  public set luggageCount(value: number) {
    this.luggage?.setValue(value);
  }

  public decrement(): void {
    this.luggage?.setValue(this.luggageValue - 1);
  }

  public increment(): void {
    this.luggage?.setValue(this.luggageValue + 1);
  }

  public shouldDisableDecrement(): boolean {
    if (this.luggageValue < MAX_BAGGAGE) {
      this.isLuggageError = false;
    }
    return this.luggageValue <= INITIAL_BAGGAGE;
  }

  public shouldDisableIncrement(): boolean {
    if (this.luggageValue >= MAX_BAGGAGE + 1) {
      this.luggageCount = MAX_BAGGAGE;
      this.isLuggageError = true;
    }
    return this.luggageValue >= MAX_BAGGAGE + 1;
  }
}
