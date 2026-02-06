import { By, PageElement } from '@serenity-js/web';

export class ElementsTextBox {
  static fullName = () =>
    PageElement.located(By.id('userName')).describedAs('Full Name');

  static email = () =>
    PageElement.located(By.id('userEmail')).describedAs('Email');

  static currentAddress = () =>
    PageElement.located(By.id('currentAddress')).describedAs('Current Address');

  static permanentAddress = () =>
    PageElement.located(By.id('permanentAddress')).describedAs('Permanent Address');

  static submit = () =>
    PageElement.located(By.id('submit')).describedAs('Submit');

  static output = () =>
    PageElement.located(By.id('output')).describedAs('Text Box output');

  static outputName = () =>
    PageElement.located(By.css('#output #name')).describedAs('Output - Name');

  static outputEmail = () =>
    PageElement.located(By.css('#output #email')).describedAs('Output - Email');
}
