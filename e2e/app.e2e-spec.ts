import { StudyAngularPage } from './app.po';

describe('study-angular App', () => {
  let page: StudyAngularPage;

  beforeEach(() => {
    page = new StudyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
