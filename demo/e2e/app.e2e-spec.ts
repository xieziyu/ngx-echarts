import { AngularEchartsPage } from './app.po';

describe('angular-echarts App', () => {
  let page: AngularEchartsPage;

  beforeEach(() => {
    page = new AngularEchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
