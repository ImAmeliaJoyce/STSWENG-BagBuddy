const controller = {
  getHome: async function (req, res) {
    res.render("insidebag", {
      maincss: "/static/css/main.css",
      css1: "/static/css/home.css",
      partialcss: "/static/css/bag.css",
      /*Sample list for testing bag view*/
      bags: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
        "xy",
        "cy",
        "jojo",
        "Alan Johnson",
        "Charles Jolley",
        "xy",
        "cy",
        "jojo",
        "Charles Jolley",
        "xy",
        "cy",
        "jojo",
      ],
      notifs: [
        { bagtype: "travel", date: "Feb 20" },
        { bagtype: "personal", date: "Feb 21" },
        // "Alan Johnson",
        // "Charles Jolley",
        // "xy",
        // "cy",
        // "jojo",
        // "Alan Johnson",
        // "Charles Jolley",
        // "xy",
        // "cy",
        // "jojo",
      ],
      items: [
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
        { name: "Pencil", weight: "5kg" },
      ],
    });
  },
  getOnboarding: async function (req, res) {
    res.render("onboarding", {
      maincss: "/static/css/main.css",
      css1: "/static/css/onboarding.css",
      isDisplayBotSection: false,
      mainjs: "/static/js/onboarding.js"
    });
  },
  getLogin: async function (req, res) {
    res.render("login", {
      maincss: "/static/css/main.css",
      css1: "/static/css/login-register.css",
      isDisplayBotSection: false
    })
  },
  getSignup: async function (req, res) {
    res.render("signup", {
      maincss: "/static/css/main.css",
      css1: "/static/css/login-register.css",
      isDisplayBotSection: false
    })
  }
};

module.exports = controller;
