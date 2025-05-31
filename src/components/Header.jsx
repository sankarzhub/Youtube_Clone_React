export default function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img
          className="hamburger-menu"
          src="/icons/hamburger-menu.svg"
          alt="menu"
        />
        <img
          className="youtube-logo"
          src="/icons/youtube-logo.svg"
          alt="YouTube"
        />
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <img className="search-icon" src="/icons/search.svg" alt="search" />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-button">
          <img
            className="voice-search-icon"
            src="/icons/voice-search-icon.svg"
            alt="voice"
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="/icons/upload.svg" alt="upload" />
          <div className="tooltip">Create</div>
        </div>
        <div className="youtube-apps-icon-container">
          <img
            className="youtube-apps-icon"
            src="/icons/youtube-apps.svg"
            alt="apps"
          />
          <div className="tooltip">YouTube Apps</div>
        </div>
        <div className="notifications-icon-container">
          <img
            className="notifications-icon"
            src="/icons/notifications.svg"
            alt="notifications"
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img
          className="current-user-picture"
          src="/channel-pictures/me.jpg"
          alt="user"
        />
      </div>
    </header>
  );
}
