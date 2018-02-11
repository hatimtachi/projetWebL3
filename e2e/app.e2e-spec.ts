import { JsTd4Page } from './app.po';

describe('js-td4 App', function() {
  let page: JsTd4Page;

  beforeEach(() => {
    page = new JsTd4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
