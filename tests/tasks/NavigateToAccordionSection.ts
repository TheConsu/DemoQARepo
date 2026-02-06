import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { By, PageElement } from '@serenity-js/web';

const widgetsCard = () =>
  PageElement.located(By.cssContainingText('.card.mt-4.top-card', 'Widgets'))
    .describedAs('Widgets card');

const accordionMenu = () =>
  PageElement.located(By.cssContainingText('.menu-list li span', 'Accordian'))
    .describedAs('Accordion menu item');

export const NavigateToAccordionSection = {
  fromHome: () =>
    Task.where(`#actor navigates to Accordion section`,
      Click.on(widgetsCard()),
      Click.on(accordionMenu()),
    ),
};
