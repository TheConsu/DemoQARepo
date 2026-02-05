import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { DemoQaHomePage } from '../ui/DemoQaHome.page';

export const VisibleHomeCards = {
  titles: () =>
    Question.about('visible home card titles', async actor => {
      const titles = await Text.ofAll(DemoQaHomePage.cardTitles()).answeredBy(actor);
      return titles.map(t => t.trim()).filter(Boolean);
    }),
};