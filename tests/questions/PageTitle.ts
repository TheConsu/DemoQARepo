import { Question } from '@serenity-js/core';
import { Page } from '@serenity-js/web';

export const PageTitle = {
  current: () =>
    Question.about('current page title', actor =>
      Page.current().title().answeredBy(actor)
    ),
};