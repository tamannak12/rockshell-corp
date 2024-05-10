import React from 'react';

function MapEmbed() {
  return (
    <div className="relative h-0 pb-56.25 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.493021452407!2d72.88237437767785!3d19.10055205188065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86e4dfdd08d%3A0x2a61bcfb82743272!2sV%20T%20M%20Building%2C%20Safed%20Pul%2C%20Saki%20Naka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1714537249424!5m2!1sen!2sin"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
