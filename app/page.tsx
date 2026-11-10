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

// Listings verified November 10, 2026. Update this list regularly —
// remove ended sweepstakes and add new ones by editing this file and redeploying.
const SWEEPSTAKES: Listing[] = [
// Listings verified November 10, 2026. Update this list regularly —
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
    id: 286,
    title: "Skrewball Peanut Butter Whiskey \u201cCollege Tailgate Tour\u201d Instant Win Game",
    type: "instant",
    prizes: "Grand: Las Vegas Trip for 2 \u2014 Airfare, 2 Hotel Nights, Event Tickets or $3,000 Ticket Gift Card (ARV $6,000; Travel Jan 24\u201326, 2027) + 20 Instant-Win Skrewball Hats ($15 Each; Total ARV $6,300); 50 US + DC, 21+ (Valid Photo ID)",
    frequency: "Enter Daily",
    ends: "2027-01-10",
    url: "https://www.skrewballwhiskey.com/en/collegetailgatetour",
    added: "2026-10-25",
  },


  {
    id: 297,
    title: "Miller Lite \u201cFootball 2026\u201d Instant Win Game",
    type: "instant",
    prizes: "1,001 Winners: (1,000) $25 Venmo Payments (ARV $25 Each) + National Grand: Trip for 2 to a 2027/28 Regular-Season NFL Game \u2014 Round-Trip Airfare, 2 Hotel Nights, 2 Game Tickets + $250 Spending Money (ARV $3,067); 21+, US (National Entry Excl. ME; Keyword Prizes State-Specific)",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.millerlite.com/football",
    hot: true,
    added: "2026-10-26",
  },

  {
    id: 298,
    title: "Miller High Life \u201cHunt\u201d Instant Win Game",
    type: "instant",
    prizes: "500 Winners: (200) 12-Month onX Hunt Premium Memberships (ARV $100 Each) + (100) Baseball Caps (ARV $18 Each) + (100) Winter Hats (ARV $18 Each) + (100) Decks of Cards (ARV $5 Each; Total ARV $24,100); MN, ND, WI Only, 21+ (Limit 1 Prize Per Household)",
    frequency: "Enter Daily",
    ends: "2026-12-06",
    url: "https://mc.beveragepromo.com/263026",
    added: "2026-10-26",
  },

  {
    id: 312,
    title: "Dos Equis \u201cMost Interesting Man\u201d Instant Win Game",
    type: "instant",
    prizes: "300 Winners: Most Interesting Man Merchandise Kit Each (Total Prize Pool $4,500); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.dosequis.com/mostinterestingsweeps",
    added: "2026-10-27",
  },

  {
    id: 334,
    title: "Ezra Brooks \u201c90 Prizes for 90 Proof\u201d Instant Win Sweepstakes",
    type: "instant",
    prizes: "90 Prizes: (30) Grills, (59) Outdoor Heaters + (1) Grand Prize (Total ARV $21,000; No Alcohol Awarded); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://airbaton.net/l/ezrabrooks90",
    added: "2026-10-29",
  },

  {
    id: 343,
    title: "Club Wyndham \u201cWander Your Way\u201d Instant Win Game",
    type: "instant",
    prizes: "1,500 Instant Winners: $10 Travel Credit Each (250 Per Monthly Period) + 6 Monthly Prizes: Wyndham Rewards Points + Travel Credit (ARV $975\u2013$31,200 Each) + Grand: 7-Night Stay at Wyndham Grand Crete Mirabello Bay, Wyndham Grand Athens, or Zeus Eleva Ajul + $2,000 Airfare Voucher (ARV $2,658\u2013$4,688; Total ARV $81,113); 50 US + DC, 28+",
    frequency: "Enter Monthly",
    ends: "2027-04-30",
    url: "https://getaways.clubwyndham.com/sweepstakes-2027/instant-win",
    hot: true,
    added: "2026-10-30",
  },

  {
    id: 344,
    title: "Synchrony \u201c$5K in Play\u201d Instant Win Game",
    type: "instant",
    prizes: "5 Grand: $5,000 Check Each + 201 Instant Winners: 70 \u00d7 $100 DoorDash Codes, 61 \u00d7 $100 Fandango Codes, 70 \u00d7 $100 Starbucks Codes (Total ARV $45,100); 50 US + DC + Territories, 18+ (Eligible Synchrony Cardholders Only; Register by Oct 31, 2026; Plays Redeemed Nov 18\u2013Dec 31, 2026)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.5kinplaysweeps.com/",
    added: "2026-10-30",
  },

  {
    id: 345,
    title: "Green Bay Packers \u201cGet in the Game\u201d Instant Win Promotion",
    type: "instant",
    prizes: "42 Instant Winners: 15 Pairs Lambeau Field Classic Stadium Tour Passes (ARV $46/Pair), 15 Pairs Packers Hall of Fame Tour Passes (ARV $40/Pair), 12 \u00d7 $25 Packers Pro Shop Gift Cards + 12 Monthly Drawing Grand Prizes: 1-Night Oneida Casino Hotel Stay + $50 Free Play + $25 Dining Credit (ARV $325 Each; Total ARV $5,490); 50 US (Excl. NY, NJ, FL), 21+",
    frequency: "Enter Once",
    ends: "2027-01-29",
    url: "https://web.witcontests.com/packers/giveaway/slots/get-in-the-game-261001",
    added: "2026-10-30",
  },

  {
    id: 346,
    title: "CrunchLabs \u201cBuild Box Platinum Ticket\u201d Instant Win Game",
    type: "instant",
    prizes: "12 Grand Prizes (1 Per Month): 3-Day/2-Night Trip for Winner + 3 Guests to CrunchLabs in Sunnyvale, CA with Mark Rober \u2014 Round-Trip Coach Airfare for 4, Hotel + Ground Transport (ARV ~$4,500 Each); 50 US + DC, 18+ (Free Mail-in Game-Piece Requests Available)",
    frequency: "Enter Monthly",
    ends: "2027-05-31",
    url: "https://www.crunchlabs.com/pages/sweepstakes",
    added: "2026-10-30",
  },



  {
    id: 365,
    title: "Deschutes Brewery \u201cTry One on Us\u201d Instant Win Promotion",
    type: "instant",
    prizes: "Up to 240 Winners: $8 via PayPal or Venmo Each (Total ARV $1,920); 21+ (AL, AR, AZ, HI, IN, KY, LA, MO, NC, OR, PA, TN, TX, UT, VA, WV Only; Valid Government Photo ID; PayPal/Venmo Account Required)",
    frequency: "Enter Daily",
    ends: "2027-04-30",
    url: "https://iframe-mdm.deschutesbrewery.com/dbfboffer/",
    added: "2026-11-01",
  },

  {
    id: 366,
    title: "Dos Equis \u201cSummer Fuerza Regida\u201d Instant Win + Sweepstakes",
    type: "instant",
    prizes: "3 Grand: Trip for 2 to a Fuerza Regida Concert \u2014 Airfare, 2 Hotel Nights, Tickets (ARV $3,000 Each) + 35 Instant: 5 Autographed Guitars ($250 Each), 10 Autographed Vinyl Albums ($20 Each), 20 Sonos Roam 2 Speakers ($150 Each; Total ARV $13,450); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.dosequis.com/en-us/xx-sweepstakes/fuerzaregida2026/",
    added: "2026-11-01",
  },

  {
    id: 367,
    title: "SaverLife \u201cScratch and Save\u201d 2026 Instant Win Game",
    type: "instant",
    prizes: "1,500 Instant Winners: 1,200 \u00d7 $5 PayPal Payments + 300 \u00d7 $20 PayPal Payments (Total ARV $12,000); 50 US + DC, 18+ (Free SaverLife Membership; Valid PayPal Account Required; Limit 1 Prize/Person)",
    frequency: "Enter Weekly",
    ends: "2027-01-05",
    url: "https://app.saverlife.org/scratchandsaveamoe20",
    added: "2026-11-01",
  },

  {
    id: 380,
    title: "Miller Lite “Holiday 2026” Instant Win Game",
    type: "instant",
    prizes: "600 Instant Prizes: 100 Quarter-Zips (ARV $46 Each), 100 Crewneck Sweaters (ARV $33 Each), 400 Beanies (ARV $7.50 Each) + National/Keyword Drawings Incl. 50 \u00d7 $500 Venmo Payments (Total ARV $48,692); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.millerlite.com/holiday",
    added: "2026-11-03",
  },

  {
    id: 381,
    title: "Coca-Cola “2026 Holiday” Instant Win Game",
    type: "instant",
    prizes: "82,094 Prizes: Grand: 5-Day/4-Night Fairbanks, Alaska Trip for 2 (ARV $4,650) + Instant: 7 \u00d7 $100 Coke Store Prepaid Cards, 75 \u00d7 $25 Coke Store Prepaid Cards, 1,840 \u00d7 $20 Disney Store Gift Cards, 10,000 AMC Black Ticket Pairs ($21 Each), 70,000 \u00d7 20 oz Coke Digital Coupons + Merch (Total Instant Pool 80,000+); 50 US + DC, 18+ (Free Coca-Cola Account)",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.coca-cola.com",
    hot: true,
    added: "2026-11-03",
  },

  {
    id: 390,
    title: "Wonka \u201cGolden Ticket\u201d Instant Win Game",
    type: "instant",
    prizes: "1 Golden Ticket Experience: 4-Day/3-Night Las Vegas Trip for Winner + Up to 3 Guests \u2014 Airfare, 2 Double Rooms, Ground Transport, 4 VIP Netflix House Tickets + $1,000 Check (ARV $9,000) + 1,440 Instant: Wonka Factory Bundle Tote Bags (ARV $55 Each; Total ARV $124,200); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2027-07-31",
    url: "https://www.wonka.com/us/en/xp/golden-ticket/",
    hot: true,
    added: "2026-11-04",
  },

  {
    id: 391,
    title: "Starbucks \u201cUncap, Scan & Win 2026\u201d Instant Win Game",
    type: "instant",
    prizes: "300,500 Instant Prizes: 50,000 \u00d7 60 Stars, 175,000 \u00d7 25 Stars, 50,000 Handcrafted Beverage Coupons (ARV $10 Each), 25,500 Bakery Coupons (ARV $3.87 Each) + 4 Grand: \u201cStarbucks for a Year\u201d Daily Food/Beverage Credit, 365 Days (ARV $3,935 Each); 50 US + DC, 18+ (Free Starbucks Rewards Membership)",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://uncapstars.starbucks.com",
    hot: true,
    added: "2026-11-04",
  },

  {
    id: 392,
    title: "poppi \u201cShirley Vibes\u201d Instant Win Game",
    type: "instant",
    prizes: "135 Winners: 9 \u00d7 $1,000 Digital Gift Cards (One Each Friday) + 126 \u00d7 $100 Digital Gift Cards (Two Per Day; Total ARV $21,600); US + DC, 18+ (19+ AL, NE; Receipt or Product-Photo Upload, or Free Mail-in Entry)",
    frequency: "Enter Daily",
    ends: "2027-01-01",
    url: "https://poppishirleyvibes.com",
    added: "2026-11-04",
  },

  {
    id: 393,
    title: "Frito-Lay \u201cHappy Holi-Lays\u201d Instant Win Game",
    type: "instant",
    prizes: "1,297 Instant Prizes: 439 Glass Chip Bowls ($30), 439 Wood Chip Bowls ($80), 171 Sweaters ($75), 170 Charcuterie Sets ($100), 48 Lay\u2019s \u00d7 Le Creuset Casseroles ($355), 15 Multicookers ($350), 15 Tile Word Game Sets ($226; Total ARV $103,795; Limit 3 Prizes/Person); 50 US + DC, 18+ (19+ AL, NE; Scan Participating Lay\u2019s Bag or Free Daily Code, No Purchase Needed)",
    frequency: "Enter Daily",
    ends: "2026-12-27",
    url: "https://happyholi-lays.com",
    added: "2026-11-04",
  },

  {
    id: 399,
    title: "Orange Julius \u201cSmoothie Smash\u201d Instant Win Game",
    type: "instant",
    prizes: "201 Winners: (1) Grand: $1,000 in Orange Julius Gift Cards + (200) Instant: $10 Orange Julius Gift Cards Each (Total ARV $3,000); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-29",
    url: "https://ojbirthday.com",
    added: "2026-11-05",
  },

  {
    id: 400,
    title: "Respawn \u00d7 Marvel Rivals Gaming Sweepstakes & Instant Win",
    type: "instant",
    prizes: "15,151 Winners: Grand: Razer Blade 16 Gaming Setup \u2014 Laptop, Chair, Mouse, Keyboard, Headset + Controller (ARV $5,249.94) + 60 Weekly Razer Gear Prizes ($160\u2013$400 Each) + 90 Luna Snow Packs ($50 Each) + 15,000 Instant: Marvel Rivals Game Skin (12,000) or Custom Emote (3,000) Digital Codes ($5 Each; Total ARV $99,349.94); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2027-01-03",
    url: "https://www.respawnbyrazer.com/marvelrivals/enter",
    hot: true,
    added: "2026-11-05",
  },

  {
    id: 401,
    title: "Nick the Greek \u201cDemigod Experience\u201d Instant Win Game",
    type: "instant",
    prizes: "44,001 Winners: Grand: Round-Trip Coach Airfare for 2 to Athens, Greece (ARV $5,000) + 44,000 Instant: Food/Discount Prizes \u2014 21,000 \u00d7 $5 Off Entr\u00e9e, 10,000 \u00d7 Side of Fries, 5,000 \u00d7 Spanakopita, 5,000 \u00d7 Baklava, 1,000 \u00d7 Plain Froyo, 1,000 \u00d7 Gyro, 1,000 \u00d7 Bowl (Total ARV $239,200); AZ, CA, KS, MO, NV, TN, TX, UT Only, 18+",
    frequency: "Enter Once",
    ends: "2027-01-03",
    url: "https://web.witcontests.com/nickthegreek/giveaway/spin/every-hero-needs-a-gyro-260929",
    added: "2026-11-05",
  },




  {
    id: 405,
    title: "AARP Rewards Starbucks Instant Win Game",
    type: "instant",
    prizes: "200 Winners: $10 Starbucks eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-11",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-05",
  },

  {
    id: 412,
    title: "Camel \u201cOut There\u201d Giveaway Instant Win Game",
    type: "instant",
    prizes: "1,400 Instant Winners: $25 Digital Choice Prepaid Mastercard Each (Total ARV $35,000); 50 US + DC, 21+ (Tobacco Consumers with Registered Camel.com Account; Excl. MA & MI)",
    frequency: "Enter Daily",
    ends: "2026-12-30",
    url: "https://www.camel.com/secure/promotions/outtheregiveaway.html",
    hot: true,
    added: "2026-11-06",
  },

  {
    id: 413,
    title: "Alpha Prime \u201cPrime Bites Pink Ticket\u201d Instant Win Game",
    type: "instant",
    prizes: "82 Winners: (1) Grand: $10,000 Cash + (1) Apple AirPods Max + (25) Prime Bites for a Year (12 Monthly Boxes Each) + (25) $25 Target Gift Cards + (30) Prime Bites Seasonal Samplers (Total ARV $24,371; Every Valid Ticket Also Wins at Least a Discount/Free-Shipping Code); 50 US + DC, 18+ (Excl. NY, FL, RI)",
    frequency: "Enter Daily",
    ends: "2026-12-02",
    url: "https://primebites.com/pages/pinkticket",
    hot: true,
    added: "2026-11-06",
  },

  {
    id: 414,
    title: "AARP Rewards Outback Steakhouse Instant Win Game",
    type: "instant",
    prizes: "200 Winners: $10 Outback Steakhouse eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-06",
  },

  {
    id: 415,
    title: "AARP Rewards Ace Hardware Instant Win Game",
    type: "instant",
    prizes: "200 Winners: $10 Ace Hardware eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-12",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-06",
  },

  {
    id: 416,
    title: "Synchrony \u201cHome Team Advantage\u201d Sweepstakes and Instant Win Game",
    type: "instant",
    prizes: "1 Grand: $5,000 Check + 2 First: Sonos Portable Smart Speakers (~$500 Each) + 36 Weekly: $100 Virtual Prepaid Mastercards + 275 Instant: $25 Amazon Gift Cards (Total ARV $16,475); US Incl. Territories, DC & PR, 18+ (Synchrony HOME Credit Cardholders Only as of Sept 27, 2026)",
    frequency: "Enter Daily",
    ends: "2026-11-15",
    url: "https://www.homenetworksweepstakes2026.com/",
    added: "2026-11-06",
  },

  {
    id: 427,
    title: "Microsoft Rewards \u201cPrize Drop\u201d Instant Win Game",
    type: "instant",
    prizes: "3,321 Instant Winners: 100 \u00d7 ROG Xbox Ally ($600), 225 \u00d7 Xbox Game Pass 1-Year ($180), 90 \u00d7 Dyson V8 Vacuums ($300), 100 \u00d7 Sonos Era 100 Speakers ($190), 241 \u00d7 AirPods Pro 3 ($250), 105 \u00d7 Oura Ring 5 ($400), 55 \u00d7 Samsung 75\u201d TVs ($800), 45 \u00d7 Galaxy Z Fold 8 ($2,100), 750 \u00d7 $100 + 1,500 \u00d7 $50 MS/Xbox Gift Cards + More (Total Instant-Win ARV $650,000); 50 US + DC + PR, Age of Majority (Free Microsoft Rewards Membership; 1 Chance/Day via Bing Search)",
    frequency: "Enter Daily",
    ends: "2027-01-15",
    url: "https://aka.ms/win-Promo",
    hot: true,
    added: "2026-11-07",
  },

  {
    id: 428,
    title: "Dos Equis \u201cCollege Football Go For Dos\u201d Instant Win Game and Sweepstakes",
    type: "instant",
    prizes: "775 Winners: 525 Instant Prizes \u2014 150 \u00d7 Dos Equis Bibs ($40), 75 \u00d7 Varsity Jackets ($80), 300 \u00d7 T-Shirts ($10) (Instant ARV $15,000) + Up to 250 \u00d7 $200 eGift Cards in Weekly Drawings (Total ARV up to $65,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://dosequis.com/gofordos2026",
    hot: true,
    added: "2026-11-07",
  },


  {
    id: 430,
    title: "Tito\u2019s \u201cDallas Gameday Experience\u201d Instant Win",
    type: "instant",
    prizes: "14 Winners: 13 Instant Merch Packs ($30 Each) + 1 Grand: Dallas Cowboys Gameday Experience for 2 \u2014 Club-Level Tickets, Parking, Sideline Passes (ARV $4,000; No Flights/Hotel); Texas Only, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-15",
    url: "https://titosdallasgameday.com",
    added: "2026-11-07",
  },

  {
    id: 431,
    title: "Cleveland Browns \u201c2026 Digital Scratch-Off\u201d Instant Win",
    type: "instant",
    prizes: "85 Winners: 5 Grand \u2014 2 Club Tickets to a Browns Home Game Each (ARV $1,025 Each) + 80 Instant $40 Fanatics Gift Cards; Ohio Only, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-20",
    url: "https://www.clevelandbrowns.com/scratchoffs",
    added: "2026-11-07",
  },

  {
    id: 432,
    title: "AARP Rewards Best Buy eGift Card Instant Win",
    type: "instant",
    prizes: "200 Winners: $10 Best Buy eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-13",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-07",
  },

  {
    id: 443,
    title: "Celebrity Cruises \u201cReflection Daily Win\u201d Instant Win Game",
    type: "instant",
    prizes: "216 Winners: 10 \u00d7 3-Night Celebrity Reflection Cruise for 2 (ARV $5,000 Each) + 206 Branded Merch Prizes ($13.22\u2013$34.74 Each; Total ARV $53,774.22); US, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-11",
    url: "https://www.celebritycruises.com/games/reflection-daily-win",
    hot: true,
    added: "2026-11-08",
  },

  {
    id: 444,
    title: "Sudocrem \u201cAnd Win\u201d Instant Win Game",
    type: "instant",
    prizes: "Baby Gear incl. Wonderfold Stroller Wagon ($899.99), Thule Stroller ($499), Baby Brezza Appliances + 130 \u00d7 $25 Amazon Gift Cards + 24 \u00d7 Year\u2019s Supply of Sudocrem (Total ARV $20,009.86); US, 18+",
    frequency: "Enter Once",
    ends: "2027-04-15",
    url: "https://sudocremwin.com",
    added: "2026-11-08",
  },

  {
    id: 445,
    title: "Sprite Squad \u201cObey Your Thirst\u201d Instant Win Game",
    type: "instant",
    prizes: "115,000 Winners: Digital Coupon for a Free 20 oz Sprite (ARV up to $3 Each; Total ARV up to $345,000); 50 US + DC, 13+ (Enter by Texting THIRST to 2653 or via Sprite Squad Sign-Up)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.coca-cola.com/us/en/brands/sprite",
    added: "2026-11-08",
  },

  {
    id: 446,
    title: "Prudential \u201cRock the Championship\u201d Instant Win + Sweepstakes",
    type: "instant",
    prizes: "21 Winners: Grand Prize \u2014 2 Tickets to the College Football Playoff National Championship in Las Vegas + $1,000 Check (ARV $3,200) + 20 \u00d7 Prudential Prize Packs ($200 Each; Total ARV $7,200); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2027-01-02",
    url: "https://rockthechampionship.com",
    added: "2026-11-08",
  },

  {
    id: 447,
    title: "AARP Rewards Olive Garden Instant Win Game",
    type: "instant",
    prizes: "200 Winners: $10 Olive Garden eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment \u2014 No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-14",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-08",
  },

  {
    id: 459,
    title: "Dos Equis \u201cPhoenix Suns\u201d Instant Win Game and Sweepstakes",
    type: "instant",
    prizes: "50 Instant Winners: $50 Phoenix Suns Team Shop E-Gift Card Each (Total Instant ARV $2,500) + Grand Drawing: 10 Winners \u00d7 2 Tickets to a Phoenix Suns 2026/27 Regular-Season Home Game (ARV $150 Each; Total ARV $4,000); Arizona Only, 21+",
    frequency: "Enter Daily",
    ends: "2027-04-11",
    url: "https://DosEquis.com/phoenixsuns",
    added: "2026-11-09",
  },

  {
    id: 460,
    title: "Heineken \u201cHoliday\u201d Promotion Instant Win + Sweepstakes",
    type: "instant",
    prizes: "306 Grand: Heineken \u00d7 Victrola Journey Suitcase Record Player + Carrying Case (ARV $75 Each) + 100 Instant: $35 Victrola Gift Cards + Up to 20,000 Instant: TouchTunes Codes for 2 Jukebox Credits (ARV $1 Each; Total ARV $46,450); US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.heineken.com/us/en/promos/holiday",
    added: "2026-11-09",
  },

  {
    id: 461,
    title: "L.O.L. Surprise Music Festival Sweepstakes & Instant Win",
    type: "instant",
    prizes: "5 Grand: Concert Trip for 4 (ARV $25,000 Each) + 2 VIP Birthday Experiences for up to 10 (ARV $20,000 Each) + ~522,450 Instant: $100/$20/$10 MGA Shop Vouchers, Big Surprise Party Sets, Plush Toys + More (Total ARV $956,250); 50 US + DC, 18+ (Enter by Game-Piece Code from Marked Product or Free Mail-In; Up to 100 Entries)",
    frequency: "Enter Daily",
    ends: "2027-06-30",
    url: "https://lolsurprisemusicfestival.turnkeysweeps.com",
    hot: true,
    added: "2026-11-09",
  },

  {
    id: 474,
    title: "ampm “Scratch” Instant Win Game",
    type: "instant",
    prizes: "205,000 Winners: 100,000 × Free 12 oz Hot Coffee ($1.69), 60,000 × Free Medium Fountain Drink ($1.29), 30,000 × Free Medium Freeze ($0.89), 10,000 × Free 3-Pack Cookies ($1.49), 5,000 × Free Rib Sandwich ($3.49) (Total ARV ~$305,450); AZ, CA, NV Only, 18+ (Free ampm App Account; Free Mail-in AMOE, 10 Scratchers/Day)",
    frequency: "Enter Daily",
    ends: "2027-01-05",
    url: "https://www.ampm.com/",
    added: "2026-11-10",
  },

  {
    id: 475,
    title: "AARP Rewards Amazon.com $100 Super Instant Win Game",
    type: "instant",
    prizes: "15 Winners: $100 Amazon.com eGift Cards Each (Total ARV $1,500); 50 US + DC, 18+ (Free AARP Rewards Enrollment — No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-16",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-10",
  },

  {
    id: 476,
    title: "AARP Rewards Bath & Body Works Instant Win Game",
    type: "instant",
    prizes: "200 Winners: $10 Bath & Body Works eGift Cards Each (Total ARV $2,000); 50 US + DC, 18+ (Free AARP Rewards Enrollment — No Paid Membership; Free No-Points Entry Form; Limit 1 Prize/Person)",
    frequency: "Enter Daily",
    ends: "2026-11-15",
    url: "https://sweeps.aarp.org/",
    added: "2026-11-10",
  },

  {
    id: 477,
    title: "Chiquita “Yellow Holidays Slippers” Instant Win Game",
    type: "instant",
    prizes: "750 Winners: Chiquita Banana Slippers ($15 Each; Total ARV $11,250); 50 US + DC, 18+ (Entry via Instagram: Follow @chiquitabanana + Comment #YellowHolidays; Limit 1 Entry/Person)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.instagram.com/chiquitabanana/",
    added: "2026-11-10",
  },

  {
    id: 478,
    title: "Kellogg’s Rice Krispies Treats × Solo Stove Giveaway",
    type: "instant",
    prizes: "110 Winners: (10) Grand: Solo Stove Summit 24 Smokeless Fire Pit + Roasting Sticks + 2 × 40-ct Rice Krispies Treats (ARV $702.96 Each) + (100) Second: Solo Stove Mesa Tabletop Fire Pit + Accessory Kit + 2 × 40-ct Rice Krispies Treats (ARV $212.96 Each; Total ARV $28,325.60); 50 US + DC, 18+ (Winning Wrapper in Specially-Marked 40-ct Boxes or Free Mail-in Game Piece)",
    frequency: "Enter Once",
    ends: "2027-03-01",
    url: "https://www.kellanovaus.com/us/en/kelloggs-rkt-solo-stove-giveaway.html",
    added: "2026-11-10",
  },

  {
    id: 479,
    title: "Steamy Kitchen “$25 Walmart Gift Card Kitchen Treats” Instant Win Game",
    type: "instant",
    prizes: "4 Winners: $25 Walmart Gift Cards Each (Total ARV $100); US + Canada, 18+ (Free Spin-to-Win Wheel; Daily Spin)",
    frequency: "Enter Daily",
    ends: "2026-12-11",
    url: "https://steamykitchen.com/255689-25-walmart-gift-card-kitchen-treats-instant-win.html",
    added: "2026-11-10",
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
    id: 285,
    title: "Pepsi \u00d7 Off Season \u201cCan Jacket\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "14,000 Winners: Mini NFL Puffer Can Jackets \u2014 900 Per Each of 15 NFL Teams + 500 Pepsi \u00d7 Off Season Designs (ARV $30 Each; Total ARV $420,000); 50 US + DC, 18+ (19+ AL/NE)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://offseasonpepsisweeps.com",
    added: "2026-10-24",
  },


  {
    id: 290,
    title: "Music City Nashville \u201cGrand Holiday Escape\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Night Gaylord Opryland Resort Stay for Winner + 3 Guests (Dec 12\u201315, 2026) \u2014 4 Tickets Each to Opry Country Christmas, POMP/SNOW/CIRQUEumstance & ice! Featuring HOME ALONE + $500 Dining Credit + 2 Music City Gift Bags (ARV $2,365); 48 Contiguous US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.visitmusiccity.com/winatrip",
    added: "2026-10-25",
  },

  {
    id: 291,
    title: "Ford \u201cBronco Wild Fund\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ford Bronco Big Bend SUV (Value Capped at $50,000 Incl. Fees/Tax) + $10,000 Check (Total ARV $60,000); 50 US + DC, 18+ (Valid Driver\u2019s License)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://fordeventreg.com/BWFGeneralRegistration",
    hot: true,
    added: "2026-10-25",
  },

  {
    id: 292,
    title: "House of Suntory \u201cJapan Travel Package\u201d Promotion",
    type: "sweepstakes",
    prizes: "Grand: Japan Trip for 2 \u2014 Round-Trip Economy Airfare, 4 Nights Tokyo + 2 Nights Kyoto, First-Class Shinkansen Tokyo\u2013Kyoto, Yamazaki Distillery Tour, Osaka Day Trip + Cocktail/Dining Experiences (ARV $21,550; Travel in 2027, No Alcohol in Prize); 50 US + DC, Canada (Excl. QC) & UK, 21+ (SMS Verification Required)",
    frequency: "Enter Once",
    ends: "2026-12-01",
    url: "https://house.suntory.com/mysuntorytime",
    hot: true,
    added: "2026-10-25",
  },

  {
    id: 294,
    title: "Visit Beloit \u201cConnect in Beloit\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2 Nights at Hotel Goodwin (~$300) + $100 Benedetti\u2019s Supper Club + $100 Butterfly Club + $50 Maxine\u2019s Social + $50 Rooftop at Hotel Goodwin Gift Cards (Total ~$600); 50 US + DC + Canada (Excl. QC), 18+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://visitbeloit.com/win/",
    added: "2026-10-25",
  },

  {
    id: 296,
    title: "FedEx \u201cSuper Bowl LXI\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "2 Grand: 5-Day/4-Night Trip for 2 to Super Bowl LXI in LA \u2014 Airfare, 4 Hotel Nights, NFL Alumni Welcome Reception, Players Tailgate Party, 2 Lower-Level End-Zone/Corner Tickets + Gift Bag (ARV $39,500 Each) + Mid-Campaign: Trip for 2 to the 2027 NFL Draft (ARV $22,100) + 1 \u00d7 $10,000 Check, 1 \u00d7 $5,000 Check, 2 \u00d7 $2,500 Checks; 50 US + DC or Canada, Age of Majority (Free Online Registration Entry)",
    frequency: "Enter Once",
    ends: "2026-12-11",
    url: "https://www.fedex.com/nflsweeps",
    hot: true,
    added: "2026-10-25",
  },


  {
    id: 302,
    title: "Avon \u201cBeauty & Cheer\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners: Avon Prize Package Each \u2014 Senses S\u2019mores & Snuggles Bubble Bath, Hand Cream & Whipped Body Butter, Hot Chocolate Lip Balm, Anew Serums/Creams, Imari Dreams Eau de Parfum, fmg Glimmer Makeup, Jewelry, Holiday Mug + Reindeer Countdown to Christmas (ARV $576 Each; Total ARV $2,304); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-17",
    url: "https://www.avon.com/sweepstakes/beauty--cheer-sweepstakes",
    added: "2026-10-26",
  },

  {
    id: 303,
    title: "Sony Electronics \u201cDallas Cowboys\u201d WH-1000XM6 Headphones Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners: Sony x Cowboys WH-1000XM6 Headphones Each (ARV $459.99 Each); 50 US + DC (Excl. Territories), 18+ (19+ AL/NE, 21+ MS)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://cloud.email.sel.sony.com/SonyxCowboysHeadphones",
    added: "2026-10-26",
  },

  {
    id: 304,
    title: "Eckrich \u201cBig Ten Championship Game\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to the 2026 Discover Big Ten Championship Game in Indianapolis (Dec 5, 2026) \u2014 2 Game Tickets, Round-Trip Economy Airfare or Ground Transport Within 150 Miles + 2 Hotel Nights (Dec 4\u20135, 2026; ARV $2,250); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://eckrich.sfdbrands.com/en-us/promotions/ticket-giveaway/",
    added: "2026-10-26",
  },

  {
    id: 305,
    title: "Glenmorangie \u201cOnce Upon A Time In Scotland\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Night Trip for 2 to Tain, Scotland \u2014 Round-Trip Economy Flights, 3 Nights at The Glenmorangie House with Bed & Breakfast and Dinner, Ground Transport, Glenmorangie Distillery Tour + Highland Activities (ARV $4,800); US + DC, 21+ (Excl. UT)",
    frequency: "Enter Once",
    ends: "2026-12-15",
    url: "https://glenmorangie.wyng.com/OnceUponATimeInScotland",
    added: "2026-10-26",
  },

  {
    id: 306,
    title: "Santa Margherita \u201cHoliday\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "725 Winners: Set of 5 Scented Candles Inspired by Santa Margherita\u2019s Five Wines (ARV $77 Each); US, 21+ (Listed States Only \u2014 See Official Rules)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.santamargheritawines.com/holidaygiveaway",
    added: "2026-10-26",
  },

  {
    id: 307,
    title: "Major League Fishing \u201cBass Pro Shops Z19\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Nitro Z19 with 200 L Pro XS Mercury Package (ARV $57,995) + $2,500 Rapala.com Gift Card + Champion 2400W Dual Fuel Inverter (ARV $599.99) + BUBBA Prize Package with Net, Smart Fish Scale + Hat (ARV $433.97; Total ARV $61,528.96); 48 Contiguous US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-20",
    url: "https://majorleaguefishing.com/promos",
    hot: true,
    added: "2026-10-26",
  },


  {
    id: 317,
    title: "Sparkle \u201cHome Essentials\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Year\u2019s Supply of Sparkle Paper Towels \u2014 53 Double Rolls Awarded as 10 \u00d7 $9 Coupons (ARV $90); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://www.sparkletowels.com/win-a-year-supply-sweeps",
    added: "2026-10-27",
  },

  {
    id: 320,
    title: "Coca-Cola \u201cFriday for the Win Football\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "365 Winners: 65\u201d Smart TV, Game Tickets (ARV $1,500), Letterman Jackets, Gift Cards + More; 50 US + DC + PR, 18+",
    frequency: "Enter Weekly",
    ends: "2026-11-29",
    url: "https://www.coca-cola.com/us/en/offerings/fan-work/football",
    added: "2026-10-27",
  },

  {
    id: 324,
    title: "APQS \u201cTilly on the Deluxe Table\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: Tilly Longarm Quilting Machine with Deluxe Table, Transferable Lifetime Warranty, Customer Support + Mobile App Access (ARV $29,400); US + Canada, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-11",
    url: "https://www.apqs.com/shopping-tools/giveaway/tilly-2026/",
    hot: true,
    added: "2026-10-28",
  },

  {
    id: 325,
    title: "Floor & Decor $5,000 Home Makeover Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $5,000 Home Makeover Awarded as Floor & Decor Gift Cards (ARV $5,000); 50 US + DC, 18+ (Valid Driver\u2019s License or Gov\u2019t Photo ID)",
    frequency: "Enter Once",
    ends: "2026-11-19",
    url: "https://www.floordecorhomemakeover.com",
    added: "2026-10-28",
  },

  {
    id: 326,
    title: "Fandango \u201cDestined for Adventure\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Up to 3 Guests: Los Angeles Trip \u2014 Round-Trip Economy Flights, Airport Transfers, 2 Nights\u2019 Hotel with Daily Breakfast, Wizard-Themed Escape Game, Cooking Class + Private 5-Hour Fairy-Tale-Themed LA Tour (ARV $4,995); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-29",
    url: "https://destinedforadventuresweepstakes.entertowinprizes.com",
    added: "2026-10-28",
  },


  {
    id: 328,
    title: "SiriusXM Tortuga Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: VIP Trip for 2 to Rock The Ocean\u2019s Tortuga Music Festival, Ft. Lauderdale, FL (Apr 2\u20134, 2027) \u2014 Round-Trip Coach Airfare, 4 Nights\u2019 Hotel, 2 VIP 3-Day Tickets, Swag Bag, Backstage Tour + Welcome Party Passes, Rock the Ocean Experiences + $200 Gift Card (ARV $4,000); US + DC + PR, 21+ (Current SiriusXM Subscriber as of Oct 20, 2026 Required)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.siriusxm.com/tortuga2027",
    added: "2026-10-28",
  },

  {
    id: 329,
    title: "Sony Electronics Pittsburgh Steelers WH-1000XM6 Headphones Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners, Each: Sony x Steelers WH-1000XM6 Headphones (ARV $459.99 Each; Total ARV $2,299.95); 50 US + DC, 18+ (19+ AL/NE, 21+ MS)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://cloud.email.sel.sony.com/SonyxSteelersHeadphones",
    added: "2026-10-28",
  },

  {
    id: 330,
    title: "Allegiant Double Down Tour Flyaway Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: Fan Flyaway for 2 to the Double Down Tour with Luke Bryan & Jason Aldean at Allegiant Stadium, Las Vegas (Dec 11, 2026) \u2014 Round-Trip Allegiant Flights to LAS, Hotel Stay + 2 Concert Tickets (ARV $2,258); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2026-11-20",
    url: "https://www.allegiantair.com/deals/DoubleDownFlyawaySweepstakes/",
    added: "2026-10-28",
  },


  {
    id: 336,
    title: "MSC Cruises \u201cHoliday, and Make It Grand\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Up to 7 Guests: 7-Night Cruise Aboard MSC World Atlantic in the Grand Hamptons Villa, Valid One Year from Jan 2028 (ARV $30,000); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2027-01-21",
    url: "https://www.msccruisesusa.com/grand-hamptons-villa-sweepstakes",
    hot: true,
    added: "2026-10-29",
  },

  {
    id: 338,
    title: "Valpak \u201c$5,000 Holiday Haul\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $5,000 Check (ARV $5,000); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-04",
    url: "https://valpak.com/holiday",
    added: "2026-10-29",
  },

  {
    id: 339,
    title: "Klean Freak Cancun Giveaway",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: 4-Night Cancun Trip \u2014 Round-Trip Economy Airfare + Hotel (ARV $5,000; Meals/Transport/Excursions Not Included); 48 Contiguous US + DC, 18+ (Winner + Guest Need Valid Passports)",
    frequency: "Enter Once",
    ends: "2026-11-10",
    url: "https://www.kleanfreak.com/pages/cancun-giveaway",
    added: "2026-10-29",
  },

  {
    id: 341,
    title: "Sony Electronics Seattle Seahawks WH-1000XM6 Headphones Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners, Each: Sony x Seahawks WH-1000XM6 Headphones (ARV $459.99 Each; Total ARV $2,299.95); 50 US + DC, 18+ (19+ AL/NE, 21+ MS)",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://cloud.email.sel.sony.com/SonyxSeahawksHeadphones",
    added: "2026-10-29",
  },


  {
    id: 348,
    title: "The North Face \u201cXPLR Pass Holiday\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners, Each: $1,000 The North Face E-Gift Card (Total ARV $4,000); US, 18+ (Free XPLR Pass Membership Required; Favorite a Product and Keep It Saved Through the End Date)",
    frequency: "Enter Once",
    ends: "2026-11-13",
    url: "https://www.thenorthface.com/en-us/xplr-pass/xplr-pass-sweepstakes",
    added: "2026-10-30",
  },

  {
    id: 349,
    title: "Dave Ramsey \u201cChristmas Cash\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "9 Winners: (1) Grand: $10,000 Cash Check + (8) Weekly: $500 Cash Each (Total ARV $14,000); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-20",
    url: "https://www.ramseysolutions.com/giveaway",
    hot: true,
    added: "2026-10-30",
  },

  {
    id: 350,
    title: "Pedigree \u201cPawliday\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: PEDIGREE Pawliday Gift Box (Camera, Dog Bandana, Bowl, Mug, Toys, Treats, Winter Hat, Custom Photo Ornament; Box ARV $217) + a Year\u2019s Supply of PEDIGREE Dog Food + a Hand-Painted Recreation of Your Pawliday Portrait + Runner-Up Pawliday Gift Boxes; 50 US + DC, 18+ (Entry by Uploading a Holiday Pet Photo; Photo Not Judged)",
    frequency: "Enter Once",
    ends: "2026-12-05",
    url: "https://www.pedigree.com/pawliday",
    added: "2026-10-30",
  },

  {
    id: 353,
    title: "Big Sky Brands \u201cFar Out Flavors\u201d Contest",
    type: "sweepstakes",
    prizes: "23 Winners (Total ~$1,820): Grand: Year\u2019s Supply of Big Sky Mints + Hat, Tote + $500 CAD Gift Card; 2nd: 6-Month Supply + Hat, Tote + $250 CAD Gift Card; 3rd: 3-Month Supply + Hat, Tote + $50 CAD Gift Card + 20 Swag Boxes (~$68 CAD Each); US + Canada, 18+ (Top Prizes via Instagram Entry; Swag Boxes via Email Entry)",
    frequency: "Enter Once",
    ends: "2026-11-16",
    url: "https://bigskybrands.com/pages/far-out-flavors",
    added: "2026-10-30",
  },

  {
    id: 356,
    title: "Hot Wheels \u201cRam Trucks\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2026 Ram 1500 Truck (ARV Up to $70,000); US + DC, 18+ (Valid Driver\u2019s License)",
    frequency: "Enter Daily",
    ends: "2026-12-14",
    url: "https://www.hotwheels.com/ramsweepstakes",
    hot: true,
    added: "2026-10-31",
  },

  {
    id: 357,
    title: "Tourism Whistler \u201cGo Bigger in Whistler\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 6-Night Trip for 2 to Whistler, British Columbia \u2014 Round-Trip Airfare, 6 Nights at The Westin Resort & Spa Whistler, 3-Day Lift Tickets, Ski/Snowboard Rentals, Dawn Patrol Heli-Skiing, Sightseeing Tour + Dinners (Approx. Value $14,000); US, 18+ (Excl. FL & NY)",
    frequency: "Enter Once",
    ends: "2027-05-05",
    url: "https://www.whistler.com/winter-contest/",
    added: "2026-10-31",
  },

  {
    id: 358,
    title: "Ultimate iHeartCountry Christmas Vacation Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Las Vegas Trip for 2 (Dec 9\u201312, 2026) \u2014 Round-Trip Airfare, 3 Nights at Caesars Palace, 2 Tickets to Thomas Rhett (Dec 10), 2 Tickets to Luke Bryan & Jason Aldean Double Down Concert (Dec 11), Bacchanal Buffet Dinner for 2 + $200 Ground Transport Gift Card (ARV $3,993); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-15",
    url: "https://news.iheart.com/promotions/ultimate-iheartcountry-christmas-vacation-2026-national-1928322/",
    added: "2026-10-31",
  },

  {
    id: 359,
    title: "Peet\u2019s Coffee \u201cHome for the Holidays\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners, Each: 4 Southwest One-Way Flight E-Passes (Round-Trip Travel for Winner + 1 Guest; Flights Only, No Hotel/Meals) (ARV $800 Each); US + DC, 19+ (Excl. RI & TN)",
    frequency: "Enter Once",
    ends: "2026-12-13",
    url: "https://www.peets.com/pages/holiday-giveaway",
    added: "2026-10-31",
  },

  {
    id: 360,
    title: "Bloomington Minnesota 2026 Holiday Giveaway",
    type: "sweepstakes",
    prizes: "Grand: $1,000 Mall of America Gift Card + 11 Runners-Up, Each: 2-Night Stay at a Participating Bloomington Hotel + $100 Mall of America Gift Card (Airfare Not Included); US + Canada (Excl. QC), 18+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.bloomingtonmn.org/holiday-savings-and-giveaway/",
    added: "2026-10-31",
  },


  {
    id: 362,
    title: "Hallmark Channel \u201cSnack Watch and Win\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $5,000 Shopping Spree Check + 1-Year Supply of Orville Redenbacher\u2019s Microwave Popcorn + 6 Seasonings + Hallmark Channel Blanket (ARV $5,315.59) + 25 First Prizes: Popcorn Supply + Seasonings + Blanket ($315.59 Each) + 275 Weekly Prizes: Blanket + 6-Pack Popcorn + Seasoning ($53.67 Each; Total ARV $20,389.89); 50 US + DC, Age of Majority",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.snackwatchandwin.com",
    added: "2026-10-31",
  },

  {
    id: 363,
    title: "Kansas City Chiefs \u201cUltimate KC Holiday\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4 Club-Level Tickets to Chiefs vs. Patriots (Dec 21, 2026) + Field Passes + Postgame Field Photo + 4 Find Magic Tickets to the Hallmark Christmas Experience (ARV $5,000); US, 18+ (Excl. FL, NY & PR)",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://web.witcontests.com/chiefs/sweepstakes/win/the-ultimate-kc-holiday-261001",
    added: "2026-10-31",
  },


  {
    id: 369,
    title: "Pittsburgh Steelers x GEICO \u201cAway We Go\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "2 Winners, Each + Guest: Trip to a 2026\u201327 Away Steelers Game \u2014 Round-Trip Coach Airfare for 2 (Up to $1,500), 2 Hotel Nights (ARV $600), Up to 2 Game Tickets (Up to $400), $700 Visa Gift Card, Luggage Prize Pack (ARV $270) + Autographed Jersey (ARV $350; ARV Up to $3,820 Each; $7,640 Total); US (Excl. NY & FL), 18+",
    frequency: "Enter Once",
    ends: "2026-11-30",
    url: "https://steelers.formstack.com/forms/geico_away_we_go_sweepstakes",
    added: "2026-11-01",
  },

  {
    id: 370,
    title: "Tatcha \u201cAdvent Calendar\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners, Each: 2 Tatcha Skincare Advent Calendars \u2014 One for the Winner and One for a Friend; US, 18+ (Optional Referral Bonus Entries)",
    frequency: "Enter Once",
    ends: "2026-11-19",
    url: "https://refer.tatcha.com/october2026sweepstakes",
    added: "2026-11-01",
  },


  {
    id: 373,
    title: "Whisky Advocate \u201cTop 20 Whisky\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Top 3 Whiskies of 2026 from Whisky Advocate\u2019s Top 20 List, Including Whisky of the Year (ARV $270); Legal US, 21+",
    frequency: "Enter Once",
    ends: "2026-11-24",
    url: "https://app.viralsweep.com/sweeps/full/f9764e-239365?framed=1",
    added: "2026-11-01",
  },

  {
    id: 375,
    title: "Musora \u201cEl Estepario\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2-Night Trip for Winner to Valencia, Spain \u2014 Airfare, Hotel, $150 Travel Stipend, Meet-and-Greet and Jam Session with El Estepario, Signed Pearl Drum Set + 1 Year of Musora Online Music Lessons (ARV $9,578) + 2 Runner-Up: 12-Month Musora Annual Memberships ($279 Each); 18+ (Sponsor States No Location Restrictions; US Entrants Eligible)",
    frequency: "Enter Once",
    ends: "2026-11-16",
    url: "https://www.musora.com/win",
    added: "2026-11-02",
  },

  {
    id: 376,
    title: "Greenrow \u201cSerenbe Getaway\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2-Night Stay for Up to 8 Guests at the GreenRow Lake House at The Inn at Serenbe + $1,000 GreenRow Gift Card (ARV $4,800); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-24",
    url: "https://www.greenrow.com/pages/sweepstakes/serenbe/",
    added: "2026-11-02",
  },



  {
    id: 379,
    title: "J\u00e4germeister \u201cLoyalty Q4\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners: Grand: Branded J\u00e4germeister Adirondack-Style Chair (ARV $150) + 4 First: Branded J\u00e4germeister ShotSkis (ARV $50 Each; No Alcohol in Any Prize); 50 US + DC, 21+ (Valid US Driver\u2019s License or Government Photo ID)",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://us.jagermeister.com/join-us",
    added: "2026-11-02",
  },

  {
    id: 382,
    title: "The North Face “Holiday Wish List” Sweepstakes",
    type: "sweepstakes",
    prizes: "4 Winners: $1,000 The North Face E-Gift Card Each (Total ARV $4,000); US, 18+ (Free XPLR Pass Account; Favorite at Least One Item to Enter)",
    frequency: "Enter Once",
    ends: "2026-11-13",
    url: "https://www.thenorthface.com/en-us/xplr-pass/xplr-pass-sweepstakes",
    added: "2026-11-03",
  },

  {
    id: 383,
    title: "The Neighbourhood “Wourld Tour Flyaway” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: San Francisco Trip Dec 1\u20133, 2026 \u2014 2 Round-Trip Economy Flights, 2 Hotel Nights, 2 Tickets to The Neighbourhood Wourld Tour Concert Dec 2, 2026 (ARV $2,000); US Incl. DC + PR, Age of Majority",
    frequency: "Enter Once",
    ends: "2026-11-11",
    url: "https://forms.sonymusicfans.com/campaign/sony-music-now-the-neighbourhood-flyaway-giveaway/",
    added: "2026-11-03",
  },

  {
    id: 384,
    title: "WD-40 “Thanks for Giving” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $250 Amazon Gift Card; US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://thanksforgivingsweepstakes.wd40.com/",
    added: "2026-11-03",
  },

  {
    id: 385,
    title: "New York Jets “Your Ticket to Sail” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $2,000 Carnival Cruise Line Gift Card + $1,000 American Express Gift Card (ARV $3,000); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-19",
    url: "https://www.newyorkjets.com/fans/sweepstakes/26carnival",
    added: "2026-11-03",
  },

  {
    id: 386,
    title: "Delta Faucet “$2,100 Hair Care” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: Hair Care Prize Package \u2014 Delta Versacurl Tool, H2Okinetic Raincan Shower Head, Clarifi Filter System/Cartridges, RevAir Complete Routine Bundle + 10 The Doux Hair-Care Products (ARV $2,100); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://www.deltafaucet.com/giveaways",
    added: "2026-11-03",
  },

  {
    id: 387,
    title: "Smirnoff Ice “Holiday Kayak” Sweepstakes",
    type: "sweepstakes",
    prizes: "2 Winners: Smirnoff Ice Branded Kayak Each (ARV $3,666.66 Each; Total ARV $7,333.32); US, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.spiritspromos.com/smirnoff-ice/kayak-sweeps/en/submission/form",
    added: "2026-11-03",
  },

  {
    id: 388,
    title: "Jai Alai “Days” Sweepstakes",
    type: "sweepstakes",
    prizes: "20 Winners: Jai Alai Prize Pack Each \u2014 Branded Holiday Sweater, Beanie, Camp Mug + Socks (ARV Up to $100 Each); 48 Contiguous US + DC, 21+ (Void AK & HI)",
    frequency: "Enter Daily",
    ends: "2026-12-11",
    url: "https://www.hp2win.com/JAIALAIDAYS26",
    added: "2026-11-03",
  },

  {
    id: 389,
    title: "SiriusXM “Tortuga Music Festival 2027” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: VIP Trip to Tortuga Music Festival, Ft. Lauderdale, Apr 2\u20134, 2027 \u2014 Round-Trip Coach Airfare for 2, 4 Hotel Nights, 2 VIP 3-Day Tickets, Backstage Tour, Welcome Party + $200 Gift Card (ARV $4,000); US + DC + PR, 21+ (Current SiriusXM Subscribers Only \u2014 Plan Active On/Before Oct 20, 2026)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.siriusxm.com/tortuga2027",
    added: "2026-11-03",
  },

  {
    id: 394,
    title: "David\u2019s Bridal \u201cNewlyweds Taping\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: LA Trip \u2014 Round-Trip Airfare, 2 Nights at Hilton Los Angeles/Universal City, Car Service, 2 Tickets to NBC\u2019s \u201cNewlyweds\u201d Taping Dec 11, 2026 (ARV $3,500); Contiguous US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-13",
    url: "https://www.davidsbridal.com/nbc-newlyweds",
    added: "2026-11-04",
  },

  {
    id: 395,
    title: "Disney+ Perks \u201cAvengers: Doomsday Premiere\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner + Guest: 3-Day/2-Night Trip to the Avengers: Doomsday World Premiere (LA or NYC, City TBD) \u2014 Airfare, Hotel, Ground Transport, Premiere Admission + $100 Cash (ARV $2,960); US, 18+ (Enter via Disney+ Perks Dashboard; Free Email Alternate Entry for Non-Subscribers)",
    frequency: "Enter Daily",
    ends: "2026-11-19",
    url: "https://perks.disneyplus.com",
    added: "2026-11-04",
  },

  {
    id: 396,
    title: "LEGO Insiders \u201cWin Your LEGO Wishlist\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "2 US Winners: Items From Their Submitted LEGO Wish List, Capped at $1,000 Each (14 Winners Globally); US, 18+ (Free LEGO Insiders Membership)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.lego.com/en-us/holiday-gifts/win-your-wishlist",
    added: "2026-11-04",
  },

  {
    id: 397,
    title: "Jersey Mike\u2019s \u201cMy Way\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $3,000 Jersey Mike\u2019s E-Gift Cards + $2,000 Ticketmaster E-Gift Cards (ARV $5,000); US, 18+",
    frequency: "Enter Once",
    ends: "2026-12-13",
    url: "https://lnpromos.com/jerseymikes",
    added: "2026-11-04",
  },


  {
    id: 406,
    title: "Macerich \u201cJingle All The Way To 100K\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $100,000 Cash (ARV $100,000) + 5 Winners Per Participating Shopping Center: Nespresso Coffee Machine Each (ARV $229 Each); 50 US + DC, 18+ (Must Live Within 100 Miles of a Participating Macerich Shopping Center)",
    frequency: "Enter Daily",
    ends: "2026-12-24",
    url: "https://shoppingcentersweepstakes.com/",
    hot: true,
    added: "2026-11-05",
  },

  {
    id: 407,
    title: "Mariah Carey \u201cLondon Flyaway\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: 2 Tickets to Mariah Carey\u2019s Christmas Time Concert in London (Dec 2026) + 2 Round-Trip Economy Flights + 2 Nights\u2019 Hotel (ARV $4,000); 50 US + DC + PR, Age of Majority",
    frequency: "Enter Once",
    ends: "2026-11-13",
    url: "https://forms.sonymusicfans.com/campaign/mariah-carey-london-show-flyaway/",
    added: "2026-11-05",
  },

  {
    id: 408,
    title: "Tito\u2019s \u201cTurkey Rot\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "150 Winners: $100 DoorDash Gift Card Each (Total ARV $15,000); 50 US, 21+ (Void CA & VA)",
    frequency: "Enter Once",
    ends: "2026-11-22",
    url: "https://www.titosvodka.com/turkeyrot/teams",
    added: "2026-11-05",
  },

  {
    id: 409,
    title: "All Americans Vote \u201cBrent Faiyaz Premium Experience\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: Pair of Middle Bowl Tickets to See Brent Faiyaz + $1,500 Gift Card for Travel and Accommodations (ARV $3,050); US Citizens and Lawful Permanent Residents, 18+ (50 US + DC + PR)",
    frequency: "Enter Once",
    ends: "2026-11-19",
    url: "https://www.allamericans.org/brent-faiyaz",
    added: "2026-11-05",
  },

  {
    id: 410,
    title: "Chewy Claus 2026 Sweepstakes",
    type: "sweepstakes",
    prizes: "14,000 Winners: Assorted Pet Goodie Box Each \u2014 Cat/Dog Toy or Treat, Multi-Pet, Shelter, Bird, Small Pet, Reptile or Horse Box (ARV $35 Each); 48 Contiguous US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-12-24",
    url: "https://www.chewy.com/education/chewy-claus/form",
    added: "2026-11-05",
  },

  {
    id: 411,
    title: "Weaver Livestock \u201cYETI Cooler\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: Custom Purple YETI Tundra 45 Cooler Filled with a Weaver Livestock Grooming Bundle (Retail Value $850); Contiguous US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-20",
    url: "https://app.viralsweep.com/sweeps/full/52bd42-236548?framed=1",
    added: "2026-11-05",
  },


  {
    id: 418,
    title: "Food Network \u201cTaste of Fall\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $5,000 Check (ARV $5,000); US Incl. DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://www.foodnetwork.com/sponsored/sweepstakes/taste-of-fall",
    added: "2026-11-06",
  },

  {
    id: 419,
    title: "Chipotle \u201cBig-Ass Chipotle Bag\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "8,000 Winners (2,000 Per Weekly Drawing \u00d7 4): Chipotle Bag Each (ARV $30 Each; Total ARV $240,000); 50 US + DC, 13+ (Minors Need Parent/Guardian Permission; Free Chipotle Rewards Account Required)",
    frequency: "Enter Daily",
    ends: "2026-11-10",
    url: "https://www.bigasschipotlebag.com/alternative-method-of-entry",
    hot: true,
    added: "2026-11-06",
  },

  {
    id: 420,
    title: "Honda \u201cRide Red\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: 2026 Honda CRF450RX Motorcycle (ARV $9,999); 50 US + DC, 18+ (Void FL, NY, RI)",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://powersports.honda.com/crf450rx-rideredandwinsweepstakes",
    added: "2026-11-06",
  },


  {
    id: 422,
    title: "Pepsi \u201cTake Flight with Pepsi\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Grand: Super Bowl LXI Trip for 2 (Feb 12\u201315, 2027, Inglewood, CA; ARV Up to $11,400) + 30 Weekly $200 NFLShop.com E-Gift Cards + 10 JetBlue Travel Certificate Packs (2 Certificates Each, $500/Pack; Total ARV $22,400); 50 US + DC, 18+ (19+ AL/NE)",
    frequency: "Enter Daily",
    ends: "2027-01-10",
    url: "https://takeflightwithpepsi.com",
    hot: true,
    added: "2026-11-06",
  },

  {
    id: 423,
    title: "Corona Holiday Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "50 Grand: $200 Digital Gift Cards Each + 100 First: Corona-Branded Holiday Palm Trees (ARV $94.97 Each; Total ARV $19,497); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.coronausa.com/pages/holiday",
    added: "2026-11-06",
  },

  {
    id: 424,
    title: "Food Network \u201cEnchanting Bakes and Magical Escapes\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Grand: Trip for 4 to Universal Orlando Resort \u2014 Round-Trip Airfare, 6 Days/4 Nights Hotel, Ground Transfers, 4 Universal Orlando 4-Day Park-to-Park Tickets (ARV $5,509.72); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-09",
    url: "https://www.foodnetwork.com/enchantingbakesandmagicalescapes",
    added: "2026-11-06",
  },

  {
    id: 425,
    title: "Starbucks Customer Experience Sweepstakes 2026",
    type: "sweepstakes",
    prizes: "Up to 1,200 Grand Prizes (100 Per Monthly Entry Period): $100 Starbucks Gift Cards Each (Total ARV $120,000); 50 US + DC, 18+",
    frequency: "Enter Monthly",
    ends: "2027-09-30",
    url: "https://starbucks-survey2.promo.eprize.com/register",
    added: "2026-11-06",
  },

  {
    id: 426,
    title: "Cutwater \u201cHoliday Home Makeover\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $10,000 Check for a Holiday Home Makeover (Total ARV $10,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.cutwaterspirits.com/2026CWHolidayHomeMakeover",
    added: "2026-11-06",
  },

  {
    id: 435,
    title: "Food Network \u201cSeason of Sweetness\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $10,000 Check + 4 VIP Tickets to the Museum of Ice Cream (ARV $10,356); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-21",
    url: "https://www.foodnetwork.com/sweetgiveaway",
    hot: true,
    added: "2026-11-07",
  },

  {
    id: 436,
    title: "Disney Imagination Campus \u201c2027 Teachers\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "15 Winners: 4-Day/3-Night Walt Disney World Trip for 2 \u2014 RT Coach Airfare, 3-Night Resort Stay, 2 \u00d7 3-Day Park Hopper Tickets, $200 Disney Gift Card + $1,250 Tax Check (ARV $5,000 Each; Total ARV $75,000); 50 US + DC + PR, 21+ (Full-Time K-12 Teachers Only)",
    frequency: "Enter Once",
    ends: "2027-01-17",
    url: "https://www.disneycampus.com/disneyteacherssweepstakes",
    hot: true,
    added: "2026-11-07",
  },

  {
    id: 437,
    title: "Hoonigan \u00d7 RWB \u201cSouseiki\u201d Giveaway",
    type: "sweepstakes",
    prizes: "Grand: One-of-One Porsche 997 Carrera S RWB \u2018Souseiki\u2019 Built by Akira Nakai + $35,000 Cash (ARV $135,000) + Runner-Up: 4 Rotiform Wheels + 4 Yokohama Tires (ARV $6,000); US, 18+ (Free Mail-In AMOE: 50 Entries per Card; 1 Entry per $1 Spent)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.rotiform.com/hoonigan-rwb-sweepstakes",
    hot: true,
    added: "2026-11-07",
  },

  {
    id: 438,
    title: "Terry\u2019s Chocolate \u201cRitual to Remember\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to a City in Europe \u2014 RT Coach Airfare, 4 Days/3 Nights Hotel + $500 Spending Cash (ARV $4,999); US, 18+",
    frequency: "Enter Once",
    ends: "2027-02-14",
    url: "https://ritualtoremember.terryschocolate.com",
    added: "2026-11-07",
  },

  {
    id: 439,
    title: "Jersey Mike\u2019s \u201cMy Way\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $3,000 in Jersey Mike\u2019s E-Gift Cards + $2,000 in Ticketmaster E-Gift Cards (ARV $5,000); US, 18+",
    frequency: "Enter Once",
    ends: "2026-12-13",
    url: "https://lnpromos.com/jerseymikes",
    added: "2026-11-07",
  },


  {
    id: 441,
    title: "SoFi \u201cMortgage Payoff\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Payment of Up to $500,000 Toward Winner\u2019s Primary Mortgage Balance (Lesser of $500,000 or Current Balance); 50 US + DC, 18+ (Must Have Existing Mortgage; Free AMOE via SoFi Coach Property Tracking)",
    frequency: "Enter Once",
    ends: "2027-02-14",
    url: "https://www.sofi.com/mortgagesweeps/",
    hot: true,
    added: "2026-11-07",
  },

  {
    id: 442,
    title: "JaM Cellars \u201cButter Wines and Groceries FOR A YEAR\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $5,000 Grocery Gift Card + $1,000 Instacart E-Gift Card + Limited-Edition Butter Wines Merch (ARV $6,500) + $5,000 Donation to Winner\u2019s Local Food Bank; US, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://sipbutter.com",
    added: "2026-11-07",
  },

  {
    id: 453,
    title: "POM Wonderful \u201cSuper Week\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to Los Angeles for Super Bowl week (Feb 2027) \u2014 round-trip airfare, 4-night hotel, NFL Alumni Association events + $10,000 cash + 1-year supply of POM juice (ARV $15,718); US, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://superweektrip.com",
    hot: true,
    added: "2026-11-08",
  },

  {
    id: 454,
    title: "Club Crackers \u00d7 Butter Wines Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-day/2-night Napa trip for 4 \u2014 round-trip airfare, hotel, charcuterie class at JaM Cellars Wine & Music Studio, private chef dinner (ARV $7,800); 48 contiguous US + DC, 21+ (Receipt Upload or Free Mail-In Entry; Max 15 Entries)",
    frequency: "Enter Once",
    ends: "2026-11-20",
    url: "https://www.clubcrackers.com/butternapaweekend",
    hot: true,
    added: "2026-11-08",
  },

  {
    id: 455,
    title: "My Best Buy Rewards $1,000 Giveaway",
    type: "sweepstakes",
    prizes: "10 Winners: $1,000 in My Best Buy Rewards Certificates each (10 \u00d7 $100 certificates; Total ARV $10,000); 50 US + DC + PR, 18+",
    frequency: "Enter Daily",
    ends: "2027-01-30",
    url: "https://www.bestbuy.com/MyBestBuyCertSweeps",
    hot: true,
    added: "2026-11-08",
  },

  {
    id: 456,
    title: "Pep Boys \u201cPhilly\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "11 Winners: Grand \u2014 Philly merch ($200) + $1,300 Flightgift card + $1,000 Hotelgift card + $500 prepaid card (ARV $3,000) + 10 \u00d7 $100 Pep Boys gift cards (Total ARV $4,000); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-10",
    url: "https://www.pepboys.com/giveaway",
    added: "2026-11-08",
  },

  {
    id: 457,
    title: "Petivity \u201cPaws & Claws Bundle\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "2 Winners: Dog bundle \u2014 Smart GPS + Activity Monitor (1-yr subscription), oral + kidney health tests, microbiome kit (ARV $514.95); Cat bundle \u2014 Smart Litter Box Monitor, Smart Feeder, oral + kidney health tests, microbiome kit (ARV $654.95); 50 US + DC, 18+ (19+ AL, NE)",
    frequency: "Enter Once",
    ends: "2026-11-25",
    url: "https://www.purina.com/s/petivity-dog-cat-bundle-sweepstakes",
    added: "2026-11-08",
  },

  {
    id: 458,
    title: "Visit Lauderdale \u201cWinterfest Get-Away\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 2-night trip for 2 to Fort Lauderdale \u2014 Seminole Hard Rock Hotel stay, JetBlue round-trip airfare, dinners, Winterfest Boat Parade showboat tickets, water taxi vouchers (ARV $1,500); 50 US + DC, 21+",
    frequency: "Enter Once",
    ends: "2026-12-04",
    url: "https://sun-sentinel.secondstreetapp.com/Winterfest-Weekend-Sweepstakes-2026/",
    added: "2026-11-08",
  },

  {
    id: 462,
    title: "FCA US $100,000 Vehicle Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $100,000 Credit Toward a Dodge, Jeep, Chrysler, Ram, or Fiat Vehicle (ARV $100,000); US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://sweeps.stellantisexperiences.com",
    hot: true,
    added: "2026-11-09",
  },

  {
    id: 463,
    title: "The General \u00d7 Street Fighter Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 1994 Lexus LS400 + $25,400.69 Cash via ACH (ARV $95,116.94); US, 18+ (Void AK, HI, IN, KY, ME, MN, WA)",
    frequency: "Enter Once",
    ends: "2026-11-18",
    url: "https://the-general-x-street-fighter-bonus-stage-break.prod.fooji.com",
    added: "2026-11-09",
  },

  {
    id: 464,
    title: "White Claw \u201cPickup Truck\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Midsize Hybrid Off-Road Pickup Truck + $6,000 Check for Title, Registration & Extras (ARV up to $72,150; AK/HI Winners Get Cash ARV Instead); US incl. DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-12-31",
    url: "https://www.whiteclaw.com",
    hot: true,
    added: "2026-11-09",
  },

  {
    id: 465,
    title: "Ford \u201cDirt & Derby\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "2 Winners: (1) 2026 Ford Bronco Badlands SUV (ARV $52,075); (1) Trip for 2 to Kentucky Oaks + Kentucky Derby, May 1\u20132, 2027 \u2014 Airfare, 3 Hotel Nights, Tickets to Both Race Days (ARV $10,000); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-29",
    url: "https://www.fordderbysweepstakes.com",
    added: "2026-11-09",
  },

  {
    id: 466,
    title: "Jim Beam \u201cHit The Beam\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "110 Winners: (90) Regular-Season: 85-Inch TV Each (ARV $1,000 Each); (20) Playoff: 85-Inch TV + $5,000 LoveSac Gift Card + Jim Beam Wall Clock, Neon Sign & Tabletop Keg/Drink Tower (ARV $6,245 Each; Total ARV $214,900); US incl. DC, 21+",
    frequency: "Enter Once",
    ends: "2027-02-14",
    url: "https://www.hitthebeam.com",
    added: "2026-11-09",
  },

  {
    id: 467,
    title: "Viking \u201c8-Day Journey\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand + Companion: 8-Day Cruise of Winner\u2019s Choice (River, Mississippi, Oceans, or Expeditions), Airfare Included, Double Occupancy (ARV $16,396\u2013$26,996 per Cabin); US + Canada, 18+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.vikingcruises.com",
    added: "2026-11-09",
  },

  {
    id: 468,
    title: "PBS Masterpiece \u201cEuropean River Cruise\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand + Companion (Both 21+): 8-Day Viking European River Cruise for 2, Veranda Stateroom up to Category B, Roundtrip Trans-Atlantic Economy Airfare for 2, All Onboard Meals + One Shore Excursion per Port (Choice of 6 Itineraries, Embarkation 2027 Only; ARV $15,396); US, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-24",
    url: "https://www.pbs.org",
    added: "2026-11-09",
  },

  {
    id: 469,
    title: "Stella Rosa \u201cStellabrate the Moment\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "51 Winners: (1) Grand: $10,000 Check (ARV $10,000); (50) First: Stella Rosa Branded Instant Camera + 10-Count Film Each (ARV $139.95 Each; Total ARV $16,997.50); US, 21+",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://www.stellarosamoments.com",
    added: "2026-11-09",
  },

  {
    id: 470,
    title: "HGTV \u201cHome for the Holidays\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $5,000 Cash; US, 18+ (Also Enterable Daily on FoodNetwork.com for an Additional Entry)",
    frequency: "Enter Daily",
    ends: "2027-01-06",
    url: "https://www.hgtv.com",
    added: "2026-11-09",
  },

  {
    id: 471,
    title: "KitchenAid \u00d7 Corkcicle \u201cMindFULLness Fridge\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "5 Winners: KitchenAid MindFULLness Fridge + Co-Branded Corkcicle Bottle Set (16-oz Mug, 20-oz Sport Canteen, 40-oz Cruiser) + $500 via ACH Each (ARV $4,929 Each; Total ARV $24,645); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://www.kitchenaidxcorkciclesweeps.com",
    added: "2026-11-09",
  },

  {
    id: 472,
    title: "Kraft Parmesan Cheese \u201cParmsgiving\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $4,900 Visa Gift Card + 1-Year Supply of Kraft Parmesan Cheese (12 \u00d7 8 oz Canisters; ARV $4,959); US, 18+",
    frequency: "Enter Once",
    ends: "2026-12-02",
    url: "https://kraftnaturalcheese.com/parmsgiving",
    added: "2026-11-09",
  },

  {
    id: 473,
    title: "AriZona \u201cLegends Tour\u201d Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Used 1990 Mazda Miata Wrapped in AriZona Green Tea Blossom Design (ARV $10,000); US, 18+ (Excl. AK & HI)",
    frequency: "Enter Once",
    ends: "2026-12-31",
    url: "https://drinkarizona.com",
    added: "2026-11-09",
  },

  {
    id: 480,
    title: "Go Bowling “$1,000 Holiday Shopping Spree” Sweepstakes",
    type: "sweepstakes",
    prizes: "1 Winner: $1,000 Check (ARV $1,000); 50 US + DC, 21+ (Random Drawing ~Dec 2, 2026)",
    frequency: "Enter Daily",
    ends: "2026-11-26",
    url: "https://gobowling.com/2026macys/",
    added: "2026-11-10",
  },

  {
    id: 482,
    title: "Coca-Cola “Friday U.S. Hockey” Sweepstakes",
    type: "sweepstakes",
    prizes: "168 Winners: 2 × 65\" Smart TVs (ARV $480 Each), 25 × $100 Ticketmaster Gift Cards, 25 × $100 Streaming Prepaid Cards, 25 × $50 Fanatics Gift Cards, 25 × $50 Virtual Prepaid Mastercards, 25 × $50 Uber Gift Cards, 20 × $50 Mini Projectors, 10 × $40 Tabletop Hockey Games, 10 × $35 Hooded Blankets + 1 × Coca-Cola for a Year (ARV $288) (Total ARV $11,748); 50 US + DC, 13+",
    frequency: "Enter Weekly",
    ends: "2026-11-29",
    url: "https://www.coca-cola.com/us/en/offerings/coca-cola/hockey",
    added: "2026-11-10",
  },

  {
    id: 483,
    title: "Cricket Wireless “Celebration Bowl Flyaway” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Trip for 2 to the 2026 Celebration Bowl in Atlanta (Dec 12) — Round-Trip Coach Airfare, 2 Hotel Nights (Dec 11–13), Ground Transport, 2 Game Tickets + $500 Prepaid Gift Card (ARV $5,000); 50 US + DC, 21+",
    frequency: "Enter Daily",
    ends: "2026-11-13",
    url: "https://www.cricketsweepstakes.com/hbcu",
    added: "2026-11-10",
  },

  {
    id: 484,
    title: "Rally House “Big Ten Football Championship” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: Big Ten Football Championship Prize Pack — 4 Game Tickets + On-Field Sideline Pre-Game Experience (ARV $1,320), Airfare + Hotel Package (ARV $5,000), $250 Rally House x Big Ten Gift Card + Merch Bundle (ARV $350) (Total ARV $6,920); 50 US + DC, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://shop.bigtenstore.com/btfc-enter-to-win",
    added: "2026-11-10",
  },

  {
    id: 485,
    title: "TENA “Take Back Your Game” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: $15,000 Big Game Trip for 2 to Super Bowl LXI in Inglewood, CA — Hotel, Airfare, Game Tickets (ARV $15,000) + (3) Second: 65\" TV + Sports Streaming Subscription + $200 Gift Card (ARV $1,000 Each; Total ARV $18,000); US, 18+",
    frequency: "Enter Once",
    ends: "2026-11-15",
    url: "https://takebackyourgame.com",
    hot: true,
    added: "2026-11-10",
  },

  {
    id: 486,
    title: "Little Caesars “Pizza! Pizza! Pregame” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 3-Night Trip for 2 to Super Bowl LXI in Inglewood, CA — Airfare, Hotel, 2 Game Tickets, Taste of the NFL Party Admission + $750 Check (ARV $12,178); 50 US + DC, 18+ (Enter via Little Caesars App Challenges; 1 Entry per NFL Game Day)",
    frequency: "Enter Once",
    ends: "2026-11-17",
    url: "https://information.littlecaesars.com/en-us/little-caesars-pizza-pizza-pregame-sweepstakes-official-rules",
    hot: true,
    added: "2026-11-10",
  },

  {
    id: 487,
    title: "Magnum Ice Cream “Better With Ice Cream” Sweepstakes",
    type: "sweepstakes",
    prizes: "10 Winners: $500 Digital Voucher Each for Magnum Ice Cream Company Brands Products (Total ARV $5,000); 50 US + DC, 18+",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://www.pdatapartners.com/hf/TMICC/Sweeps2026/",
    added: "2026-11-10",
  },

  {
    id: 488,
    title: "Blk Spr Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 1993 Dodge W-250 Extra Cab Cummins Diesel Truck (ARV $45,000); US, 18+ (Void MN, NY, RI)",
    frequency: "Enter Daily",
    ends: "2026-11-30",
    url: "https://blk-spr.com",
    hot: true,
    added: "2026-11-10",
  },

  {
    id: 489,
    title: "Marriott Bonvoy “Super Bowl Sleepover” Sweepstakes",
    type: "sweepstakes",
    prizes: "Grand: 4-Day/3-Night Trip for 2 to Super Bowl LXI at SoFi Stadium — Airfare, Hotel, 2 Game Tickets, 1 Night in the Super Bowl Suite + $4,050 Check (ARV $20,250) + (5) $500 Marriott Bonvoy GiftCards + (16) $100 Marriott Bonvoy GiftCards + (32) $100 NFL Shop eGift Cards (Total ARV $27,550); 50 US + DC, 18+ (Also AU, BR, CA, FR, DE, MX, ES, UK)",
    frequency: "Enter Once",
    ends: "2026-12-15",
    url: "https://www.joinmarriottbonvoy.com/superbowlsleepoversuite",
    hot: true,
    added: "2026-11-10",
  },

  {
    id: 490,
    title: "Avocados from Mexico “Guac Drops” Sweepstakes",
    type: "sweepstakes",
    prizes: "454 Winners: (2) Grand: Trip for 2 to the 2027 College Football Playoff National Championship in Las Vegas — Airfare, 2 Hotel Nights, Guac Box Suite Admission (ARV $30,000 Each) + 452 Weekly: $100 Fanatics Gift Cards, Guackets (ARV $150), Cornhole Sets (ARV $190) + Rodeo Grills (ARV $399); 50 US + DC, Age of Majority",
    frequency: "Enter Weekly",
    ends: "2026-12-04",
    url: "https://avocadosfrommexico.com/college-football",
    hot: true,
    added: "2026-11-10",
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
          Listings last verified November 10, 2026. Always check the official rules on
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
