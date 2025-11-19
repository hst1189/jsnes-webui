const config = {
  ROMS: {
    owlia: {
      name: "The Legends of Owlia",
      description: (
        <span>
        </span>
      ),
      url: "https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/owlia.nes",
    },
    nomolos: {
      name: "Nomolos: Storming the Catsle",
      description: (
        <span>
        </span>
      ),
      url: "https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/nomolos.nes",
    },
    croom: {
      name: "Concentration Room",
      description: (
        <span>
        </span>
      ),
      url: "https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/croom/croom.nes",
    },
    lj65: {
      name: "LJ65",
      description: (
        <span>
        </span>
      ),
      url: "https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/lj65/lj65.nes",
    },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI,
};

export default config;
