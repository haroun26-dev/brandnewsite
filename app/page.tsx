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

// Listings verified October 7, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----
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
  {
    id: 45,
    title: "Hidden Valley Ranch “Spooky Ranch” Movie Adventure Instant Win Game",
    type: "instant",
    prizes: "100 Winners: $25 Fandango Gift Card + $75 Walmart Gift Card ($100 Each; $10,000 Total)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hiddenvalley.com/spooky-ranch-movie-adventure/",
    added: "2026-10-07",
  },
  {
    id: 46,
    title: "Dr Pepper and Cheez-It “Fall Football” Instant Win Game",
    type: "instant",
    prizes: "3,150 Winners: $25 or $10 Fanatics/XBOX/Fandango eGift Cards (Total ARV $40,500)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://drpeppercheezitgame.entertowinprizes.com",
    hot: true,
    added: "2026-10-07",
  },
  {
    id: 47,
    title: "Jameson Irish Whiskey “Fall Sports” Instant Win Game",
    type: "instant",
    prizes: "105 Winners: $1,500 Streaming Credit (PayPal/Venmo) or Replica Football Jersey (Total ARV $21,800); 21+ Only",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jamesonwhiskey.com/en-us/jameson-fall-sports/",
    added: "2026-10-07",
  },
  {
    id: 48,
    title: "Culver’s “Curdtoberfest” Sweepstakes and Instant Win Game",
    type: "instant",
    prizes: "Grand: Winner’s Choice Munich Trip for 4 (ARV up to $19,900) + $2,000 Check + $500 Cards + 6,000 Cheese Curd Coupons",
    frequency: "Enter Weekly",
    ends: "2026-10-31",
    url: "https://culvers.com/curdtoberfest",
    hot: true,
    added: "2026-10-07",
  },
  {
    id: 49,
    title: "BeatBox “Spin & Win” Instant Win Game",
    type: "instant",
    prizes: "201 Winners: $6,000 Prepaid Card Grand Prize + Bumpboxx Speakers, Coolers, Chairs & Merch (21+ Only)",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://web.witcontests.com/beatbox/giveaway/slots/xtreme-sour-black-cherry-spin-and-win-260731",
    hot: true,
    added: "2026-10-07",
  },
  // ---- Sweepstakes ----
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
  {
    id: 50,
    title: "Chips Ahoy! “Halloween Mystery Flavor” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $25,000 Check + 50 Winners: Cookies + Swag (ARV $95 Each); Total ARV $29,750",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.chipsahoymystery.com/",
    hot: true,
    added: "2026-10-07",
  },
  {
    id: 51,
    title: "Dippin’ Dots “Kickoff to Cool” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Tailgate Pack w/ Weber Grill, Cornhole Set, Cooler + 8 More Winners (Total ARV $2,442.09)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.dippindots.com/tailgate-sweeps",
    added: "2026-10-07",
  },
  {
    id: 52,
    title: "Allegiant “Colts Touchdown Flyaway” Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners: 2 Colts vs. Jaguars Tickets + $500 Allegiant Travel Voucher (ARV $1,375 Each); 21+",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://www.allegiantair.com/deals/2026ColtsTouchdownFlyaway",
    added: "2026-10-07",
  },
  {
    id: 53,
    title: "Sports Illustrated Resorts “College Football” Sweepstakes",
    type: "sweepstakes",
    prizes: "39 Winners: National Championship Experience, Tailgate Packages, Signed Merch (Total ARV $20,815)",
    frequency: "Enter Once",
    ends: "2026-12-02",
    url: "https://gameon.sportsillustratedresorts.com/sweepstakes-2026",
    added: "2026-10-07",
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
          Listings last verified October 7, 2026. Always check the official rules on
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
