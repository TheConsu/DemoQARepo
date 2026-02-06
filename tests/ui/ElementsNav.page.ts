import { By, PageElement } from '@serenity-js/web';

export class ElementsNav {
  static textBox = () =>
    PageElement.located(
      By.cssContainingText('.element-group .menu-list li *', 'Text Box'),
    ).describedAs('Text Box menu item');
}