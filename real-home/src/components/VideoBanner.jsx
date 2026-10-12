import { useRef } from "react";
import { Play } from "lucide-react";
import "./VideoBanner.css";
import aerialVideo from "../assets/aerial-view.mp4";
import aerialPoster from "../assets/aerial.png";

export default function VideoBanner({
  image = aerialPoster,
  video = aerialVideo,
  onPlay,
}) {
  const videoRef = useRef(null);

  const handleTogglePlayback = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    onPlay?.();
  };

  return (
    <div className="container-page video-banner-wrap">
      <button
        type="button"
        onClick={handleTogglePlayback}
        className="video-banner"
        aria-label="Toggle aerial video playback"
      >
        <video
          ref={videoRef}
          className="video-banner-video"
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support embedded videos.
        </video>
        <span className="video-banner-overlay">
          <span className="video-banner-play">
            <Play size={24} />
          </span>
        </span>
      </button>
    </div>
  );
}
