const BackgroundVideo = () => (
  <div className="video-container">
    <video id="video" autoPlay="autoplay" loop="loop">
      <source src="/cart.mp4" type="video/mp4"/>
    </video>
  </div>
);

export default BackgroundVideo;