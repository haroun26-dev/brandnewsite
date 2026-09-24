"use client";
import { useState } from "react";
import Comments from "./components/Comments";

type EntryType = "instant" | "sweepstakes";

interface Listing {
  id: number;
  title: string;
  type: EntryType;
  prizes: string;
  frequency: "Enter Daily" | "Enter Once" | "Enter Weekly" | "Enter Monthly";
  ends: string; // YYYY-MM-DD
  url: string;
  hot?: boolean;
  added: string; // YYYY-MM-DD — NEW badge shows when added within the last 3 days
}

// Listings verified September 24, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 1,
    title: "SaverLife “Scratch and Save” Instant Win Game",
    type: "instant",
    prizes: "14,352 $5 Cash Prizes via ACH/PayPal/Venmo (276/Week)",
    frequency: "Enter Weekly",
    ends: "2027-01-05",
    url: "https://www.saverlife.org",
    added: "2026-09-23",
  },
  {
    id: 2,
    title: "Bud Light “College Game Day” Instant Win Game",
    type: "instant",
    prizes: "2,000 Prizes incl. 1,000 $100 Fanatics.com Codes + Hats & Tees",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.budlight.com",
    added: "2026-09-23",
  },
  {
    id: 3,
    title: "Coffee mate “Year of Flavor” Instant Win Game",
    type: "instant",
    prizes: "805 Prizes incl. 5 $15,000 Grocery Checks + 100 $200 Checks",
    frequency: "Enter Daily",
    ends: "2026-11-22",
    url: "https://coffeemate.com",
    added: "2026-09-23",
  },
  {
    id: 4,
    title: "Heineken “Formula 1 Lap 2” Instant Win Game",
    type: "instant",
    prizes: "117 Prizes incl. Miami GP 2027 Trip for 3 (ARV $6,000)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.heineken.com",
    added: "2026-09-23",
  },
  {
    id: 5,
    title: "Tecate Beer “Liga MX” Instant Win Game",
    type: "instant",
    prizes: "20 $100 Fanatics.com Gift Cards",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.tecatebeerusa.com",
    added: "2026-09-23",
  },
  {
    id: 6,
    title: "BeatBox “Spin & Win” Instant Win Game",
    type: "instant",
    prizes: "$6,000 Prepaid Card Grand Prize + 200 Instant Prizes",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://web.witcontests.com/beatbox/giveaway/slots/xtreme-sour-black-cherry-spin-and-win-260731",
    added: "2026-09-24",
  },
  // ---- Sweepstakes ----
  {
    id: 7,
    title: "Big Sipz $16K Sweepstakes",
    type: "sweepstakes",
    prizes: "12 Winners: $16,000 Cash Each",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.2026bigsipz16k.com",
    hot: true,
    added: "2026-09-23",
  },
  {
    id: 8,
    title: "Feastables “Halloween Capitol” Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners: $10,000 Cash Each",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://feastables.com",
    hot: true,
    added: "2026-09-23",
  },
  {
    id: 9,
    title: "BHG “Home & Garden Refresh” Sweepstakes",
    type: "sweepstakes",
    prizes: "$25,000 Check",
    frequency: "Enter Daily",
    ends: "2027-01-31",
    url: "https://www.bhg.com",
    hot: true,
    added: "2026-09-23",
  },
  {
    id: 10,
    title: "Spirit Halloween x Butterfinger Sweepstakes",
    type: "sweepstakes",
    prizes: "$15,000 Cash Check",
    frequency: "Enter Once",
    ends: "2026-11-01",
    url: "https://www.spirithalloween.com/sweeps",
    added: "2026-09-23",
  },
  {
    id: 11,
    title: "Straight Talk “Ford Mustang” Sweepstakes",
    type: "sweepstakes",
    prizes: "2026 Ford Mustang EcoBoost (ARV $32,640)",
    frequency: "Enter Daily",
    ends: "2026-11-08",
    url: "https://straighttalkracingtour.com",
    hot: true,
    added: "2026-09-23",
  },
  {
    id: 12,
    title: "Ford “Tee-To-Trail” Sweepstakes",
    type: "sweepstakes",
    prizes: "2026 Ford Bronco Badlands + Golf Trip for 4 (ARV $63,925)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.lpga.com",
    hot: true,
    added: "2026-09-23",
  },
  {
    id: 13,
    title: "HGTV “Trick or Treat Yourself” Sweepstakes",
    type: "sweepstakes",
    prizes: "$5,000 Cash",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://www.hgtv.com",
    added: "2026-09-23",
  },
  {
    id: 14,
    title: "AirMedCare Network “College Football” Sweepstakes",
    type: "sweepstakes",
    prizes: "$10,000 via ACH Transfer",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.amcn-college-football-giveaway.com",
    added: "2026-09-23",
  },
  {
    id: 15,
    title: "Food Network “Taste of Fall” Sweepstakes",
    type: "sweepstakes",
    prizes: "$5,000 Check",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://www.foodnetwork.com/sponsored/sweepstakes/taste-of-fall",
    added: "2026-09-24",
  },
  {
    id: 16,
    title: "Kellanova “Snack & Score” Sweepstakes",
    type: "sweepstakes",
    prizes: "4 x $2,500 Cash + 18 Weekly $50 Fanatics.com Gift Cards",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.snackandscoresweeps.kellanovaawayfromhome.com/en-us/home.html",
    added: "2026-09-24",
  },
];




function daysLeft(dateStr: string) {
  const end = new Date(dateStr + "T23:59:59");
  const diff = end.getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function isNew(added: string) {
  const diff = Date.now() - new Date(added + "T00:00:00").getTime();
  return diff < 3 * 24 * 60 * 60 * 1000;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

const FILTERS = ["All", "Instant Win Games", "Sweepstakes"] as const;

export default function Home() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [search, setSearch] = useState("");

  const allSweeps = SWEEPSTAKES.filter((s) => daysLeft(s.ends) >= 0);

  const filtered = allSweeps.filter((s) => {
    const matchFilter =
      filter === "All" ||
      (filter === "Instant Win Games" && s.type === "instant") ||
      (filter === "Sweepstakes" && s.type === "sweepstakes");
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const instantWins = filtered
    .filter((s) => s.type === "instant")
    .sort((a, b) => a.ends.localeCompare(b.ends));
  const sweeps = filtered
    .filter((s) => s.type === "sweepstakes")
    .sort((a, b) => a.ends.localeCompare(b.ends));

  const inputStyle: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#fff",
    color: "#0f172a",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  function renderListing(s: Listing) {
    const left = daysLeft(s.ends);
    return (
      <li
        key={s.id}
        style={{
          listStyle: "none",
          padding: "16px 0",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#1d4ed8",
              textDecoration: "none",
            }}
          >
            {s.title}
          </a>{" "}
          {s.hot && (
            <span
              style={{
                background: "#dc2626",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: "4px",
                marginLeft: "6px",
                whiteSpace: "nowrap",
              }}
            >
              HOT!
            </span>
          )}
          {isNew(s.added) && (
            <span
              style={{
                background: "#16a34a",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: "4px",
                marginLeft: "6px",
                whiteSpace: "nowrap",
              }}
            >
              NEW
            </span>
          )}
          <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "6px" }}>
            Prizes: {s.prizes} | {s.frequency} | Ends {formatDate(s.ends)} (
            {left === 0 ? "ends today" : `${left} day${left === 1 ? "" : "s"} left`})
          </div>
        </div>
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#1d4ed8",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
            padding: "10px 22px",
            borderRadius: "8px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Enter Now
        </a>
      </li>
    );
  }

  function renderSection(title: string, items: Listing[]) {
    if (items.length === 0) return null;
    return (
      <section style={{ marginTop: "32px" }}>
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#0f172a",
            borderBottom: "3px solid #1d4ed8",
            paddingBottom: "8px",
            marginBottom: "8px",
          }}
        >
          {title}
        </h2>
        <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 8px" }}>
          Filter: Showing <strong>{items.length}</strong> active
        </p>
        <ul style={{ margin: 0, padding: 0 }}>{items.map(renderListing)}</ul>
      </section>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "18px 24px",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: 900 }}>
          Sweepstakes <span style={{ color: "#60a5fa" }}>Central</span>
        </div>
        <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
          Updated Daily &middot; Free to Enter &middot; No Purchase Necessary
        </div>
      </header>

      {/* INTRO */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 48px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 12px" }}>
          Sweepstakes &amp; Instant Win Games
        </h1>
        <p style={{ color: "#475569", lineHeight: 1.7, margin: "0 0 12px" }}>
          Sweepstakes Central tracks active sweepstakes and instant win games, updated
          daily. Enter to win cash prizes, gift cards, vacations, electronics, and more
          — all free to enter with no purchase necessary. From daily entry sweepstakes
          to one-time instant win games where you find out immediately if you&apos;ve won,
          every listing links straight to the official sponsor entry page.
        </p>
        <p style={{ color: "#475569", margin: "0 0 20px", fontSize: "0.95rem" }}>
          Bookmark this page and check back daily — new sweepstakes are added regularly!{" "}
          <span
            style={{
              background: "#16a34a",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 800,
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            NEW
          </span>{" "}
          = Added in the last 3 days{" "}
          <span
            style={{
              background: "#dc2626",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 800,
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            HOT!
          </span>{" "}
          = Must-Enter!
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 20px" }}>
          Currently <span style={{ color: "#1d4ed8" }}>{allSweeps.length}</span> active
          giveaways!
        </p>

        {/* SEARCH + FILTER */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sweepstakes..."
            style={{ ...inputStyle, maxWidth: "340px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 18px",
                borderRadius: "100px",
                border: `1px solid ${filter === f ? "#1d4ed8" : "#cbd5e1"}`,
                background: filter === f ? "#1d4ed8" : "#fff",
                color: filter === f ? "#fff" : "#475569",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "#64748b", marginTop: "32px" }}>
            No sweepstakes found. Try a different search or filter.
          </p>
        )}

        {renderSection("Instant Win Games", instantWins)}
        {renderSection("Sweepstakes", sweeps)}

        <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "40px", lineHeight: 1.6 }}>
          Listings last verified September 24, 2026. Always check the official rules on
          the sponsor&apos;s page before entering. Sweepstakes Central is not affiliated
          with the sponsors listed.
        </p>
      </main>

      <Comments />

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "28px 24px",
          borderTop: "1px solid #e2e8f0",
          color: "#94a3b8",
          fontSize: "0.8rem",
          background: "#fff",
        }}
      >
        <p style={{ margin: "0 0 8px" }}>
          &copy; 2026 Sweepstakes Central &middot; Updated Daily &middot; Free to Enter
        </p>
        <p style={{ margin: 0 }}>
          <a href="/blog" style={{ color: "#64748b", marginRight: "16px" }}>
            Tips & Guides
          </a>
          <a href="/about" style={{ color: "#64748b", marginRight: "16px" }}>
            About
          </a>
          <a href="/privacy" style={{ color: "#64748b", marginRight: "16px" }}>
            Privacy Policy
          </a>
          <a href="/terms" style={{ color: "#64748b", marginRight: "16px" }}>
            Terms
          </a>
          <a href="/contact" style={{ color: "#64748b" }}>
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}
