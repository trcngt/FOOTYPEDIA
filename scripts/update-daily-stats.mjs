import fs from 'fs';
import 'dotenv/config';

const apiKey = process.env.FOOTBALL_API_KEY;

// 1. Danh sách 6 giải đấu và các đội bóng trọng điểm
const leaguesConfig = [
  {
    leagueId: 39,
    leagueName: '1. Ngoại Hạng Anh (EPL)',
    slug: 'ngoai-hang-anh',
    teams: [
      { id: 50, name: 'Manchester City' },
      { id: 42, name: 'Arsenal' },
      { id: 40, name: 'Liverpool' },
      { id: 33, name: 'Manchester United' },
      { id: 49, name: 'Chelsea' },
      { id: 47, name: 'Tottenham Hotspur' },
    ],
  },
  {
    leagueId: 140,
    leagueName: '2. Tây Ban Nha (La Liga)',
    slug: 'la-liga',
    teams: [
      { id: 541, name: 'Real Madrid' },
      { id: 529, name: 'FC Barcelona' },
      { id: 530, name: 'Atlético Madrid' },
      { id: 531, name: 'Athletic Club' },
    ],
  },
  {
    leagueId: 78,
    leagueName: '3. Đức (Bundesliga)',
    slug: 'bundesliga',
    teams: [
      { id: 157, name: 'Bayern Munich' },
      { id: 168, name: 'Bayer Leverkusen' },
      { id: 165, name: 'Borussia Dortmund' },
    ],
  },
  {
    leagueId: 135,
    leagueName: '4. Ý (Serie A)',
    slug: 'serie-a',
    teams: [
      { id: 505, name: 'Inter Milan' },
      { id: 489, name: 'AC Milan' },
      { id: 496, name: 'Juventus' },
      { id: 492, name: 'Napoli' },
    ],
  },
  {
    leagueId: 61,
    leagueName: '5. Pháp (Ligue 1)',
    slug: 'ligue-1',
    teams: [
      { id: 85, name: 'Paris Saint-Germain' },
      { id: 91, name: 'AS Monaco' },
      { id: 81, name: 'Olympique Marseille' },
    ],
  },
  {
    leagueId: 307,
    leagueName: '6. Saudi Pro League',
    slug: 'saudi-pro-league',
    teams: [
      { id: 608, name: 'Al-Nassr' },
      { id: 607, name: 'Al-Hilal' },
      { id: 606, name: 'Al-Ittihad' },
    ],
  },
];

async function updateAllLeagues() {
  fs.mkdirSync('./src/data/leagues', { recursive: true });

  for (const league of leaguesConfig) {
    console.log(`\n🏆 Đang cập nhật giải: ${league.leagueName}...`);
    const leagueData = {
      leagueName: league.leagueName,
      slug: league.slug,
      teams: [],
    };

    for (const team of league.teams) {
      console.log(`  -> Lấy chỉ số mới nhất của CLB: ${team.name}...`);
      try {
        const res = await fetch(`https://v3.football.api-sports.io/players?team=${team.id}&season=2024`, {
          headers: { 'x-apisports-key': apiKey },
        });
        const data = await res.json();

        const players = (data.response || []).map((item) => ({
          id: item.player.id,
          name: item.player.name,
          age: item.player.age,
          nationality: item.player.nationality,
          photo: item.player.photo,
          position: item.statistics[0]?.games?.position || 'Cầu thủ',
          number: item.statistics[0]?.games?.number || null,
          appearences: item.statistics[0]?.games?.appearences || 0,
          goals: item.statistics[0]?.goals?.total || 0,
          assists: item.statistics[0]?.goals?.assists || 0,
          yellowCards: item.statistics[0]?.cards?.yellow || 0,
        }));

        leagueData.teams.push({
          id: team.id,
          name: team.name,
          players: players,
        });
      } catch (err) {
        console.error(`❌ Lỗi cập nhật đội ${team.name}:`, err);
      }

      // Nghỉ 6.5s để tuân thủ hạn mức 10 req/phút của API gói Free
      await new Promise((r) => setTimeout(r, 6500));
    }

    // Ghi riêng từng file JSON theo từng giải
    const filePath = `./src/data/leagues/${league.slug}.json`;
    fs.writeFileSync(filePath, JSON.stringify(leagueData, null, 2));
    console.log(`✅ Đã lưu xong giải: ${filePath}`);
  }

  console.log('\n🎉 TOÀN BỘ CÁC GIẢI ĐÃ ĐƯỢC TÁCH VÀ CẬP NHẬT THÀNH CÔNG!');
}

updateAllLeagues();