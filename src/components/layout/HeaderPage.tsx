import React from "react";
type Props = {
  title: string;
  description: string;
  end?: React.ReactNode;
  start?: React.ReactNode;
};
const HeaderPage: React.FC<Props> = ({ title, description, end, start }) => {
  return (
    <div className="border-b border-muted-foreground pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <div className="flex items-center gap-5">
            {start}
            <div className="">
              <h1
                id="message-heading"
                className="text-base font-semibold leading-6 text-foreground"
              >
                {title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1 max-w-xl">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:shrink-0 sm:justify-start">
          {end}
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
