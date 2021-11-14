import type React from 'react';

import { Loading } from '@components/generic/Loading';

type DefaultDivProps = JSX.IntrinsicElements['div'];

interface CardProps extends DefaultDivProps {
  title?: string;
  description?: string | JSX.Element;
  buttons?: JSX.Element;
  lgPlaceholder?: JSX.Element;
  loading?: boolean;
}

export const Card = ({
  title,
  description,
  buttons,
  children,
  className,
  lgPlaceholder,
  loading,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={`relative flex flex-col flex-auto dark:text-white border-y md:border shadow-md select-none dark:bg-primaryDark border-gray-300 dark:border-transparent md:rounded-md  ${className}`}
      {...props}
    >
      {loading && <Loading />}
      {(title || description) && (
        <div className="flex items-center justify-between mx-10 mt-10">
          <div className="flex flex-col">
            {title && (
              <div className="mr-4 text-2xl font-semibold leading-7 tracking-tight text-black md:text-3xl dark:text-white">
                {title}
              </div>
            )}

            {description && (
              <div className="font-medium text-gray-400">{description}</div>
            )}
          </div>
          {buttons}
        </div>
      )}
      <div className="flex">
        <div className={`${lgPlaceholder ? 'w-full xl:w-2/3' : 'w-full'}`}>
          {children}
        </div>
        {lgPlaceholder && (
          <div className="hidden w-1/3 xl:flex">{lgPlaceholder}</div>
        )}
      </div>
    </div>
  );
};
