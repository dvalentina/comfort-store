export const BASE_URL = process.env.STORYBOOK
  ? process.env.STORYBOOK_BASE_URL
  : process.env.NEXT_PUBLIC_BASE_URL;

export const API_URL = `${BASE_URL}/api`;

export const DATABASE_URL = `${API_URL}/db.json`;
