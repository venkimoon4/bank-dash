import { keepTheme } from "keep-react/keepTheme";

export default keepTheme({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
