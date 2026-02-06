import { Task } from '@serenity-js/core';
import { Click, isVisible, Page } from '@serenity-js/web';
import { Ensure, includes } from '@serenity-js/assertions';
import { DemoQaHomePage } from '../ui/DemoQaHome.page';
import { FormsNav } from '../ui/FormsNav.page';

export const NavigateToPracticeForm = {
  fromHome: () =>
    Task.where('#actor opens Practice Form',
      Click.on(DemoQaHomePage.cardNamed('Forms')),
      Ensure.that(FormsNav.practiceForm(), isVisible()),
      Click.on(FormsNav.practiceForm()),
      Ensure.that(Page.current().url().pathname, includes('/automation-practice-form')),
    ),
};
