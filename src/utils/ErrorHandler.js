import NOTIFICATION_TEXT_ERROR from "../constants/NotificationText";

export const errorHandler = () => {
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [registrationErrorText, setRegistrationErrorText] = useState('');

  if (regResStatus) {
    switch (regResStatus) {
      case 409:
        setIsRegistrationError(true);
        setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.CONFLICT_EMAIL);
        break;
      case 400:
        setIsRegistrationError(true);
        setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.REGISTRATION_ERRORS_TEXTS);
        break;
      case 200:
        setIsRegistrationError(false);
        setRegistrationErrorText('');
        resetForm();
        break;
      default:
        setIsRegistrationError(true);
        setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.REGISTRATION_ERRORS_TEXTS);
        break;
    };
  };
};
