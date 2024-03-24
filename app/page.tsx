// 'use client'
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";


const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Mens",
      action:"post",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=mens`,
    },
    {
      label: "Womens",
      action:"post",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=womens`,
    },
  ],
  image: `https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png`,
});


export const metadata: Metadata = {
  title: "Random Images",
  description: "A frame showing random images",
  openGraph: {
    title: "Random Images",
    description: "A frame showing random images",
    images: [
      `https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};
const item = "QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png";

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
      {/* <DynamicLogin/> */}
      {/* <img src="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/0.png" /> */}
    </>
  );
}
