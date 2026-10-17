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

// Listings verified October 17, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
// Listings verified October 17, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
  // ---- Instant Win Games ----

  {
    id: 125,
    title: "Smirnoff “Assemble Your Night” Instant Win Game",
    type: "instant",
    prizes: "1,810 Winners: 1,800 × $20 Fandango Promo Codes for Marvel Studios’ Avengers: Doomsday + 10 Avengers Cocktail Kits ($90 Each; Total ARV $36,900); 50 US + DC, 21+",
    frequency: "Enter Weekly",
    ends: "2027-01-31",
    url: "https://www.spiritspromos.com/smirnoff/assemble-your-night-sweeps/en/IH6807/submission/form",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 126,
    title: "Crown Royal “Holiday Shopper” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners: $25 Venmo Credit Each (Total ARV $50,000); 50 US + DC, 21+",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.spiritspromos.com/portfolio/holiday-sweeps",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 140,
    title: "Skrewball “College Tailgate Tour” Instant Win Game",
    type: "instant",
    prizes: "201 Winners: Grand 2-Night Trip for 2 to the 2027 College Football Playoff National Championship in Las Vegas — Airfare, Hotel, Game Tickets (ARV $6,000) + 20 × Skrewball Hats ($15 Each); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2027-01-10",
    url: "https://www.skrewballwhiskey.com/en/collegetailgatetour/",
    hot: true,
    added: "2026-10-15",
  },

  {
    id: 141,
    title: "Miller Lite “Football” Instant Win Game",
    type: "instant",
    prizes: "1,000 Instant Winners: $25 Venmo Payment Each + National Grand Trip for 2 to a 2027/28 NFL Regular-Season Game — Airfare, 2-Night Hotel, 2 Tickets, $250 Spending Money (ARV $3,067) + Team-Keyword Drawings (Total ARV ~$84,372); 50 US + DC (Excl. ME), 21+",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.millerlite.com/football",
    added: "2026-10-15",
  },

  {
    id: 142,
    title: "SaverLife “Scratch and Save” Instant Win Game",
    type: "instant",
    prizes: "14,352 Winners: $5 Cash Each via ACH, PayPal, or Venmo — 276 Awarded Weekly (Total ARV $71,760); 50 US + DC, 18+ (Free SaverLife Account Required)",
    frequency: "Enter Weekly",
    ends: "2027-01-05",
    url: "https://www.saverlife.org/scratchandsaveamoe20",
    added: "2026-10-15",
  },

  {
    id: 143,
    title: "Heineken “Formula 1 Lap 2” Instant Win Game",
    type: "instant",
    prizes: "117 Winners: Grand Trip for 3 to the 2027 Formula 1 Miami Grand Prix — Airfare, 3-Night Hotel, 3 Tickets (ARV $6,000) + 2 Regional Race-Ticket Winners, 8 Race Jackets + 100 × F1 Hats ($20 Each); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.heineken.com/us/en/promos/formula1",
    hot: true,
    added: "2026-10-15",
  },

  {
    id: 145,
    title: "Keystone Light “Hunt” Instant Win Game",
    type: "instant",
    prizes: "516 Winners: Grand Keystone Light x Big Buck Hunter Arcade Game (ARV $12,000) + 15 Realtree Gear Packages (ARV $205), 100 Realtree Hat + T-Shirt Sets (ARV $44) + 400 Realtree Hats (ARV $18); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.keystonelight.com/hunt",
    hot: true,
    added: "2026-10-15",
  },

  {
    id: 155,
    title: "McDonald’s 2026 Monopoly Game",
    type: "instant",
    prizes: "Top Prizes: (1) $1,000,000 ($50K/Year for 20 Years), (2) $100,000 Cash, (2) $100,000 Gold Bullion Credit, (6) $50,000 College-Debt Paydown, (3) $50,000 Home Down Payment, (15) 2027 Jeep Cherokee 4x4 (ARV $45,990), (8) Polaris Off-Road Vehicles, (34) $10,000 Cash, (50) Carnival Cruise Packages (ARV $10,000) + Millions of Food, Gift Card & Points Prizes; 50 US + DC, 18+ (McDonald’s Rewards Members)",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.mcdonalds.com",
    hot: true,
    added: "2026-10-16",
  },

  {
    id: 161,
    title: "Pine-Sol “Clean Sweep” Instant Win Game",
    type: "instant",
    prizes: "208 Winners: Mop and Move Slippers, Pine-Sol Blanket, Pine-Sol Sponge + Pine-Sol 20 oz Scent (ARV $80.98 Each); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2027-09-02",
    url: "https://www.pinesol.com",
    added: "2026-10-16",
  },

  {
    id: 169,
    title: "White Claw “Holiday On Us” Instant Win Game",
    type: "instant",
    prizes: "190 Instant Winners: 100 × $250, 80 × $500, 10 × $1,000 Cash via PayPal/Venmo (Total ARV $75,000); 50 US + DC, 21+",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.whiteclaw.com/sweepstakes/wcholidayonus",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 170,
    title: "Clorox “Catch Holiday” Instant Win Game",
    type: "instant",
    prizes: "102 Instant Winners: 50 × All Purpose Cleaner Spray ($5.52), 50 × Scentiva Disinfecting Wipes ($8), 2 × Catch Prize Packs (ARV $137.74 Each); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-15",
    url: "https://www.clorox.com/lp/clorox-play/",
    added: "2026-10-17",
  },

  {
    id: 171,
    title: "BeatBox “Sip Into the Season” Instant Win Game",
    type: "instant",
    prizes: "Grand: 2 × 2-Day Ikon Ski Passes (2026–27 Season) + $2,500 Cash (ARV $3,100) + 550 Instant Prizes (Bluetooth Speakers, Holiday Scarves, Light-Up Charging Cables); US (Excl. FL & NY), 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://web.witcontests.com/beatbox/giveaway/spin/sip-into-the-season-260930",
    added: "2026-10-17",
  },

  {
    id: 172,
    title: "NÜTRL “College Football Final” Sweepstakes & Instant Win",
    type: "instant",
    prizes: "Grand: $9,000 Prepaid Card Toward Ultimate Tailgate Experience for 2 in Las Vegas + 18 Instant-Win Tailgate Packs (Cooler, Hat, Chair, Power Bank, Coolies; ARV $203 Each; Total ARV $12,654); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-04",
    url: "https://www.airbaton.net",
    added: "2026-10-17",
  },

  {
    id: 173,
    title: "Tecate “Liga MX” Instant Win",
    type: "instant",
    prizes: "20 Instant Winners: $100 Fanatics.com E-Gift Card Each (Total ARV $2,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.tecatebeerusa.com/ligamx",
    added: "2026-10-17",
  },

  {
    id: 174,
    title: "Bud Light X NFL “Upgrade Your Game Day” Instant Win Game",
    type: "instant",
    prizes: "11,200 Instant Winners: 50 × NFL Ticket Pairs, 50 Charcoal Grills, 50 NFL Coolers, 50 Tailgate Sets, 1,000 × $100 Fanatics Gift Cards, 10,000 NFL+ Premium Subscriptions (Total ARV $307,400); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.budlight.com/UpgradeYourGameday",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 175,
    title: "Jameson “First Round on Us” Instant Win Game",
    type: "instant",
    prizes: "5,000 Winners: $20 via PayPal or Venmo Each (Total ARV $100,000); 21+, Limited States Only (AZ, HI, IN, KY, LA, ME, MD, MA, MS, NH, NC, OR, PA, TN, TX, UT, VA)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.jamesonwhiskey.com",
    added: "2026-10-17",
  },

  // ---- Sweepstakes ----

  {
    id: 105,
    title: "Ford “Tailgate” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ford F-150 Lariat w/ PowerBoost Hybrid V6 (MSRP $71,355; Optional NFL Team Wrap ARV $10,000) + 2 First Prizes: Trips for 2 (Dallas Cowboys Game Trip ARV up to $5,000; Detroit Lions Munich Game Trip); 50 US + DC, 18+ with Valid US Driver’s License",
    frequency: "Enter Once",
    ends: "2027-01-10",
    url: "https://cowboysfordtailgate.com/login",
    hot: true,
    added: "2026-10-12",
  },

  {
    id: 109,
    title: "Discover Puerto Rico “Hunt for Love Trip of a Lifetime” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4-Night Puerto Rico Getaway for 2 — Roundtrip Airfare, 1-Bedroom Oceanfront Suite at La Concha Resort, Daily Breakfast + Dinner for 2, Toro Verde Adventure Park + 2 × $100 Dining Certificates (ARV $4,900); 50 US, 18+ (Excl. PR & Territories)",
    frequency: "Enter Once",
    ends: "2027-01-25",
    url: "https://discoverpuertorico.com/hunt-for-love",
    added: "2026-10-12",
  },

  {
    id: 111,
    title: "Realtor.com “New Home For The Holidays” $100K Veteran Homebuyer Giveaway",
    type: "sweepstakes",
    prizes: "Grand: $100,000 Cash Toward the Winner’s Home Purchase (Must Own & Occupy as Primary Residence; ARV $100,000); US Military Service Members & Veterans, Age of Majority (18+) in State of Domicile",
    frequency: "Enter Once",
    ends: "2026-12-17",
    url: "https://www.realtor.com/win-100k",
    hot: true,
    added: "2026-10-12",
  },

  {
    id: 112,
    title: "BHG $25K Fall Sweepstakes",
    type: "sweepstakes",
    prizes: "$25,000 Check (ARV $25,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2027-01-31",
    url: "https://www.bhg.com/25kFall26",
    hot: true,
    added: "2026-10-13",
  },

  {
    id: 118,
    title: "Disney + ESPN “We’re Going to the Super Bowl LXI” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4 Tickets to Super Bowl LXI (Feb 14, 2027) + 3-Night Disneyland Resort Stay + 3-Day Park Hoppers for Winner & up to 3 Guests (ARV $12,097); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.espn.com/SBLXI",
    added: "2026-10-13",
  },

  {
    id: 132,
    title: "Work Sharp “Win Andy’s Truck” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Used 2020 Pickup Truck + $10,000 Cash + Outdoor Gear Package (Exo Pack, Vortex Binoculars, Tactacam, Gift Cards, Coolers; ARV $58,715) + 14 Weekly Prize Packages; 50 US, 18+",
    frequency: "Enter Weekly",
    ends: "2027-01-31",
    url: "https://worksharptools.com/pages/sweepstakes",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 133,
    title: "Sony Electronics “Super Bowl LXI” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Super Bowl LXI in Los Angeles (Feb 12–15, 2027) — Roundtrip Airfare, 3 Nights Hotel, 2 Game Tickets at SoFi Stadium + $300 Amex Gift Card (ARV $10,000); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-12-15",
    url: "https://cloud.email.sel.sony.com/SonyxNFLSuperBowlLXI",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 134,
    title: "Professional Fighters League “Road to Dubai” Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Grand Prizes: 5-Day/4-Night Trip for 2 to a PFL Event in Dubai (Q1 2027) — Airfare, Hotel, 2 Coca-Cola Arena Tickets + $1,000 Spending Money (ARV $7,500 Each); 50 US + DC, Age of Majority",
    frequency: "Enter Monthly",
    ends: "2026-12-21",
    url: "https://pflmma.com/roadtodubai",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 135,
    title: "“Celebrity Wheel of Fortune” VIP Celebrity Sweepstakes XI",
    type: "sweepstakes",
    prizes: "8 Weekly Drawings: Four $10,000 Checks + Four Trips for 2 (Greece, Japan, Tanzania Safari, Thailand; Total ARV $102,034); 50 US + DC, Age of Majority (Free Wheel Watchers Club Membership Required)",
    frequency: "Enter Weekly",
    ends: "2026-12-19",
    url: "https://www.wheeloffortune.com/win/celebrity-giveaway",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 136,
    title: "Marriott Bonvoy “Super Bowl Sleepover” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4-Day/3-Night Trip for 2 to Super Bowl LXI + Overnight in the Super Bowl Suite at SoFi Stadium (ARV $20,250) + Gift Card Prizes (Total ARV $27,550); Free Marriott Bonvoy Membership Required, 18+",
    frequency: "Enter Weekly",
    ends: "2026-12-15",
    url: "https://www.joinmarriottbonvoy.com/superbowlsleepoversuite",
    hot: true,
    added: "2026-10-14",
  },

  {
    id: 138,
    title: "Glenmorangie “Once Upon A Time In Scotland” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Night Trip for 2 to Tain, Scotland — Flights to Inverness, Glenmorangie House Stay, Distillery Tour, Highland Activities (Travel in 2027; ARV $4,800); 50 US + DC (Excl. UT), 21+",
    frequency: "Enter Once",
    ends: "2026-12-15",
    url: "https://glenmorangie.wyng.com/OnceUponATimeInScotland",
    added: "2026-10-14",
  },

  {
    id: 149,
    title: "Ecco Domani Italian Getaway Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Italy — Winner’s Choice of Florence, Milan, Rome, or Venice: Round-Trip Airfare, Ground Transfers, 5-Night Hotel Stay (ARV $10,000); 50 US + DC (Excl. UT), 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.eccodomani.com/italy-sweepstakes.html",
    hot: true,
    added: "2026-10-15",
  },

  {
    id: 162,
    title: "NRA “Win This Truck” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Winner’s Choice of 2026 Dodge Ram 1500 Laramie, 2026 Ford F-150 Lariat, or 2026 Chevy Silverado 2500 (VRV $70,000 or $70,000 Cash) + Choice of Adventure Prize (VRV $15,000 or $15,000 Cash) + $25,000 Cash (Total VRV $110,000) + 10 × $1,000 Fast Entry Prizes; 50 US, 21+ (Void in MN, MT, WA)",
    frequency: "Enter Daily",
    ends: "2027-01-30",
    url: "https://trucksweepstakes.nra.org/Enter",
    hot: true,
    added: "2026-10-16",
  },

  {
    id: 163,
    title: "Rally for Shelter Pets Sweepstakes (Alltroo)",
    type: "sweepstakes",
    prizes: "Grand: 2026 Lexus RX350 Premium ($60,625) + 2026 Lexus IS350 F-Sport ($58,752) + $25,000 Cash for Taxes — or $90,000 Cash Alternative (Max ARV $144,377); US + Canada, Age of Majority",
    frequency: "Enter Once",
    ends: "2026-12-18",
    url: "https://alltroo.com/",
    hot: true,
    added: "2026-10-16",
  },

  {
    id: 164,
    title: "Sapporo “Flyaway to Japan” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Tokyo, Japan — Round-Trip Airfare, 4-Night Hotel, $1,500 Prize Check (ARV $7,100) + 5 × Onimusha Custom Fan Kits (ARV $1,000 Each); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.sapporotojapan.com",
    hot: true,
    added: "2026-10-16",
  },

  {
    id: 166,
    title: "Hallmark Channel “Countdown To Christmas” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $20,000 Check + $250 Spoonful of Comfort Gift Card (ARV $20,250) + 11 Weekly Prizes of $1,000 + Gift Packages (Total ARV $32,759.89); 50 US + DC + PR, 18+",
    frequency: "Enter Once",
    ends: "2026-12-29",
    url: "https://christmasmoviegame.hallmarkchannel.com",
    hot: true,
    added: "2026-10-16",
  },

  {
    id: 167,
    title: "iHeartRadio Jingle Ball x JCPenney Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $3,500 NYC Jingle Ball Trip for 2 — Airfare, Airport Transfers, 2 Hotel Nights, Z100 Jingle Ball Tickets (Dec 11) + JCPenney Gift Cards ($250–$1,000) & Signed Artist Merch Across 4 Drawing Periods (27 Prizes, $13,050 Total); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-20",
    url: "https://news.iheart.com/promotions/iheartradio-jingle-ball-x-jcpenney-sweepstakes-1925122/",
    added: "2026-10-16",
  },

  {
    id: 176,
    title: "Ford “Mustang 5.0 Fever” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ford Mustang GT (Up to $55,000 MSRP) + Up to $5,000 in Installed Ford Racing Parts (Total ARV Up to $60,000); 48 Contiguous US + DC, 18+ Licensed Drivers",
    frequency: "Enter Once",
    ends: "2026-12-18",
    url: "https://www.mustang50fever.com",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 177,
    title: "Monos “Mercedes-Benz G320” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Restored 1998 Mercedes-Benz G320 Milspec Heritage G-Class + Trip for 2 to Vancouver, BC (Airfare + 2 Hotel Nights) + Monos Aluminum Luggage Set (ARV $97,500) — or $20,000 Cash Alternative; US + Canada, 18+ (Void AK, HI, RI)",
    frequency: "Enter Once",
    ends: "2026-11-26",
    url: "https://ca.monos.com/collections/pre-merger-mercedes-g-wagon-class?variant=67635293159734",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 178,
    title: "Big Sipz “$16K” Giveaway",
    type: "sweepstakes",
    prizes: "12 Monthly Grand Prizes: $16,000 Check Each (Total ARV $192,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://bigsipz16k.com",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 179,
    title: "House of Suntory “Japan Travel Package” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Japan Trip for 2 — Round-Trip Airfare, 4 Nights Tokyo + 2 Nights Kyoto, First-Class Shinkansen, Yamazaki Distillery Visit (Travel in 2027; ARV $21,550); US, 21+",
    frequency: "Enter Once",
    ends: "2026-12-01",
    url: "https://mysuntorytime.prod.fooji.com/",
    hot: true,
    added: "2026-10-17",
  },

  {
    id: 180,
    title: "Barefoot Wine “NFL” Sweepstakes",
    type: "sweepstakes",
    prizes: "181 Winners: Grand Trip for 2 to Super Bowl LXI in Inglewood, CA — Airfare, Hotel, Transfers, 2 Game Tickets (ARV $10,000) + 180 × $250 NFLShop.com E-Gift Cards Across 17 Entry Periods (Total ARV $55,000); US (Excl. UT) + DC, 21+",
    frequency: "Enter Weekly",
    ends: "2026-12-31",
    url: "https://www.barefootwine.com/nfl.html",
    added: "2026-10-17",
  },

  {
    id: 181,
    title: "Snickers “NFL Halftime” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Day/2-Night Trip for 2 to Super Bowl LXI in Los Angeles — Airfare, 2 Hotel Nights, 2 Game Tickets, $200 Rideshare Credit + $600 Check (ARV $5,325); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.snickers.com/halftime",
    added: "2026-10-17",
  },

  {
    id: 182,
    title: "Coca-Cola “Win 2026 Football” Sweepstakes",
    type: "sweepstakes",
    prizes: "581+ Winners Across 13 Weekly Periods: Gift Cards ($25–$800), 65″ Smart TV, Countertop Fridge, Coke for a Year, Game Tickets, Football Trips (Total ARV $101,194); 50 US + DC + PR, 18+",
    frequency: "Enter Weekly",
    ends: "2026-11-29",
    url: "https://www.coca-cola.com/us/en/offerings/coca-cola/football",
    added: "2026-10-17",
  },

  {
    id: 183,
    title: "Arm & Hammer “LEGOLAND” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 4 to Winner’s Choice of US LEGOLAND Park — Airfare, 2 Hotel Nights, Park Admission for 4, Ground Transport (ARV $5,000) + BOGO Ticket Offer for All Entrants; 50 US + DC, 18+ (Receipt Upload or Free Email AMOE)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://ahxlegoland.com/",
    added: "2026-10-17",
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
            fontSize: "0.95rem",
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
          Listings last verified October 17, 2026. Always check the official rules on
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
