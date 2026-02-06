import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { ElementsTextBox } from '../ui/ElementsTextBox.page';

export const TextBoxOutput = {
  nameLine: () =>
    Question.about('output name line', actor =>
      Text.of(ElementsTextBox.outputName()).answeredBy(actor)
    ),
  emailLine: () =>
    Question.about('output email line', actor =>
      Text.of(ElementsTextBox.outputEmail()).answeredBy(actor)
    ),
};
