/* eslint-disable linebreak-style */
import React from 'react';

export const ThoughtsForm = ({ newThought, onNewThoughtChange, handleFormSubmit }) => {
  // disabling the submit button if characters exceed maximum allowed
  const isSubmitButtonDisabled = newThought.length < 4 || newThought.length > 140;
  // display warning if characters exceed maximum allowed, otherwise display amount of characters
  const characterWarning = () => {
    if (newThought.length > 140) {
      return (<p>Warning! Too many characters...</p>)
    } else {
      return (
        <p>{newThought.length}/140</p>
      )
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="new-thought">
        <h1>Welcome to Happy Thoughts! Type new thought below.</h1>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Share your happy thoughts here..."
          // defining a range of maximum rows and characters per row
          rows="4"
          cols="40"
          id="new-thought" />
        {characterWarning()}
      </label>
      <button
        type="submit"
        disabled={isSubmitButtonDisabled}>
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  )
}