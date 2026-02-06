import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { By, PageElement } from '@serenity-js/web';

export const TriggerNewWindow = {
  simple: () =>
    Task.where(`#actor opens a new window`,
      Click.on(PageElement.located(By.id('windowButton'))
        .describedAs('New window button')),
    ),
};
