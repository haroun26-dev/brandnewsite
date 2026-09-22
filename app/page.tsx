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

// Listings verified September 22, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 1,
    title: "Miller Lite “Football” Instant Win Game",
    type: "instant",
    prizes: "$84,372 in Prizes incl. 1,000 $25 Venmo Payments + NFL Trips",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.millerlite.com",
    added: "2026-09-19",
  },
  {
    id: 2,
    title: "Coca-Cola “Friday for the Win Football” Instant Win Game",
    type: "instant",
    prizes: "365 Winners incl. 65-inch TV + Football Trip for 2",
    frequency: "Enter Daily",
    ends: "2026-11-29",
    url: "https://www.coca-cola.com",
    added: "2026-09-19",
  },
  {
    id: 3,
    title: "At Home “Design Rewards” Instant Win Game",
    type: "instant",
    prizes: "$25,000 Shopping Spree + 3,112 Instant Prizes (ARV $52,500)",
    frequency: "Enter Daily",
    ends: "2026-10-15",
    url: "https://www.athome.com/sweepstakes",
    added: "2026-09-18",
  },
  {
    id: 4,
    title: "Dr Pepper and Cheez-It “Fall Football” Instant Win Game",
    type: "instant",
    prizes: "3,150 eGift Cards + Fandango Codes ($40,500 Total)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://drpeppercheezitgame.entertowinprizes.com/",
    added: "2026-09-18",
  },
  {
    id: 5,
    title: "The Whiskey Shopper Instant Win Game",
    type: "instant",
    prizes: "1,000 $50 Venmo Credits ($50,000 Total ARV)",
    frequency: "Enter Weekly",
    ends: "2026-10-31",
    url: "http://www.spiritspromos.com/portfolio/whiskey-sweeps",
    hot: true,
    added: "2026-09-21",
  },
  {
    id: 6,
    title: "Fanta “Halloween” Instant Win Game",
    type: "instant",
    prizes: "7,000 Prizes incl. Masks, Beanies + AMC Movie Tickets",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.coca-cola.com",
    added: "2026-09-21",
  },
  // ---- Sweepstakes ----
  {
    id: 7,
    title: "White Claw “Surge Pre-Game Day Tailgate” Sweepstakes",
    type: "sweepstakes",
    prizes: "Midsize Hybrid Off-Road Pickup + $6,000 Check (ARV up to $72,150)",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.whiteclaw.com/sweepstakes/surgetailgate",
    hot: true,
    added: "2026-09-22",
  },
  {
    id: 8,
    title: "Jim Beam “Hit The Beam” Sweepstakes",
    type: "sweepstakes",
    prizes: "Up to 110 Winners: 85-inch TVs + $5,000 Lovesac Gift Cards (ARV $214,900)",
    frequency: "Enter Once",
    ends: "2027-02-14",
    url: "https://hitthebeam.com/",
    hot: true,
    added: "2026-09-22",
  },
  {
    id: 9,
    title: "Under Armour “Pro Day Experience” Sweepstakes",
    type: "sweepstakes",
    prizes: "$22,000 Trip for 4: Jaguars vs Ravens Game + Field Passes & Gift Cards",
    frequency: "Enter Daily",
    ends: "2026-09-30",
    url: "https://brandcycle.shop/v8ggn",
    hot: true,
    added: "2026-09-22",
  },
  {
    id: 10,
    title: "KIVA Camino “Summer” Sweepstakes",
    type: "sweepstakes",
    prizes: "Jeep Compass Limited 4x4 or $30,000 Cash (ARV up to $35,715)",
    frequency: "Enter Daily",
    ends: "2026-09-30",
    url: "https://caminosweeps2026.com/",
    added: "2026-09-22",
  },
  {
    id: 11,
    title: "Universal Pictures “Fast & the Furious” Sweepstakes",
    type: "sweepstakes",
    prizes: "2-Night Trip for 4 to Universal Studios Hollywood (ARV $4,290)",
    frequency: "Enter Daily",
    ends: "2026-09-25",
    url: "https://cloud.email.universalpicturesathome.com/FastandFurious25Anniversary_social_email_sweeps_form",
    added: "2026-09-22",
  },
  {
    id: 12,
    title: "Naked Sundays “You & Your Bestie” Sweepstakes",
    type: "sweepstakes",
    prizes: "$5,000 Cash + Trip for 2 to Sydney, Australia",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://us.nakedsundays.com/",
    added: "2026-09-22",
  },
  {
    id: 13,
    title: "Toyota “Gameday Giveaways” Sweepstakes",
    type: "sweepstakes",
    prizes: "Toyota Vehicle of Choice (up to $86,135 MSRP) + $30,000 Check",
    frequency: "Enter Weekly",
    ends: "2027-02-14",
    url: "https://www.toyotasgamedaygiveaways.com",
    hot: true,
    added: "2026-09-19",
  },
  {
    id: 14,
    title: "FCA US $100,000 Vehicle Sweepstakes",
    type: "sweepstakes",
    prizes: "$100,000 Vehicle Credit (Dodge, Jeep, Chrysler, Ram, Fiat)",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://sweeps.stellantisexperiences.com",
    hot: true,
    added: "2026-09-19",
  },
  {
    id: 15,
    title: "NASCAR “Cup Series Chase” Sweepstakes",
    type: "sweepstakes",
    prizes: "2026 Ford F-150 Raptor (ARV up to $94,360) + 10 Weekly Prizes",
    frequency: "Enter Weekly",
    ends: "2026-11-08",
    url: "https://thechasefordpromo.nascar.com",
    added: "2026-09-20",
  },
  {
    id: 16,
    title: "Hot Wheels “Ram Trucks” Sweepstakes",
    type: "sweepstakes",
    prizes: "2026 Ram 1500 Truck (MSRP up to ~$70,000)",
    frequency: "Enter Daily",
    ends: "2026-12-14",
    url: "https://www.hotwheels.com/ramsweepstakes",
    added: "2026-09-20",
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
          Listings last verified September 22, 2026. Always check the official rules on
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
          <a href="/contact" style={{ color: "#64748b" }}>
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}
