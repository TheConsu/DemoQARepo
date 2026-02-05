import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const OpenDemoQaHome = {
  at: () =>
    Task.where(`#actor opens DemoQA home page`,
      Navigate.to('https://demoqa.com/'),
    ),
};
