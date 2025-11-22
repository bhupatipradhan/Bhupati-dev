import React from 'react';
import { useVersion } from '../context/VersionContext';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const VersionSwitcher = ({ isScrolled }) => {
  const { version, switchVersion } = useVersion();

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
        v0.1
      </span>
      <button
        onClick={() => switchVersion(version === 'v0.1' ? 'v0.2' : 'v0.1')}
        className={`relative inline-flex items-center transition-all ${isScrolled ? 'text-primary-400' : 'text-white'}`}
        aria-label="Toggle version"
      >
        {version === 'v0.2' ? (
          <FaToggleOn size={32} className="text-primary-400" />
        ) : (
          <FaToggleOff size={32} />
        )}
      </button>
      <span className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
        v0.2
      </span>
    </div>
  );
};

export default VersionSwitcher;

