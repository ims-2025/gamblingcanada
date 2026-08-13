// Long-form guide content for each /games/<slug> page. Original editorial content.
// HTML uses single quotes for attributes so it can live in these JS strings cleanly.

export interface GameGuide {
  body: string; // full HTML guide body (rendered after the intro)
  faq: { q: string; a: string }[];
}

export const GAME_GUIDES: Record<string, GameGuide> = {
  slots: {
    body:
      "<p>Online slots are the most popular casino game in Canada, and it's easy to see why: they're simple to play, come in thousands of themes, and carry some of the highest return-to-player (RTP) percentages in the entire casino — often up to 99%. This guide covers how slots work, the terms you need to know, and how to play smarter.</p>" +
      "<h2>How online slots work</h2>" +
      "<p>Every legitimate online slot is powered by a Random Number Generator (RNG), which ensures each spin is completely independent and fair. There is no 'due' payout and no way to predict a result — past spins have no bearing on future ones. Licensed casinos have their RNGs independently audited by agencies like eCOGRA or iTech Labs, which is one of the first things we check in our <a href='/reviews'>operator reviews</a>.</p>" +
      "<h2>Key terms every player should know</h2>" +
      "<ul>" +
      "<li><strong>Paylines:</strong> the lines across the reels on which matching symbols pay. Modern slots range from a single line to 243 or even thousands of ways to win.</li>" +
      "<li><strong>RTP:</strong> the theoretical long-term return to players. A 96% RTP slot returns $96 for every $100 wagered on average, over millions of spins.</li>" +
      "<li><strong>Volatility (variance):</strong> how a slot pays out. Low-volatility slots pay small wins often; high-volatility slots pay rarely but bigger.</li>" +
      "<li><strong>Wild &amp; scatter symbols:</strong> wilds substitute for other symbols; scatters typically trigger free spins or bonus rounds.</li>" +
      "</ul>" +
      "<h2>Choosing the right slot for you</h2>" +
      "<p>If you want longer sessions and frequent small wins, look for low-volatility slots with an RTP of 96% or higher. If you're chasing a big score and can accept longer dry spells, high-volatility games and progressive jackpots are the draw. Progressive jackpots like Mega Moolah and Mega Fortune pool a small slice of every bet across many casinos into a single prize that can reach millions — but they carry a lower base RTP, so treat them as a long shot rather than a strategy.</p>" +
      "<h3>Tips for playing slots responsibly</h3>" +
      "<p>Slots are designed as entertainment, not income. Set a budget before you start, choose a stake that lets your bankroll last, and use the deposit limits and time-out tools every licensed casino provides. Check the RTP in the game's info panel before you play — it's published for a reason. And remember that no betting system changes the odds of an RNG game.</p>" +
      "<h2>Where to play slots in Canada</h2>" +
      "<p>The best slots experience comes down to library size, software providers (NetEnt, Play'n GO, Pragmatic Play and Big Time Gaming are among the leaders), and fast CAD withdrawals. Many Canadians now play primarily on their phones — see our guide to the <a href='/best-mobile-casinos-in-canada'>best mobile casinos in Canada</a>. For the full picture, compare our top-rated <a href='/casino'>online casinos</a> below, then branch out to other <a href='/games'>game guides</a> once you've found your favourites.</p>",
    faq: [
      { q: 'What is RTP in slots?', a: 'RTP (Return to Player) is the percentage of wagered money a slot pays back over the long term. A 96% RTP means it returns $96 per $100 wagered on average across millions of spins. Higher is better for players.' },
      { q: 'Are online slots rigged?', a: 'No. Licensed online slots use audited Random Number Generators that make every spin independent and fair. Always play at casinos licensed by a recognised regulator to be sure.' },
      { q: 'What does slot volatility mean?', a: 'Volatility describes how a slot pays. Low-volatility slots give frequent small wins; high-volatility slots pay less often but in bigger amounts.' },
    ],
  },
  blackjack: {
    body:
      "<p>Blackjack is the thinking player's casino game. With correct strategy, the house edge drops to well under 1% — among the best odds you'll find anywhere on the casino floor. The goal is simple: beat the dealer's hand without going over 21. Mastering how to get there is what separates winning sessions from losing ones.</p>" +
      "<h2>The basic rules</h2>" +
      "<p>You and the dealer are each dealt two cards. Number cards are worth their face value, face cards are worth 10, and an ace is worth 1 or 11. A 'blackjack' is an ace plus any 10-value card on your first two cards, and it usually pays 3:2. On your turn you can <strong>hit</strong> (take a card), <strong>stand</strong> (keep your total), <strong>double down</strong> (double your bet for one more card), or <strong>split</strong> a pair into two hands.</p>" +
      "<h2>Basic strategy: your biggest edge</h2>" +
      "<p>Blackjack is one of the few casino games where your decisions change the outcome. Basic strategy is a mathematically proven set of plays for every combination of your hand and the dealer's up-card. Learning it brings the house edge down to roughly 0.5%. A few cornerstones:</p>" +
      "<ul>" +
      "<li>Always split aces and eights; never split tens or fives.</li>" +
      "<li>Stand on a hard 17 or higher; hit a hard 11 or lower.</li>" +
      "<li>Double down on 11 when the dealer shows 2 through 10.</li>" +
      "<li>Stand on 12–16 when the dealer shows 2–6 (they're more likely to bust); hit when they show 7 or higher.</li>" +
      "</ul>" +
      "<h2>Bets and side bets to avoid</h2>" +
      "<p>The insurance bet, offered when the dealer shows an ace, carries a high house edge and basic strategy says to decline it. The same goes for most flashy side bets — they're fun but expensive over time. Stick to the main game where your edge is best.</p>" +
      "<h2>Live dealer blackjack</h2>" +
      "<p>Live dealer blackjack streams a real croupier to your screen and has become hugely popular with Canadian players who want the authentic table feel online. The rules and strategy are identical; you just get the atmosphere of a real table. Most top casinos now run extensive live-casino floors.</p>" +
      "<h2>Where to play blackjack in Canada</h2>" +
      "<p>Look for casinos with a range of blackjack variants, generous table limits and a strong live-casino section. Once you've got basic strategy down, you might also enjoy the similar low-house-edge appeal of <a href='/games/video-poker'>video poker</a>, or the pure chance of <a href='/games/roulette'>roulette</a>. Compare our top-rated <a href='/casino'>online casinos</a> below, and browse all our <a href='/games'>game guides</a> to keep learning.</p>",
    faq: [
      { q: 'Can you beat the house edge in blackjack?', a: 'Using correct basic strategy reduces the house edge to about 0.5%, one of the lowest in the casino. It does not eliminate it, but it makes blackjack one of the best-value games available.' },
      { q: 'Should I take insurance in blackjack?', a: 'No. Basic strategy recommends declining insurance — it carries a high house edge and loses money over the long run.' },
      { q: 'Is online blackjack fair?', a: 'Yes, at licensed casinos. RNG blackjack is independently audited, and live dealer blackjack uses real cards streamed in real time.' },
    ],
  },
  roulette: {
    body:
      "<p>Roulette is one of the most iconic casino games in the world — simple to play, thrilling to watch, and offering a wide range of bets to suit any style. For Canadian players, the single most important decision happens before you even place a chip: choosing the right wheel.</p>" +
      "<h2>European vs. American roulette</h2>" +
      "<p>European roulette has 37 pockets (0–36) and an RTP of 97.3%. American roulette adds a second zero (00), creating 38 pockets and dropping the RTP to 94.7%. That extra pocket nearly doubles the house edge, so <strong>always choose European (or French) roulette when it's available</strong>. French roulette can be better still, thanks to the 'La Partage' rule that returns half your even-money bet when the ball lands on zero.</p>" +
      "<h2>Types of bets</h2>" +
      "<p>Roulette bets fall into two groups:</p>" +
      "<ul>" +
      "<li><strong>Inside bets:</strong> placed on specific numbers or small groups. They pay more (a straight-up single number pays 35:1) but hit less often.</li>" +
      "<li><strong>Outside bets:</strong> red/black, odd/even, high/low, columns and dozens. These pay less but win more frequently — even-money bets hit close to half the time.</li>" +
      "</ul>" +
      "<h2>Betting systems: what to know</h2>" +
      "<p>You'll see plenty of roulette 'systems' — the Martingale, Fibonacci, D'Alembert and others. They can shape how a session feels, but it's important to understand that <strong>no system changes the underlying odds</strong>. Each spin is independent, and the house edge is fixed by the wheel you choose. Systems that require doubling after losses can also hit the table limit or drain a bankroll quickly, so use them for structure and entertainment, not as a way to beat the game.</p>" +
      "<h2>Live dealer roulette</h2>" +
      "<p>Live roulette streams a real wheel and croupier to your device and is a favourite in Canadian live-casino lobbies. It combines the trust of a physical wheel with the convenience of online play, and often includes immersive camera angles and statistics.</p>" +
      "<h2>Where to play roulette in Canada</h2>" +
      "<p>Prioritise casinos that offer European and French roulette (not just American), a solid live-casino section and CAD banking. If you enjoy roulette's mix of simple bets and big-number thrills, you may also like <a href='/games/slots'>online slots</a>. Compare our top-rated <a href='/casino'>online casinos</a> below, read our independent <a href='/reviews'>operator reviews</a>, and explore more <a href='/games'>game guides</a>.</p>",
    faq: [
      { q: 'Which roulette has the best odds?', a: 'European roulette (97.3% RTP) is better than American (94.7%) because it has only one zero. French roulette can be better still thanks to the La Partage rule on even-money bets.' },
      { q: 'Do roulette betting systems work?', a: 'No system changes the house edge — every spin is independent. Systems can structure your betting but cannot make roulette a long-term winning game.' },
      { q: 'What is the safest bet in roulette?', a: 'Even-money outside bets (red/black, odd/even, high/low) win close to half the time, making them the lowest-variance option, though they pay the least.' },
    ],
  },
  poker: {
    body:
      "<p>Poker is different from every other game in the casino: you're playing against other players, not the house. That means skill, position and psychology decide the long-term winners. For Canadian players, online poker offers everything from micro-stakes cash games to million-dollar tournaments — and, in Ontario, fully regulated rooms.</p>" +
      "<h2>The most popular formats</h2>" +
      "<ul>" +
      "<li><strong>Texas Hold'em:</strong> the world's most played variant. Each player gets two private cards and shares five community cards.</li>" +
      "<li><strong>Omaha:</strong> four private cards and bigger draws, popular with action-seeking players.</li>" +
      "<li><strong>Cash games:</strong> play with real chips at fixed stakes, join and leave whenever you like.</li>" +
      "<li><strong>Tournaments &amp; Sit &amp; Gos:</strong> pay one buy-in and play until you bust or win a share of the prize pool.</li>" +
      "</ul>" +
      "<h2>Poker in Ontario and the rest of Canada</h2>" +
      "<p>Ontario's regulated market means players there can access licensed poker rooms operating under iGaming Ontario and the AGCO, with proper player protection. Our <a href='/reviews/888-poker-ontario'>888 Poker Ontario review</a> covers one of the leading regulated options. Players elsewhere in Canada typically use internationally licensed rooms — the key, as always, is choosing a properly licensed site.</p>" +
      "<h2>Core strategy for beginners</h2>" +
      "<p>Winning poker starts with discipline, not fancy bluffs. A few fundamentals will put you ahead of most casual players:</p>" +
      "<ul>" +
      "<li><strong>Play fewer, stronger hands.</strong> Tight, aggressive play is the proven foundation.</li>" +
      "<li><strong>Use position.</strong> Acting last gives you information — play more hands in late position.</li>" +
      "<li><strong>Manage your bankroll.</strong> Keep enough buy-ins for your stake so variance doesn't wipe you out.</li>" +
      "<li><strong>Pay attention.</strong> Betting patterns tell you more than any single tell.</li>" +
      "</ul>" +
      "<h2>Why poker keeps growing in Canada</h2>" +
      "<p>Online poker has seen steady growth in Canada, driven by regulated Ontario rooms, soft cash games and a busy tournament calendar. Unlike RNG casino games, poker rewards study and improvement, which keeps players engaged for the long term.</p>" +
      "<h2>Where to play poker in Canada</h2>" +
      "<p>Look for rooms with good traffic (so games are always running), reliable software and fair rake. If you enjoy the skill element of poker, you may also like <a href='/games/video-poker'>video poker</a>, which rewards correct strategy against the house. Explore our <a href='/reviews'>reviews</a> and more <a href='/games'>game guides</a> to go deeper.</p>",
    faq: [
      { q: 'Is online poker legal in Canada?', a: 'Yes. Canadians can play online poker legally. Ontario has a regulated market through iGaming Ontario, while players in other provinces typically use internationally licensed rooms.' },
      { q: 'Is poker a game of skill or luck?', a: 'Both — luck matters in the short term, but over many hands skill, position and discipline determine who wins. That is what makes poker different from house-banked games.' },
      { q: 'How much money do I need to start?', a: 'You can start at micro-stakes for just a few dollars. The key is bankroll management: keep enough buy-ins for your chosen stake to ride out variance.' },
    ],
  },
  'video-poker': {
    body:
      "<p>Video poker is one of the casino's best-kept secrets: a game that blends the simplicity of slots with the strategy of poker, and offers some of the highest returns on the floor. On a full-pay machine played with correct strategy, the RTP can reach 99.5% or more — better than almost any slot.</p>" +
      "<h2>How video poker works</h2>" +
      "<p>You're dealt five cards and choose which to hold and which to discard. The discarded cards are replaced, and you're paid according to the strength of your final five-card poker hand. Unlike table poker, you're not playing against anyone — you're aiming to build the best hand against a fixed paytable.</p>" +
      "<h2>Reading the paytable</h2>" +
      "<p>The paytable is everything in video poker. The classic benchmark is 'Jacks or Better', and the payouts for a full house and a flush tell you the machine's quality:</p>" +
      "<ul>" +
      "<li><strong>9/6 Jacks or Better ('full pay'):</strong> pays 9 for a full house and 6 for a flush — an RTP around 99.5%. This is the one to look for.</li>" +
      "<li><strong>8/5 or lower:</strong> reduced payouts that quietly raise the house edge. Avoid where possible.</li>" +
      "</ul>" +
      "<p>Always check the full house and flush payouts before you sit down — two machines that look identical can have very different returns.</p>" +
      "<h2>Basic strategy</h2>" +
      "<p>Video poker has a mathematically correct hold for every hand, and following it is what unlocks that high RTP. Some reliable rules of thumb:</p>" +
      "<ul>" +
      "<li>Always keep a made paying hand, but break it only to draw to a royal flush.</li>" +
      "<li>Hold a low pair over a single high card.</li>" +
      "<li>Never keep a kicker with a pair — draw three fresh cards.</li>" +
      "<li>Keep four cards to a flush or an open-ended straight draw.</li>" +
      "</ul>" +
      "<h2>Popular variants</h2>" +
      "<p>Beyond Jacks or Better, you'll find Deuces Wild (where all twos are wild), Bonus Poker and Double Bonus, each with its own paytable and optimal strategy. Learn one variant well rather than jumping between them.</p>" +
      "<h2>Where to play video poker in Canada</h2>" +
      "<p>Look for casinos offering full-pay machines and a range of variants. If you like the skill-plus-strategy appeal, you'll likely enjoy <a href='/games/blackjack'>blackjack</a> and table <a href='/games/poker'>poker</a> too. Compare our top-rated <a href='/casino'>online casinos</a> and read our <a href='/reviews'>reviews</a> to find the best places to play.</p>",
    faq: [
      { q: 'What is the best video poker game?', a: 'Full-pay 9/6 Jacks or Better is the benchmark, with an RTP around 99.5% when played with correct strategy. Always check the full house and flush payouts.' },
      { q: 'Does strategy really matter in video poker?', a: 'Yes — video poker has a mathematically correct play for every hand, and following it is what unlocks the high return. Poor decisions sharply increase the house edge.' },
      { q: 'Is video poker better than slots?', a: 'For return, usually yes. Full-pay video poker played correctly returns more than almost any slot, though it requires learning basic strategy.' },
    ],
  },
  bingo: {
    body:
      "<p>Online bingo is one of the most social and accessible ways to play in Canada — low-stakes, easy to learn, and packed with community chat rooms and jackpot games. Whether you grew up on 75-ball halls or prefer the faster 90-ball game, there's an online room to match.</p>" +
      "<h2>How online bingo works</h2>" +
      "<p>You buy tickets (cards) for a game, and numbers are drawn at random. Matching numbers are marked automatically — 'auto-daub' means you never miss a call — and you win by completing a set pattern: a line, two lines, or a full house. Because the software daubs for you, you can play multiple cards at once without stress.</p>" +
      "<h2>The main bingo formats</h2>" +
      "<ul>" +
      "<li><strong>90-ball:</strong> the classic UK-style game with three prize tiers (one line, two lines, full house).</li>" +
      "<li><strong>75-ball:</strong> popular in North America, played on a 5x5 grid where you complete patterns or a full card.</li>" +
      "<li><strong>Speed &amp; 30-ball:</strong> faster variants for quick sessions.</li>" +
      "</ul>" +
      "<h2>Jackpots and chat games</h2>" +
      "<p>Many rooms offer progressive jackpots that grow until a player hits a full house within a set number of calls. Just as popular are the chat rooms, where hosts (CMs) run side games with small prizes and keep the community lively. For a lot of players, that social side is the main appeal — bingo is as much about the room as the win.</p>" +
      "<h2>Tips for playing bingo online</h2>" +
      "<ul>" +
      "<li><strong>Play rooms with fewer players</strong> when you want better odds of winning (the prize is shared among fewer tickets).</li>" +
      "<li><strong>Look for jackpot games</strong> for the big-win potential, and off-peak sessions for value.</li>" +
      "<li><strong>Use the bonuses</strong> many rooms offer on first deposit, but read the wagering terms first.</li>" +
      "<li><strong>Set a budget.</strong> Bingo is cheap fun — keep it that way with deposit limits.</li>" +
      "</ul>" +
      "<h2>Where to play bingo in Canada</h2>" +
      "<p>The best bingo sites combine busy rooms (so games run around the clock), a good range of formats, fair jackpots and CAD banking. Since bingo is a favourite on the go, our <a href='/best-mobile-casinos-in-canada'>best mobile casinos</a> guide is worth a look. If you enjoy the low-stakes, luck-based fun of bingo, you might also like <a href='/games/slots'>online slots</a>. Compare our top-rated <a href='/casino'>online casinos</a> and browse more <a href='/games'>game guides</a> to find your room.</p>",
    faq: [
      { q: 'Is online bingo legal in Canada?', a: 'Yes. Canadians can play online bingo legally at licensed operators, with games and payments handled in Canadian dollars.' },
      { q: 'What is the difference between 75-ball and 90-ball bingo?', a: '90-ball bingo uses three prize tiers (one line, two lines, full house), while 75-ball is played on a 5x5 grid completing patterns. 90-ball is UK-style; 75-ball is common in North America.' },
      { q: 'Can you improve your odds at bingo?', a: 'Bingo is a game of chance, but playing rooms with fewer players improves your share of the prize, and buying more cards increases your chances in a given game. Always play within a set budget.' },
    ],
  },
};

export function getGameGuide(slug: string): GameGuide | undefined {
  return GAME_GUIDES[slug];
}
