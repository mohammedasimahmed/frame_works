import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  // const idAsNumber = parseInt(id);
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;
  // console.log(data.untrustedData);
  // console.log(data);
  // const nextId = idAsNumber + 1;

  if (id === "mens") {
    // if (buttonId === 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame </title>
      <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/1.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/1.png" />
      <meta property="fc:frame:button:1" content="Men Shirt1" />
      <meta property="fc:frame:button:1:action" content="post" />
      <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=menshirt1" />
      <meta property="fc:frame:button:2" content="Men Shirt2" />
      <meta property="fc:frame:button:2:action" content="post" />
      <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=menshirt2" />
    </head></html>`);
    // }
  } else if (id == "womens") {
    // if (buttonId === 2) {
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame </title>
      <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/2.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/2.png" />
      <meta property="fc:frame:button:1" content="Women Shirt1" />
      <meta property="fc:frame:button:1:action" content="post" />
      <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=womenshirt1" />
      <meta property="fc:frame:button:2" content="Women Shirt2" />
      <meta property="fc:frame:button:2:action" content="post" />
      <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=womenshirt2" />
    </head></html>`);
    // }
  } else if (id == "menshirt1") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame </title>
    <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/3.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/3.png" />
    <meta property="fc:frame:button:1" content="Buy Now" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=bought" />
  </head></html>`);
  } else if (id == "menshirt2") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame </title>
    <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/4.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/4.png" />
    <meta property="fc:frame:button:1" content="Buy Now" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=bought" />
  </head></html>`);
  } else if (id == "womenshirt1") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame </title>
    <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/5.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/5.png" />
    <meta property="fc:frame:button:1" content="Buy Now" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=bought" />
  </head></html>`);
  } else if (id == "womenshirt2") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame </title>
    <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/6.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/6.png" />
    <meta property="fc:frame:button:1" content="Buy Now" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=bought" />
  </head></html>`);
  } else if (id == "bought") {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame </title>
    <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/7.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/7.png" />
  </head></html>`);
  }

  //   if (buttonId == 1) {
  //     if (idAsNumber === 9) {
  //       return new NextResponse(`<!DOCTYPE html><html><head>
  //       <title>This is frame 7</title>
  //       <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //       <meta property="fc:frame" content="vNext" />
  //       <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //       <meta property="fc:frame:button:1" content="Visit CosmicCowboys.cloud" />
  //       <meta property="fc:frame:button:1:action" content="post_redirect" />
  //       <meta property="fc:frame:button:2" content="Learn How this was made" />
  //       <meta property="fc:frame:button:2:action" content="post_redirect" />
  //       <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  //     </head></html>`);
  //     } else {
  //       return new NextResponse(`<!DOCTYPE html><html><head>
  //       <title>This is frame ${id}</title>
  //       <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //       <meta property="fc:frame" content="vNext" />
  //       <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //       <meta property="fc:frame:button:1" content="Mens" />
  //       <meta property="fc:frame:button:1:action" content="post" />
  //       <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //       <meta property="fc:frame:button:2" content="Womens" />
  //       <meta property="fc:frame:button:2:action" content="post" />
  //       <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //     </head></html>`);
  //     }
  //   } else if (buttonId == 2) {
  //     if (idAsNumber === 9) {
  //       return new NextResponse(`<!DOCTYPE html><html><head>
  //       <title>This is frame 7</title>
  //       <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //       <meta property="fc:frame" content="vNext" />
  //       <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //       <meta property="fc:frame:button:1" content="Next Page" />
  //       <meta property="fc:frame:button:1:action" content="link" />
  //       <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  //       <meta property="fc:frame:button:2" content="Next Page" />
  //       <meta property="fc:frame:button:2:action" content="link" />
  //       <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  //     </head></html>`);
  //     } else {
  //       return new NextResponse(`<!DOCTYPE html><html><head>
  //       <title>This is frame ${id}</title>
  //       <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //       <meta property="fc:frame" content="vNext" />
  //       <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //       <meta property="fc:frame:button:1" content="Next Page" />
  //       <meta property="fc:frame:button:1:action" content="post" />
  //       <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //       <meta property="fc:frame:button:2" content="Next Page" />
  //       <meta property="fc:frame:button:2:action" content="post" />
  //       <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //     </head></html>`);
  //     }
  //   }

  //   if (idAsNumber === 9) {
  //     return new NextResponse(`<!DOCTYPE html><html><head>
  //     <title>This is frame 7</title>
  //     <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //     <meta property="fc:frame" content="vNext" />
  //     <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/8.png" />
  //     <meta property="fc:frame:button:1" content="Next Page" />
  //     <meta property="fc:frame:button:1:action" content="link" />
  //     <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  //     <meta property="fc:frame:button:2" content="Next Page" />
  //     <meta property="fc:frame:button:2:action" content="link" />
  //     <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  //   </head></html>`);
  //   } else {
  //     return new NextResponse(`<!DOCTYPE html><html><head>
  //     <title>This is frame ${id}</title>
  //     <meta property="og:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //     <meta property="fc:frame" content="vNext" />
  //     <meta property="fc:frame:image" content="https://ipfs.io/ipfs/QmRNE5vSNK46n1SR2hZaPq9FbWcYtA5BAUtobTZzhcr3pA/${id}.png" />
  //     <meta property="fc:frame:button:1" content="Next Page" />
  //     <meta property="fc:frame:button:1:action" content="post" />
  //     <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //     <meta property="fc:frame:button:2" content="Next Page" />
  //     <meta property="fc:frame:button:2:action" content="post" />
  //     <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  //   </head></html>`);
  //   }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
