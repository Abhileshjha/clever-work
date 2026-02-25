import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { LogOut, Search, Phone, Mail, Calendar, Filter, Download, Building2 } from "lucide-react";
import type { Lead } from "@shared/schema";

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/admin/login", { username, password });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/session"] });
      onLogin();
    },
    onError: () => {
      setError("Invalid username or password");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-[#0d7c5f] flex items-center justify-center mx-auto mb-4">
            <span className="text-xl font-bold text-white">TC</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900" data-testid="admin-login-title">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">The Clever Work</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm bg-gray-50 border border-gray-200 text-gray-900 outline-none focus:border-[#0d7c5f]/50 transition-colors"
                placeholder="Enter username"
                data-testid="admin-username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm bg-gray-50 border border-gray-200 text-gray-900 outline-none focus:border-[#0d7c5f]/50 transition-colors"
                placeholder="Enter password"
                data-testid="admin-password"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-[#0d7c5f] text-white hover:bg-[#0a6a51] disabled:opacity-50 transition-colors"
              data-testid="admin-login-submit"
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function LeadsDashboard({ username, onLogout }: { username: string; onLogout: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [pageFilter, setPageFilter] = useState("all");

  const { data: leads = [], isLoading } = useQuery<Lead[]>({
    queryKey: ["/api/admin/leads"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/session"] });
      onLogout();
    },
  });

  const filtered = leads.filter((lead) => {
    const s = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      lead.name.toLowerCase().includes(s) ||
      lead.phone.includes(searchTerm) ||
      (lead.email && lead.email.toLowerCase().includes(s)) ||
      (lead.projectName && lead.projectName.toLowerCase().includes(s)) ||
      (lead.companyName && lead.companyName.toLowerCase().includes(s)) ||
      (lead.city && lead.city.toLowerCase().includes(s));
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    const matchesPage = pageFilter === "all" || lead.page === pageFilter;
    return matchesSearch && matchesSource && matchesPage;
  });

  const sources = Array.from(new Set(leads.map((l) => l.source)));
  const pages = Array.from(new Set(leads.map((l) => l.page)));

  const exportCSV = () => {
    const headers = ["Name", "Phone", "Email", "Company", "City", "Marketing Budget", "Monthly Leads", "Project", "Budget", "Source", "Page", "Date"];
    const rows = filtered.map((l) => [
      l.name,
      l.phone,
      l.email || "",
      l.companyName || "",
      l.city || "",
      l.marketingBudget || "",
      l.monthlyLeads || "",
      l.projectName || "",
      l.budget || "",
      l.source,
      l.page,
      l.createdAt ? new Date(l.createdAt).toLocaleString() : "",
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#0d7c5f] flex items-center justify-center">
              <span className="text-sm font-bold text-white">TC</span>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900" data-testid="admin-dashboard-title">Leads Dashboard</h1>
              <p className="text-xs text-gray-400">Logged in as {username}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs text-gray-500 font-medium" style={{ textDecoration: "none" }} data-testid="admin-link-home">Home</a>
            <a href="/real-estate" className="text-xs text-gray-500 font-medium" style={{ textDecoration: "none" }} data-testid="admin-link-re">Real Estate</a>
            <button
              onClick={() => logoutMutation.mutate()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors"
              data-testid="admin-logout"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-2xl font-bold text-gray-900" data-testid="stat-total">{leads.length}</div>
            <div className="text-xs text-gray-500 mt-1">Total Leads</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-2xl font-bold text-[#0d7c5f]" data-testid="stat-today">
              {leads.filter((l) => l.createdAt && new Date(l.createdAt).toDateString() === new Date().toDateString()).length}
            </div>
            <div className="text-xs text-gray-500 mt-1">Today</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-2xl font-bold text-gray-900" data-testid="stat-re">
              {leads.filter((l) => l.page === "/real-estate").length}
            </div>
            <div className="text-xs text-gray-500 mt-1">Real Estate Page</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-2xl font-bold text-gray-900" data-testid="stat-home">
              {leads.filter((l) => l.page === "/").length}
            </div>
            <div className="text-xs text-gray-500 mt-1">Home Page</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-900 outline-none focus:border-[#0d7c5f]/50"
                data-testid="admin-search"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="px-3 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-700 outline-none"
                data-testid="admin-filter-source"
              >
                <option value="all">All Sources</option>
                {sources.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                value={pageFilter}
                onChange={(e) => setPageFilter(e.target.value)}
                className="px-3 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-700 outline-none"
                data-testid="admin-filter-page"
              >
                <option value="all">All Pages</option>
                {pages.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium bg-[#0d7c5f] text-white hover:bg-[#0a6a51] transition-colors"
              data-testid="admin-export"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          {isLoading ? (
            <div className="p-12 text-center text-gray-400 text-sm">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-400 text-sm">
              {leads.length === 0 ? "No leads yet. They'll appear here once someone fills out a form." : "No leads match your filters."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="admin-leads-table">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">#</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Phone</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Company</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">City</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Mkt Budget</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Monthly Leads</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Project</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Budget</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Source</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Page</th>
                    <th className="px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((lead, idx) => (
                    <tr key={lead.id} className="hover:bg-gray-50/50" data-testid={`lead-row-${lead.id}`}>
                      <td className="px-4 py-3 text-gray-400">{idx + 1}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-[#0d7c5f] font-medium" style={{ textDecoration: "none" }}>
                          <Phone className="w-3 h-3" /> {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{lead.companyName || <span className="text-gray-300">-</span>}</td>
                      <td className="px-4 py-3 text-gray-600">{lead.city || <span className="text-gray-300">-</span>}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {lead.marketingBudget ? (
                          <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">{lead.marketingBudget}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{lead.monthlyLeads || <span className="text-gray-300">-</span>}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {lead.email ? (
                          <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-gray-600" style={{ textDecoration: "none" }}>
                            <Mail className="w-3 h-3" /> {lead.email}
                          </a>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {lead.projectName ? (
                          <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-gray-400" /> {lead.projectName}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{lead.budget || <span className="text-gray-300">-</span>}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          lead.source === "popup" ? "bg-purple-50 text-purple-700"
                          : lead.source === "hero" ? "bg-blue-50 text-blue-700"
                          : lead.source === "cta" ? "bg-orange-50 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                        }`}>
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{lead.page}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                        {lead.createdAt ? (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                            {" "}
                            {new Date(lead.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                          </span>
                        ) : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="p-4 border-t border-gray-100 text-xs text-gray-400">
            Showing {filtered.length} of {leads.length} leads
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Admin() {
  const { data: session, isLoading } = useQuery<{ authenticated: boolean; username?: string }>({
    queryKey: ["/api/admin/session"],
  });

  const [authenticated, setAuthenticated] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  const isAuth = authenticated || session?.authenticated;

  if (!isAuth) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <LeadsDashboard
      username={session?.username || "Admin"}
      onLogout={() => setAuthenticated(false)}
    />
  );
}
