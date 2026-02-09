import { useState } from "react";
import { Send, Check, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { apiRequest } from "@/lib/queryClient";

interface LeadFormProps {
  source: string;
  page: string;
  variant?: "dark" | "light" | "glass";
  showProjectField?: boolean;
  showBudgetField?: boolean;
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export function LeadForm({
  source,
  page,
  variant = "light",
  showProjectField = false,
  showBudgetField = false,
  compact = false,
  title,
  subtitle,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Name and phone are required");
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
        email: email.trim() || null,
        projectName: projectName.trim() || null,
        budget: budget || null,
        source,
        page,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDark = variant === "dark";
  const isGlass = variant === "glass";

  const inputClass = isDark || isGlass
    ? "w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-green-500/50 transition-colors"
    : "w-full px-4 py-3 rounded-xl text-sm bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0d7c5f]/50 transition-colors";

  if (submitted) {
    return (
      <div className={`rounded-2xl p-6 text-center ${
        isDark || isGlass ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-sm"
      }`} data-testid={`lead-form-success-${source}`}>
        <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
          isDark || isGlass ? "bg-green-500/20" : "bg-green-50"
        }`}>
          <Check className="w-6 h-6 text-green-500" />
        </div>
        <h4 className={`text-base font-bold mb-1 ${isDark || isGlass ? "text-white" : "text-gray-900"}`}>
          Thank You!
        </h4>
        <p className={`text-sm mb-3 ${isDark || isGlass ? "text-white/60" : "text-gray-500"}`}>
          We'll contact you soon.
        </p>
        <a
          href="https://wa.me/918766350093"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-500"
          style={{ textDecoration: "none" }}
        >
          <SiWhatsapp className="w-4 h-4" /> Chat Now
        </a>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl ${compact ? "p-4 md:p-5" : "p-5 md:p-7"} ${
        isDark ? "bg-[#12122a] border border-white/10"
        : isGlass ? "bg-white/5 backdrop-blur-md border border-white/15"
        : "bg-white border border-gray-200 shadow-sm"
      }`}
      data-testid={`lead-form-${source}`}
    >
      {title && (
        <h3 className={`text-lg font-bold mb-1 ${isDark || isGlass ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-4 ${isDark || isGlass ? "text-white/50" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className={compact ? "space-y-2.5" : "space-y-3"}>
        <input
          type="text"
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          data-testid={`lead-${source}-name`}
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          data-testid={`lead-${source}-phone`}
        />
        {!compact && (
          <input
            type="email"
            placeholder="Email (Optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            data-testid={`lead-${source}-email`}
          />
        )}
        {showProjectField && (
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className={inputClass}
            data-testid={`lead-${source}-project`}
          />
        )}
        {showBudgetField && (
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={`${inputClass} appearance-none bg-no-repeat bg-[length:16px] bg-[position:right_12px_center]`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${isDark || isGlass ? 'white' : '%23666'}' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            }}
            data-testid={`lead-${source}-budget`}
          >
            <option value="" style={{ background: isDark || isGlass ? "#1a1a2e" : "#fff", color: isDark || isGlass ? "#ccc" : "#666" }}>Monthly Ad Budget</option>
            <option value="Under 5L" style={{ background: isDark || isGlass ? "#1a1a2e" : "#fff", color: isDark || isGlass ? "#fff" : "#333" }}>Under 5 Lakhs</option>
            <option value="5L - 10L" style={{ background: isDark || isGlass ? "#1a1a2e" : "#fff", color: isDark || isGlass ? "#fff" : "#333" }}>5 - 10 Lakhs</option>
            <option value="10L - 20L" style={{ background: isDark || isGlass ? "#1a1a2e" : "#fff", color: isDark || isGlass ? "#fff" : "#333" }}>10 - 20 Lakhs</option>
            <option value="20L+" style={{ background: isDark || isGlass ? "#1a1a2e" : "#fff", color: isDark || isGlass ? "#fff" : "#333" }}>20 Lakhs+</option>
          </select>
        )}

        {error && <p className="text-xs text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            isDark || isGlass
              ? "bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
              : "bg-[#0d7c5f] text-white hover:bg-[#0a6a51] disabled:opacity-50"
          }`}
          data-testid={`lead-${source}-submit`}
        >
          {loading ? "Submitting..." : "Get Free Callback"}
          {!loading && <Send className="w-4 h-4" />}
        </button>
      </form>

      <div className="mt-3 flex items-center justify-center gap-3">
        <a
          href="https://wa.me/918766350093"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-xs font-medium ${
            isDark || isGlass ? "text-green-400" : "text-[#0d7c5f]"
          }`}
          style={{ textDecoration: "none" }}
        >
          <SiWhatsapp className="w-3 h-3" /> WhatsApp
        </a>
        <span className={`text-xs ${isDark || isGlass ? "text-white/20" : "text-gray-300"}`}>|</span>
        <a
          href="tel:+918766350093"
          className={`inline-flex items-center gap-1 text-xs font-medium ${
            isDark || isGlass ? "text-white/50" : "text-gray-500"
          }`}
          style={{ textDecoration: "none" }}
        >
          <Phone className="w-3 h-3" /> Call
        </a>
      </div>
    </div>
  );
}
