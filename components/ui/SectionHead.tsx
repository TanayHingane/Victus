export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mt-6 text-purple">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white mt-4">
        {description}
      </p>
    </>
  );
}
