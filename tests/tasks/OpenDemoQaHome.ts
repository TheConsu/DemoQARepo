import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const OpenDemoQaHome = {
  at: () =>
    Task.where(`#actor opens DemoQA home page`,
      Navigate.to('https://demoqa.com/'),
    ),

  alerts: () =>
    Task.where(`#actor opens DemoQA Alerts page`,
      Navigate.to('https://demoqa.com/alerts'),
    ),

  browserWindows: () =>
    Task.where(`#actor opens DemoQA Browser Windows page`,
      Navigate.to('https://demoqa.com/browser-windows'),
    ),
  
    accordian: () => 
      Task.where(`#actor opens DemoQA Accordian page`, 
        Navigate.to('https://demoqa.com/accordian'), 
    ),
};
