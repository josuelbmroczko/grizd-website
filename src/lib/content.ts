// ============================================================================
// Conteúdo do site — edite aqui para atualizar textos, faixas, vídeos, etc.
// Nenhum dado aqui vem de banco de dados; é conteúdo estático do portfólio.
// ============================================================================

export const site = {
  name: "Kristi Skëndaj",
  role: "Producer • Audio Engineer • Audio Editor",
  tagline:
    "Producing music, engineering sound, and editing audio for artists, brands, and media.",
  email: "prodbygrizd@gmail.com",
  instagram: "https://www.instagram.com/prodbygrizd/",
  linkedin: "https://www.linkedin.com/in/kristi-skendaj-08860b325/",
  youtube: "https://www.youtube.com/@ProdbyGrizD",
  youtubeHandle: "ProdbyGrizD",
  youtubeSubs: "4.5k subscribers",
  youtubeViews: "1.1M+ Views",
  youtubeFeaturedVideo: "Jg5Pl31cVtA",
  beatstore: "https://grizd.beatstars.com/",
  beatstoreEmbed: "https://player.beatstars.com/?storeId=152735",
  fullCredits: "https://credits.muso.ai/profile/63862e94-3375-41ba-8412-70c88b37ce4b/credits",
  cvFile: "/cv/kristi-skendaj-cv.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Music", href: "#music" },
  { label: "Audio", href: "#audio" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export type Track = {
  id: string;
  spotifyUrl: string;
  role: string;
  streams: string;
  title?: string;
  coverUrl?: string;
};

// IDs extraídos das URLs do Spotify fornecidas no briefing
export const tracks: Track[] = [
  {
    id: "79sxLcWuXKl11sK8p1jZJS",
    title: "Frankenstein: Parte por Parte",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0264387fab5bcec93324891ebf",
    spotifyUrl: "https://open.spotify.com/track/79sxLcWuXKl11sK8p1jZJS",
    role: "Composer • Co-writer • Producer",
    streams: "9.700.000+ Streams",
  },
  {
    id: "4spfEtudoQsjOILsT2sHID",
    title: "Billy Kid: Cavaleiro da Constelação",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026da01698fc9a572034414e54",
    spotifyUrl: "https://open.spotify.com/track/4spfEtudoQsjOILsT2sHID",
    role: "Composer • Co-writer • Producer • Mixing",
    streams: "3.700.000+ Streams",
  },
  {
    id: "1kYiSaFo2hccIqtE2PvEV6",
    title: "TATUSIU",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d1079d44bff6030e43e2b18c",
    spotifyUrl: "https://open.spotify.com/track/1kYiSaFo2hccIqtE2PvEV6",
    role: "Composer • Co-writer • Producer • Guitarist • Mixing • Mastering",
    streams: "1.600.000+ Streams",
  },
  {
    id: "2iv29FcgoDBXdEGIPIgeOq",
    title: "Ratakachu",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02902f7de71ac5ba3a4440eaa1",
    spotifyUrl: "https://open.spotify.com/track/2iv29FcgoDBXdEGIPIgeOq",
    role: "Composer • Co-writer • Producer • Guitarist",
    streams: "490.000+ Streams",
  },
  {
    id: "72on8RepQj8zeyjpDVxbuW",
    title: "Bloodless",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021d0f9ae59f7ed20c1eb0defa",
    spotifyUrl: "https://open.spotify.com/track/72on8RepQj8zeyjpDVxbuW",
    role: "Composer • Co-writer • Producer",
    streams: "1.300.000+ Streams",
  },
  {
    id: "4ttkgU0TFkiYJE1CxDzq1r",
    title: "النجدة",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0291e887410e7169d94768ca7d",
    spotifyUrl: "https://open.spotify.com/track/4ttkgU0TFkiYJE1CxDzq1r",
    role: "Composer • Co-writer • Producer • Guitarist",
    streams: "3.000.000+ Streams",
  },
  {
    id: "3SApiFVy90SHtONrVVWS3Y",
    title: "Reflexos do Crepúsculo",
    coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02da62fa59ff3e02d5b8e835f2",
    spotifyUrl: "https://open.spotify.com/track/3SApiFVy90SHtONrVVWS3Y",
    role: "Composer • Co-writer • Producer",
    streams: "590.000+ Streams",
  },
  {
    id: "7I2mUQd0gSibvUnIc9r4cv",
    title: "First Date",
    coverUrl: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0228ae6b94d49178d5f0625cf1",
    spotifyUrl: "https://open.spotify.com/track/7I2mUQd0gSibvUnIc9r4cv",
    role: "Composer • Co-writer • Producer • Mixing",
    streams: "400.000+ Streams",
  },
];

export const beatGenres = ["Pop", "Indie", "Rock", "Hip Hop"];

export type VideoProject = {
  title: string;
  role: string;
  driveUrl: string;
};

// Links do Google Drive fornecidos — trocar por embeds/arquivos definitivos quando disponíveis
export const videoProjects: VideoProject[] = [
  {
    title: "Commercial | BLVCK PARIS",
    role: "Composed and produced the music. Audio post-production (foley, sound design).",
    driveUrl:
      "https://drive.google.com/file/d/1J0OYORbOE5vtqC0SrOA42EgfZKkkD0-7/view?usp=sharing",
  },
  {
    title: "Short Film - Crime/Comedy | NGOP MEDIA",
    role:
      "Full audio post-production (audio synchronization, dialogue, foley, sound design, music integration, mixing and mastering).",
    driveUrl:
      "https://drive.google.com/file/d/18lS2Zav3OksUkHxnuyrC8ViSekKFqAJr/view?usp=sharing",
  },
  {
    title: "Short Video - Animated | NGOP MEDIA",
    role:
      "Full audio post-production (dialogue, ADR/dubbing, foley, sound design, music integration, mixing and mastering).",
    driveUrl:
      "https://drive.google.com/file/d/1ibWKyJEPqLzWYmakPld3Jk6f5WvgIEVj/view?usp=sharing",
  },
  {
    title: "Commercial | FC Lausanne-Sport",
    role: "Composed and produced the music.",
    driveUrl:
      "https://drive.google.com/file/d/1VIlKBV-994Emm-biwDOhmX2v-whjxMEw/view?usp=sharing",
  },
  {
    title: "Audio Post-Production Project",
    role:
      "Full audio post-production (audio synchronization, dialogue, foley, sound design, music integration, mixing and mastering).",
    driveUrl:
      "https://drive.google.com/file/d/1L1ZwudAOcu9cCzJ6OAX8J0qtKKCsQFw7/view?usp=sharing",
  },
  {
    title: "Short Film - Horror/Comedy | NGOP MEDIA",
    role:
      "Full audio post-production (audio synchronization, dialogue, foley, sound design, music integration, mixing and mastering).",
    driveUrl:
      "https://drive.google.com/file/d/1NjLvTz3mTFr6vC2m4Nla12qfpFGuq-pK/view?usp=sharing",
  },
];

// Nomes apenas para referência interna (não exibidos no site — só os logos aparecem)
export const companies = [
  "NGOP Media",
  "FC Lausanne-Sport",
  "BLVCK Paris",
  "AUDI",
  "Kredo.al",
  "TOK Digital Agency",
  "Porsche",
  "Midea",
];

export const highlights = [
  { value: "70M+", label: "Streams" },
  { value: "100+", label: "Projects" },
  { value: "6+", label: "Years Experience" },
  { value: "1.1M", label: "YT Channel Views" },
];

export const expertise = [
  {
    title: "Music Production",
    description:
      "Song production, arrangement, sound design, and creative development.",
  },
  {
    title: "Audio Engineering",
    description: "Mixing, mastering, vocal production, and sonic refinement.",
  },
  {
    title: "Post-Production",
    description:
      "Dialogue editing, audio restoration, and sound editing for film and digital media.",
  },
];

export const aboutParagraphs = [
  "Hi, I'm Kristi Skëndaj — a music producer, audio engineer, and audio editor based in Albania.",
  "I've always been fascinated by how sound can shape emotions and bring stories to life. To me, great sound is about creating meaningful experiences that stay with people long after they've listened.",
  "For over six years, I've worked with artists, brands, and media companies across music production, mixing and mastering, dialogue editing, audio restoration, and post-production. Whether I'm producing a record or editing dialogue for film and digital content, my goal is always the same: to create work that connects with people.",
];
