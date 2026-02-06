import { By, PageElement, PageElements } from '@serenity-js/web';

export class DemoQaHomePage {
  static cardTitles = () =>
    PageElements.located(By.css('.card-body h5'))
      .describedAs('home page card titles');

  static cardNamed = (name: string) =>
    PageElement.located(By.cssContainingText('.card-body h5', name))
      .describedAs(`"${ name }" card`);
}
