import React from "react";
import "./action.css";

// Function to render stars based on rating
// This function assumes you have a utility function for rendering stars
export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-dark  me-1"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className="bi bi-star-half text-dark me-1"></i>);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="bi bi-star text-dark me-1"></i>);
  }

  return stars;
};

// Function to render language names based on locale
// This function assumes you have a utility function for rendering languages
export const renderLanguage = (locale) =>
    ({
      en_US: "English",
      es_ES: "Spanish",
      fr_FR: "French",
      de_DE: "German",
      en_GB: "English (UK)",
      zh_CN: "Chinese (Simplified)",
    }[locale] || locale);
  


// Function to format Udemy URLs
// This function assumes you have a utility function for formatting URLs
export const formatUdemyUrl = (partialUrl) => {
    const baseUrl = "https://www.udemy.com";
    if (!partialUrl) return "#"; // fallback
    return `${baseUrl}${partialUrl}`;
  };
    

