const esModules = [ // Copy from here 👈
    "react-markdown",
    "vfile",
    "unist-.+",
    "unified",
    "bail",
    "is-plain-obj",
    "trough",
    "remark-.+",
    "mdast-util-.+",
    "micromark",
    "parse-entities",
    "character-entities",
    "property-information",
    "comma-separated-tokens",
    "hast-util-whitespace",
    "remark-.+",
    "space-separated-tokens",
    "decode-named-character-reference",
    "ccount",
    "escape-string-regexp",
    "markdown-table",
    "trim-lines",
].join("|"); // To here 👈

module.exports = {
    moduleNameMapper: {
        '^@root/(.*)$': '<rootDir>/src/$1',
        "react-markdown": "<rootDir>/node_modules/react-markdown/index.js",
        // Add other mappings as needed
    },
    testMatch: [
        '<rootDir>/src/**/*.(test|spec).{js,jsx,ts,tsx}',
    ],
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
        [`(${esModules}).+\\.js$`]: '<rootDir>/config/jest/babelTransform.js', // Add this line 👈
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
            '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: [
        //   Update from this 👈
        //  "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$", 
            `[/\\\\]node_modules[/\\\\](?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$`, // To this 👈
            '^.+\\.module\\.(css|sass|scss)$',
          ],
};