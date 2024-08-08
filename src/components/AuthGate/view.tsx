import { useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Text from "../../shared/Text";
import { isUserAtom } from "../../storeAtom";
import { AuthGateTypes, FieldTypes } from "../../utils/constants";
import { AUTH_CONFIG } from "../../utils/interfaces";
import { authConfig } from "./utils";

export default function AuthGate({
  type,
  onSubmit = () => {},
  setType = null,
}: {
  type: AuthGateTypes;
  onSubmit?: Function;
  setType?: Function | null;
}) {
  const config: AUTH_CONFIG = authConfig[type];
  const navigate = useNavigate();
  const formIds = useMemo(
    () => config.form.flatMap((row) => row.id),
    [config.form]
  );
  const [val, setVal] = useState<Record<string, string>>({});

  const isDisabled = useMemo(() => {
    return !formIds.every((id) => val[id] && val[id].length > 0);
  }, [formIds, val]);

  const handleChange = (id: string, value: string) => {
    setVal((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  useEffect(() => {
    const initialValues = formIds.reduce(
      (acc, id) => ({ ...acc, [id]: "" }),
      {}
    );
    setVal(initialValues);
  }, [type, formIds]);

  const [show, setShow] = useState<boolean>(false);
  const setIsUser = useSetAtom(isUserAtom);
  return (
    <div className="gradient-border max-w-[90vw] w-[463px] px-6 justify-center items-center pt-10 pb-8 flex flex-col bg-dark2 gap-12">
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
          const EyeIcon = !show ? LuEye : LuEyeOff;
          return (
            <div key={`auth-form-${id}`} className="flex flex-col gap-2 w-full">
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
              <div className="flex flex-col gap-[2px] w-full">
                <Input
                  value={val[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  type={show ? FieldTypes.TEXT : field.type}
                  placeholder={field?.placeholder || ""}
                  icon={
                    field.type === FieldTypes.PASSWORD ? (
                      <EyeIcon
                        onClick={() => setShow((e) => !e)}
                        size={20}
                        className="text-gray2"
                      />
                    ) : (
                      <></>
                    )
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => {
              setIsUser(true);
              onSubmit();
            }}
            isDisabled={isDisabled}
            className="h-[43px] rounded-[4px] bg-blueAccent text-[16px] leading-[19px] font-[500] text-white"
          >
            {config.actionCta}
          </Button>
          <div
            className="cursor-pointer text-[14px] font-[500] text-gray2 w-fit"
            dangerouslySetInnerHTML={{ __html: config.footerText }}
            onClick={() => {
              if (setType)
                setType(
                  type === AuthGateTypes.LOGIN
                    ? AuthGateTypes.REGISTER
                    : AuthGateTypes.LOGIN
                );
              else navigate(config.footerNavigate);
            }}
          />
        </div>
      </div>
    </div>
  );
}
