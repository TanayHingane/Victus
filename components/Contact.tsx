export const ContactSection = () => {
  return (
    <div className="py-16 px-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-purple px-20 text-gray-900 py-8 rounded-3xl text-center md:text-left relative overflow-hidden z-50">
          <div className="absolute inset-0 opacity-5 -z-10"></div>
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div>
              <h2 className="text-2xl font-serif md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href="mailto:vedantbhorofficial@gmail.com?subject=Hello%20I'm%20____%20from%20____%20company&body=I%20want%20to%20start%20a%20new%20project%20about%20____%20and%20time%20duration%20is%20___%20days."
                className="text-white bg-gray-900 border border-gray-900 px-6 h-12 rounded-xl inline-flex items-center gap-2 w-max z-50"
              >
                <span>Contact me</span>
              </a>
              <a
                href="https://forms.gle/KzJEyPVyKem8ETJ17"
                className="text-white bg-gray-900 border border-gray-900 px-6 h-12 rounded-xl inline-flex items-center gap-2 w-max z-50"
              >
                <span>Review</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
