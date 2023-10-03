import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact({ inputStyle, hrLineColor }) {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-10 ">
      <input
        type="text"
        name="name"
        id="name"
        placeholder={t("namePlaceholder")}
        className={inputStyle}
      />
      <hr className={hrLineColor} />
      <input
        type="email"
        name="email"
        id="email"
        placeholder={t("emailPlaceholder")}
        className={inputStyle}
      />
      <hr className={hrLineColor} />

      <textarea
        name="message"
        id="message"
        placeholder={t("messagePlaceholder")}
        className={inputStyle}
      ></textarea>
      <hr className={hrLineColor} />
      <button type="submit">{t("sendButton")}</button>
    </form>
  );
}
