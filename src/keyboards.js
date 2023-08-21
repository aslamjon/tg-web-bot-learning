const contactOptions = {
  parse_mode: "Markdown",
  reply_markup: {
    one_time_keyboard: true,
    resize_keyboard: true,
    keyboard: [
      [
        {
          text: "My phone number",
          request_contact: true,
        },
      ],
    ],
  },
};

const locationOption = {
  parse_mode: "Markdown",
  reply_markup: {
    one_time_keyboard: true,
    resize_keyboard: true,
    keyboard: [
      [
        {
          text: "My location",
          request_location: true,
        },
      ],
    ],
  },
};

const startOpitons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: "Start", web_app: {url: "https://5cff-185-139-137-56.ngrok-free.app"} }]],
  }),
};

const homeOptions = {
  reply_markup: JSON.stringify({
    keyboard: [[{ text: "📊 Statistics" }, { text: "📈 Rating" }]],
    resize_keyboard: true,
  }),
};

const removeAllOptions = {
  reply_markup: {
    remove_keyboard: true,
  },
};

module.exports = { contactOptions, locationOption, homeOptions, removeAllOptions, startOpitons };
