"use client";
import { useState } from "react";

const SWEEPSTAKES = [
  {
    id: 1,
    title: "Mountain Dew American DEW Sweepstakes",
    category: "Cash",
    prize: "$250 Gift Cards",
    ends: "2026-07-11",
    entries: 3756,
    description: "Win one of 3,756 $250 gift cards! Enter daily for more chances.",
    hot: true,
    link: "https://www.freebieshark.com/2026/04/mountain-dew-american-dew-sweepstakes-3756-winners.html",
  },
  {
    id: 2,
    title: "HGTV Smart Home 2026 Sweepstakes",
    category: "Travel",
    prize: "Smart Home",
    ends: "2026-06-19",
    entries: 12000,
    description: "Win a fully furnished smart home! Enter daily to maximize your chances.",
    hot: true,
    link: "https://www.freebieshark.com/2026/04/hgtv-smart-home-2026-sweepstakes.html",
  },
  {
    id: 3,
    title: "Straight Talk Ford Mustang Sweepstakes",
    category: "Electronics",
    prize: "2026 Ford Mustang",
    ends: "2026-11-08",
    entries: 9300,
    description: "Win a brand new 2026 Ford Mustang! Enter daily.",
    hot: true,
    link: "https://www.freebieshark.com/2026/04/straight-talk-ford-mustang-sweepstakes.html",
  },
  {
    id: 4,
    title: "Real Simple Pay Your Bills Sweepstakes",
    category: "Cash",
    prize: "$25,000",
    ends: "2026-05-31",
    entries: 8800,
    description: "Win $25,000 cash to pay your bills! Enter daily.",
    hot: true,
    link: "https://www.freebieshark.com/2026/02/real-simple-pay-your-bills-sweepstakes.html",
  },
  {
    id: 5,
    title: "Camarena Soccer Watch Party Sweepstakes",
    category: "Electronics",
    prize: "55\" TVs + Venmo",
    ends: "2026-06-15",
    entries: 5400,
    description: "Win one of 125 55-inch TVs plus Venmo cash! Enter daily.",
    hot: true,
    link: "https://www.freebieshark.com/2026/04/camarena-soccer-watch-party-sweepstakes-125-winners.html",
  },
  {
    id: 6,
    title: "Starbucks Customer Experience Sweepstakes",
    category: "Gift Cards",
    prize: "$100 Gift Cards",
    ends: "2026-09-30",
    entries: 15000,
    description: "Win one of 1,200 $100 Starbucks gift cards! Enter monthly.",
    hot: false,
    link: "https://www.freebieshark.com/2024/11/starbucks-customer-experience-sweepstakes-1200-winners-5.html",
  },
  {
    id: 7,
    title: "BHG Dream Home $25K Sweepstakes",
    category: "Cash",
    prize: "$25,000",
    ends: "2026-07-31",
    entries: 18000,
    description: "Win $25,000 cash for your dream home! Enter daily.",
    hot: false,
    link: "https://www.freebieshark.com/2026/02/bhg-dream-home-25k-sweepstakes.html",
  },
  {
    id: 8,
    title: "Campbell's Pokémon Instant Win Game",
    category: "Gift Cards",
    prize: "Products + More",
    ends: "2026-09-13",
    entries: 7800,
    description: "Win one of 3,153 prizes in this Pokémon instant win game! Enter daily.",
    hot: true,
    link: "https://www.freebieshark.com/2026/05/campbells-pokemon-instant-win-game-3153-winners.html",
  },
  {
    id: 9,
    title: "Domino's Emergency Pizza Red Card Sweepstakes",
    category: "Gift Cards",
    prize: "Free Pizzas",
    ends: "2026-06-10",
    entries: 63000,
    description: "Win free pizzas or discounts from Domino's! One-time entry.",
    hot: false,
    link: "https://www.freebieshark.com/2026/05/dominos-emergency-pizza-red-card-sweepstakes-63371-winners.html",
  },
  {
    id: 10,
    title: "FCA US $100,000 Vehicle Sweepstakes",
    category: "Travel",
    prize: "$100,000 Car",
    ends: "2026-12-31",
    entries: 20000,
    description: "Win a $100,000 car credit! Enter daily all year long.",
    hot: true,
    link: "https://www.freebieshark.com/2026/01/fca-us-100000-vehicle-sweepstakes.html",
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
  const [toast, setToast] = useState("");
  const [adminForm, setAdminForm] = useState({ title: "", category: "Gift Cards", prize: "", ends: "", description: "", link: "" });
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

  function handleAdminAdd() {
    if (!adminForm.title || !adminForm.prize || !adminForm.ends || !adminForm.link) {
      showToast("Fill in all fields including the link!");
      return;
    }
    setExtraSweeps([
      ...extraSweeps,
      { id: Date.now(), ...adminForm, entries: 0, hot: false },
    ]);
    setAdminForm({ title: "", category: "Gift Cards", prize: "", ends: "", description: "", link: "" });
    showToast("✅ Sweepstakes added!");
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", fontFamily: "'Segoe UI', sans-serif", color: "#fff" }}>

      {/* HEADER */}
      <header style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 900, background: "linear-gradient(90deg, #f43f5e, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            🎰 Sweepstakes Central
          </h1>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#94a3b8" }}>Updated Daily · Free to Enter · Real Prizes</p>
        </div>
        <button onClick={() => setShowAdmin(!showAdmin)} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontSize: "0.85rem" }}>
          ⚙️ Admin
        </button>
      </header>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "48px 24px 24px" }}>
        <div style={{ display: "inline-block", background: "linear-gradient(90deg, #f43f5e22, #f59e0b22)", border: "1px solid #f43f5e55", borderRadius: "100px", padding: "6px 18px", fontSize: "0.8rem", marginBottom: "16px", color: "#fca5a5" }}>
          🔥 {allSweeps.length} Real Sweepstakes Today
        </div>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, margin: "0 0 12px" }}>
          Win Big. Enter Free.<br />
          <span style={{ background: "linear-gradient(90deg, #f43f5e, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Single Day.</span>
        </h2>
        <p style={{ color: "#94a3b8", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Real sweepstakes from real brands. Updated daily. Click any sweepstake to go directly to the official entry page.
        </p>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search sweepstakes..." style={{ width: "100%", maxWidth: "480px", padding: "14px 20px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "1rem", outline: "none" }} />
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ display: "flex", gap: "10px", padding: "0 24px 24px", flexWrap: "wrap", justifyContent: "center" }}>
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} style={{ padding: "8px 20px", borderRadius: "100px", border: `2px solid ${category === cat ? categoryColors[cat] : "rgba(255,255,255,0.15)"}`, background: category === cat ? `${categoryColors[cat]}22` : "transparent", color: category === cat ? categoryColors[cat] : "#94a3b8", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s" }}>
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS GRID */}
      <main style={{ padding: "0 24px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        {filtered.length === 0 && <p style={{ textAlign: "center", color: "#64748b", marginTop: "48px" }}>No sweepstakes found.</p>}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {filtered.map((s) => (
            <div key={s.id} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative", overflow: "hidden" }}>
              {s.hot && <div style={{ position: "absolute", top: "16px", right: "16px", background: "#f43f5e", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: "100px" }}>🔥 HOT</div>}
              <div>
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
              <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ padding: "12px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "10px", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", textAlign: "center", textDecoration: "none", display: "block" }}>
                Enter Free →
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* ADMIN PANEL */}
      {showAdmin && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ background: "#1e1b4b", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "32px", width: "100%", maxWidth: "480px", maxHeight: "90vh", overflowY: "auto" }}>
            <h2 style={{ margin: "0 0 20px", fontSize: "1.3rem" }}>⚙️ Admin Panel</h2>
            {!adminUnlocked ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input type="password" placeholder="Enter admin password" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} style={{ padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "1rem", outline: "none" }} />
                <button onClick={() => { if (adminPass === "Loubna2026") setAdminUnlocked(true); else showToast("Wrong password!"); }} style={{ padding: "12px", background: "linear-gradient(90deg, #f43f5e, #f59e0b)", border: "none", borderRadius: "10px", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
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
                <input placeholder="Entry link (https://...)" value={adminForm.link} onChange={(e) => setAdminForm({ ...adminForm, link: e.target.value })} style={{ padding: "10px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", outline: "none" }} />
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
