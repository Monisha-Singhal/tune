import { useState } from "react";

const mockSongs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", genre: "Pop", mood: "Energetic", duration: "3:20", color: "#FF6B6B" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", genre: "Pop", mood: "Happy", duration: "3:23", color: "#FFD93D" },
  { id: 3, title: "Stay", artist: "The Kid LAROI", genre: "Pop", mood: "Sad", duration: "2:21", color: "#6BCB77" },
  { id: 4, title: "Peaches", artist: "Justin Bieber", genre: "R&B", mood: "Chill", duration: "3:18", color: "#FF922B" },
  { id: 5, title: "Good 4 U", artist: "Olivia Rodrigo", genre: "Pop-Rock", mood: "Energetic", duration: "2:58", color: "#CC5DE8" },
  { id: 6, title: "Montero", artist: "Lil Nas X", genre: "Hip-Hop", mood: "Energetic", duration: "2:17", color: "#FF6B6B" },
  { id: 7, title: "Watermelon Sugar", artist: "Harry Styles", genre: "Pop", mood: "Happy", duration: "2:54", color: "#FFD93D" },
  { id: 8, title: "drivers license", artist: "Olivia Rodrigo", genre: "Pop", mood: "Sad", duration: "4:02", color: "#74C0FC" },
  { id: 9, title: "Heat Waves", artist: "Glass Animals", genre: "Indie", mood: "Chill", duration: "3:59", color: "#FF8CC8" },
  { id: 10, title: "Industry Baby", artist: "Lil Nas X", genre: "Hip-Hop", mood: "Energetic", duration: "3:32", color: "#FF6B6B" },
  { id: 11, title: "Shivers", artist: "Ed Sheeran", genre: "Pop", mood: "Happy", duration: "3:27", color: "#FFD93D" },
  { id: 12, title: "Easy On Me", artist: "Adele", genre: "Pop", mood: "Sad", duration: "3:44", color: "#74C0FC" },
  { id: 13, title: "bad guy", artist: "Billie Eilish", genre: "Pop", mood: "Energetic", duration: "3:14", color: "#6BCB77" },
  { id: 14, title: "Circles", artist: "Post Malone", genre: "Pop", mood: "Chill", duration: "3:35", color: "#9775FA" },
  { id: 15, title: "Dynamite", artist: "BTS", genre: "Pop", mood: "Happy", duration: "3:19", color: "#FFD93D" },
  { id: 16, title: "Lucid Dreams", artist: "Juice WRLD", genre: "Hip-Hop", mood: "Sad", duration: "3:59", color: "#74C0FC" },
  { id: 17, title: "Save Your Tears", artist: "The Weeknd", genre: "Pop", mood: "Sad", duration: "3:35", color: "#74C0FC" },
  { id: 18, title: "Butter", artist: "BTS", genre: "Pop", mood: "Happy", duration: "2:44", color: "#FFD93D" },
  { id: 19, title: "HUMBLE.", artist: "Kendrick Lamar", genre: "Hip-Hop", mood: "Energetic", duration: "2:57", color: "#FF6B6B" },
  { id: 20, title: "Golden Hour", artist: "JVKE", genre: "Indie", mood: "Happy", duration: "3:29", color: "#FFD93D" },
];

const GENRES = ["All", "Pop", "R&B", "Hip-Hop", "Indie", "Pop-Rock"];
const MOODS = ["All", "Happy", "Sad", "Energetic", "Chill"];

function MusicBars() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "18px" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: "3px",
            background: "#A78BFA",
            borderRadius: "2px",
            animation: `musicBar${i} 0.8s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes musicBar1 { from { height: 4px } to { height: 16px } }
        @keyframes musicBar2 { from { height: 8px } to { height: 10px } }
        @keyframes musicBar3 { from { height: 12px } to { height: 6px } }
        @keyframes musicBar4 { from { height: 4px } to { height: 14px } }
      `}</style>
    </div>
  );
}

function SongCard({ song, index }) {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        background: "#1A1A2E",
        border: "1px solid #2D2D4E",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        animation: `fadeSlideIn 0.4s ease both`,
        animationDelay: `${index * 0.05}s`,
        transition: "transform 0.2s, border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "#A78BFA";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#2D2D4E";
      }}
    >
      {/* Album art placeholder */}
      <div
        style={{
          width: "52px", height: "52px",
          borderRadius: "12px",
          background: `linear-gradient(135deg, ${song.color}44, ${song.color}22)`,
          border: `2px solid ${song.color}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", flexShrink: 0,
        }}
      >
        🎵
      </div>

      {/* Song info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "#F1F1F1", fontWeight: 600, fontSize: "15px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {song.title}
        </div>
        <div style={{ color: "#9CA3AF", fontSize: "13px", marginTop: "2px" }}>{song.artist}</div>
        <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
          <span style={{ background: "#2D2D4E", color: "#A78BFA", fontSize: "11px", padding: "2px 8px", borderRadius: "20px" }}>{song.genre}</span>
          <span style={{ background: "#2D2D4E", color: "#86EFAC", fontSize: "11px", padding: "2px 8px", borderRadius: "20px" }}>{song.mood}</span>
        </div>
      </div>

      {/* Duration + controls */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
        <div style={{ color: "#6B7280", fontSize: "12px" }}>{song.duration}</div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {playing && <MusicBars />}
          <button
            onClick={() => setPlaying(!playing)}
            style={{
              background: playing ? "#A78BFA" : "#2D2D4E",
              border: "none", borderRadius: "50%", width: "30px", height: "30px",
              cursor: "pointer", color: playing ? "#fff" : "#A78BFA", fontSize: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s"
            }}
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button
            onClick={() => setLiked(!liked)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "18px", padding: 0, transition: "transform 0.15s"
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = "scale(1.3)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TuneMatch() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All");
  const [search, setSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);

  function handleGetRecommendations() {
    let filtered = mockSongs;
    if (selectedGenre !== "All") filtered = filtered.filter(s => s.genre === selectedGenre);
    if (selectedMood !== "All") filtered = filtered.filter(s => s.mood === selectedMood);
    if (search.trim()) filtered = filtered.filter(s =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.artist.toLowerCase().includes(search.toLowerCase())
    );
    // Shuffle for variety
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setResults(shuffled);
    setHasSearched(true);
  }

  function handleReset() {
    setSelectedGenre("All");
    setSelectedMood("All");
    setSearch("");
    setResults([]);
    setHasSearched(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0D0D1A 0%, #12122A 50%, #0D0D1A 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#F1F1F1",
    }}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 #A78BFA44; }
          50%       { box-shadow: 0 0 0 12px #A78BFA00; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #12122A; }
        ::-webkit-scrollbar-thumb { background: #2D2D4E; border-radius: 3px; }
        input::placeholder { color: #4B5563; }
        input:focus { outline: none; border-color: #A78BFA !important; }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px", animation: "fadeSlideIn 0.5s ease" }}>
          <div style={{ fontSize: "48px", marginBottom: "8px" }}>🎧</div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, margin: 0,
            background: "linear-gradient(90deg, #A78BFA, #F472B6, #60A5FA)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-1px"
          }}>
            TuneMatch
          </h1>
          <p style={{ color: "#6B7280", marginTop: "8px", fontSize: "15px" }}>
            Tell us your vibe — we'll find your next favourite song
          </p>
        </div>

        {/* Filter Card */}
        <div style={{
          background: "#16162A",
          border: "1px solid #2D2D4E",
          borderRadius: "20px",
          padding: "28px",
          marginBottom: "32px",
          animation: "fadeSlideIn 0.5s ease 0.1s both"
        }}>
          {/* Search */}
          <div style={{ marginBottom: "22px" }}>
            <label style={{ display: "block", color: "#9CA3AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
              🔍 Search Artist or Song
            </label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGetRecommendations()}
              placeholder="e.g. The Weeknd, Blinding Lights..."
              style={{
                width: "100%", padding: "12px 16px",
                background: "#1A1A2E", border: "1px solid #2D2D4E",
                borderRadius: "12px", color: "#F1F1F1", fontSize: "14px",
                transition: "border-color 0.2s"
              }}
            />
          </div>

          {/* Genre */}
          <div style={{ marginBottom: "22px" }}>
            <label style={{ display: "block", color: "#9CA3AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
              🎸 Genre
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {GENRES.map(g => (
                <button key={g} onClick={() => setSelectedGenre(g)} style={{
                  padding: "8px 16px", borderRadius: "20px", border: "1px solid",
                  borderColor: selectedGenre === g ? "#A78BFA" : "#2D2D4E",
                  background: selectedGenre === g ? "#A78BFA22" : "transparent",
                  color: selectedGenre === g ? "#A78BFA" : "#9CA3AF",
                  cursor: "pointer", fontSize: "13px", fontWeight: 500,
                  transition: "all 0.2s"
                }}>{g}</button>
              ))}
            </div>
          </div>

          {/* Mood */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "#9CA3AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
              🌙 Mood
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {MOODS.map(m => (
                <button key={m} onClick={() => setSelectedMood(m)} style={{
                  padding: "8px 16px", borderRadius: "20px", border: "1px solid",
                  borderColor: selectedMood === m ? "#F472B6" : "#2D2D4E",
                  background: selectedMood === m ? "#F472B622" : "transparent",
                  color: selectedMood === m ? "#F472B6" : "#9CA3AF",
                  cursor: "pointer", fontSize: "13px", fontWeight: 500,
                  transition: "all 0.2s"
                }}>{m}</button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={handleGetRecommendations}
              style={{
                flex: 1, padding: "14px",
                background: "linear-gradient(90deg, #7C3AED, #A78BFA)",
                border: "none", borderRadius: "12px",
                color: "#fff", fontWeight: 700, fontSize: "15px",
                cursor: "pointer", animation: "pulse 2s infinite",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              Get Recommendations ✨
            </button>
            {hasSearched && (
              <button onClick={handleReset} style={{
                padding: "14px 20px", background: "transparent",
                border: "1px solid #2D2D4E", borderRadius: "12px",
                color: "#6B7280", cursor: "pointer", fontSize: "14px",
                transition: "all 0.2s"
              }}>Reset</button>
            )}
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div style={{ animation: "fadeSlideIn 0.4s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ margin: 0, fontSize: "18px", color: "#E5E7EB", fontWeight: 700 }}>
                {results.length > 0 ? `${results.length} songs found` : "No songs found"}
              </h2>
              {results.length > 0 && (
                <span style={{ color: "#6B7280", fontSize: "13px" }}>Click ▶ to preview • ❤️ to save</span>
              )}
            </div>

            {results.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#4B5563" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>🎵</div>
                <p style={{ margin: 0 }}>No matches found. Try different filters!</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {results.map((song, i) => <SongCard key={song.id} song={song} index={i} />)}
              </div>
            )}
          </div>
        )}

        {!hasSearched && (
          <div style={{ textAlign: "center", color: "#374151", padding: "40px 0", animation: "fadeSlideIn 0.5s ease 0.3s both" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎶</div>
            <p style={{ margin: 0, fontSize: "14px" }}>Select your genre & mood, then hit Get Recommendations</p>
          </div>
        )}
      </div>
    </div>
  );
}