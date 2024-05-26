import { Register, USER_SUCCESS, USER_FAILURE , Login  , AuthMe} from './src/actions/auth';
import { USER_REGISTER , USER_LOGIN  , AUT_ME} from './src/services/api';

// Mock localStorage
// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

// Mock global.localStorage
global.localStorage = localStorageMock;


// Mock global.localStorage
global.localStorage = localStorageMock;



// Mock USER_REGISTER function
jest.mock('./src/services/api', () => ({
  USER_REGISTER: jest.fn(),
  USER_LOGIN: jest.fn(),
  AUT_ME: jest.fn(),
}));

describe('Thunk Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  test('Register thunk success', async () => {
    const dispatch = jest.fn(); // Mock dispatch function
    const userData = { username: 'testUser', email: 'test@test.com', password: 'testPassword' };
    const mockData = { success: true, user: { id: 1, username: 'testUser' }, token: 'testToken' };

    // Mock USER_REGISTER to resolve with mock data
    USER_REGISTER.mockResolvedValueOnce({ data: mockData });

    // Call Register thunk function
    await Register(userData.username, userData.email, userData.password)(dispatch);

    // Ensure localStorage.setItem is called with correct parameters
    expect(global.localStorage.setItem).toHaveBeenCalledWith('__token', 'testToken');
    
    // Ensure dispatch is called with correct parameters
    expect(dispatch).toHaveBeenCalledWith({
      type: USER_SUCCESS,
      user: mockData.user,
      token: 'testToken',
    });
  });

  // Add more test cases if needed
});

//  LOGIN TESTreq.accepts(types);
describe('Thunk Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  test('Login thunk success', async () => {
    const dispatch = jest.fn(); // Mock dispatch function
    const userData = { email: 'test@test.com', password: 'testPassword' };
    const LOGIN_DATA = { success: true, user: { id: 1, username: 'testUser' }, token: 'testToken' };

    // Mock USER_REGISTER to resolve with mock data
    USER_LOGIN.mockResolvedValueOnce({ data: LOGIN_DATA });

    // Call Register thunk function
    await Login(userData.username, userData.email, userData.password)(dispatch);

    // Ensure localStorage.setItem is called with correct parameters
    expect(global.localStorage.setItem).toHaveBeenCalledWith('__token', 'testToken');
    
    // Ensure dispatch is called with correct parameters
    expect(dispatch).toHaveBeenCalledWith({
      type: USER_SUCCESS,
      user: LOGIN_DATA.user,
      token: 'testToken',
    });
  });

  // Add more test cases if needed
});

