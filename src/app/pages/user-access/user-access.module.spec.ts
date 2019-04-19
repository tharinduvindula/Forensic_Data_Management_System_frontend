import { UserAccessModule } from './user-access.module';

describe('UserAccessModule', () => {
  let userAccessModule: UserAccessModule;

  beforeEach(() => {
    userAccessModule = new UserAccessModule();
  });

  it('should create an instance', () => {
    expect(userAccessModule).toBeTruthy();
  });
});
