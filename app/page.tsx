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

// Listings verified October 4, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 17,
    title: "Jameson Irish Whiskey “Fall Sports” Instant Win Game",
    type: "instant",
    prizes: "105 Winners: 13 × $1,500 Cash + 92 Replica Football Jerseys",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jamesonwhiskey.com/en-us/its-on",
    added: "2026-10-02",
  },
  {
    id: 6,
    title: "Culver’s “Curdtoberfest” Instant Win Game",
    type: "instant",
    prizes: "6,007 Winners: Munich Trip for 4 (ARV $19,900) + $2,000 Check + 5x $500 Cards + Cheese Curd Coupons",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "http://Curdtoberfest.culvers.com",
    added: "2026-10-01",
  },
  {
    id: 18,
    title: "The Whiskey Shopper Instant Win Game",
    type: "instant",
    prizes: "1,000 × $50 Venmo Credit (Total ARV $50,000)",
    frequency: "Enter Weekly",
    ends: "2026-10-31",
    url: "https://www.spiritspromos.com/portfolio/whiskey-sweeps",
    added: "2026-10-02",
  },
  {
    id: 21,
    title: "Hidden Valley “Spooky Ranch Movie Adventure” Instant Win Game",
    type: "instant",
    prizes: "100 Winners: $25 Fandango + $75 Walmart Gift Card Packs (ARV $100 Each)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hiddenvalley.com/spooky-ranch-movie-adventure/",
    added: "2026-10-03",
  },
  {
    id: 26,
    title: "Yerba Madre “Cash for College” Instant Win Game",
    type: "instant",
    prizes: "101 Winners: $30,000 Cash Grand Prize + Speakers, Yeti Bottles & More",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://airbaton.net/l/yerbamadre-cashforcollege",
    hot: true,
    added: "2026-10-04",
  },
  {
    id: 28,
    title: "At Home “Design Rewards” Instant Win Game",
    type: "instant",
    prizes: "3,113 Winners: $25,000 Shopping Spree + 12 × $1,000 Gift Cards + 3,100 Point Packs",
    frequency: "Enter Daily",
    ends: "2026-10-15",
    url: "https://www.athome.com",
    hot: true,
    added: "2026-10-04",
  },
  // ---- Sweepstakes ----
  {
    id: 9,
    title: "FCA US “$100,000 Vehicle” Sweepstakes",
    type: "sweepstakes",
    prizes: "$100,000 Credit Toward a Dodge, Jeep, Chrysler, Ram or Fiat Vehicle",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://sweeps.stellantisexperiences.com",
    hot: true,
    added: "2026-10-01",
  },
  {
    id: 19,
    title: "Feastables “Halloween Capitol” Sweepstakes",
    type: "sweepstakes",
    prizes: "5 × $10,000 Cash Prizes",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://feastables.com/pages/halloween-sweepstakes",
    hot: true,
    added: "2026-10-02",
  },
  {
    id: 11,
    title: "Ford “Tee-To-Trail” Sweepstakes",
    type: "sweepstakes",
    prizes: "2026 Ford Bronco Badlands + LPGA Golf Trip for 4 (ARV up to $63,925)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.lpga.com/",
    hot: true,
    added: "2026-10-01",
  },
  {
    id: 14,
    title: "HGTV “Trick or Treat Yourself” Sweepstakes",
    type: "sweepstakes",
    prizes: "$5,000 Check",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://www.hgtv.com/sweepstakes/trick-or-treat-yourself",
    added: "2026-10-01",
  },
  {
    id: 20,
    title: "Sam Adams “Octoberfest” Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Trips for 2 to Munich, Germany (ARV $10,000 Each) + 100 Ceramic Steins",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://2026samueladamsoctoberfest.com",
    added: "2026-10-02",
  },
  {
    id: 22,
    title: "Motosport “Fall Adventure” Sweepstakes",
    type: "sweepstakes",
    prizes: "Trip for 2 + Triumph Scrambler Motorcycle + Gear (ARV $20,565) + 5 Weekly Gear Prizes",
    frequency: "Enter Weekly",
    ends: "2026-10-26",
    url: "https://www.motosport.com/win",
    hot: true,
    added: "2026-10-03",
  },
  {
    id: 23,
    title: "Mondelēz “Hometown Touchdowns” Sweepstakes",
    type: "sweepstakes",
    prizes: "10,262 Winners: Jerseys for Life, Autographed Jerseys & Fanatics Codes",
    frequency: "Enter Weekly",
    ends: "2026-10-30",
    url: "https://hometowntds.com/",
    added: "2026-10-03",
  },
  {
    id: 24,
    title: "Wairau River “New Zealand Trip” Sweepstakes",
    type: "sweepstakes",
    prizes: "Trip for 2 to New Zealand incl. Winery Tour (ARV $7,000)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.WairauRiverNZ.com",
    added: "2026-10-03",
  },
  {
    id: 25,
    title: "Food Network “Taste of Fall” $5K Sweepstakes",
    type: "sweepstakes",
    prizes: "$5,000 Check",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://www.foodnetwork.com/sweepstakes",
    added: "2026-10-03",
  },
  {
    id: 27,
    title: "Air New Zealand “Amazing Race” Sweepstakes",
    type: "sweepstakes",
    prizes: "7-Day Trip for 2 to Christchurch, New Zealand (ARV $34,264)",
    frequency: "Enter Once",
    ends: "2026-10-21",
    url: "https://www.airnewzealand.com/nz-sweeps",
    hot: true,
    added: "2026-10-04",
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
            fontSize: "0.85rem",
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
          Listings last verified October 4, 2026. Always check the official rules on
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
          background: "#fff",
          borderTop: "1px solid #e2e8f0",
          color: "#94a3b8",
          fontSize: "0.8rem",
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
