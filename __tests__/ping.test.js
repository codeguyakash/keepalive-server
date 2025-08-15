// ping.test.js
import { jest } from '@jest/globals';
import { ping } from '../index.js';

// Mock console methods
const originalConsoleLog = console.log;
const originalConsoleError = console.error;

describe('ping()', () => {
    let consoleLogSpy;
    let consoleErrorSpy;

    beforeEach(() => {
        jest.useFakeTimers(); // control timers
        jest.clearAllMocks();

        // Spy on console methods
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.useRealTimers();
        consoleLogSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it('should throw if intervalMs is not a number', () => {
        expect(() => ping(null, 'http://example.com')).toThrow();
        expect(() => ping('abc', 'http://example.com')).toThrow();
    });

    it('should throw if url is not a string', () => {
        expect(() => ping(1000, null)).toThrow();
        expect(() => ping(1000, 123)).toThrow();
    });

    it('should start pinging when called with valid parameters', () => {
        // This test verifies the function doesn't throw with valid parameters
        expect(() => ping(1000, 'http://example.com')).not.toThrow();
    });

    it('should accept optional timeout parameter', () => {
        expect(() => ping(1000, 'http://example.com', 5000)).not.toThrow();
    });
});
