module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!**/.next/**",
        "!**/coverage/**",
        "!*.config.js",
    ],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
        // "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        // Handle CSS imports (without CSS modules)
        // "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
        // "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
}
