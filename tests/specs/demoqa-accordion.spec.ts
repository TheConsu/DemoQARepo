import { describe, it } from '@serenity-js/playwright-test';
import { OpenDemoQaHome } from '../tasks/OpenDemoQaHome';
import { InteractWithAccordion } from '../tasks/InteractWithAccordion';

describe('Case 5 - DemoQA Widgets Accordion', () => {

  it('allows to expand and collapse accordion panels', async ({ actor }) => {

    await actor.attemptsTo(
      OpenDemoQaHome.accordian(),
    );

    await actor.attemptsTo(
      InteractWithAccordion.expandPanel('section1Heading'),
      InteractWithAccordion.expandPanel('section2Heading'),
      InteractWithAccordion.expandPanel('section3Heading'),
    );
  });
});
