// components/SubstackFeed.js
import React, { useEffect } from 'react';

const SubstackFeed = ({ substackUrl, posts, layout, colors }) => {
  useEffect(() => {
    // Configuration for the Substack Feed widget
    window.SubstackFeedWidget = {
      substackUrl: substackUrl,
      posts: posts,
      layout: layout,
      colors: colors
    };

    // Load the Substack Feed widget script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [substackUrl, posts, layout, colors]);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;
