'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models/index');
const mockRequest = supertest(server);

beforeAll(async () => {
    await sequelize.sync();
})

afterAll(async () => {
    await sequelize.drop({});
    await sequelize.close();
});

describe('Server Tests', () => {
    describe('Error Handler Tests', () => {
        test('404 on a bad route', async () => {
            let response = await mockRequest.get('/foo');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async () => {
            let response = await mockRequest.put('/person');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
        test('404 on a bad method', async () => {
            let response = await mockRequest.put('/food');
            expect(response.status).toEqual(404);
            expect(response.text).toEqual('Not Found');
        });
    });
});
