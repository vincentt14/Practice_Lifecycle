import React from "react";
import PropTypes from "prop-types";

const LanguageSwitcher = ({ language, languageChange }) => {
  function onChange(event) {
    languageChange(event.target.value);
  }

  return (
    <>
      <label htmlFor="laguage">Select Language</label>
      <select id="language" onChange={onChange} value={language}>
        <option value="all">All</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Dart">Dart</option>
        <option value="Python">Python</option>
      </select>
    </>
  );
};

LanguageSwitcher.propTypes = {
  language: PropTypes.string.isRequired,
  languageChange: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
