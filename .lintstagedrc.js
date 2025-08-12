module.exports = {
    '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'pnpm run build'],
    '*.{json,md,yml,yaml}': ['prettier --write'],
};
