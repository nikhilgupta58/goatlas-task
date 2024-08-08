import { AuthGateTypes } from "../../utils/constants";
import { AUTH_CONFIG } from "../../utils/interfaces";
import { authConfig } from "./utils";

export default function AuthGate({ type }: { type: AuthGateTypes }) {
  const config: AUTH_CONFIG = authConfig[type];
  return <></>;
}
