import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select
      size="small"
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      sx={{
        minWidth: 90,
      }}
    >
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="uz">UZ</MenuItem>
      <MenuItem value="ru">RU</MenuItem>
    </Select>
  );
}

export default LanguageSwitcher;