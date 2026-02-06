import { By, PageElement } from '@serenity-js/web';

export class AlertsPage {
  static simpleAlertButton = () =>
    PageElement.located(By.id('alertButton'))
      .describedAs('Simple alert button');

  static newWindowButton = () =>
    PageElement.located(By.id('windowButton'))
      .describedAs('New window button');
}
