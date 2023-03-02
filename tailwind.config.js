/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"], //this is used for adding the dynamic classes in the Alert component
  theme: {
    extend: {},
  },
  plugins: [],
};
