module.exports = {
  collectCoverage: true,
  rootDir: "./",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
