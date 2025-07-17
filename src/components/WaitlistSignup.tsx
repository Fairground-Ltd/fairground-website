import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { TRANSLATIONS } from "@/constants/translations";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<null | "success" | "already" | "error" | "bot">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (honeypot) {
      setStatus("bot");
      setLoading(false);
      return;
    }

    setLoading(true);

    const { data: existing, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      setStatus("error");
      setLoading(false);
      return;
    }

    if (existing) {
      setStatus("already");
    } else {
      const { error: insertError } = await supabase.from("waitlist").insert([{ email }]);
      if (insertError) {
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    }

    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
    setHoneypot("");
    setStatus(null);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl">
      {(status === "success" || status === "already" || status === "bot") && (
        <div className="text-center font-fginterface">
          <p className={`mb-4 font-semibold font-fginterface ${
            status === "success"
              ? "text-orange-400"
              : status === "already"
              ? "text-orange-300"
              : "text-gray-400"
          }`}>
            {status === "success"
              ? TRANSLATIONS.waitlistBanner.success
              : status === "already"
              ? TRANSLATIONS.waitlistBanner.already
              : "Thank you for your submission."}
          </p>
          <button
            onClick={resetForm}
            className="px-4 py-2 rounded bg-orange-600 text-white font-fginterface font-medium hover:bg-orange-700 transition"
          >
            {TRANSLATIONS.waitlistBanner.ok}
          </button>
        </div>
      )}

      {status !== "success" && status !== "already" && status !== "bot" && (
        <form onSubmit={handleSubmit} className="font-fginterface">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={TRANSLATIONS.waitlistBanner.placeholder}
            className="w-full p-2 rounded mb-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 font-fginterface"
            disabled={loading}
          />

          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            autoComplete="off"
            tabIndex={-1}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white font-bold font-fginterface transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            }`}
          >
            {loading ? "Submitting..." : TRANSLATIONS.waitlistBanner.button}
          </button>

          {status === "error" && (
            <div className="mt-4 text-orange-400 text-center font-medium font-fginterface">
              {TRANSLATIONS.waitlistBanner.error}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
