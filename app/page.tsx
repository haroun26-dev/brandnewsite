"use client";
import { useState } from "react";
import Comments from "./components/Comments";
import { POSTS } from "./lib/posts";

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

// Listings verified October 10, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 66,
    title: "Duracell “Atlassian Williams F1 Team Race Weekend” Sweepstakes & Instant Win",
    type: "instant",
    prizes: "Grand: Las Vegas F1 Race Weekend Trip for 2, Nov 18–22, 2026 (ARV $12,000) + 200 Instant Prizes: Team Hats, Mini Helmets, LEGO Williams Cars & More (Total Instant ARV $10,580); 18+ Only",
    frequency: "Enter Daily",
    ends: "2026-11-21",
    url: "https://usracingsweeps.duracell.com",
    hot: true,
    added: "2026-10-09",
  },
  {
    id: 67,
    title: "Diageo “Holiday Shopper” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners: $25 Venmo Credit Each (Total ARV $50,000); 21+ Only",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.spiritspromos.com/portfolio/holiday-sweeps/en/IH6868/submission/form",
    added: "2026-10-09",
  },
  {
    id: 68,
    title: "Dunkin’ At Home “EXTRAvaganza” Arcade Sweepstakes & Instant Win",
    type: "instant",
    prizes: "Grand: Dunkin’ Branded Keurig + K-Cups + $250 Gift Card (ARV $400) + 300 × $10 & 300 × $5 Gift Cards + Instant Merch Prizes (Total ARV $29,900); Free Dunkin’ At Home Extras Account Required",
    frequency: "Enter Daily",
    ends: "2026-11-13",
    url: "https://www.dunkinextras.com/arcade",
    added: "2026-10-09",
  },
  {
    id: 72,
    title: "Hidden Valley Ranch “Spooky Ranch Movie Adventure” Instant Win Game",
    type: "instant",
    prizes: "100 Winners: $25 Fandango + $75 Walmart Gift Card Prize Packs (ARV $100 Each; Total ARV $10,000)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hiddenvalley.com/spooky-ranch-movie-adventure/",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 73,
    title: "Jameson Irish Whiskey “Fall Sports” Instant Win Game",
    type: "instant",
    prizes: "13 Winners: $1,500 Toward Streaming Services via PayPal/Venmo + 92 Jameson Football Jerseys ($25 Each; Total ARV $21,800); 21+ Only",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jamesonwhiskey.com/",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 74,
    title: "Bud Light “College Game Day” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners: 1,000 × $100 Fanatics Merchandise Codes + 500 Vintage Hats + 500 Vintage T-Shirts ($15 Each); 21+ Only",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://budlight.com/UpgradeYourGameday",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 75,
    title: "Smirnoff “Assemble Your Night” Instant Win Game",
    type: "instant",
    prizes: "1,800 Winners: $20 Fandango Codes for Marvel Studios’ Avengers: Doomsday + 10 Cocktail Kits ($90 Each; Total ARV $36,900); 21+ Only",
    frequency: "Enter Weekly",
    ends: "2027-01-31",
    url: "https://www.spiritspromos.com/smirnoff/assemble-your-night-sweeps",
    hot: true,
    added: "2026-10-10",
  },
  // ---- Sweepstakes ----
  {
    id: 69,
    title: "The General x Street Fighter “Bonus Stage Break” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Restored Pixel-Themed 1994 Lexus LS400 + $25,400 Cash (Total ARV $95,116.94); Void in AK, HI, IN, KY, ME, MN, WA",
    frequency: "Enter Once",
    ends: "2026-11-18",
    url: "https://the-general-x-street-fighter-bonus-stage-break.prod.fooji.com",
    hot: true,
    added: "2026-10-09",
  },
  {
    id: 70,
    title: "PLANTERS x Macy’s Thanksgiving Day Parade Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 100th Macy’s Thanksgiving Day Parade Trip for Up to 5 (Grandstand Tickets, Airfare & NYC Hotel; ARV $10,000)",
    frequency: "Enter Once",
    ends: "2026-10-22",
    url: "https://www.mrpeanutparadesweepstakes.com",
    hot: true,
    added: "2026-10-09",
  },
  {
    id: 71,
    title: "Bosch “Boschtober Dream Kitchen” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Dream Bosch Kitchen — 800 Series Dishwasher, Refrigerator, Gas Range & Wall Hood (Max ARV $10,996)",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://www.bosch-home.com/us/en/c/spotlight/blt067440a18acc1db0/Boschtober",
    added: "2026-10-09",
  },
  {
    id: 76,
    title: "Every Man Jack “Sweat Equity” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $100,000 Cash via ACH/Wire + 10 Runners-Up Training Kits & 500 Deodorant Bundles (Grand ARV $100,240)",
    frequency: "Enter Weekly",
    ends: "2026-10-15",
    url: "https://www.everymanjack.com/pages/sweat-equity-sweepstakes",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 77,
    title: "Guitar Center KHS “Mexican Music Prize Pack” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: KHS Musical Instrument Prize Pack — Hohner Accordion ($2,329), Jupiter Trumpet Outfit ($1,099.99), Bajo Quinto ($919) & Clarinet Outfit ($799.99; Total ARV $5,147.98)",
    frequency: "Enter Once",
    ends: "2026-10-14",
    url: "https://www.guitarcenter.com/KHS-Sweepstakes.gc",
    added: "2026-10-10",
  },
  {
    id: 78,
    title: "Disney+ Perks “Hexed” Premiere Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: Trip for 2 to the Hexed World Premiere (LA or NYC) — Airfare, 2-Night Hotel, Premiere Admission, Ground Transport + $100 Cash (ARV $2,960); Free Mail-In Entry Available",
    frequency: "Enter Daily",
    ends: "2026-10-22",
    url: "https://perks.disneyplus.com",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 79,
    title: "Travel Peru “The Great Escape” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Inca Trail Express Trip for 2 — Intrepid Travel Booking, Airfare to Lima/Cusco, Camping Gear, Packs & $500 Visa Card (ARV $10,648)",
    frequency: "Enter Once",
    ends: "2026-11-06",
    url: "https://www.peru.travel/thegreatescape",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 80,
    title: "Sapporo “Flyaway to Japan” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4-Night Tokyo Trip for 2 — Airfare, Hotel + $1,500 Cash (ARV $7,100) + 5 Custom Onimusha Fan Kits ($1,000 Each); 21+ Only",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.sapporotojapan.com",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 81,
    title: "SNICKERS x NFL “Halftime” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Super Bowl LXI Trip for 2 to Inglewood, CA (Feb 14, 2027) — Airfare, Hotel, 2 Game Tickets, Rideshare Card + $600 Check (ARV $5,325)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.snickers.com/halftime",
    hot: true,
    added: "2026-10-10",
  },
  {
    id: 82,
    title: "HGTV “Shock Your Home” Giveaway (House Shock)",
    type: "sweepstakes",
    prizes: "$5,000 Check + Interior Design Consultation & Custom Digital Mood Board (ARV $6,200); 21+ Only; Enter with Weekly Code Word from House Shock (Tuesdays 9/8c)",
    frequency: "Enter Weekly",
    ends: "2026-11-06",
    url: "https://www.hgtv.com/shock",
    added: "2026-10-10",
  },
  {
    id: 83,
    title: "Depend x Coach Prime Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Colorado Buffaloes Football Trip for 2 to Boulder (Nov 27–29) — Airfare, Hotel, Car Rental, Club-Level Tickets, Hospitality + $500 Spending Money (ARV $5,500); 25+ Only",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://dependsweepstakes.com",
    added: "2026-10-10",
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
        id={`sweep-${s.id}`}
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
          <a
            href={`#sweep-${s.id}`}
            title="Link directly to this sweepstakes"
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            &#128279;
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

        {/* TIPS & GUIDES */}
        <section style={{ marginTop: "40px" }}>
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
            Sweepstakes Tips &amp; Guides
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0 0 12px" }}>
            New to sweepstakes? Learn how to enter smarter, avoid scams, and
            understand what happens when you win.
          </p>
          <ul style={{ margin: 0, padding: 0 }}>
            {POSTS.map((p) => (
              <li key={p.slug} style={{ listStyle: "none", marginBottom: "10px" }}>
                <a
                  href={`/blog/${p.slug}`}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1d4ed8",
                    textDecoration: "none",
                  }}
                >
                  {p.title}
                </a>
                <div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{p.date}</div>
              </li>
            ))}
          </ul>
        </section>

        <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "40px", lineHeight: 1.6 }}>
          Listings last verified October 10, 2026. Always check the official rules on
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
