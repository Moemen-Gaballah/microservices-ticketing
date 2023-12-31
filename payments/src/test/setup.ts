import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import {app} from "../app";
import request from "supertest";
import jwt from 'jsonwebtoken';

declare global {
    var signin: (id?: string) => string[];
}

jest.mock('../nats-wrapper');
process.env.STRIPE_KEY = 'sk_test_51NcqlOCA7KChwv9Lfk1tqt1N5D93hYo2im066hfBgNlFX9cTIZ47ngUle66f22m7o1FVItZQ2Xf0fd7O4ijGvSfL00toxMa0Gn';

let mongo: any
beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});

global.signin = (id?: string) => {
    // Build  JWT payload.  { id, email }
    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    // Create the JWT!
    const token = jwt.sign(payload, process.env.JWT_KEY);

    // Build session Object. { jwt: MY_JWT }
    const session = {jwt: token};

    // Turn that session into JSON
    const sessionJson = JSON.stringify(session);

    // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJson).toString('base64');

    // return a string that's the cookie with the encoded data
    return [`session=${base64}`];
};