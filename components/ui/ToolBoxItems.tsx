import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export const ToolBoxItems = ({
  toolbox,
  className,
  itemWrapperClassName,
}: {
  toolbox: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 pr-6 gap-6",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {toolbox.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={tool.icon} />
                <span>{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="size-8" />;
};
