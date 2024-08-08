import {
  AuthGateTypes,
  FieldTypes,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "./constants";

export interface ROUTE_DATA {
  path: string;
  element: React.ReactNode;
  children?: ROUTE_DATA[];
}
export type AuthConfig = {
  [AuthGateTypes.LOGIN]: AUTH_CONFIG;
  [AuthGateTypes.REGISTER]: AUTH_CONFIG;
};
export interface FORM_FIELD {
  label: string;
  id: string;
  type: FieldTypes;
  placeholder?: string;
  forgotPassword?: boolean;
}

export interface AUTH_CONFIG {
  salutation: string;
  title: string;
  form: FORM_FIELD[];
  actionCta: string;
  footerText: string;
  footerNavigate: typeof LOGIN_ROUTE | typeof REGISTER_ROUTE;
}
