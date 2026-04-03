import { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const inputClass = [
    "peer border border-email-input rounded focus:border-email-input-focus bg-transparent text-gray-300 w-full h-auto px-6 py-3 outline-0 transition ease-in-out",
    "valid:border-green-400 valid:focus:border-green-500",
    "invalid:border-red-400 invalid:focus:border-red-500",
    "invalid:placeholder-shown:border-email-input invalid:placeholder-shown:focus:border-email-input-focus",
  ].join(" ");
  const labelClass = [
    "absolute  -top-3 left-3 text-sm text-white z-100 bg-form px-3",
    "peer-valid:text-green-500",
    "peer-invalid:text-red-500",
    "peer-invalid:peer-placeholder-shown:text-white",
  ].join(" ");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_t22584h", "template_nm6d3ps", form.current, {
        publicKey: "wlWOpQeMj70fLgzjS",
      })
      .then(() => {
        form.current?.reset();
      })
      .catch(() => {
        console.log("ERROR");
      })
      .finally(() => {
        console.log("FINISHED");
      });
  };

  return (
    <section className="w-[90%] max-w-130 lg:max-w-[90%] h-fit py-7 px-3 bg-form border-4 border-reachout-border rounded-3xl shadow-sm/20 shadow-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-5 flex flex-col gap-12"
      >
        <section className="flex flex-col gap-7">
          <div className="relative text-lg">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name..."
              required
              className={`${inputClass}`}
            />
            <label htmlFor="name" className={`${labelClass}`}>
              Full Name
            </label>
          </div>

          <div className="relative text-lg">
            <input
              type="email"
              name="email"
              placeholder="yourname@gmail.com..."
              required
              className={`${inputClass}`}
            />
            <label htmlFor="email" className={`${labelClass}`}>
              Email
            </label>
          </div>

          <div className="relative text-lg">
            <textarea
              name="message"
              placeholder="Type your message out..."
              required
              className={`${inputClass} min-h-50 max-w-full`}
            />
            <label htmlFor="message" className={`${labelClass}`}>
              Mesage
            </label>
          </div>
        </section>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-cyan-500 py-3 px-12 rounded-2xl self-center hover:scale-105 active:scale-95 transition ease-in-out cursor-pointer"
          >
            Send Email
          </button>
        </div>
      </form>
    </section>
  );
}
export default EmailForm;
