import * as api from '../api';

it('Invokes stockfish with default command', async() => {
    const result = await api.handler();
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
});
