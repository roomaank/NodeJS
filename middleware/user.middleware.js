const errorCodes = require("../constant/errorCodes.enum");
const errorMessages = require("../error/error.messages");

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      const userId = +req.params.userId;

      if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
        throw new Error(errorMessages.NOT_VALID.en);
      }

      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },

  isUserValid: (req, res, next) => {
    try {
      const { name, password, email, preferLanguage = "en" } = req.body;

      if (!name || !password) {
        throw new Error(errorMessages.EMPTY_FIELD[preferLanguage]);
      }

      if (password.length < 6) {
        throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferLanguage]);
      }

      if (!email.includes("@")) {
        throw new Error(errorMessages.NOT_VALID_EMAIL[preferLanguage]);
      }

      if (name.length < 2) {
        throw new Error(errorMessages.NOT_VALID_NAME[preferLanguage]);
      }

      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },
};
