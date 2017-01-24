import { IndianaJonesPage } from './app.po';

describe('indiana-jones App', function() {
  let page: IndianaJonesPage;

  beforeEach(() => {
    page = new IndianaJonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
