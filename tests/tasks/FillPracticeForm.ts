import { Task } from '@serenity-js/core';
import { Clear, Click, Enter, Scroll, isVisible } from '@serenity-js/web';
import { Ensure } from '@serenity-js/assertions';
import { PracticeForm } from '../ui/PracticeForm.page';

export interface PracticeFormData {
  firstName: string;
  lastName: string;
  email?: string;
  mobile: string;
  gender?: 'Male' | 'Female' | 'Other';
}

export const FillPracticeForm = {
  with: (data: PracticeFormData) =>
    Task.where('#actor fills and submits the Practice Form',
      Ensure.that(PracticeForm.firstName(), isVisible()),

      Clear.theValueOf(PracticeForm.firstName()),
      Enter.theValue(data.firstName).into(PracticeForm.firstName()),

      Clear.theValueOf(PracticeForm.lastName()),
      Enter.theValue(data.lastName).into(PracticeForm.lastName()),

      ...(data.email ? [
        Clear.theValueOf(PracticeForm.email()),
        Enter.theValue(data.email).into(PracticeForm.email()),
      ] : []),

      Click.on(
        data.gender === 'Female' ? PracticeForm.genderFemale()
        : data.gender === 'Other' ? PracticeForm.genderOther()
        : PracticeForm.genderMale()
      ),

      Clear.theValueOf(PracticeForm.mobile()),
      Enter.theValue(data.mobile).into(PracticeForm.mobile()),

      Scroll.to(PracticeForm.submit()),
      Ensure.that(PracticeForm.submit(), isVisible()),
      Click.on(PracticeForm.submit()),

      Ensure.that(PracticeForm.modal(), isVisible()),
    ),
};
