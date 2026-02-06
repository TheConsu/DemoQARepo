import { By, PageElement } from '@serenity-js/web';

export class AlertsNavPage {
  static alertsMenu = () =>
    PageElement.located(By.cssContainingText('.menu-list li *', 'Alerts'))
      .describedAs('Alerts menu item');
}
