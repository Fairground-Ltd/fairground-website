import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "success" | "already" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Check error:", checkError);
      setStatus("error");
      setLoading(false);
      return;
    }

    if (existing) {
      setStatus("already");
    } else {
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (insertError) {
        console.error("Insert error:", insertError);
        setStatus("error");
      } else {
        setStatus("success");
      }
    }

    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
    setStatus(null);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl">
      {status === "success" || status === "already" ? (
        <div className="text-center">
          {status === "success" && (
            <p className="text-green-400 font-semibold mb-4">
              🎉 Thank you! You've been added to the waitlist.
            </p>
          )}
          {status === "already" && (
            <p className="text-blue-400 font-semibold mb-4">
              👋 No worries, you're already on the waitlist. Thanks for checking again!
            </p>
          )}
          <button
            onClick={resetForm}
            className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            OK
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-2 rounded mb-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white font-bold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-blue-500"
            }`}
          >
            {loading ? "Submitting..." : "Join Now!"}
          </button>

          {status === "error" && (
            <div className="mt-4 text-red-400 text-center font-medium">
              ❌ Something went wrong. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
}
