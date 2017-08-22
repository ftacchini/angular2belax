import { AngularPeoplePage } from './app.po';

describe('angular-people App', () => {
  let page: AngularPeoplePage;

  beforeEach(() => {
    page = new AngularPeoplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
