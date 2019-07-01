import { DemoLecturerShareModule } from './demo-lecturer-share.module';

describe('DemoLecturerShareModule', () => {
  let demoLecturerShareModule: DemoLecturerShareModule;

  beforeEach(() => {
    demoLecturerShareModule = new DemoLecturerShareModule();
  });

  it('should create an instance', () => {
    expect(demoLecturerShareModule).toBeTruthy();
  });
});
