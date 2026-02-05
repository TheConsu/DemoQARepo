import { describe, it } from '@serenity-js/playwright-test';
import { Ensure, and, contain, includes } from '@serenity-js/assertions';

import { OpenDemoQaHome } from '../tasks/OpenDemoQaHome';
import { PageTitle } from '../questions/PageTitle';
import { VisibleHomeCards } from '../questions/VisibleHomeCards';

describe('Case 1 - DemoQA - Home', () => {
  it('should load the homepage and display expected sections', async ({ actor }) => {
    await actor.attemptsTo(
      OpenDemoQaHome.at(),
      Ensure.that(PageTitle.current(), includes('DEMOQA')),
      Ensure.that(
        VisibleHomeCards.titles(),
        and(
          contain('Elements'),
          contain('Forms'),
          contain('Alerts, Frame & Windows'),
          contain('Widgets'),
          contain('Interactions'),
          contain('Book Store Application'),
        ),
      ),
    );
  });
});