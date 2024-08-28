type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className = "w-[100px] h-[100px]" }: SkeletonProps) => {
  return (
    <div className={`${className} *:w-full *:h-full overflow-hidden`}>
      <div
        className="bg-neutral-400 overflow-hidden rounded-lg relative 
      before:absolute before:w-[300px] before:z-10  before:-translate-y-1/3 
      before:h-[500px] before:rotate-6 before:animate-skeleton  before:bg-gradient-to-r 
      before:from-neutral-200/15 before:via-50% before:via-neutral-200/40 before:to-neutral-200/15 "
      ></div>
    </div>
  );
};

export default Skeleton;
