interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ icon = <></>, ...props }: IProps) {
  return (
    <div className="rounded-[4px] justify-between flex items-center border-[1.5px] border-darkGray h-[43px] bg-transparent px-3">
      <input
        className="border-none bg-transparent focus:outline-none w-full focus:border-none focus-visible:border-none  text-lightGray text-[16px] leading-[20px] font-normal"
        {...props}
      />
      {icon}
    </div>
  );
}
