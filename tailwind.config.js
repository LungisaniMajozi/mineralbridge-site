/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Real Metallic Gold
        "gold-50": "#FFFBEB",
        "gold-100": "#FEF3C7",
        "gold-200": "#FDE68A",
        "gold-300": "#FCD34D",
        "gold-400": "#FBBF24",
        "gold-500": "#F59E0B",
        "gold-600": "#D97706",
        "gold-700": "#B45309",
        "gold-800": "#92400E",
        "gold-900": "#78350F",
        "gold-metallic": "#D4AF37",
        "gold-shine": "#FFF9E6",

        // Real Metallic Silver
        "silver-50": "#F8FAFC",
        "silver-100": "#F1F5F9",
        "silver-200": "#E2E8F0",
        "silver-300": "#CBD5E1",
        "silver-400": "#94A3B8",
        "silver-500": "#64748B",
        "silver-600": "#475569",
        "silver-700": "#334155",
        "silver-800": "#1E293B",
        "silver-900": "#0F172A",
        "silver-metallic": "#C0C0C0",
        "silver-shine": "#FFFFFF",

        // Premium Dark Base
        "premium-dark": "#0A0A0F",
        "premium-darker": "#050507",
      },
      backgroundImage: {
        // Realistic Metallic Gradients
        "gold-metallic":
          "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        "gold-metallic-dark":
          "linear-gradient(135deg, #B45309, #FCD34D, #92400E, #FBBF24, #78350F)",
        "silver-metallic":
          "linear-gradient(135deg, #E8E8E8, #FFFFFF, #C0C0C0, #F5F5F5, #A8A8A8)",
        "silver-metallic-dark":
          "linear-gradient(135deg, #334155, #E2E8F0, #1E293B, #CBD5E1, #0F172A)",
        "gold-shine":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
        "silver-shine":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
        "metallic-brush":
          "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)",
      },
      animation: {
        shine: "shine 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-12deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(200%) skewX(-12deg)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        metallic:
          "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)",
        "gold-glow":
          "0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.3)",
        "silver-glow":
          "0 0 30px rgba(148, 163, 184, 0.5), 0 0 60px rgba(148, 163, 184, 0.3)",
        "inner-metallic":
          "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
