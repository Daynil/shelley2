import { Shelley2Page } from './app.po';

describe('shelley2 App', function() {
  let page: Shelley2Page;

  beforeEach(() => {
    page = new Shelley2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
