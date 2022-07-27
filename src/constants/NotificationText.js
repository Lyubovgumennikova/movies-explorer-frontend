const NOTIFICATION_TEXT_ERROR = {
  NO_MOVIES_TEXT: "Ничего не найденно",
  MOVIES_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  // BASE_ERROR:  "Поменяйте запрос и опробуйте ещё раз.",
  SAVED_IS_EMPTY: "В избранном пока ничего нет",
  SAVE_MOVIE_ERROR_TEXTS: "При добавлении фильма в избранное возникла ошибка: ",
  DELETE_MOVIE_ERROR_TEXT:
    "При удалении фильма из избранного возникла ошибка: ",
  INTERNAL_SERVER_ERROR: "Внутренняя ошибка сервера",

  CONFLICT_EMAIL: "Пользователь с таким email уже существует.",
  REGISTRATION_ERRORS_TEXTS:
    "При регистрации пользователя произошла ошибка. Не корректные данные.",
  REGISTRATION_SUCCESS_TEXT: "Регистрация прошло успешно",

  LOGIN_ERRORS_TEXTS: "Вы ввели неправильный логин или пароль.",
  LOGIN_UNAUTHORIZED: "Произошла ошибка. Hекорректные данные.",
  AUTH_SUCCESS_TEXT: "Аутентификация прошла успешно",

  PROFILE_ERRORS_TEXTS: "При обновлении профиля произошла ошибка.",
  PROFILE_SUCCESS_TEXT: "Обновление профиля прошло успешно",
};

export default NOTIFICATION_TEXT_ERROR;
