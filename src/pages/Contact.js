import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden py-16">
        <img
          src={process.env.PUBLIC_URL + "images/white-bg.png"}
          alt="effect"
          className="absolute bottom-[-400px] right-[145px] -z-10 w-full opacity-[0.2]"
        />
        <div className="mx-auto max-w-5xl px-8 md:px-6">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 md:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="font-medium text-[#D21143]">Contact Us</span>
                <h1 className="mb-3 text-2xl font-medium text-slate-700 sm:text-3xl">
                  GET IN TOUCH WITH US
                </h1>
                <p className="text-slate-500 mb-8">
                  Removing dead skin cells not only improves the look of your
                  skin, it also sweeps away places where bacteria and soil could
                  collect?
                </p>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                    <ion-icon
                      name="location-outline"
                      className="text-3xl text-[#D21143]"
                    ></ion-icon>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-medium text-slate-700">
                      Our Location
                    </h4>
                    <p
                      className="text-base text-slate-400
                    "
                    >
                      34 UP Agra. New-Delhi. India
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                    <ion-icon
                      name="call-outline"
                      className="text-3xl text-[#D21143]"
                    ></ion-icon>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-medium text-slate-700">
                      Phone Number
                    </h4>
                    <p
                      className="text-base text-slate-400
                    "
                    >
                      (+91)01 0233 0000 8221
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                    <ion-icon
                      name="mail-outline"
                      className="text-3xl text-[#D21143]"
                    ></ion-icon>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-medium text-slate-700">
                      Email Address
                    </h4>
                    <p
                      className="text-base text-slate-400
                    "
                    >
                      company@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-blue-500/10 sm:p-12">
                <form action="">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Your Passsword"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      name="message"
                      rows="6"
                      className="resize-none w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full rounded border border-blue-300 bg-[#D21143] p-3 text-white transition-all hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
