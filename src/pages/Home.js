import { Link } from "react-router-dom";

export default function Home() {
  const listItems = [
    { name: "Profile", link: "/profile" },
    { name: "Calendar", link: "/calendar" },
    { name: "Safari", link: "/safari" },
    { name: "Maps", link: "/maps" },
    { name: "Photos", link: "/photos" },
    { name: "Notes", link: "/notes" },
  ];

  return (
    <div className="App">
      <div className="menu">
        <ol className="menu-list">
          {listItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={item.link} className="menu-item-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
