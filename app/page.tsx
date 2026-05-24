"use client";
import { useState, useEffect } from "react";

const SWEEPSTAKES = [
  {
    id: 1,
    title: "$500 Amazon Gift Card Giveaway",
    category: "Gift Cards",
    prize: "$500",
    ends: "2026-05-30",
    entries: 3241,
    description: "Enter for a chance to win a $500 Amazon gift card. One winner selected daily!",
    hot: true,
    link: "#",
  },
  {
    id: 2,
    title: "7-Night Caribbean Cruise for Two",
    category: "Travel",
    prize: "$4,200",
    ends: "2026-06-15",
    entries: 8870,
    description: "Win a luxury 7-night Caribbean cruise for two including flights and meals.",
    hot: true,
    link: "#",
  },
  {
    id: 3,
    title: 'Samsung 65" 4K QLED TV',
    category: "Electronics",
    prize: "$1,299",
    ends: "2026-05-28",
    entries: 5120,
    description: "Win a brand new Samsung 65-inch 4K QLED Smart TV delivered to your door.",
    hot: false,
    link: "#",
  },
  {
    id: 4,
    title: "$250 Visa Gift Card",
    category: "Gift Cards",
    prize: "$250",
    ends: "2026-05-25",
    entries: 1980,
    description: "Quick and easy entry to win a $250 Visa gift card. Use it anywhere!",
    hot: false,
    link: "#",
  },
  {
    id: 5,
    title: "Paris Getaway for Two",
    category: "Travel",
    prize: "$3,500",
    ends: "2026-06-30",
    entries: 12400,
    description: "5 days in Paris with hotel, flights, and a dinner at a Michelin-star restaurant.",
    hot: true,
    link: "#",
  },
  {
    id: 6,
    title: "Apple MacBook Pro 16\"",
    category: "Electronics",
    prize: "$2,499",
    ends: "2026-06-10",
    entries: 9300,
    description: "Win the latest Apple MacBook Pro 16-inch with M3 chip. Perfect for work and play.",
    hot: false,
    link: "#",
  },
  {
    id: 7,
    title: "$1,000 Cash Giveaway",
    category: "Cash",
    prize: "$1,000",
    ends: "2026-05-31",
    entries: 15600,
    description: "Enter for a chance to win $1,000 cash sent directly to your PayPal or Venmo.",
    hot: true,
    link: "#",
  },
  {
    id: 8,
    title: "PlayStation 5 Bundle",
    category: "Electronics",
    prize: "$700",
    ends: "2026-06-05",
    entries: 7800,
    description: "Win a PS5 console bundle with 2 controllers and 3 top games.",
    hot: false,
    link: "#",
  },
  {
    id: 9,
    title: "$100 Starbucks Gift Card",
    category: "Gift Cards",
    prize: "$100",
    ends: "2026-05-26",
    entries: 890,
    description: "Daily draw! Win a $100 Starbucks gift card. New winner every day.",
    hot: false,
    link: "#",
  },
  {
    id: 10,
    title: "Hawaii All-Inclusive Resort Stay",
    category: "Travel",
    prize: "$5,000",
    ends: "2026-07-01",
    entries: 20100,
    description: "7 nights at a 5-star Hawaii resort, all-inclusive for two people.",
    hot: true,
    link: "#",
  },
];

const CATEGORIES = ["All", "Gift Cards", "Travel", "Electronics", "Cash"];

const categoryColors: Record<string, string> = {
  "Gift Cards": "#f59e0b",
  Travel: "#06b6d4",
  Electronics: "#8b5cf6",
  Cash: "#22c55e",
  All: "#f43f5e",
};

function daysLeft(dateStr: string) {
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", id: 0 });
  const [entered, setEntered] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  const [adminForm, setAdminForm] = useState({ title: "", category: "Gift Cards", prize: "", ends: "", description: "" });
  const [extraSweeps, setExtraSweeps] = useState<typeof SWEEPSTAKES>([]);

  const allSweeps = [...SWEEPSTAKES, ...extraSweeps];

  const filtered = allSweeps.filter((s) => {
    const matchCat = category === "All" || s.category === category;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function handleEnter(id: number) {
    if (!form.name || !form.email) {
      showToast("Please fill in your name and email!");
      return;
    }
    setEntered([...entered, id]);
    setForm({ name: "", email: "", id: 0 });
    showToast("🎉 You're entered! Good luck!");
  }

  function handleAdminAdd() {
    if (!adminForm.title || !adminForm.prize || !adminForm.ends) {
      showToast("Fill in all fields!");
      return;
    }
    setExtraSweeps([
      ...extraSweeps,
      {
        id: Date.now(),
        ...adminForm,
        entries: 0,
        hot: false,
        link: "#",
      },
    ]);
    setAdminForm({ title: "", category: "Gift Cards", prize: "", ends: "", description: "" });
    showToast("✅ Sweepstakes added!");
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", fontFamily: "'Segoe UI', sans-serif", color: "#fff" }}>

      {/* SEO Meta - handled via layout.tsx in real setup */}

      {/* HEADER */}
      <header style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900, background: "linear-gradient(90deg, #f43f5e, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            🎰 Sweepstakes Central
          </h1>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#94a3b8" }}>Updated Daily · Free to Enter · Real Prizes</p>
        </div>
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "0.85rem" }}
        >
          ⚙️ Admin
        </button>
      </header>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "48px 24px 24px" }}>
        <div style={{ display: "inline-block", background: "linear-gradient(90deg, #f43f5e22, #f59e0b22)", border: "1px solid #f43f5e55", borderRadius: "100px", padding: "6px 18px", fontSize: "0.8rem", marginBottom: "16px", color: "#fca5a5" }}>
          🔥 {allSweeps.length} Active Sweepstakes Today
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, margin: "0 0 12px" }}>
          Win Big. Enter Free.<br />
          <span style={{ background: "linear-gradient(90deg, #f43f5e, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Single Day.</span>
        </h2>
        <p style={{ color: "#94a3b8", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Browse hundreds of free sweepstakes updated daily. Gift cards, travel, electronics, cash and more.
        </p>

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search sweepstakes..."
          style={{ width: "100%", maxWidth: "480px", padding: "14px 20px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "1rem", outline: "none" }}
        />
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ display: "flex", gap: "10px", padding: "0 24px 24px", flexWrap: "wrap", justifyContent: "center" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: "100px",
              border: `2px solid ${category === cat ? categoryColors[cat] : "rgba(255,255,255,0.15)"}`,
              background: category === cat ? `${categoryColors[cat]}22` : "transparent",
              color: category === cat ? categoryColors[cat] : "#94a3b8",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.85rem",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS GRID */}
      <main style={{ padding: "0 24px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#64748b", marginTop: "48px" }}>No sweepstakes found. Try a different category.</p>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {filtered.map((s) => (
            <div key={s.id} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 0.2s", position: "relative", overflow: "hidden" }}>
              {s.hot && (
                <div style={{ position: "absolute", top: "16px", right: "16px", background: "#f43f5e", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "100px" }}>🔥 HOT</div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ background: `${categoryColors[s.category]}22`, color: categoryColors[s.category], fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "100px", border: `1px solid ${categoryColors[s.category]}44` }}>
                  {s.category}
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5 }}>{s.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#64748b" }}>
                <span>🏆 Prize: <strong style={{ color: "#22c55e" }}>{s.prize}</strong></span>
                <span>⏳ {daysLeft(s.ends)}d left</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>👥 {s.entries.toLocaleString()} entries</div>

              {entered.includes(s.id) ? (
                <div style={{ background: "#22c55e22", border: "1px solid #22c55e44", color: "#22c55e", borderRadius: "10px", padding: "10px", textAlign: "center", fontSize: "0.9rem", fontWeight: 600 }}>
                  ✅ You're entered!
                </div>
              ) : form.id === s.id ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.9rem", outline: "none" }}
                  />
                  <input
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.9rem", outline: "none" }}
                  />
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => handleEnter(s.id)} style={{ flex: 1, padding: "10px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "8px", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" }}>
                      Enter Now
                    </button>
                    <button onClick={() => setForm({ name: "", email: "", id: 0 })} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "8px", color: "#94a3b8", cursor: "pointer" }}>
                      ✕
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setForm({ name: "", email: "", id: s.id })}
                  style={{ padding: "12px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "10px", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}
                >
                  Enter Free →
                </button>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ADMIN PANEL */}
      {showAdmin && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ background: "#1e1b4b", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "32px", width: "100%", maxWidth: "480px" }}>
            <h2 style={{ margin: "0 0 20px", fontSize: "1.3rem" }}>⚙️ Admin Panel</h2>
            {!adminUnlocked ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={Loubna2026}
                  onChange={(e) => setAdminPass(e.target.value)}
                  style={{ padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "1rem", outline: "none" }}
                />
                <button
                  onClick={() => { if (adminPass === "Loubna2026") setAdminUnlocked(true); else showToast("Wrong password!"); }}
                  style={{ padding: "12px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "10px", color: "#fff", fontWeight: 700, cursor: "pointer" }}
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input placeholder="Title" value={adminForm.title} onChange={(e) => setAdminForm({ ...adminForm, title: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", outline: "none" }} />
                <select value={adminForm.category} onChange={(e) => setAdminForm({ ...adminForm, category: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "#1e1b4b", color: "#fff", outline: "none" }}>
                  {CATEGORIES.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
                </select>
                <input placeholder="Prize value (e.g. $500)" value={adminForm.prize} onChange={(e) => setAdminForm({ ...adminForm, prize: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", outline: "none" }} />
                <input type="date" value={adminForm.ends} onChange={(e) => setAdminForm({ ...adminForm, ends: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", outline: "none" }} />
                <textarea placeholder="Description" value={adminForm.description} onChange={(e) => setAdminForm({ ...adminForm, description: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", outline: "none", resize: "vertical", minHeight: "80px" }} />
                <button onClick={handleAdminAdd} style={{ padding: "12px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "10px", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                  ➕ Add Sweepstakes
                </button>
              </div>
            )}
            <button onClick={() => { setShowAdmin(false); setAdminUnlocked(false); setAdminPass(""); }} style={{ marginTop: "16px", width: "100%", padding: "10px", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "10px", color: "#94a3b8", cursor: "pointer" }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", background: "#1e1b4b", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: "100px", fontWeight: 600, zIndex: 200, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          {toast}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", color: "#475569", fontSize: "0.8rem" }}>
        <p>© 2026 Sweepstakes Central · Updated Daily · Free to Enter</p>
        <p style={{ marginTop: "8px" }}>
          <a href="#" style={{ color: "#64748b", marginRight: "16px" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#64748b", marginRight: "16px" }}>Terms</a>
          <a href="#" style={{ color: "#64748b" }}>Contact</a>
        </p>
      </footer>
    </div>
  );
}
