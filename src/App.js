import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <div className="videoDiv">
        <iframe
          title="live-class"
          className="responsiveIframe"
          id="video-onesaz"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
          src="https://www.youtube-nocookie.com/embed/Fmu12FH9ydY?theme=dark&rel=0&cc_load_policy=1&enablejsapi=1&modestbranding=1&showinfo=0&iv_load_policy=3&loop=1"
          sandbox=" allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation	allow-orientation-lock	 "
        />
      </div>
    </div>
  );
}

export default App;
