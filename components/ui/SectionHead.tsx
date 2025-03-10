export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      {/* <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div> */}
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mt-6 text-purple">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white mt-4">
        {description}
      </p>
    </>
  );
}
