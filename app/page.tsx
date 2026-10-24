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

// Listings verified October 24, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
// Listings verified October 24, 2026. Update this list regularly —
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
    id: 204,
    title: "Bud Light “College Game Day” Instant Win Game",
    type: "instant",
    prizes: "2,000 Winners: (1,000) $100 Fanatics.com Gift Codes; (500) Bud Light Vintage Hats ($15 Each); (500) Bud Light Vintage T-Shirts ($15 Each); US, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.budlight.com/UpgradeYourCollegeGameday",
    added: "2026-10-19",
  },

  {
    id: 214,
    title: "Copenhagen “250th Forged in Freedom” Sweepstakes & Instant Win Game",
    type: "instant",
    prizes: "13,001 Winners: Grand: 2026 Ford F-250 + $30,000 Check (ARV $138,560) + 13,000 Instant-Win $25 Visa Reward Virtual Cards (Total ARV $463,560); US + DC, 21+ (Registered Tobacco Consumers; Excl. MA & MI)",
    frequency: "Enter Daily",
    ends: "2026-11-01",
    url: "https://www.freshcope.com",
    added: "2026-10-20",
  },

  {
    id: 215,
    title: "Yesway & Allsup’s Spin-to-Win Game & Sweepstakes",
    type: "instant",
    prizes: "Grand: All-Terrain Vehicle (ARV $10,000); First: Trip for 2 to the SEC Football Championship in Atlanta — 2 Hotel Nights + Pre-Game Party Passes, No Airfare (ARV $3,600) + 115,800 Spin-to-Win Instant Prizes (Drinks, Food Vouchers, Fuel Discounts; Total ARV $358,650); AZ, MO, NE, NM, OK, SD, TX, WY Only, 21+ (Yesway/Allsup’s Rewards; Instant Spins Require Qualifying Purchase — Drawings Free by Mail-in)",
    frequency: "Enter Daily",
    ends: "2026-11-03",
    url: "https://allsups.com/sweepstakes/spin-to-win/",
    added: "2026-10-20",
  },

  {
    id: 216,
    title: "Margaritaville Vacation Club “Vacation a Day” Instant Win Game",
    type: "instant",
    prizes: "181 Winners: Grand: Choice of 7-Night Margaritaville at Sea Islander Cruise for 2 + $2,500 Airfare Voucher (ARV up to $5,499) OR 7-Night Resort Stay for 4 + $2,500 Airfare Voucher (ARV up to $8,623) + 180 Daily Prizes: 2-Night Studio-Suite Stays (ARV $973–$1,505 Each); US, 28+",
    frequency: "Enter Daily",
    ends: "2027-01-13",
    url: "https://finsup.margaritavillevacationclub.com/sweepstakes-2026",
    hot: true,
    added: "2026-10-20",
  },

  {
    id: 218,
    title: "Swig “Take The Chance” Instant Win Game",
    type: "instant",
    prizes: "2,263 Winners: (3) $100 Swig Gift Cards + Instant Prizes: 490 Free 24 oz Drinks, 140 Free Pretzel Bites, 630 BOGO Drinks, 1,000 Free Upgrades (Total ARV ~$4,214); US, 18+ (19+ AL/NE, 21+ MS; Excl. NY, RI, HI, AK, FL, DC)",
    frequency: "Enter Daily",
    ends: "2026-11-04",
    url: "https://web.witcontests.com/swig/giveaway/slots/take-the-chance-win-a-dollar10-2610082",
    added: "2026-10-20",
  },

  {
    id: 227,
    title: "Coffee mate “Year of Flavor” Instant Win Game",
    type: "instant",
    prizes: "805 Winners: (5) Grand: Year’s Groceries as a $15,000 Check + $6,000 Tax True-Up (ARV $21,000 Each) + (100) First: 1-Year Coffee mate Supply as a $200 Check + (700) Instant: Branded Mugs (ARV $21 Each; Total Program ARV $139,700); 50 US + DC, 18+ (Nestlé USA; No Purchase Necessary)",
    frequency: "Enter Daily",
    ends: "2026-11-22",
    url: "https://coffeemate.com/yearofflavor-sweeps",
    added: "2026-10-21",
  },

  {
    id: 228,
    title: "NÜTRL “College Football Final” Instant Win + Sweepstakes",
    type: "instant",
    prizes: "19 Total: (1) Grand: $9,000 Prepaid Card (Winner Arranges Own Travel — No Alcohol Awarded) + (18) Instant: Tailgate Packs (Cooler, Hat, Chair, Power Bank, 6 Coolies; ARV $203 Each); 50 US + DC, 21+ (Anheuser-Busch; Mobile-Phone Verification Required)",
    frequency: "Enter Daily",
    ends: "2026-12-04",
    url: "https://airbaton.net/l/nutrlcollegefootballsweeps",
    added: "2026-10-21",
  },

  {
    id: 229,
    title: "Clorox “Catch Holiday 2026” Instant Win + Sweepstakes",
    type: "instant",
    prizes: "102 Winners: (50) Instant: All Purpose Cleaner Spray (ARV $5.52 Each), (50) Instant: 75-ct Scentiva Disinfecting Wipes (ARV $8 Each) + (2) Drawing Prize Packs — ToiletWand Kit, Organizer, Towels, Scrubbers (ARV $137.74 Each; Total ARV $951.48); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-15",
    url: "https://www.clorox.com/lp/clorox-play/",
    added: "2026-10-21",
  },

  {
    id: 230,
    title: "Bud Light × NFL “Upgrade Your Game Day” Instant Win",
    type: "instant",
    prizes: "11,200 Winners: 50 Pairs of NFL Game Tickets ($600 Each), 50 Charcoal Grills ($150), 50 Bud Light NFL 54QT Coolers ($300), 50 Tailgate Sets ($100), 1,000 × $100 Fanatics Gift Cards, 10,000 × 1-Month NFL+ Premium ($14.99; Total ARV $307,400; Limit 1 Prize/Person); US + DC, 21+ (Entry via @budlight Messenger/Instagram Chatbot; Free Web, In-Store QR, or Hashtag Comment Routes)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://budlight.com/UpgradeYourGameday",
    hot: true,
    added: "2026-10-21",
  },

  {
    id: 231,
    title: "LD “Make It Count” Instant Win Game",
    type: "instant",
    prizes: "3,545 Instant Winners: 470 × $100 Amazon E-Gift Cards, 550 × $50, 800 × $25 + 1,725 × 100 LD Instant Win Reward Points (ARV $0.4488 Each; Total ARV ~$95,274); US + DC, 21+ (Age-Verified LD Rewards Account; Excl. MA, MI, VA)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://rewards.ldcigarettes.com",
    added: "2026-10-21",
  },

  {
    id: 232,
    title: "BeatBox “Sip Into the Season” Instant Win Game",
    type: "instant",
    prizes: "(1) Grand: Two 2-Day Ikon Lift Passes (2026–27 Ski Season) + $2,500 Cash Toward Travel (ARV $3,100; Drawn ~Jan 4, 2027) + (175) Bluetooth Speakers ($30), (200) Holiday Scarves ($10), (175) Light-Up Charging Cables ($6; Total ARV $11,400); Legal US, 21+ (Excl. FL, NY)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://web.witcontests.com/beatbox/giveaway/spin/sip-into-the-season-260930",
    added: "2026-10-21",
  },

  {
    id: 233,
    title: "PERFECT Sports “Masters of the Universe Power Giveaway” Instant Win Prize Wheel",
    type: "instant",
    prizes: "(4) Grand: He-Man Power Sword + 1-Year Supply of PERFECT Sports Products + $2,500 Cash (ARV $4,680 Each) + Up to (320) Weekly Instant-Wheel Prizes (ARV $98.50 Each; $31,520 Instant Pool); Contiguous US + DC or Canada, 18+ (No Purchase Necessary)",
    frequency: "Enter Once",
    ends: "2026-12-07",
    url: "https://perfectsports.com/motu",
    added: "2026-10-21",
  },

  {
    id: 234,
    title: "Duracell “Atlassian Williams F1 Team Race Weekend” Sweepstakes & Instant Win",
    type: "instant",
    prizes: "(1) Las Vegas Grand: 5-Day/4-Night Trip for 2 — RT Coach Airfare, 4-Night Hotel, F1 Driver Meet & Greet, Ground Transport (ARV $12,000; Trip Drawing Entries Now Closed) + (200) Instant: Hats, Mini Helmets, Totes, Polos, T-Shirts, LEGO Speed Champions Williams FW46 Cars, Water Bottles (Instant ARV $10,580; Combined ARV $22,580); US + DC, 18+ (Instant Spins via Duracell Purchase Receipt Upload or Free AMOE Mail-In/Code)",
    frequency: "Enter Daily",
    ends: "2026-11-21",
    url: "https://usracingsweeps.duracell.com",
    added: "2026-10-21",
  },

  {
    id: 243,
    title: "Fanta \u201cBuild Your Alebrije\u201d Sweepstakes & Instant Win Game",
    type: "instant",
    prizes: "Grand: 4-Day/3-Night Trip for 2 to the Day of the Dead Ball in Chicago (Nov 2027) \u2014 Airfare, Hotel, Event Tickets, Guided D\u00eda de Muertos Tour, $250 Transport Gift Card + $500 Check (ARV $4,600) + 100 Instant-Win Day of the Dead Altar Prize Kits (ARV $79.61 Each); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-06",
    url: "https://www.coca-cola.com/us/en/offerings/fanta/dia-de-los-muertos/create-your-own-alebrije",
    added: "2026-10-22",
  },

  {
    id: 244,
    title: "Jason\u2019s Deli 50th Anniversary Instant Win Game",
    type: "instant",
    prizes: "Grand: 3-Night MGM Grand Las Vegas Stay + 4 United Airlines Flight Vouchers (ARV $5,400) + 100,000+ Instant Prizes: 50 \u00d7 Salad-Bar-for-a-Year ($624 Each), 100 Six Flags Ticket Pairs, 200 AMC Movie Packs, 15,000 \u00d7 $5 Rewards, Free-Food Items + Retro Prizes (Schwinn Bikes, Arcade Cabinets; Total ARV $391,413.82); 18+, Legal US Residents in States with a Jason\u2019s Deli (Free Deli Dollars Rewards Membership)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jasonsdeli.com/deli-brationsweepstakes/",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 245,
    title: "Camel \u201cOut There\u201d Daily Instant Win Game",
    type: "instant",
    prizes: "800 Instant: Digital Choice Prepaid Mastercards ($25 or $50 Each; ARV $23,000) + 79 Weekly Prizes (Guitar Setups, Hotel Vouchers, Surfboards; ARV $37,600) + 4 Grand: Concert Experiences or LA/NY/Tropical Trips (ARV $1,500\u2013$2,500 Each; Total ARV $69,600); 50 US + DC, 21+ (Tobacco Consumers; Excl. MA & MI; Free camel.com Account)",
    frequency: "Enter Daily",
    ends: "2026-11-04",
    url: "https://www.camel.com",
    added: "2026-10-22",
  },

  {
    id: 246,
    title: "DSW Shoebox Shuffle Instant Win Game",
    type: "instant",
    prizes: "(5) Grand: $500 DSW Gift Cards + (450) 1,000 DSW VIP Rewards Points ($5 Each) + (50,000) 400 Points ($2 Each) + (100,000) 200 Points ($1 Each; Total ARV $204,750); US, 18+ (Free DSW VIP Rewards Membership)",
    frequency: "Enter Daily",
    ends: "2026-10-25",
    url: "https://www.dsw.com/vip-game",
    added: "2026-10-22",
  },

  {
    id: 247,
    title: "AARP Texas Roadhouse Instant Win Game",
    type: "instant",
    prizes: "200 Instant Winners: $10 Texas Roadhouse Gift Cards (Redeemable at Texas Roadhouse, Bubba\u2019s 33, Jaggers); 50 US + DC, 18+ (Free AARP Rewards Registration \u2014 No Paid Membership; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-10-27",
    url: "https://sweeps.aarp.org/",
    added: "2026-10-22",
  },

  {
    id: 248,
    title: "AARP Bed Bath & Beyond Instant Win Game",    type: "instant",
    prizes: "200 Instant Winners: $10 Bed Bath & Beyond Gift Cards; 50 US + DC, 18+ (Free AARP Rewards Registration \u2014 No Paid Membership; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-10-24",
    url: "https://sweeps.aarp.org/",
    added: "2026-10-22",
  },

  {
    id: 249,
    title: "Dr. Squatch \u00d7 IShowSpeed Loot Box Bundle Sweepstakes",
    type: "instant",
    prizes: "25 Instant Winners: $10,000 Cash Each (Total Loot-Box Pool $250,000); 50 US + DC, 18+ (No Purchase Necessary \u2014 Up to 5 Free Scratchers/Person via AMOE Form; Scratch to Reveal Instant Win)",
    frequency: "Enter Once",
    ends: "2026-10-25",
    url: "https://speedrunmdm.com",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 258,
    title: "Frito-Lay \u201cHappy Holi-Lays\u201d Instant Win Game",
    type: "instant",
    prizes: "1,297 Instant Winners: Holi-Lays Glass & Wood Chip Bowls, Sweaters, Charcuterie Sets, Lays x Le Creuset Casseroles, Multicookers & More (Total ARV $103,795); 50 US + DC, 18+ (Free Code Request, No Purchase Necessary; Entry Opens Oct 26, 2026)",
    frequency: "Enter Daily",
    ends: "2026-12-27",
    url: "https://www.happyholi-lays.com",
    hot: true,
    added: "2026-10-23",
  },

  {
    id: 259,
    title: "Skrewball Peanut Butter Whiskey \u201cHalloween\u201d Instant Win Game",
    type: "instant",
    prizes: "200 Instant Winners: Halloween Costume Set for 4 (1 Skrewball Bottle Costume + 3 Shot Costumes; No Alcohol Included; ARV $35 Each; Total ARV $7,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-15",
    url: "https://www.skrewballwhiskey.com",
    added: "2026-10-23",
  },

  {
    id: 260,
    title: "Natural Light \u201cGreat Prizes\u201d Instant Win Game",
    type: "instant",
    prizes: "60 Instant Winners Across 12 Entry Periods: Natty Merch Incl. LED Signs, Coolers, Dartboards, Boat Shoes, Garden Gnomes & Recliner Chairs (ARV $30\u2013$407 Each); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.naturallight.com/GreatPrizes",
    added: "2026-10-23",
  },

  {
    id: 261,
    title: "76 / Phillips 66 / Conoco \u201cFeedback Giveaway\u201d Instant Win Game",
    type: "instant",
    prizes: "100 Instant Winners: $10 Gas Gift Cards Each + 3 Monthly $100 Gift Card Drawings (Total ARV $1,300); US, Licensed Drivers of Majority Age (Entry via Customer Survey or Free Mail-in AMOE; Limit 1 Play/Day, 15 Total)",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://76feedback.com",
    added: "2026-10-23",
  },

  {
    id: 262,
    title: "Hidden Valley \u201cSpooky Ranch Movie Adventure\u201d Instant Win Game",
    type: "instant",
    prizes: "100 Instant Winners: Prize Pack of $25 Fandango Gift Card + $75 Walmart Gift Card (ARV $100 Each; Total ARV $10,000); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.hiddenvalley.com/spooky-ranch-movie-adventure",
    added: "2026-10-23",
  },

  {
    id: 263,
    title: "Recreation \u201cBondi Beach\u201d Instant Win Giveaway",
    type: "instant",
    prizes: "10 Instant Winners: $500 Recreation Prize Pack Each (Choice of Fragrance, Skincare & Body Mists) + Every Entrant Gets 10% Off (Australian Sponsor; No Age Restriction Stated; One Entry Per Email)",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://recreationbeauty.com/pages/win-1-of-10-x-500-recreation-packs",
    added: "2026-10-23",
  },

  {
    id: 264,
    title: "Cape Kennedy Clothing \u201cMonthly\u201d Instant Win Sweepstakes",
    type: "instant",
    prizes: "25 Winners Per Monthly Period: Cape Kennedy Shirt of Choice w/ Free Shipping (ARV $69.99 Each; $1,749.75 October Pool); 50 US + DC, 18+ (One Entry Per Person Per Period)",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://capekennedyclothing.com",
    added: "2026-10-23",
  },

  {
    id: 273,
    title: "Jameson Irish Whiskey \u201cFirst Round on Us\u201d Instant Win Game",
    type: "instant",
    prizes: "5,000 Instant Winners: $20 via PayPal or Venmo Toward Your Next Round of Jameson (Total ARV $100,000); 21+, Legal Residents of AZ, HI, IN, KY, LA, ME, MD, MA, MS, NH, NC, OR, PA, TN, TX, UT, VA Only",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.jamesonwhiskey.com/en-us/first-round-on-jameson-sweeps",
    hot: true,
    added: "2026-10-24",
  },

  {
    id: 274,
    title: "Jameson Irish Whiskey \u201cFall Sports\u201d Instant Win Game",
    type: "instant",
    prizes: "105 Instant Winners: 13 \u00d7 $1,500 Toward Streaming Services (via PayPal/Venmo) + 92 Replica Football Jerseys ($25 Each; Total ARV $21,800); 50 US + DC, 21+ (Valid Driver\u2019s License or Gov\u2019t Photo ID)",
    frequency: "Enter Daily",
    ends: "2026-10-31",
    url: "https://www.jamesonwhiskey.com/en-us/its-on",
    added: "2026-10-24",
  },

  {
    id: 275,
    title: "AARP \u201cMovies for Grownups\u201d Sweepstakes + Instant Win Game",
    type: "instant",
    prizes: "597 Instant-Win Amazon Gift Cards (2 \u00d7 $500, 5 \u00d7 $50, 20 \u00d7 $20, 100 \u00d7 $10, 470 \u00d7 $5) + Grand: Trip for 2 to Los Angeles for the Movies for Grownups Awards (ARV $10,900); 50 US + DC, 21+ (Free AARP.org Account)",
    frequency: "Enter Daily",
    ends: "2026-11-16",
    url: "https://www.aarp.org/membership/sweeps/movies-for-grownups-sweepstakes/",
    added: "2026-10-24",
  },

  {
    id: 276,
    title: "AARP Rewards Amazon Instant Win Game",
    type: "instant",
    prizes: "15 Instant Winners: $100 Amazon.com eGift Cards Each (Total ARV $1,500); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership)",
    frequency: "Enter Daily",
    ends: "2026-10-26",
    url: "https://sweeps.aarp.org/",
    added: "2026-10-24",
  },

  {
    id: 277,
    title: "AARP Rewards Michaels Instant Win Game",
    type: "instant",
    prizes: "200 Instant Winners: $10 Michaels Gift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form)",
    frequency: "Enter Daily",
    ends: "2026-10-29",
    url: "https://sweeps.aarp.org/",
    added: "2026-10-24",
  },

  {
    id: 278,
    title: "AARP Rewards Publix Instant Win Game",
    type: "instant",
    prizes: "200 Instant Winners: $10 Publix eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership)",
    frequency: "Enter Daily",
    ends: "2026-10-28",
    url: "https://sweeps.aarp.org/",
    added: "2026-10-24",
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
    id: 219,
    title: "PROMPERU “The Great Escape” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: 7-Day Peru Trip (Cusco, Sacred Valley, Inca Trail, Machu Picchu) — Round-Trip Economy Flights to Lima + Lima–Cusco Flights, Intrepid Travel Inca Trail Express for 2, 2× Big Agnes Tent/Sleeping Bag/Pad Sets, 2× Cotopaxi Packs + Fuego Jackets, 2× La Sportiva Boots, AFAR Gift Card + 2-Yr Magazine Sub, $500 World Nomads Visa Gift Card (ARV $10,648); 48 Contiguous US + DC & Canada (Excl. QC), 18+",
    frequency: "Enter Once",
    ends: "2026-11-06",
    url: "https://peru.travel/thegreatescape",
    hot: true,
    added: "2026-10-20",
  },

  {
    id: 220,
    title: "Travel Wisconsin “Wonder-Filled Packers” Sweepstakes",
    type: "sweepstakes",
    prizes: "14 Winners: 5× Grand: On-Field Flag-Holding Experience + 2 Festival Foods MVP Deck Tickets (Packers vs. Lions, Jan 9/10 2027) + Food/Drinks, Lambeau Tours, Hall of Fame Passes, $200 Packers Pro Shop Card; 5× First: 2 MVP Deck Tickets (Packers vs. Bills, Dec 13, 2026) + Tours + HOF Passes + $200 1919 Kitchen & Tap Card; 4× Second: 4 Outdoor-Bowl Tickets to a Packers Home Game + Autographed Football/Mini Helmet + Tours + HOF Passes; US, 18+ (Excl. AK, HI, FL, NY, RI)",
    frequency: "Enter Once",
    ends: "2026-11-11",
    url: "https://www.travelwisconsin.com/wonder-filled-packers-sweepstakes",
    added: "2026-10-20",
  },

  {
    id: 223,
    title: "Dr Pepper “Football Tuition” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $10,000 Tuition Award via Scholarship America — Payable to an Accredited US College/University/Trade School (Tuition, Fees, Books, Room & Board) or Toward Student Loans; May Be Gifted to One Designee (ARV $10,000); 50 US + DC, 18+ (Excl. PR & Territories)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://drpeppertuitiongiveaway.com/",
    hot: true,
    added: "2026-10-20",
  },

  {
    id: 224,
    title: "Henkel “Winning Starts At Home” Sweepstakes",
    type: "sweepstakes",
    prizes: "76 Winners: 13× Grand: Alex Morgan Autographed Item + $500 U.S. Soccer Store Digital Gift Card + Henkel Sample Box ($597–$704 Each); 13× First: 2026 USWNT Replica Jersey + $150 Gift Card + Sample Box ($320 Each); 50× Second: $150 Gift Card + Sample Box ($220 Each; Total ARV $24,312); 50 US + DC, 18+ (19+ AL/NE)",
    frequency: "Enter Daily",
    ends: "2026-11-13",
    url: "https://henkelsoccersweeps.com/",
    added: "2026-10-20",
  },

  {
    id: 235,
    title: "Sapporo “Flyaway to Japan” Sweepstakes",
    type: "sweepstakes",
    prizes: "(1) Grand: Trip for 2 to Tokyo — RT Coach Airfare, 4 Nights Hotel (Greater Tokyo Metro) + $1,500 Check (ARV $7,100) + (5) First: Onimusha Custom Fan Kits (ARV $1,000 Each); US, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.sapporotojapan.com",
    added: "2026-10-21",
  },

  {
    id: 236,
    title: "Revance Therapeutics “Ultimate RHA Getaway” Sweepstakes",
    type: "sweepstakes",
    prizes: "(4) Grand, Each: 5-Day/4-Night Trip for 2 to Miami or San Diego — RT Economy Airfare, 4 Nights (Fontainebleau Miami Beach or Catamaran Resort), Uber Gift Card, Choice Excursion, One RHA Treatment + $1,000 Check for Meals/Incidentals (ARV $7,900 Each; Total ARV $31,600); 50 US + DC, 22+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://rhacollection.com",
    added: "2026-10-21",
  },

  {
    id: 237,
    title: "Hallmark Channel “Countdown To Christmas” Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "(1) Grand: $20,000 Check + $250 Spoonful of Comfort Gift Card (ARV $20,250) + (11) Weekly: $1,000 + Spoonful of Comfort Package Each (Total ARV $32,759.89); 50 US + DC + PR, 18+",
    frequency: "Enter Weekly",
    ends: "2026-12-29",
    url: "https://christmasmoviegame.hallmarkchannel.com",
    hot: true,
    added: "2026-10-21",
  },

  {
    id: 238,
    title: "Ford “Mustang 5.0 Fever” Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "(1) Grand: 2026 Ford Mustang GT (Max MSRP $55,000) + Up to $5,000 in Ford Racing Parts Including Installation (ARV Up to $60,000); 48 Contiguous US + DC, Licensed Drivers, 18+",
    frequency: "Enter Once",
    ends: "2026-12-18",
    url: "https://www.mustang50fever.com",
    hot: true,
    added: "2026-10-21",
  },

  {
    id: 239,
    title: "Monos “Mercedes-Benz G320” Sweepstakes",
    type: "sweepstakes",
    prizes: "(1) Grand: Restored 1998 Mercedes-Benz G320 Milspec Heritage G-Class + Trip for 2 to Vancouver (RT Coach Airfare, 2 Nights Hotel) + Monos Luggage Set (ARV $97,500) OR $20,000 Cash Alternative; US (Excl. AK, HI, RI) + Canada (Excl. QC), Age of Majority",
    frequency: "Enter Once",
    ends: "2026-11-26",
    url: "https://monos.com/giveaway",
    hot: true,
    added: "2026-10-21",
  },

  {
    id: 240,
    title: "Realtor.com “New Home for the Holidays” $100K Veteran Homebuyer Giveaway",
    type: "sweepstakes",
    prizes: "(1) Grand: $100,000 Cash Applied Toward a Qualifying Primary-Residence Home Purchase; 50 US + DC, 18+ (U.S. Military Service Members or Veterans Only)",
    frequency: "Enter Once",
    ends: "2026-12-17",
    url: "https://www.realtor.com/win-100k",
    hot: true,
    added: "2026-10-21",
  },

  {
    id: 241,
    title: "Travel + Leisure Vacations “Tickets For A Year” Sweepstakes",
    type: "sweepstakes",
    prizes: "(1) Grand: $3,000 in Ticketmaster E-Gift Cards (ARV $3,000); 50 US + DC, 21+ (Valid SSN/Tax ID)",
    frequency: "Enter Once",
    ends: "2026-12-08",
    url: "https://lnpromos.com/tfay10tnl",
    added: "2026-10-21",
  },

  {
    id: 242,
    title: "Celebrity Wheel of Fortune Sweepstakes",
    type: "sweepstakes",
    prizes: "Dream VIP Vacation or $10,000 Cash Prizes (Total ARV Up to $102,034); 50 US + DC (Excl. Territories), Age of Majority (Requires Free Wheel Watchers Club Membership)",
    frequency: "Enter Weekly",
    ends: "2026-12-19",
    url: "https://www.wheeloffortune.com",
    added: "2026-10-21",
  },

  {
    id: 250,
    title: "Montana Knife Company Ultimate Basecamp 4x4 RV Giveaway",
    type: "sweepstakes",
    prizes: "Grand: Ridge XT Overlander 4x4 RV + Gear Package (Traeger Ironwood 885, MKC Culinary Set, $1,500 Boot Barn Gift Card, Solar Generator, Bakcou eBike, Vortex Optics, YETI Package, Sitka, Rumpl; ARV $183,000) OR $100,000 Cash Substitute + Gear (ARV $119,000); US (Excl. NY & FL) + DC, 18+ (Valid Driver\u2019s License)",
    frequency: "Enter Once",
    ends: "2026-12-01",
    url: "https://www.montanaknifecompany.com/pages/ultimate-basecamp-4x4-rv-giveaway",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 251,
    title: "Ford NASCAR Cup Series Chase Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ford F-150 Raptor (Up to $94,360 ARV) + 10 Weekly Prizes (Autographed Ford Racing Flags, Swag Bags, NASCAR Shop Gift Cards, Race Tickets, Merch Packages; Total Prize Value $96,860); 50 US + DC, 18+ (Valid Driver\u2019s License)",
    frequency: "Enter Daily",
    ends: "2026-11-08",
    url: "https://thechasefordpromo.nascar.com/",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 252,
    title: "Redline Society RS61 Twin Turbo F-150 Giveaway",
    type: "sweepstakes",
    prizes: "Grand: Twin Turbo Ford F-150 (5.0L Coyote V8, 1,300+ WHP, MSRP ~$90,000) + $30,000 Cash Check (Total ARV $120,000); 50 US + DC, 18+ (No Purchase Necessary \u2014 Free Entry Path per Official Rules)",
    frequency: "Enter Once",
    ends: "2027-01-07",
    url: "https://redlinesociety.com/giveaways/rs61-twin-turbo-f150",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 253,
    title: "PCH Cadillac Escalade ESV Giveaway",
    type: "sweepstakes",
    prizes: "Grand: Cadillac Escalade ESV 4WD Sport OR $75,000 Cash; US, 21+ (No Purchase Necessary; Free Mail-in Entry Option)",
    frequency: "Enter Once",
    ends: "2026-12-17",
    url: "https://www.pch.com/pages/giveaway-m002",
    hot: true,
    added: "2026-10-22",
  },

  {
    id: 254,
    title: "Eckler\u2019s $6,000 Sweepstakes",
    type: "sweepstakes",
    prizes: "(6) Winners: Payment Vouchers of up to $1,000 Each for AmericanMuscle.com, AmericanTrucks.com, ExtremeTerrain.com, Throtl.com or Ecklers.com (Total ARV $6,000); US + DC + Canada (Excl. FL, NY, RI, QC), 18+",
    frequency: "Enter Daily",
    ends: "2026-11-18",
    url: "https://www.ecklers.com/ek-sweepstakes.html",
    added: "2026-10-22",
  },

  {
    id: 255,
    title: "TWIX Hallowmas Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $10,000 Cash + 200 TWIX Bars ($10,314 ARV) + 2 Category Prizes: $5,000 Cash + 100 TWIX Bars Each ($5,157 Each; Total ARV $20,628); 50 US + DC, 18+ (Enter by Uploading a Hallowmas Photo or Short Video)",
    frequency: "Enter Once",
    ends: "2026-11-08",
    url: "https://www.twix.com/hallowmas",
    added: "2026-10-22",
  },

  {
    id: 256,
    title: "Korea Now \u201cAll You Imagine\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2 Round-Trip Economy Tickets to Incheon, South Korea (ARV $4,000) + 20 \u00d7 K-Beauty Skincare Products (ARV $30 Each; 21 Winners Total); 50 US + DC + Canada (Excl. QC), 18+",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://www.koreanow.us",
    added: "2026-10-22",
  },

  {
    id: 257,
    title: "Hallmark Channel \u201cVery Merry Giveaway\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 8-Day/7-Night Collette Christmas Markets of Austria & Germany Tour for 2 + $1,000 Check (ARV $10,398) + 103 Daily Prizes (Holiday Prize Packs, Cricut Machines, Biltmore Getaways, Gift Cards, Prepaid Cards; ARV $19,764.34; Total ARV $30,162.34); 50 US + DC + PR, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-25",
    url: "https://verymerrygiveaway.hallmarkchannel.com",
    added: "2026-10-22",
  },

  {
    id: 266,
    title: "LPGA Ford Tee-To-Trail Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ford Bronco Badlands w/ Sasquatch Package (MSRP $57,925) + Golf Trip for Winner + 3 Guests to an LPGA-Sanctioned Course (ARV $6,000; Total ARV up to $63,925); 50 US + DC, 21+ (Valid US Driver\u2019s License)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.lpga.com/ford-tee-to-trail-sweepstakes",
    hot: true,
    added: "2026-10-23",
  },

  {
    id: 267,
    title: "Perdue Holiday Drop Sweepstakes",
    type: "sweepstakes",
    prizes: "(5) Grand: NYC Holiday Dinner Trip for 2 \u2014 RT Airfare, 2 Nights at a Manhattan Moxy Hotel, Exclusive Food Network Kitchen Holiday Dinner w/ Chef Lorenzo Espada (Dec 2), $1,000 Visa Prepaid Card + $1,750 Visa Prepaid Tax Card (ARV $6,850 Each); 48 Contiguous US + DC, 18+ (19+ AL/NE, 21+ MS)",
    frequency: "Enter Daily",
    ends: "2026-11-06",
    url: "https://www.perdue.com/holiday-drop",
    added: "2026-10-23",
  },

  {
    id: 268,
    title: "Visit Orlando Win an Orlando Family Vacation Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4-Day/3-Night Walt Disney World Trip for 4 \u2014 4 \u00d7 $250 Frontier Flight Vouchers, 3 Nights at a Moderate Disney Resort Hotel, 4 \u00d7 4-Day Park Hopper Tickets (ARV $4,950); 48 Contiguous US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2027-01-18",
    url: "https://www.visitorlando.com/win-a-trip/",
    added: "2026-10-23",
  },

  {
    id: 269,
    title: "DAXXIFY 3 For 3 Sweepstakes",
    type: "sweepstakes",
    prizes: "(3) Winners: $7,200 Check Each for 3 Years of DAXXIFY Treatments (Total ARV $21,600); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.daxxify.com/lp/3for3-sweeps",
    added: "2026-10-23",
  },

  {
    id: 270,
    title: "Michelob Ultra Greenside Pass 2026 Sweepstakes",
    type: "sweepstakes",
    prizes: "Entry Period 4: (1) Custom Golf Club Fitting + Golf Clubs, Round of Golf for 4 at a TPC Course + 1-Yr 18 Birdies Subscription (ARV $4,900); (5) Grab & Go Golf Kits + 1-Yr 18 Birdies Subscription (ARV $89.14 Each; Total ARV $21,369); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2027-01-31",
    url: "https://www.michelobultra.com/superioraccess/greenside26",
    added: "2026-10-23",
  },

  {
    id: 271,
    title: "2027 Genesis Invitational Dream Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Golf for 2 at Riviera Country Club (Preview Day Jan 25, 2027) + Honorary Observer + Backlot VIP Hospitality at the 2027 Tournament, Aventon E-Bike, 2 Vortex Rangefinders, Weeklong Grounds Passes (ARV $17,280) + 3 Runner-Up Prizes (2 Single-Day Grounds Tickets + Rangefinder, $660 Each); 50 US + DC, 18+ (Airfare/Hotel Not Included)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://genesisinvitational.com/2027-sweepstakes/",
    added: "2026-10-23",
  },

  {
    id: 272,
    title: "Good Sam Ultimate Ice Fishing Giveaway 2026",
    type: "sweepstakes",
    prizes: "(3) Grand: Ice Castle Fish House 6.5x12 V Special ($19,400 MSRP); 2-Night Stay at Trapper\u2019s Landing Lodge, Leech Lake MN ($1,799); Reed\u2019s Sporting Goods Ice Fishing Package ($1,700); US (Excl. PR) + Canada (Excl. QC), 18+",
    frequency: "Enter Once",
    ends: "2026-12-06",
    url: "https://gleam.io/8JzGD/the-ultimate-ice-fishing-giveaway-2026",
    added: "2026-10-23",
  },

  {
    id: 279,
    title: "Best Buy \u201cStore Speedrun\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Day/2-Night Minnesota Trip for 2 + 2-Minute Best Buy Store Speedrun to Keep Up to $20,000 in Tech + $7,000 Tax Payment (ARV $30,000) + 20 HP OMEN Laptops ($2,599.99 Each) + 100 \u00d7 $50 My Best Buy Certificates (Total ARV $86,999.80); 50 US + DC + PR, 18+ (or Age of Majority)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.bestbuy.com/store-speedrun-sweepstakes",
    hot: true,
    added: "2026-10-24",
  },

  {
    id: 280,
    title: "Renewal by Andersen \u201cRenew Your Home\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "(4) Grand: $25,000 Gift Certificates Each Toward Renewal by Andersen Products + Installation (Total ARV $100,000); 50 US (Excl. HI) + DC + BC/Ontario, Age of Majority (Retailer-Served Areas Only)",
    frequency: "Enter Once",
    ends: "2027-01-12",
    url: "https://renewyourhome.featuredpromo.com/",
    added: "2026-10-24",
  },

  {
    id: 281,
    title: "Cricket Wireless \u201cZoo Atlanta Flyaway\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 4 to Zoo Atlanta \u2014 RT Coach Airfare, 2 Hotel Nights, Ground Transportation, 4 Zoo Tickets + $1,000 Prepaid Gift Card (ARV $10,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-04",
    url: "https://www.cricketsweepstakes.com/zooatlanta",
    added: "2026-10-24",
  },

  {
    id: 282,
    title: "Disney+ Perks \u201cCollege Football Game\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "(2) Winners: 3-Day/2-Night Trip for 2 to the Texas at Texas A&M Game (Nov 27, 2026, College Station, TX) \u2014 Airfare, 2 Hotel Nights, 2 Game Tickets + $500 Cash (ARV $4,100 Each; Total ARV $8,200); 50 US + DC, 18+ (Disney+ Perks Login Required; Email AMOE Available)",
    frequency: "Enter Daily",
    ends: "2026-11-06",
    url: "https://perks.disneyplus.com",
    added: "2026-10-24",
  },

  {
    id: 283,
    title: "Seagram\u2019s Escapes \u201cEscape the Bustle\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "25 Winners: Backyard Movie-Night Prize Packs \u2014 iLive Cinema Pop-up Movie Theatre Kit, 5\u2019 Faux Fur Bean Bag, Faux Fur Throw + Movie Time Snack Bucket (ARV $519.05 Each; Total ARV $12,976.25); 50 US, 21+",
    frequency: "Enter Once",
    ends: "2026-10-31",
    url: "https://www.seagramsescapes.com/escapethebustle",
    added: "2026-10-24",
  },

  {
    id: 284,
    title: "SEGA Shop \u201cSonic 35th Anniversary Memories and Beyond\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Nintendo Switch 2 + 3 Sonic Games + $500 SEGA Shop Gift Card + Art Print, Varsity Jacket, Crossbody Bag, Hat + Mug (ARV $1,484.94) + 3 Secondary Prizes ($89.98 Each) + 5 Tertiary Prizes ($42.98 Each; Total ARV $1,969.78); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-10-29",
    url: "https://shop.sega.com/pages/sonic-the-hedgehog-35th-anniversary-memories-and-beyond-sweepstakes",
    added: "2026-10-24",
  },

  {
    id: 285,
    title: "Pepsi \u00d7 Off Season \u201cCan Jacket\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "14,000 Winners: Mini NFL Puffer Can Jackets \u2014 900 Per Each of 15 NFL Teams + 500 Pepsi \u00d7 Off Season Designs (ARV $30 Each; Total ARV $420,000); 50 US + DC, 18+ (19+ AL/NE)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://offseasonpepsisweeps.com",
    added: "2026-10-24",
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
          Listings last verified October 24, 2026. Always check the official rules on
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
