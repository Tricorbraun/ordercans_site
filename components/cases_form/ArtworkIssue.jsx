import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const ArtworkIssue = () => {
  const { setField } = useCaseStore();
  const handleArtwork = (e) => {
    const value = e.target.value;
    setField('artwork', value);
  };

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Artwork Issue
        <input type="radio" onChange={handleArtwork} className="vessel_input" />
      </label>
    </div>
  );
};

export default ArtworkIssue;
