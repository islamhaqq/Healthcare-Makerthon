import { HealthcareMakerthonPage } from './app.po';

describe('healthcare-makerthon App', function() {
  let page: HealthcareMakerthonPage;

  beforeEach(() => {
    page = new HealthcareMakerthonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
