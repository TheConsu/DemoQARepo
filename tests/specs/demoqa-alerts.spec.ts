import { describe, it } from '@serenity-js/playwright-test';
import { Ensure, includes } from '@serenity-js/assertions';
import { Page } from '@serenity-js/web';

import { OpenDemoQaHome } from '../tasks/OpenDemoQaHome';
import { TriggerAlert } from '../tasks/TriggerAlert';
import { TriggerNewWindow } from '../tasks/TriggerNewWindow';

describe('Caso 4 - DemoQA Alerts, Frame & Windows', () => {

  it('muestra una alerta y abre una nueva ventana', async ({ actor, page }) => {

    await page.goto('https://demoqa.com/alerts', { waitUntil: 'domcontentloaded'});
    await actor.attemptsTo(
      OpenDemoQaHome.alerts(),
    );

    const dialogPromise = page.waitForEvent('dialog');

    await actor.attemptsTo(
      TriggerAlert.simple(),
    );

    const dialog = await dialogPromise;
    const message = dialog.message();

    await actor.attemptsTo(
      Ensure.that(message, includes('You clicked a button')),
    );

    await page.goto('https://demoqa.com/browser-windows', { waitUntil: 'domcontentloaded'});
    await actor.attemptsTo(
      OpenDemoQaHome.browserWindows(),
      TriggerNewWindow.simple(),
      Ensure.that(Page.current().url().href, includes('demoqa.com')),
    );
  });
});
