"use client";

export default function ShareToFarcaster() {

  const farcasterId = '845261';

  const shareToWarpcast = () => {
    // const arweaveUrl = "https://arweave.4everland.xyz/FlzsEY5W-XhZFrUUKYS97Y47J7EwyVqXHMx6oA9G15s";
    // const imageUrl = "https://i.ibb.co/qMCNtRYJ/calling-card-1.png";
    // const text = encodeURIComponent(`Check this out: ${arweaveUrl}`);
    // const shareUrl = `https://warpcast.com/~/compose?text=${text}&fid=${farcasterId}`;
    // const shareUrl = `https://warpcast.com/~/compose?&media=${imageUrl}&fid=${farcasterId}`;

    const arweaveUrl = encodeURIComponent("https://arweave.4everland.xyz/FlzsEY5W-XhZFrUUKYS97Y47J7EwyVqXHMx6oA9G15s");
    const imageUrl = encodeURIComponent("https://i.ibb.co/qMCNtRYJ/calling-card-1.png");
    const shareUrl = `https://warpcast.com/~/compose?text=${arweaveUrl}&media=${imageUrl}&embeds[]=${imageUrl}`;
    console.log("Opening Warpcast URL:", shareUrl);
    window.open(shareUrl, "_blank");
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