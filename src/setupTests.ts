import "@testing-library/jest-dom";

// vitest.setup.js
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/Server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
