import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Text from "../../shared/Text";
import { AuthGateTypes } from "../../utils/constants";
import { AUTH_CONFIG } from "../../utils/interfaces";
import { authConfig } from "./utils";

export default function AuthGate({ type }: { type: AuthGateTypes }) {
  const config: AUTH_CONFIG = authConfig[type];
  const navigate = useNavigate();
  return (
    <div className="gradient-border w-[463px] px-6 justify-center items-center pt-10 pb-8 flex flex-col bg-dark2 gap-12">
      <div className="flex flex-col gap-2">
        <Text
          stylearr={[14, 17, 500]}
          className="tracking-[3%] text-gray1 text-center"
        >
          {config.salutation}
        </Text>
        <Text stylearr={[18, 22, 600]} className="text-white text-center">
          {config.title}
        </Text>
      </div>
      <div className="w-full flex flex-col gap-5 z-50">
        {config.form.map((field, id) => {
          return (
            <div key={`auth-form-${id}`} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Text stylearr={[14, 17, 500]} className="text-lightGray">
                  {field.label}
                </Text>
                {field.forgotPassword && (
                  <Text
                    stylearr={[12, 14, 500]}
                    className="text-lightGray cursor-pointer"
                  >
                    Forgot password?
                  </Text>
                )}
              </div>
              <Input
                className="rounded-[4px] border-[1.5px] border-darkGray h-[43px] bg-transparent px-3 text-lightGray text-[16px] leading-[20px] font-normal focus:outline-none"
                type={field.type}
                placeholder={field?.placeholder || ""}
              />
            </div>
          );
        })}
        <div className="flex flex-col gap-3">
          <Button className="h-[43px] rounded-[4px] bg-blueAccent text-[16px] leading-[19px] font-[500] text-white">
            {config.actionCta}
          </Button>
          <div
            className="cursor-pointer text-[14px] font-[500] text-gray2 w-fit"
            dangerouslySetInnerHTML={{ __html: config.footerText }}
            onClick={() => {
              navigate(config.footerNavigate);
            }}
          />
        </div>
      </div>
    </div>
  );
}
