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

// Listings verified September 14, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 1,
    title: "Casamigos “This Calls For Margs” Instant Win Game",
    type: "instant",
    prizes: "$60,000 Grand Prize + 2,500 Instant Venmo Prizes",
    frequency: "Enter Once",
    ends: "2026-09-30",
    url: "https://www.casamigos.com/en-us/marg-plz-sweepstakes",
    hot: true,
    added: "2026-09-14",
  },
  {
    id: 2,
    title: "FLIPZ “Xbox” Instant Win Game",
    type: "instant",
    prizes: "363 Gaming Prizes + $5,000 Grand Prize",
    frequency: "Enter Daily",
    ends: "2026-09-30",
    url: "http://flipz-xbox.on-ella.com/",
    added: "2026-09-14",
  },
  {
    id: 3,
    title: "Bauducco “Back to School” Instant Win Game",
    type: "instant",
    prizes: "120 Instant $100 Prepaid Cards + More",
    frequency: "Enter Daily",
    ends: "2026-09-15",
    url: "https://www.bauduccopromotions.com/",
    added: "2026-09-14",
  },
  {
    id: 4,
    title: "Clorox “Back to School” Instant Win Game",
    type: "instant",
    prizes: "100 Clorox Cleaning Prizes + More",
    frequency: "Enter Daily",
    ends: "2026-09-16",
    url: "https://www.clorox.com/lp/cloroxplay/",
    added: "2026-09-14",
  },
  {
    id: 5,
    title: "Heineken “US Open” Instant Win Game",
    type: "instant",
    prizes: "100 US Open Hats + Trip for 2 to 2027 US Open",
    frequency: "Enter Daily",
    ends: "2026-09-20",
    url: "https://www.heineken.com/us/en/promos/usopensweeps",
    added: "2026-09-14",
  },
  {
    id: 6,
    title: "Absolut Vodka “Madonna” Instant Win Game",
    type: "instant",
    prizes: "131 Prize Packs + More",
    frequency: "Enter Daily",
    ends: "2026-09-30",
    url: "https://iframe-mdm.absolut.com/madonna/",
    added: "2026-09-14",
  },
  {
    id: 7,
    title: "A&W “Family Float Night” Instant Win Game",
    type: "instant",
    prizes: "3,507 Free Beverages + Big Prizes",
    frequency: "Enter Daily",
    ends: "2026-09-30",
    url: "https://floatintofamilyfun.com/",
    added: "2026-09-14",
  },
  // ---- Sweepstakes ----
  {
    id: 8,
    title: "Evan Williams “Game Day Like A Champ” Sweepstakes",
    type: "sweepstakes",
    prizes: "Tailgate Trailer + 50\" TV + Grill ($30,000)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "http://evanwilliams.com/bourbonnationsweepstakes",
    hot: true,
    added: "2026-09-14",
  },
  {
    id: 9,
    title: "DEWALT “Formula 1” Sweepstakes",
    type: "sweepstakes",
    prizes: "F1 Vegas Trip for 2 ($21,502) + 35 Tool Prizes",
    frequency: "Enter Once",
    ends: "2026-09-30",
    url: "https://us.dewalt.com/mclaren_vegassweepstakes/",
    hot: true,
    added: "2026-09-14",
  },
  {
    id: 10,
    title: "Best Buy “LG Home Theater” Sweepstakes",
    type: "sweepstakes",
    prizes: "LG 83\" OLED Home Theater Bundle ($15,507)",
    frequency: "Enter Daily",
    ends: "2026-10-04",
    url: "https://www.bestbuy.com/LGDreamTV",
    added: "2026-09-14",
  },
  {
    id: 11,
    title: "SNICKERS NFL and Circle K “Gas for a Year” Sweepstakes",
    type: "sweepstakes",
    prizes: "151 Winners: $3,500 Gas Check + Gift Cards",
    frequency: "Enter Daily",
    ends: "2026-11-03",
    url: "https://www.snickersnfl26.com/home",
    added: "2026-09-14",
  },
  {
    id: 12,
    title: "Xyzal “Marathon Prize Event” Sweepstakes",
    type: "sweepstakes",
    prizes: "$400 Dick's Gift Card + Boston Marathon Bibs",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://marathonprizeevent.com/",
    added: "2026-09-14",
  },
  {
    id: 13,
    title: "Johny Bootlegger “Fall Tailgate” Sweepstakes",
    type: "sweepstakes",
    prizes: "30 Tailgate Prizes (Coolers, Grills, Packs)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hp2win.com/JBTAILGATE/",
    added: "2026-09-14",
  },
  {
    id: 14,
    title: "Samuel Adams “Ultimate Front Yard Beer Hall” Sweepstakes",
    type: "sweepstakes",
    prizes: "Beer Hall Party Setup ($2,000)",
    frequency: "Enter Once",
    ends: "2026-09-15",
    url: "https://www.samueladams.com/beerhall",
    added: "2026-09-14",
  },
  // ---- Carried over: still active today ----
  {
    id: 15,
    title: "White Claw “Teddy Swims Concert” Sweepstakes",
    type: "sweepstakes",
    prizes: "24 Trips + More",
    frequency: "Enter Daily",
    ends: "2026-09-14",
    url: "https://www.whiteclaw.com/sweepstakes/teddyswims",
    hot: true,
    added: "2026-09-13",
  },
  {
    id: 16,
    title: "MCA Reba “Tourist” Flyaway Sweepstakes",
    type: "sweepstakes",
    prizes: "Rail Trip for 2 ($8,998)",
    frequency: "Enter Once",
    ends: "2026-09-14",
    url: "https://RebaMcEntire.lnk.to/TouristSweeps",
    added: "2026-09-13",
  },
  {
    id: 17,
    title: "United by Nature “Fight Fire With Flavor” Sweepstakes",
    type: "sweepstakes",
    prizes: "$6,000 Forest Trip + Hot Sauce",
    frequency: "Enter Once",
    ends: "2026-10-21",
    url: "https://www.unitedbynature.eco/campaigns/fire",
    added: "2026-09-13",
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
          Listings last verified September 14, 2026. Always check the official rules on
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
