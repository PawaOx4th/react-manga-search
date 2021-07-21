module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   scales: {
    //     dark: "#7339AB",
    //     seccandary: "#625AD8",
    //     primary: "#1F9CE4",
    //     success: "#88F4FF",
    //   },
    // },
    extend: {
      colors: {
        scales: {
          dark: "#7339AB",
          seccandary: "#625AD8",
          primary: "#1F9CE4",
          success: "#88F4FF",
        },
      },
      height: {
        "profile-md": "40vmin",
      },
    },
  },
  variants: {
    extend: {
      height: ["hover", "focus"],
    },
  },
  plugins: [],
};
