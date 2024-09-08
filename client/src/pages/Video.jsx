import React from 'react';
import styled from 'styled-components';
import video from '../assets/website/video.mp4';

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const videos = [
  { id: 1, src: video },
  { id: 2, src: video },
  { id: 3, src: video },
  { id: 4, src: video },
];

const Video = () => {
  const playVideo = (id) => {
    const video = document.getElementById(`video-${id}`);
    video.play();
  };

  const pauseVideo = (id) => {
    const video = document.getElementById(`video-${id}`);
    video.pause();
  };

  return (
    <VideoGrid>
      {videos.map((video) => (
        <div key={video.id}>
          <VideoContainer>
            <video id={`video-${video.id}`} src={video.src} controls></video>
          </VideoContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: '#333' }}>
          <span>203</span>
          <span>5,345 views</span>
        </div>
          {/* <Controls>
            <button onClick={() => playVideo(video.id)}>Play</button>
            <button onClick={() => pauseVideo(video.id)}>Pause</button>
          </Controls> */}
        </div>
      ))}
    </VideoGrid>
  );
};

export default Video;
