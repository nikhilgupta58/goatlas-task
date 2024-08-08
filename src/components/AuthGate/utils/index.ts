import {
  AuthGateTypes,
  FieldTypes,
  LOGIN_ROUTE,
  regexEmail,
  regexPassword,
  regexUsername,
  REGISTER_ROUTE,
} from "../../../utils/constants";
import { AUTH_CONFIG, AuthConfig, FORM_FIELD } from "../../../utils/interfaces";

export const FORM_ID = {
  EMAIL: "email",
  USERNAME: "username",
  PASSWORD: "password",
};

const emailField: FORM_FIELD = {
  label: "Email or Username",
  id: FORM_ID.EMAIL,
  validator: regexEmail.test,
  type: FieldTypes.TEXT,
};

const usernameField: FORM_FIELD = {
  label: "Username",
  id: FORM_ID.USERNAME,
  validator: regexUsername.test,
  type: FieldTypes.TEXT,
};

const passwordField: FORM_FIELD = {
  label: "Password",
  id: FORM_ID.PASSWORD,
  validator: regexPassword.test,
  type: FieldTypes.PASSWORD,
};

const login_config: AUTH_CONFIG = {
  salutation: "WELCOME BACK",
  title: "Log into your account",
  form: [
    {
      ...emailField,
      placeholder: "Enter your email or username",
    },
    {
      ...passwordField,
      placeholder: "Enter your password",
      forgotPassword: true,
    },
  ],
  actionCta: "Login now",
  footerText: `Not registered yet? <span class="text-lightGray">Register →</span>`,
  footerNavigate: REGISTER_ROUTE,
};

const register_config: AUTH_CONFIG = {
  salutation: "SIGN UP",
  title: "Create an account to continue",
  form: [
    {
      ...emailField,
      placeholder: "Enter your email or username",
    },
    { ...usernameField, placeholder: "Choose a preferred username" },
    {
      ...passwordField,
      placeholder: "Choose a strong password",
    },
  ],
  actionCta: "Continue",
  footerText: `Already have an account? <span class="text-lightGray">Login →</span>`,
  footerNavigate: LOGIN_ROUTE,
};

export const authConfig: AuthConfig = {
  [AuthGateTypes.LOGIN]: login_config,
  [AuthGateTypes.REGISTER]: register_config,
};
