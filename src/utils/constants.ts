export enum AuthGateTypes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export enum FieldTypes {
  TEXT = "text",
  PASSWORD = "password",
}

export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const POSTS_ROUTE = "/posts";
export const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const regexUsername = /^.{1,}$/;
