import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { PracticeForm } from '../ui/PracticeForm.page';

export const PracticeFormModal = {
  title: () =>
    Question.about('practice form submission title', actor =>
      Text.of(PracticeForm.modalTitle()).answeredBy(actor)
    ),

  bodyText: () =>
    Question.about('practice form submission body text', actor =>
      Text.of(PracticeForm.modalBody()).answeredBy(actor)
    ),
};
