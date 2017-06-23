import { DefaultThemePage } from './app.po';

describe('default-theme App', () => {
  let page: DefaultThemePage;

  beforeEach(() => {
    page = new DefaultThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
