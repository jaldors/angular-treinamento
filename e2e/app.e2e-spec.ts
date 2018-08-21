import { TreinamentoAngularPage } from './app.po';

describe('treinamento-angular App', function() {
  let page: TreinamentoAngularPage;

  beforeEach(() => {
    page = new TreinamentoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
