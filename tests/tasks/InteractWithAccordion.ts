import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { Ensure, isPresent } from '@serenity-js/assertions';
import { By, PageElement } from '@serenity-js/web';

const accordionHeader = (id: string) =>
  PageElement.located(By.id(id))
    .describedAs(`Accordion header ${ id }`);

const accordionContent = (id: string) =>
  PageElement.located(By.id(id.replace('Heading', 'Content')))
    .describedAs(`Accordion content ${ id }`);

export const InteractWithAccordion = {
  expandPanel: (headerId: string) =>
    Task.where(`#actor expands accordion panel ${ headerId }`,
      Click.on(accordionHeader(headerId)),
      Ensure.that(accordionContent(headerId), isPresent()),
    ),
};
