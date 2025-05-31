const sidebarLinks = [
  { icon: "home.svg", label: "Home" },
  { icon: "explore.svg", label: "Explore" },
  { icon: "subscriptions.svg", label: "Subscriptions" },
  { icon: "originals.svg", label: "Originals" },
  { icon: "youtube-music.svg", label: "YouTube Music" },
  { icon: "library.svg", label: "Library" },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      {sidebarLinks.map((link, index) => (
        <div className="sidebar-link" key={index}>
          <img src={`/icons/${link.icon}`} alt={link.label} />
          <div>{link.label}</div>
        </div>
      ))}
    </nav>
  );
}
