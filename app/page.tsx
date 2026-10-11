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

// Listings verified October 11, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
  // ---- Instant Win Games ----

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

  {
    id: 84,
    title: "Ken Griffey Jr. “MLB Trivia” Instant Win Game",
    type: "instant",
    prizes: "150,689 Winners: World Series Trip for 2 (ARV $11,000), Field of Dreams Trip ($7,357), MLB Game Ticket Pairs, Autographed Griffey Items, MLB TV Subs & Thousands of Gift Cards/Coupons; US 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.baseball-trivia.com/",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 85,
    title: "Mondelēz “Pack a Snacktime Friend” Instant Win Game",
    type: "instant",
    prizes: "379 Winners: “Adventure of a Lifetime” Trip for 4 (ARV $15,730), 100 × 1-Year Disney+ Premium, 139 Digital Movie Gift Cards + Snack Coupons; 50 US + DC + PR, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.backtoschoolsnacks.com/",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 86,
    title: "Fanta “Halloween” Instant Win Game",
    type: "instant",
    prizes: "7,000 Winners: Halloween Masks, Fanta Beanies & AMC Black Ticket Pairs; US + DC, 13+",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.coca-cola.com/us/en/offerings/fanta/fanta-halloween/spook-the-wheel",
    added: "2026-10-11",
  },

  {
    id: 87,
    title: "Coffee mate “Year of Flavor” Instant Win Game",
    type: "instant",
    prizes: "805 Winners: 5 Grand “Year of Groceries” Checks ($21,000 Each), 100 × $200 Creamer Checks + 700 Branded Mugs (Total ARV $139,700); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-22",
    url: "https://coffeemate.com/yearofflavor-sweeps",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 88,
    title: "Culver’s “Curdtoberfest” Instant Win Game",
    type: "instant",
    prizes: "6,007 Winners: Munich Family Trip (ARV $19,900), $2,000 Check, Weekly $500 Prepaid Cards + 6,000 Free Cheese Curd Coupons (Total ARV up to $24,400); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://curdtoberfest.culvers.com/",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 89,
    title: "Dr Pepper and Cheez-It “Fall Football” Instant Win Game",
    type: "instant",
    prizes: "3,150 Winners: 600 × $25 Reward Codes + 2,550 × $10 Reward Codes (Fanatics or Xbox eGift Cards or Fandango Promo Codes; Total ARV $40,500); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://drpeppercheezitgame.entertowinprizes.com/",
    added: "2026-10-11",
  },
  // ---- Sweepstakes ----

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

  {
    id: 90,
    title: "Hot Wheels “Ram Trucks” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ram 1500 Truck (MSRP up to ~$70,000); 50 US + DC, 18+ with Valid Driver’s License",
    frequency: "Enter Daily",
    ends: "2026-12-14",
    url: "https://hotwheels.com/ramsweepstakes",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 91,
    title: "Air New Zealand “Amazing Race Season 39” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 7-Day/6-Night Trip for 2 to Christchurch, New Zealand — Business Premier Flights, 5-Star Hotels, Jetboat, Zipline & Dolphin Encounter (ARV $34,264); US (Void FL, NY) + DC, 21+ with Valid Driver’s License",
    frequency: "Enter Once",
    ends: "2026-10-21",
    url: "https://www.airnewzealand.com/nz-sweeps",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 92,
    title: "MotoSport “Fall Adventure” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Jeff Stanton Adventures + 2026/27 Triumph Scrambler 400 XC & Riding Gear (ARV $20,565.86) + 5 Weekly Gear Packages (Total ARV $28,182.12); US 18+ (Void FL, NY, RI)",
    frequency: "Enter Weekly",
    ends: "2026-10-26",
    url: "https://www.motosport.com/win",
    hot: true,
    added: "2026-10-11",
  },

  {
    id: 93,
    title: "OREO “Lovers” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $5,000 Cash (Requires Original OREO Recipe + Photo Upload); US 18+",
    frequency: "Enter Once",
    ends: "2026-10-27",
    url: "https://www.oreo.com",
    added: "2026-10-11",
  },

  {
    id: 94,
    title: "Sip and Seek Adventure “Road Trip” Sweepstakes",
    type: "sweepstakes",
    prizes: "3 Winners: Trip Packages to Palm Beaches (ARV $2,325), Twin Cities Gateway (ARV $1,850) or Pinehurst/Southern Pines (ARV $1,250; Total ARV $5,425); US 18+",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.roadtripgetaways.com",
    added: "2026-10-11",
  },

  {
    id: 95,
    title: "Music Choice “CMA Awards Dream Trip” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Nashville for the CMA Awards — Airfare, Margaritaville Resort, Hall of Fame + Johnny Cash Museum, Tours & Honky Tonk Experiences (ARV $4,000); 48 Contiguous US + DC, 21+",
    frequency: "Enter Once",
    ends: "2026-10-18",
    url: "https://www.musicchoice.com/cma-awards-dream-trip-sweepstakes",
    added: "2026-10-11",
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
          Listings last verified October 11, 2026. Always check the official rules on
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
