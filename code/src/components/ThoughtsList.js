/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ThoughtsList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return (
      <div className="loading-div">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
          <circle
            className="spin"
            cx="400"
            cy="400"
            fill="none"
            r="200"
            strokeWidth="50"
            stroke="var(--black)"
            strokeDasharray="700 1400"
            strokeLinecap="round" />
        </svg>
      </div>
    )
  }
  return (
    <section className="thought-section">
      {thoughtsList.map((thought) => (
        <div className="single-thought" key={thought._id}>
          <h4>{thought.message}</h4>
          <div className="thought-details">
            <div className="likes-wrapper">
              <button
                aria-label="likeThought"
                className={thought.hearts === 0 ? 'button icon-button no-glow' : 'button icon-button'}
                type="button"
                onClick={() => handleLike(thought._id)}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <span>x {thought.hearts}</span>
            </div>
            <span className="time">{formatDistanceToNow(
              new Date(thought.createdAt),
              Date.now(),
              { addSuffix: true }
            )}
                &nbsp;ago
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThoughtsList;