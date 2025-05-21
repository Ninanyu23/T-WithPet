// jest.setup.ts
import {server} from './src/mocks/server';

// 모든 테스트 전에 MSW 서버 실행
beforeAll(() => server.listen());

// 각 테스트 후 핸들러 리셋
afterEach(() => server.resetHandlers());

// 모든 테스트 완료 후 서버 종료
afterAll(() => server.close());
