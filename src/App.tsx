import banner from './images/banner.png';
// import { ReactComponent as Ethereum } from './images/ethereum.svg';
import { ReactComponent as Github } from './images/github.svg';
import { ReactComponent as Twitch } from './images/twitch.svg';
import { ReactComponent as Twitter } from './images/twitter.svg';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Just Buidl It</h1>
        <p>Learn, Build, Ship</p>
      </header>
      <img src={banner} className="banner" alt="banner" />
      <div className="links">
        <a href="https://www.twitch.tv/just_buidl_it" target="_blank" data-testid="twich-link">
          <Twitch alt="Twitch logo" />
        </a>
        <a href="https://www.twitter.com/just_buidl_it" target="_blank" data-testid="twitter-link">
          <Twitter alt="Twitter logo" />
        </a>
        <a href="https://www.github.com/just-buidl-it" target="_blank" data-testid="github-link">
          <Github alt="Github logo" />
        </a>

      </div>
    </div>
  );
}

export default App;
