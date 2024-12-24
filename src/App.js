import './App.css';

function App() {
  const listItems = [
    { name: 'Profile', link: '/profile' },
    { name: 'Calendar', link: '/calendar' },
    { name: 'Safari', link: '/safari' },
    { name: 'Maps', link: '/maps' },
    { name: 'Photos', link: '/photos' },
    { name: 'Notes', link: '/notes' },
  ]

  return (
    <div className="App">
      <div className="menu">
        <ol className="menu-list">
          {listItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} className="menu-item-link">{item.name}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
