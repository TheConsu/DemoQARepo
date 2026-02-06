import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { AlertsPage } from '../ui/AlertsPage';

export const TriggerAlert = {
  simple: () =>
    Task.where(`#actor triggers a simple alert`,
      Click.on(AlertsPage.simpleAlertButton()),
    ),
};
