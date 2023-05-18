/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export const ThoughtsList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section className="thought-section">
      {thoughtsList.map((thought) => (
        <div className="single-thought" key={thought._id}>
          <h4>{thought.message}</h4>
          <div className="thought-details">
            <div className="likes-wrapper">
              <button
                className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
                type="button"
                onClick={() => handleLike(thought._id)}>
                  ❤️
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
      )).reverse()}
    </section>
  );
}