import request from 'supertest';

import app from '../../app';

describe('Example', () => {
  beforeEach(() => {});

  it('should be return an error when do not pass a user param', async () => {
    const response = await request(app).get('/example');

    expect(response.status).toBe(400);
  });

  it('should be able to list profile from github api', async () => {
    const response = await request(app).get('/example?user=zrninlive');

    const { login } = response.body;
    expect(response.status).toBe(200);
    expect(login).toBe('zrninlive');
  });
});
