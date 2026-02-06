import { By, PageElement } from '@serenity-js/web';

export class FormsNav {
  static practiceForm = () =>
    PageElement.located(
      By.cssContainingText('.element-group .menu-list li *', 'Practice Form'),
    ).describedAs('Practice Form');
}