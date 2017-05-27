import { AuxRouteAppPage } from './app.po';

describe('aux-route-app App', function() {
  let page: AuxRouteAppPage;

  beforeEach(() => {
    page = new AuxRouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
