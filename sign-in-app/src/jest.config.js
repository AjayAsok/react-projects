module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect"
    ],

    // Test spec file resolution pattern
    // Matches parent folder `testScripts` and filename
    // should contain `test` or `spec`.
    testRegex: "(/testScripts/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleNameMapper: {
        '\\.(css|less)$': '/testScripts/_cssMocker.js',
    },

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};