import { AngularCaralibroPage } from './app.po';

describe('angular-caralibro App', () => {
  let page: AngularCaralibroPage;

  beforeEach(() => {
    page = new AngularCaralibroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
