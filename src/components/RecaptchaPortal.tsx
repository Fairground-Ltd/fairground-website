import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function RecaptchaPortal({ onChange }: { onChange: (token: string | null) => void }) {
  const [mounted, setMounted] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    setMounted(true);
    document.body.appendChild(elRef.current!);
    return () => {
      document.body.removeChild(elRef.current!);
    };
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div style={{ marginTop: 20, display: "flex", justifyContent: "center", zIndex: 1200 }}>
      <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} theme="dark" />
    </div>,
    elRef.current
  );
}
