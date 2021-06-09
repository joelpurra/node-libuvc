const tasks = (arr) => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks(["npm run --silent test", "npm run --silent lint"]),
  },
};
