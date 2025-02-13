"use client";

export default function ShareToFarcaster() {
  const shareToWarpcast = () => {
    const url = "https://arweave.net/YOUR_PAGE_ID"; // Replace with your Arweave link
    const text = encodeURIComponent(`Check this out: ${url}`);
    window.open(`https://warpcast.com/compose?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={shareToWarpcast}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Share to Farcaster
    </button>
  );
}