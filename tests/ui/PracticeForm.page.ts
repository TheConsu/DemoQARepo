import { By, PageElement } from '@serenity-js/web';

export class PracticeForm {
  static firstName = () =>
    PageElement.located(By.id('firstName')).describedAs('First Name');

  static lastName = () =>
    PageElement.located(By.id('lastName')).describedAs('Last Name');

  static email = () =>
    PageElement.located(By.id('userEmail')).describedAs('Email');

  static mobile = () =>
    PageElement.located(By.id('userNumber')).describedAs('Mobile');

  static genderMale = () =>
    PageElement.located(By.css('label[for="gender-radio-1"]')).describedAs('Gender Male');

  static genderFemale = () =>
    PageElement.located(By.css('label[for="gender-radio-2"]')).describedAs('Gender Female');

  static genderOther = () =>
    PageElement.located(By.css('label[for="gender-radio-3"]')).describedAs('Gender Other');

  static submit = () =>
    PageElement.located(By.id('submit')).describedAs('Submit');

  static modal = () =>
    PageElement.located(By.css('.modal-content')).describedAs('Submission Modal');

  static modalTitle = () =>
    PageElement.located(By.css('.modal-content .modal-title')).describedAs('Modal Title');

  static modalBody = () =>
    PageElement.located(By.css('.modal-content .modal-body')).describedAs('Modal Body');

  static closeModal = () =>
    PageElement.located(By.id('closeLargeModal')).describedAs('Close Modal');
}
