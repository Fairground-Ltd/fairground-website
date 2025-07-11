import { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Insert error:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-xl">
      <label className="block mb-2 text-lg font-semibold sr-only">Join the Waitlist</label>

      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full p-2 rounded mb-4 text-black"
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white font-bold transition-opacity ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-blue-500"
        }`}
      >
        {loading ? "Submitting..." : "Join Now!"}
      </button>

      {status === "success" && (
        <div className="mt-4 text-green-600 text-center font-medium">
          🎉 Thank you! You’ve been added to the waitlist.
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-600 text-center font-medium">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
