import { useState, useEffect } from "react";
import { X, Phone, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { apiRequest } from "@/lib/queryClient";

interface LeadPopupProps {
  page: string;
  variant?: "dark" | "light";
}

export function LeadPopup({ page, variant = "dark" }: LeadPopupProps) {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const dismissed = sessionStorage.getItem(`popup-dismissed-${page}`);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [page]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    try {
      await apiRequest("POST", "/api/leads", {
        name: name.trim(),
        phone: phone.trim(),
        source: "popup",
        page,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem(`popup-dismissed-${page}`, "true");
  };

  if (!show) return null;

  const isDark = variant === "dark";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" data-testid="lead-popup-overlay">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div
        className={`relative w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl ${
          isDark ? "bg-[#12122a] border border-white/10" : "bg-white border border-gray-200"
        }`}
        data-testid="lead-popup"
      >
        <button
          onClick={handleClose}
          className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
            isDark ? "text-white/50 hover:text-white hover:bg-white/10" : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          }`}
          data-testid="lead-popup-close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              isDark ? "bg-green-500/20" : "bg-green-50"
            }`}>
              <Send className="w-7 h-7 text-green-500" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
              Thank You!
            </h3>
            <p className={`text-sm mb-5 ${isDark ? "text-white/60" : "text-gray-500"}`}>
              We'll call you within 30 minutes during business hours.
            </p>
            <a
              href="https://wa.me/918766350093?text=Hi,%20I%20just%20submitted%20my%20details.%20Looking%20forward%20to%20connecting."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${
                isDark ? "bg-green-500 text-white" : "bg-[#0d7c5f] text-white"
              }`}
              data-testid="lead-popup-whatsapp-thanks"
            >
              <SiWhatsapp className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                isDark ? "bg-green-500/15 text-green-400" : "bg-[#0d7c5f]/10 text-[#0d7c5f]"
              }`}>
                <Phone className="w-3 h-3" />
                Free Consultation
              </div>
              <h3 className={`text-xl font-bold mb-1.5 ${isDark ? "text-white" : "text-gray-900"}`} data-testid="lead-popup-title">
                {page === "/real-estate"
                  ? "Get a Free Strategy Call"
                  : "Get a Free Quote"}
              </h3>
              <p className={`text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}>
                {page === "/real-estate"
                  ? "Share your details and our team will call you back with a custom campaign plan."
                  : "Tell us about your project and we'll get back to you with a quote."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
                  isDark
                    ? "bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#0d7c5f]/50"
                }`}
                data-testid="lead-popup-name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
                  isDark
                    ? "bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
                    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#0d7c5f]/50"
                }`}
                data-testid="lead-popup-phone"
              />

              {error && (
                <p className="text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                    : "bg-[#0d7c5f] text-white hover:bg-[#0a6a51] disabled:opacity-50"
                }`}
                data-testid="lead-popup-submit"
              >
                {loading ? "Submitting..." : "Get Free Callback"}
                {!loading && <Send className="w-4 h-4" />}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-4">
              <a
                href="https://wa.me/918766350093"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  isDark ? "text-green-400" : "text-[#0d7c5f]"
                }`}
                style={{ textDecoration: "none" }}
                data-testid="lead-popup-whatsapp"
              >
                <SiWhatsapp className="w-3.5 h-3.5" /> WhatsApp Instead
              </a>
              <span className={`text-xs ${isDark ? "text-white/20" : "text-gray-300"}`}>|</span>
              <a
                href="tel:+918766350093"
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  isDark ? "text-white/50" : "text-gray-500"
                }`}
                style={{ textDecoration: "none" }}
                data-testid="lead-popup-call"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
