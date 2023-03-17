import React from 'react';
import './SuggestionItem.css';

const categoryEmojiMap = {
  Transcendence: '🌌',
  Actualization: '🌟',
  Aesthetics: '🎨',
  Cognition: '🧠',
  Esteem: '🏆',
  Love: '❤️',
  Safety: '🔒',
  Physiology: '💪',
};

export default function SuggestionItem({ suggestion }) {
  return (
    <div className="sugg-wrapper">
      <div className="sugg-item">
        <div className="sugg-item-content">
          <div className="user-emoji-container">
            <h1>{suggestion.user.username} says:</h1>
          </div>
          <div className="sugg-body">{suggestion.body}</div>
          <div className="buttons-parts">
            <button>
              <i className="fas fa-heart" /> Like
            </button>
            <button>
              <i className="fas fa-thumbtack" /> Pin
            </button>
          </div>
          <div className="emoji">
            {categoryEmojiMap[suggestion.categoryTag]}
          </div>
        </div>
      </div>
    </div>
  );
}
