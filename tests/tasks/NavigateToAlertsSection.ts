import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { By, PageElement } from '@serenity-js/web';

const alertsCard = () =>
  PageElement.located(By.cssContainingText('.card.mt-4.top-card', 'Alerts, Frame & Windows'))
    .describedAs('Alerts, Frame & Windows card');

const alertsMenu = () =>
  PageElement.located(By.cssContainingText('.menu-list li span', 'Alerts'))
    .describedAs('Alerts menu item');

const browserWindowsMenu = () =>
  PageElement.located(By.cssContainingText('.menu-list li span', 'Browser Windows'))
    .describedAs('Browser Windows menu item');

export const NavigateToAlertsSection = {
  fromHome: () =>
    Task.where(`#actor navigates to Alerts section`,
      Click.on(alertsCard()),
      Click.on(alertsMenu()),
    ),

  toBrowserWindows: () =>
    Task.where(`#actor navigates to Browser Windows section`,
      Click.on(alertsCard()),
      Click.on(browserWindowsMenu()),
    ),
};
