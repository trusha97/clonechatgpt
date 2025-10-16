"use client";

import useSWR, { mutate } from "swr";

// Fetch function
const fetcher = (url) => fetch(url).then((res) => res.json());

export function useChats() {
  // 🔹 Fetch all chats (cached globally by SWR)
  const { data: chats = [], error, isLoading } = useSWR("/api/chat", fetcher);

  // 🔹 Poll a specific chat until title updates
  async function startPollingChat(chatId) {
    const interval = setInterval(async () => {
      const chat = await fetcher(`/api/chat/${chatId}`);

      if (chat.title !== "New Chat") {
        clearInterval(interval);

        // Update this chat in cache optimistically
        mutate(
          "/api/chat",
          (prev) => prev?.map((c) => (c.id === chat.id ? chat : c)) ?? [],
          false
        );
      }
    }, 3000);
  }

  // 🔹 Refresh all chats manually (optional)
  function refreshChats() {
    mutate("/api/chat"); // tells SWR to re-fetch
  }

  return { chats, error, isLoading, startPollingChat, refreshChats };
}

