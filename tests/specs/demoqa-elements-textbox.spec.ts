import { describe, it } from '@serenity-js/playwright-test';
import { Ensure, includes } from '@serenity-js/assertions';

import { OpenDemoQaHome } from '../tasks/OpenDemoQaHome';
import { NavigateToTextBox } from '../tasks/NavigateToTextBox';
import { FillTextBoxForm } from '../tasks/FillTextBoxForm';
import { TextBoxOutput } from '../questions/TextBoxOutput';

describe('Case 3 - DemoQA - Elements - Text Box', () => {

  it('fills the form and shows the submitted values', async ({ actor }) => {

    const fullName = 'Juan Consuegra';
    const email    = 'juan.consuegra@example.com';

    await actor.attemptsTo(
      OpenDemoQaHome.at(),
      NavigateToTextBox.fromHome(),

      FillTextBoxForm.with({
        fullName,
        email,
        currentAddress: 'Calle 123',
        permanentAddress: 'Bogotá, Colombia',
      }),

      Ensure.that(TextBoxOutput.nameLine(),  includes(fullName)),
      Ensure.that(TextBoxOutput.emailLine(), includes(email)),
    );
  });
});