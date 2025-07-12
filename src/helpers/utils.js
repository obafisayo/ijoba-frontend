// Constants
export const SIDEBAR_MIN_WIDTH = 60;
export const SIDEBAR_MAX_WIDTH = 300;
export const AI_SHA_WELCOME =
  "Hello! I'm Aisha, your AI Insurance Copilot. How can I assist you today?";

// LocalStorage keys
export const LS_CHAT_HISTORY = "aisha_chat_history";
export const LS_ALL_MESSAGES = "aisha_all_messages";
export const LS_CURRENT_CHAT_ID = "aisha_current_chat_id";

// LocalStorage helpers
export function loadFromLS(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

export function saveToLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Intentionally ignore write errors
  }
}

// Text summarization helper
export const summarize = (text) => {
  const words = text.trim().split(/\s+/);
  return words.slice(0, 6).join(" ") + (words.length > 6 ? "..." : "");
};

export const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Planning":
      return "bg-yellow-100 text-yellow-800";
    case "Active":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
