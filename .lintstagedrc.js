module.exports = {
    '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'npm run build'],
    '*.{json,md,yml,yaml}': ['prettier --write'],
};
