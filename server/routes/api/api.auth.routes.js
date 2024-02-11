const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const generateTokens = require("../../utils/authUtils");
const configJWT = require("../../middleware/configJWT");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

router.post("/sign-in", async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: "Такого пользователя нет или пароль неверный!" });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: "Такого пользователя нет или пароль неверный!" });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: "success", user });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/sign-up", async (req, res) => {
  let user;
  try {
    const { name, email, password, rpassword, img, role } = req.body;
    // console.log(name, email, password, rpassword, role, 666);

    if (!isValidEmail(email)) {
      res.json({ type: "blabla", message: "Некорректный формат почты!" });
      return;
    }

    if (password !== rpassword) {
      res.status(400).json({ message: "Пароли не совпадают!" });
      return;
    }

    user = await User.findOne({ where: { name } });
    if (user) {
      res.status(400).json({ message: "Такой пользователь уже есть!" });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash, img, role });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, img: user.img },
    });

    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.status(200).json({ message: "success", user });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/check", async (req, res) => {
  console.log(res.locals.user);
  if (res.locals.user) {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    res.json({ user });
    return;
  }
  res.status(500).json({});
});

router.get("/logout", (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.json({ message: "success" });
});

module.exports = router;
