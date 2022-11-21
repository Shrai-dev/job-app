import { HTMLProps } from "react";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export const PageLink = ({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) => {

  if (disabled) {
    return <span className='w-10 h-10 cursor-default flex items-center justify-center mx-1'>{children}</span>;
  }

  if (active) {
    className += ' font-bold text-sky-700 border-b-2 border-sky-700'
  }

  return (
    <a
      className={className}
      {...otherProps}
    >
      {children}
    </a>
  );
}
