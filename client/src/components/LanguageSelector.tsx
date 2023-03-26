import React from "react";
import Select from "react-select";
import { LangaugeOption } from "../utils/types";

interface LanguageSelectorProps {
  loading: boolean;
  selectedLanguage: LangaugeOption;
  options: readonly LangaugeOption[];
  onLanguageChange: (_: LangaugeOption) => void;
}

const LanguageSelector = ({
  loading,
  selectedLanguage,
  options,
  onLanguageChange,
}: LanguageSelectorProps) => {
  return (
    <Select
      className="basic-single"
      aria-label="Langauge"
      classNamePrefix="select"
      defaultValue={selectedLanguage}
      isLoading={loading}
      isClearable={false}
      isSearchable={true}
      isDisabled={loading}
      name="Language"
      options={options}
      onChange={(newValue, _) => onLanguageChange(newValue as LangaugeOption)}
    />
  );
};

export default LanguageSelector;
