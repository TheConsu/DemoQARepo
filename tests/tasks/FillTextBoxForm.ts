import { Task } from '@serenity-js/core';
import { Enter, Click, Clear, isVisible, Scroll } from '@serenity-js/web';
import { Ensure } from '@serenity-js/assertions';
import { ElementsTextBox } from '../ui/ElementsTextBox.page';


export interface TextBoxData {
  fullName: string;
  email: string;
  currentAddress?: string;
  permanentAddress?: string;
}

export const FillTextBoxForm = {
  with: (data: TextBoxData) =>
    Task.where(`#actor fills the Text Box form and submits`,
      Ensure.that(ElementsTextBox.fullName(), isVisible()),

      Clear.theValueOf(ElementsTextBox.fullName()),
      Enter.theValue(data.fullName).into(ElementsTextBox.fullName()),

      Clear.theValueOf(ElementsTextBox.email()),
      Enter.theValue(data.email).into(ElementsTextBox.email()),

      ...(data.currentAddress ? [
        Clear.theValueOf(ElementsTextBox.currentAddress()),
        Enter.theValue(data.currentAddress).into(ElementsTextBox.currentAddress()),
      ] : []),

      ...(data.permanentAddress ? [
        Clear.theValueOf(ElementsTextBox.permanentAddress()),
        Enter.theValue(data.permanentAddress).into(ElementsTextBox.permanentAddress()),
      ] : []),

      Scroll.to(ElementsTextBox.submit()),
      Ensure.that(ElementsTextBox.submit(), isVisible()),
      Click.on(ElementsTextBox.submit()),
    ),
};
