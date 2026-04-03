import EmailForm from "./Email-Form.tsx";
import SectionOne from "./Section-one.tsx";

export default function Contact() {
  return (
    <div className="relative min-w-screen min-h-screen bg-bg-1 pt-25 flex flex-col items-center lg:flex-row">
      <SectionOne />
      <EmailForm />
    </div>
  );
}
