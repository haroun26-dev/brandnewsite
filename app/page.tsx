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

// Listings verified October 19, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
// Listings verified October 19, 2026. Update this list regularly —
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
    id: 184,
    title: "Dunkin’ “EXTRAvaganza Arcade” Instant Win Game",
    type: "instant",
    prizes: "85,101 Winners: (1) Grand: Dunkin’-Branded Keurig Brewer + 4 Boxes K-Cup Pods + $250 Dunkin’ Gift Card + Merch (ARV $400); (300) $10 Gift Cards; (300) $5 Gift Cards; (1,000) Beanies; (500) Truck Block Sets; (1,000) Puffer Cup Sleeves; (82,000) Loyalty Point Awards; 50 US + DC, 18+ (Dunkin’ At Home Extras Members)",
    frequency: "Enter Daily",
    ends: "2026-11-13",
    url: "https://www.dunkinextras.com",
    hot: true,
    added: "2026-10-18",
  },

  {
    id: 185,
    title: "Jason’s Deli “50th Anniversary” Instant Win Game",
    type: "instant",
    prizes: "102,430 Winners: (1) Grand: 3-Night MGM Grand Las Vegas Stay for 4 + 4 United Flight Vouchers (ARV $5,400); (50) Salad Bar for a Year ($624 Each); (100) Six Flags Ticket Pairs ($160 Each); (200) AMC Movie Ticket Packs ($20.50 Each) + Thousands of Food Rewards & Retro Toys; States with Jason’s Deli, 18+ (Deli Dollars Members)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jasonsdeli.com/deli-brationsweepstakes",
    hot: true,
    added: "2026-10-18",
  },

  {
    id: 186,
    title: "Dairy Queen “Spellbound: Secret Lair” Instant Win Game",
    type: "instant",
    prizes: "134,900 Winners: (400) $20 DQ Gift Cards (200 US + 200 CA); (134,500) DQ Rewards Point Prizes (25–100 Points); DQ Rewards Members via DQ App, US + Canada, 18+ (Excl. TX & QC)",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.dairyqueen.com",
    added: "2026-10-18",
  },

  {
    id: 187,
    title: "Fanta “Halloween” Instant Win Game",
    type: "instant",
    prizes: "7,000 Winners: (2,800) Halloween Masks ($8 Each); (2,400) Pairs of AMC Black Movie Tickets ($21/Pair); (1,500) Fanta Beanies ($25 Each); (300) Fanta Tote Bags ($20 Each); 50 US + DC, 13+",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.coca-cola.com/us/en/offerings/fanta/fanta-halloween/spook-the-wheel",
    added: "2026-10-18",
  },

  {
    id: 188,
    title: "Culver’s “Curdtoberfest” Instant Win Game",
    type: "instant",
    prizes: "6,007 Winners: (1) Grand: Munich, Germany Trip for 4 (ARV $19,900); (1) $2,000 Check; (5) Weekly $500 Prepaid Cards; (6,000) Instant-Win Cheese Curd Coupons; 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.culvers.com/curdtoberfest",
    added: "2026-10-18",
  },

  {
    id: 189,
    title: "Schaeffer “Season 2026” Instant Win and Sweeps",
    type: "instant",
    prizes: "839 Winners: (1) Grand: Outdoor Gear Pack — YETI Haul Cooler, YETI Panga 28L Backpack, Weber Traveler Grill, Patagonia Boat Bag, Nikon Binoculars + Visa Gift Card (ARV $3,049); (150) Hoodies; (359) T-Shirts; (24) Camping Chairs; (80) Pullovers; (225) Trucker Hats; 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-28",
    url: "https://www.schaefferseason.com",
    added: "2026-10-18",
  },

  {
    id: 190,
    title: "Grizzly “Camo Life” Instant Win Game",
    type: "instant",
    prizes: "896 Winners: (4) Grand: Yamaha Wolverine RMAX2 1000 XT-R ATV + $10,000 Check (ARV $37,889 Each); (892) $250 Digital Choice Prepaid Mastercards; 50 US + DC, 21+ (Tobacco Consumers, Void MA & MI)",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://www.mygrizzly.com",
    added: "2026-10-18",
  },

  {
    id: 199,
    title: "Nestlé “Coffee-mate Year of Flavor” Instant Win Game",
    type: "instant",
    prizes: "805 Winners: (5) Year’s Groceries as $15,000 Check + $6,000 Tax True-Up; (100) Year’s Coffee-mate as $200 Check; (700) Exclusive Coffee-mate Branded Mug (Total ARV $139,700); US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-22",
    url: "https://www.coffeematesweeps.snipp.us",
    added: "2026-10-19",
  },

  {
    id: 200,
    title: "Raising Cane’s “Caniac Football” Instant Win Game",
    type: "instant",
    prizes: "1,920 Prizes: Merch (Hopsulator 3-in-1, ReHydration Bottle, Fanny Pack, AirTag Holder Set, “No Bad Days” Hats, 30th Birthday Plush) + Free-Food Digital Codes (Sauce, Toast, Drink, Fries) (Est. Value $4,809); Limit 1 Prize Per Person; US, 18+ (Free Caniac Club)",
    frequency: "Enter Daily",
    ends: "2026-11-22",
    url: "https://www.raisingcanes.com/football",
    added: "2026-10-19",
  },

  {
    id: 201,
    title: "Ken Griffey Jr. “MLB Trivia” Instant Win Game",
    type: "instant",
    prizes: "MLB Game Tickets, Autographed Ken Griffey Jr. Items, MLB TV Subscriptions + Instant-Win MLBShop.com Gift Cards and Promo Codes (Est. Value $59,307); 50 US + DC, 18+ (Sponsor: BlueTriton Brands)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.baseball-trivia.com",
    added: "2026-10-19",
  },

  {
    id: 202,
    title: "Dr Pepper & Cheez-It “Fall Football” Instant Win Game",
    type: "instant",
    prizes: "3,150 Instant Winners: (600) $25 and (2,550) $10 Rewards — Winner’s Choice of Fanatics eGift Card, Xbox eGift Card, or Fandango Promo Code (Total ARV $40,500); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.drpeppercheezitgame.com",
    added: "2026-10-19",
  },

  {
    id: 203,
    title: "Hidden Valley Ranch “Spooky Ranch” Instant Win Game",
    type: "instant",
    prizes: "25 Instant Winners: $25 Fandango + $75 Walmart Digital Gift Card Movie-Night Pack Each (ARV $100 Each); 50 US + DC, 18+ (Verified vs Official Sponsor Page)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hiddenvalley.com/spooky-ranch-movie-adventure/",
    hot: true,
    added: "2026-10-19",
  },

  {
    id: 204,
    title: "Bud Light “College Game Day” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners: (1,000) $100 Fanatics.com Gift Codes; (500) Bud Light Vintage Hats ($15 Each); (500) Bud Light Vintage T-Shirts ($15 Each); US, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.budlight.com/UpgradeYourCollegeGameday",
    added: "2026-10-19",
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
    id: 183,
    title: "Arm & Hammer “LEGOLAND” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 4 to Winner’s Choice of US LEGOLAND Park — Airfare, 2 Hotel Nights, Park Admission for 4, Ground Transport (ARV $5,000) + BOGO Ticket Offer for All Entrants; 50 US + DC, 18+ (Receipt Upload or Free Email AMOE)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://ahxlegoland.com/",
    added: "2026-10-17",
  },

  {
    id: 193,
    title: "Guitar Center “AlphaTheta Beat Lab” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: AlphaTheta XDJ-AZ-N 4-Channel DJ System ($3,629) + 2 WAVE-EIGHT Speakers ($999 Each) + HDJ-F10 Headphones + Cases, Stands & Cables (ARV $6,695.96); 50 US, 18+",
    frequency: "Enter Once",
    ends: "2026-10-28",
    url: "https://www.guitarcenter.com",
    added: "2026-10-18",
  },

  {
    id: 194,
    title: "Depend “Coach Prime” Sweepstakes",
    type: "sweepstakes",
    prizes: "101 Winners: (1) Grand: 2-Night Trip for 2 to a Colorado Buffaloes Game in Boulder — Airfare, Hotel, Tickets, Pre-Game Hospitality, Meet-and-Greet with Deion Sanders + $500 Cash + (100) Product Prize Packs; 50 US, 18+",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://www.dependsweepstakes.com",
    added: "2026-10-18",
  },

  {
    id: 195,
    title: "Seagram’s Escapes “Escape the Bustle” Sweepstakes",
    type: "sweepstakes",
    prizes: "25 Winners: Backyard Movie-Night Pack Each — iLive Pop-Up Cinema Kit, Faux Fur Bean Bag + Throw, Snack Bucket (ARV $519.05 Each; Total ARV $12,976.25); 50 US, 21+",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://www.seagramsescapes.com",
    added: "2026-10-18",
  },

  {
    id: 196,
    title: "Dippin’ Dots “Kickoff to Cool” Sweepstakes",
    type: "sweepstakes",
    prizes: "9 Winners: (1) Grand: Weber Grill, 25 Servings, Cornhole Set, Rocker Chair + Swag (ARV $958.26); (3) First Prizes ($428.96 Each); (5) Runner-Up Swag Boxes ($39.39 Each; Total ARV $2,442.09); 50 US, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.dippindots.com",
    added: "2026-10-18",
  },

  {
    id: 198,
    title: "BOTE “Greetings from Islamorada” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: 3-Night Florida Keys Stay for Up to 4 at BOTE House Islamorada + $500 Food/Beverage Credit + $500 Airline Credit + BOTE Chair & Tumbler (ARV $4,204); 50 US, 18+",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://www.boteboard.com",
    added: "2026-10-18",
  },

  {
    id: 205,
    title: "Drake Waterfowl “Drake x Simmons Sporting Goods” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: 2026 Can-Am Outlander 500 DPS ATV Fully Loaded — 2,500 lb. Winch, Heavy-Duty Bumpers, A-Arm Guards, LinQ Gear Grips, Rear Luggage Rack, Snorkel Kit, LED Light Kit, 26″ Trail King Tires (ARV $14,000+); US, 18+",
    frequency: "Enter Once",
    ends: "2026-12-20",
    url: "https://www.drakewaterfowl.com/pages/drake-x-simmons-sporting-goods-giveaway",
    added: "2026-10-19",
  },

  {
    id: 206,
    title: "Lowe’s “Lowe’s x Cleveland Browns” Sweepstakes",
    type: "sweepstakes",
    prizes: "101 Winners: Grand: $10,000 Lowe’s Gift Card + Browns Helmet Signed by Joel Bitonio + Kobalt Browns Mini Toolbox + 46″ Kobalt Browns Workbench; (100) First Prizes: $10 Lowe’s E-Gift Cards; 50 US + DC, 18+ (Free MyLowe’s Rewards Account)",
    frequency: "Enter Once",
    ends: "2027-01-10",
    url: "https://www.lowes.com/events/register/nfl-cleveland-browns-event",
    added: "2026-10-19",
  },

  {
    id: 207,
    title: "Bravo Insider “Vanderpump Vegas” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: Las Vegas Trip — RT Airfare, 4 Nights at The Vanderpump Hotel, $500 Dining Credit, Soleia Beach Daybed Rental + $200 Dining Credit + $500 Spending Money (ARV $4,972.17); 50 US + DC, 18+ (Free Bravo Insider Membership; 21+ for Hotel Check-In)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://www.bravotv.com/the-daily-dish/chance-to-win-a-trip-to-las-vegas-sweepstakes-details",
    added: "2026-10-19",
  },

  {
    id: 208,
    title: "iHeartRadio x JCPenney “Jingle Ball” Sweepstakes",
    type: "sweepstakes",
    prizes: "27 Winners: $3,500 NYC Trip for 2 (Airfare, Transfers, 2 Hotel Nights, Z100’s Jingle Ball Tickets Dec 11, Artist Experience) + JCPenney Gift Cards ($1,000/$750/$500/$250) + Signed Artist Merch (Total ARV $13,050); 50 US + DC, 18+ (Trip Drawing Closes Nov 15)",
    frequency: "Enter Daily",
    ends: "2026-12-20",
    url: "https://news.iheart.com/promotions/iheartradio-jingle-ball-x-jcpenney-sweepstakes-1925122/",
    hot: true,
    added: "2026-10-19",
  },

  {
    id: 209,
    title: "Cap’n Crunch “Find The Cap’n” Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "1 Winner + Up to 3 Guests: Mystery-Location Getaway — RT Coach Airfare for 4, 4 Nights Lodging, Daily Breakfast, Rental Car, Massages + $500 Check for Meals/Incidentals (ARV $7,540); 50 US + DC, 18+ (19+ in AL/NE)",
    frequency: "Enter Daily",
    ends: "2026-11-08",
    url: "https://www.capncrunchmystery.com/",
    added: "2026-10-19",
  },

  {
    id: 210,
    title: "AirMedCare Network “College Football $10,000” Giveaway",
    type: "sweepstakes",
    prizes: "1 Winner: $10,000 Cash via ACH (10 Initial Entries at Registration + 1 Daily, 60 Max Total); US + DC, 18+ (Excl. AK, NY, RI, WV, WY)",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.amcn-college-football-giveaway.com/",
    hot: true,
    added: "2026-10-19",
  },

  {
    id: 211,
    title: "Feastables “Halloween Capitol” Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners: $10,000 Cash Each (Total ARV $50,000) — Drawn from Registered Entrants in the Winning State on Oct 28 (National Chocolate Day); 50 US + DC + PR & Territories, 18+ (No Purchase Necessary; Receipt Upload Optional)",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://feastables.com/pages/halloween-sweepstakes",
    hot: true,
    added: "2026-10-19",
  },

  {
    id: 212,
    title: "HGTV “Trick or Treat Yourself” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $5,000 Cash — Enter Twice Daily (Once on HGTV.com, Once on Food.com); US, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://www.hgtv.com/sweepstakes/trick-or-treat-yourself",
    added: "2026-10-19",
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
          Listings last verified October 19, 2026. Always check the official rules on
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
