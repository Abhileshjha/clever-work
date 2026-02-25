import { useState, useEffect, useCallback, useRef } from "react";
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
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [marketingBudget, setMarketingBudget] = useState("");
  const [monthlyLeads, setMonthlyLeads] = useState("");
  const [error, setError] = useState("");
  const dismissedRef = useRef(false);
  const timerFiredRef = useRef(false);
  const scrollFiredRef = useRef(false);
  const exitFiredRef = useRef(false);

  const showPopup = useCallback(() => {
    if (!submitted && !dismissedRef.current) {
      setShow(true);
    }
  }, [submitted]);

  useEffect(() => {
    if (submitted) return;

    const delay = 15000 + Math.random() * 5000;
    const timer = setTimeout(() => {
      if (!timerFiredRef.current) {
        timerFiredRef.current = true;
        showPopup();
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [submitted, showPopup]);

  useEffect(() => {
    if (submitted) return;

    const handleScroll = () => {
      if (scrollFiredRef.current) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      if (scrollPercent >= 40) {
        scrollFiredRef.current = true;
        showPopup();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [submitted, showPopup]);

  useEffect(() => {
    if (submitted) return;

    const handleExitIntent = (e: MouseEvent) => {
      if (exitFiredRef.current) return;
      if (e.clientY <= 5) {
        exitFiredRef.current = true;
        showPopup();
      }
    };

    document.addEventListener("mouseout", handleExitIntent);
    return () => document.removeEventListener("mouseout", handleExitIntent);
  }, [submitted, showPopup]);

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
        companyName: companyName.trim() || undefined,
        city: city.trim() || undefined,
        marketingBudget: marketingBudget || undefined,
        monthlyLeads: monthlyLeads.trim() || undefined,
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
    dismissedRef.current = true;
  };

  if (!show) return null;

  const isDark = variant === "dark";

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
    isDark
      ? "bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-green-500/50"
      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#0d7c5f]/50"
  }`;

  const selectClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors appearance-none ${
    isDark
      ? "bg-white/5 border border-white/10 text-white focus:border-green-500/50"
      : "bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#0d7c5f]/50"
  }`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
      data-testid="lead-popup-overlay"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div
        className={`relative w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl ${
          isDark ? "bg-[#12122a] border border-white/10" : "bg-white border border-gray-200"
        }`}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        data-testid="lead-popup"
      >
        <button
          onClick={handleClose}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 rounded-full transition-colors z-10 ${
            isDark ? "text-white/50 hover:text-white hover:bg-white/10" : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          }`}
          data-testid="lead-popup-close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 sm:py-6">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center ${
              isDark ? "bg-green-500/20" : "bg-green-50"
            }`}>
              <Send className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
              Thank You!
            </h3>
            <p className={`text-sm mb-4 sm:mb-5 ${isDark ? "text-white/60" : "text-gray-500"}`}>
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
            <div className="mb-4 sm:mb-5">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 ${
                isDark ? "bg-green-500/15 text-green-400" : "bg-[#0d7c5f]/10 text-[#0d7c5f]"
              }`}>
                <Phone className="w-3 h-3" />
                Free Consultation
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-1.5 ${isDark ? "text-white" : "text-gray-900"}`} data-testid="lead-popup-title">
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

            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                data-testid="lead-popup-name"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                data-testid="lead-popup-phone"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={inputClass}
                data-testid="lead-popup-company"
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={inputClass}
                data-testid="lead-popup-city"
              />
              <div className="relative">
                <select
                  value={marketingBudget}
                  onChange={(e) => setMarketingBudget(e.target.value)}
                  className={selectClass}
                  style={!marketingBudget ? { color: isDark ? "rgba(255,255,255,0.3)" : "rgb(156,163,175)" } : undefined}
                  data-testid="lead-popup-marketing-budget"
                >
                  <option value="" disabled style={{ color: isDark ? "#fff" : "#111", backgroundColor: isDark ? "#1a1a3e" : "#fff" }}>Monthly Marketing Budget?</option>
                  <option value="₹2L–₹5L/month" style={{ color: isDark ? "#fff" : "#111", backgroundColor: isDark ? "#1a1a3e" : "#fff" }}>₹2L–₹5L / month</option>
                  <option value="₹5L–₹10L/month" style={{ color: isDark ? "#fff" : "#111", backgroundColor: isDark ? "#1a1a3e" : "#fff" }}>₹5L–₹10L / month</option>
                  <option value="₹10L+/month" style={{ color: isDark ? "#fff" : "#111", backgroundColor: isDark ? "#1a1a3e" : "#fff" }}>More than ₹10L / month</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="How many leads do you currently generate per month?"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(e.target.value)}
                className={inputClass}
                data-testid="lead-popup-monthly-leads"
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

            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-4">
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
