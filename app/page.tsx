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

// Listings verified October 6, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
  {
    id: 35,
    title: "Jason's Deli “50th Anniversary” Instant Win Game",
    type: "instant",
    prizes: "102,430 Prizes incl. $5,400 Las Vegas Trip for 4 + 50 Salad Bar for a Year + 100 Six Flags Ticket Pairs",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jasonsdeli.com/deli-brationsweepstakes",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 36,
    title: "Diageo “Holiday Shopper” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners Each Receive a $25 Venmo Credit (Total $50,000)",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.spiritspromos.com/portfolio/holiday-sweeps/en/IH6868/submission/form",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 37,
    title: "Fanta “Halloween” Instant Win Game",
    type: "instant",
    prizes: "7,000 Winners: Fanta Beanie, Halloween Mask, Tote Bag, or 2 AMC Movie Tickets (ARV $8–$25)",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.coca-cola.com/us/en/offerings/fanta/fanta-halloween",
    added: "2026-10-06",
  },
  {
    id: 38,
    title: "Smirnoff “Assemble Your Night” Instant Win Game",
    type: "instant",
    prizes: "1,800 Winners: $20 Fandango Avengers: Doomsday Ticket Codes + 10 Grand-Prize Cocktail Kits",
    frequency: "Enter Weekly",
    ends: "2027-01-31",
    url: "https://www.spiritspromos.com/smirnoff/assemble-your-night-sweeps/en/IH6807/submission/form",
    added: "2026-10-06",
  },
  {
    id: 39,
    title: "Schaeffer “Season 2026” Instant Win Game",
    type: "instant",
    prizes: "Grand: $3,049 Outdoor Gear Pack (YETI, Weber Grill, Visa Gift Card) + 838 Instant Swag Prizes",
    frequency: "Enter Daily",
    ends: "2026-11-28",
    url: "https://schaefferseason.com",
    hot: true,
    added: "2026-10-06",
  },
  {
    id: 40,
    title: "Miller Lite “Football 2026” Sweepstakes & Instant Win Game",
    type: "instant",
    prizes: "1,000 Winners: $25 Venmo Cash + NFL Game Trips, Tickets & Merch (Total ARV $84,372)",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.millerlitefootball.com",
    hot: true,
    added: "2026-10-06",
  },
  {
    id: 41,
    title: "DSW “Shoebox Shuffle” Instant Win Game",
    type: "instant",
    prizes: "5 Winners: $500 DSW Gift Cards + 150,450 Instant Winners: VIP Rewards Points ($1–$5); DSW VIP Membership Required",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.dsw.com/vip-game",
    hot: true,
    added: "2026-10-06",
  },
  {
    id: 42,
    title: "Bud Light “Upgrade Your Game Day” Instant Win Game",
    type: "instant",
    prizes: "11,200 Winners: NFL Game Tickets, $100 Fanatics Gift Cards, Grills, Coolers, NFL+ Subs",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.budlight.com/UpgradeYourGameday",
    hot: true,
    added: "2026-10-06",
  },
  {
    id: 43,
    title: "White Claw “Holiday On Us” Instant Win Game",
    type: "instant",
    prizes: "190 Winners: $250, $500 or $1,000 Digital Cash via PayPal/Venmo ($75,000 Total)",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.whiteclaw.com/sweepstakes/wcholidayonus",
    hot: true,
    added: "2026-10-06",
  },
  // ---- Sweepstakes ----
  {
    id: 29,
    title: "Ecco Domani “Italian Getaway” Sweepstakes",
    type: "sweepstakes",
    prizes: "5-Night Trip for 2 to Italy (Winner's Choice of City); ARV $10,000",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.eccodomani.com/italy-sweepstakes.html",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 30,
    title: "Carnival Cruise Line “Brian Christopher Slots” Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners: Cruise for 2 (up to 8 Nights) + $1,000 FunPlay + Airfare Credit; ARV $7,260 Each",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.carnival.com/Registration/Promotions/bcsweeps-2026",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 31,
    title: "Wyndham Rewards “4 Million Points” Sweepstakes",
    type: "sweepstakes",
    prizes: "65 Winners Share 4M Points: Grand Prize 1M Points + 7-Night Family Vacation",
    frequency: "Enter Daily",
    ends: "2026-10-27",
    url: "https://4milliongiveaway.com/",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 32,
    title: "AirMedCare Network “College Football” Sweepstakes",
    type: "sweepstakes",
    prizes: "$10,000 Cash via ACH Transfer",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.amcn-college-football-giveaway.com/",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 33,
    title: "Babylist “Best Baby Registry” Sweepstakes",
    type: "sweepstakes",
    prizes: "$3,900 Baby Gear Package (Stroller, Carrier, Diapers & More)",
    frequency: "Enter Once",
    ends: "2026-10-28",
    url: "https://babylist.com/best-baby-registry-giveaway",
    added: "2026-10-05",
  },
  {
    id: 34,
    title: "Sony Electronics “Super Bowl LXI” Sweepstakes",
    type: "sweepstakes",
    prizes: "Trip for 2 to Super Bowl LXI in LA (Airfare, Hotel, 2 Tickets); ERV $10,000",
    frequency: "Enter Once",
    ends: "2026-12-15",
    url: "https://cloud.email.sel.sony.com/SonyxNFLSuperBowlLXI",
    hot: true,
    added: "2026-10-05",
  },
  {
    id: 44,
    title: "Margaritaville Vacation Club “Fins Up” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 7-Night Cruise or Resort Stay for Two/Four + $2,500 Airfare (ARV up to $8,623) + 180 Daily 2-Night Resort Stays",
    frequency: "Enter Once",
    ends: "2027-01-13",
    url: "https://www.margaritavillevacationclub.com",
    hot: true,
    added: "2026-10-06",
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
          Listings last verified October 6, 2026. Always check the official rules on
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
