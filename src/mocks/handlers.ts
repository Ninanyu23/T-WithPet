// src/mocks/handlers.ts
import {rest} from 'msw';
import {Dog} from '../service/api/dogs';

export const handlers = [
  rest.get('https://api.example.com/dogs', (req, res, ctx) => {
    const mockDogs: Dog[] = [
      {
        id: '1',
        name: '해피',
        age: '2세',
        breed: '골든 리트리버',
        gender: '암컷',
        imageUrl: 'https://example.com/dog1.jpg',
      },
      {
        id: '2',
        name: '조이',
        age: '1세',
        breed: '진도 믹스',
        gender: '수컷',
        imageUrl: 'https://example.com/dog2.jpg',
      },
    ];
    return res(ctx.status(200), ctx.json(mockDogs));
  }),
];
