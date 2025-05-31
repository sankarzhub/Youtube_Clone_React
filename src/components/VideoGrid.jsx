const videos = [
  {
    thumbnail: "vazhithunaiye.jpg",
    link: "https://youtu.be/U1JLtpJTe84?si=J0UQ8EJoFMfFVCvs",
    time: "3:44",
    channelPic: "think_music.jpg",
    title: "Vazhithunaiye Video Song | Dragon | ...",
    author: "Think Music India",
    stats: "38M views · 2 months ago",
  },
  {
    thumbnail: "mokka-commentry.avif",
    link: "https://youtu.be/jFb7vn4Xgds?si=9lP8YaGM9Q9R4udR",
    time: "9:42",
    channelPic: "mokka-cmty.jpg",
    title: " Man of Steel 2 Update .. (தமிழ்)",
    author: "  Mokka Commentry",
    stats: "34K views ·5 hours ago",
  },
  {
    thumbnail: "madan gowri.avif",
    link: "https://youtu.be/MbAojJGuds4?si=J9HXMNT8Kzn0IFjB",
    time: "16:52",
    channelPic: "mg.jpg",
    title: "Google Big Change! | Madan Gowri | Tamil | MG Squad 🖖🏻",
    author: "Madan Gowri",
    stats: "189K views · 8 hours ago",
  },
  {
    thumbnail: "ambikapathy.avif",
    link: "https://youtu.be/vgStOhHqRdo?si=-nKtvV9ULK3j6Tsn",
    time: "4:57",
    channelPic: "sony_music.jpg",
    title: "Ambikapathy - Unnaal Unnaal Video Tamil | Dhanush | A. R. Rahman",
    author: "SonyMusicSouthVEVO",
    stats: "38M views · 5 years ago",
  },
  {
    thumbnail: "anbe sivam.avif",
    link: "https://youtu.be/EmTG6OFr-8A?si=1oxjjmMAEJgsKiV9",
    time: "26:10",
    channelPic: "ap.jpg",
    title:
      "அன்பே சிவம் Best Scenes | மன்னிப்பு கேக்குற மனசு தான் சாமி ! |Kamal Haasan | Madhavan R | Nassar",
    author: " AP International",
    stats: "103K views · 2 weeks ago",
  },
  {
    thumbnail: "village_cooking.avif",
    link: "https://youtu.be/PVcAhAxQcgM?si=IDKNqIq0pdFxUzj8",
    time: "11:32",
    channelPic: "village_cooking.jpg",
    title:
      "FULL CHICKEN ROAST | Whole Fried Chicken Recipe Cooking in village | Free Range Chicken Recipe",
    author: " Village Cooking Channel",
    stats: "154M views · 3 years ago",
  },
  {
    thumbnail: "vijay.avif",
    link: "https://youtu.be/UN7HgzJsFZA?si=98jLDs_zk4m_dgLx",
    time: "6:15",
    channelPic: "sony.jpg",
    title:
      " Aalaporan Thamizhan 8K/4K Music Video | Mersal | Vijay | A.R. Rahman | Nithya Menen",
    author: "Sony Music South",
    stats: "523K views · 2 months ago",
  },
  {
    thumbnail: "batman vs superman.avif",
    link: "https://youtu.be/yngKXEBALE0?si=0KGV-ip6zmY8hWTR",
    time: "9:56",
    channelPic: "clipzone.jpg",
    title:
      " Batman v Superman: Dawn of Justice | EPIC Fight Scene! | ClipZone: Heroes & Villains",
    author: "ClipZone:Heroes & Villains",
    stats: "19M views · 4 years ago",
  },
  {
    thumbnail: "golden-sparrow.jpg",
    link: "https://youtu.be/1seR_ckLXz4?si=_vrH_PYEkUPGzCFt",
    time: "4:18",
    channelPic: "wunderbar.jpg",
    title:
      " Golden Sparrow - Video Song | Dhanush | Priyanka Mohan | Pavish | Anika | GV Prakash NEEK",
    author: " Wunderbar Films",
    stats: "107M views · 2 months ago",
  },
  {
    thumbnail: "vj-siddhu-ep1.avif",
    link: "https://youtu.be/s3Ci3qj7-_w?si=zN77sA_QaSPV4vp3",
    time: "14:48",
    channelPic: "vj-siddhu-vlogs.jpg",
    title:
      " மொத்த Flight-ம் நமக்கா 😱✈️ | Maldives Series | Ep-01 | Vj Siddhu Vlogs",
    author: "Vj Siddhu Vlogs",
    stats: "2.8M views · 7 days ago",
  },
  {
    thumbnail: "spiderman.avif",
    link: "https://youtu.be/or3zl9oLjD0?si=snGiJ4OxLIOR4FyY",
    time: "9:56",
    channelPic: "spidy.jpg",
    title: "Curing The Villians | SPIDER-MAN:NO WAY HOME",
    author: " FilmIsNOW Epic Scenes",
    stats: "593K views · 5 months ago",
  },
  {
    thumbnail: "kanimaa.avif",
    link: "https://youtu.be/5CEXL8kfGL4?si=1P9wGcbvcMYFFj3Q",
    time: "4:05",
    channelPic: "t-series tamil.jpg",
    title:
      "  Full Video:KANIMAA - RETRO | Suriya | Karthik Subbaraj | Pooja Hedge",
    author: " T-Series Tamil",
    stats: "9M views · 9 days ago",
  },
];

export default function VideoGrid() {
  return (
    <section className="video-grid">
      {videos.map((video, index) => (
        <div className="video-preview" key={index}>
          <div className="thumbnail-row">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img
                src={`/assets/${video.thumbnail}`}
                className="thumbnail-1"
                alt="thumbnail"
              />
            </a>
            <div className="video-time">{video.time}</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={`/channel-pictures/${video.channelPic}`}
                alt="channel"
              />
            </div>
            <div className="video-info">
              <p className="video-title">{video.title}</p>
              <p className="video-author">
                {video.author}{" "}
                <i style={{ fontSize: 12 }} className="fa">
                  &#xf058;
                </i>
              </p>
              <p className="video-stats">{video.stats}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
