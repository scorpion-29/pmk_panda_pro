import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {         
          primary: "#fcf4f2",                    
          secondary: "#f4e3ff",                    
          accent: "c264ff",
          neutral: "#e0b0ff",                    
          "base-100": "#fcf4f2",                    
          info: "#0000ff",                    
          success: "#fb0189",                    
          warning: "#00ff00",                    
          error: "#ff0000",
          body: {
            "background-color": "#e3e6e6",
          },          
        },
      },
    ],
  },
};
export default config;
