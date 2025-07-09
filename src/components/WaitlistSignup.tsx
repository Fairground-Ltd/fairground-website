import { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ReCAPTCHA from "react-google-recaptcha";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    // Optionally: verify recaptchaValue on your own backend for extra security

    const { error } = await supabase.from("waitlist").insert([{ email }]);
    if (error) {
      setStatus("There was an error. Please try again.");
    } else {
      setStatus("Thank you for joining the waitlist!");
      setEmail("");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-xl">
      <label className="block mb-2 text-lg font-semibold hidden">Join the Waitlist</label>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full p-2 rounded mb-4 text-black"
      />
      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} ref={recaptchaRef} className="mb-4" />
      <button type="submit" className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
        Join Now!
      </button>
      {status && <div className="mt-4 text-center">{status}</div>}
    </form>
  );
} 