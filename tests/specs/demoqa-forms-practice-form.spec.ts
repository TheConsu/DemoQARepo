import { describe, it } from '@serenity-js/playwright-test';
import { Ensure, includes } from '@serenity-js/assertions';

import { OpenDemoQaHome } from '../tasks/OpenDemoQaHome';
import { NavigateToPracticeForm } from '../tasks/NavigateToPracticeForm';
import { FillPracticeForm } from '../tasks/FillPracticeForm';
import { PracticeFormModal } from '../questions/PracticeFormModal';

describe('Case 2 - DemoQA - Practice Form', () => {
  it('submits the form and confirms data', async ({ actor }) => {
    const firstName = 'Juan';
    const lastName = 'Consuegra';
    const email = 'juan.consuegra@example.com';
    const mobile = '3001234567';

    await actor.attemptsTo(
      OpenDemoQaHome.at(),
      NavigateToPracticeForm.fromHome(),
      FillPracticeForm.with({
        firstName,
        lastName,
        email,
        mobile,
        gender: 'Male',
      }),
      Ensure.that(PracticeFormModal.title(), includes('Thanks for submitting the form')),
      Ensure.that(PracticeFormModal.bodyText(), includes(`${firstName} ${lastName}`)),
      Ensure.that(PracticeFormModal.bodyText(), includes(email)),
    );
  });
});
