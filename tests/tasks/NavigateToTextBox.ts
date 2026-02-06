import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { DemoQaHomePage } from '../ui/DemoQaHome.page';
import { ElementsNav } from '../ui/ElementsNav.page';

export const NavigateToTextBox = {
  fromHome: () =>
    Task.where(`#actor navigates to Elements > Text Box`,
      Click.on(DemoQaHomePage.cardNamed('Elements')),
      Ensure.that(ElementsNav.textBox(), isVisible()),
      Click.on(ElementsNav.textBox()),
      Ensure.that(Page.current().url().pathname, includes('/text-box')),
    ),
};