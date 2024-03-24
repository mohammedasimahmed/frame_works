import * as Broadcast from "@livepeer/react/broadcast";
import { getIngest } from "@livepeer/react/external";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import {
    StartScreenshareIcon,
    StopScreenshareIcon,
    EnableVideoIcon, StopIcon
  } from "@livepeer/react/assets";
import React from "react";
// import { streamKey } from "./stream-key";

export default () => {
  return (
    <>
    
    <Broadcast.Root ingestUrl={getIngest(`82ac-7ud3-brq8-rod2`)}>
       <Broadcast.Video
          title="Livestream"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />

        <Broadcast.Controls className="flex items-center justify-center">
          <Broadcast.EnabledTrigger className="w-10 h-10 hover:scale-105 flex-shrink-0">
            <Broadcast.EnabledIndicator asChild matcher={false}>
              <EnableVideoIcon className="w-full h-full" />
            </Broadcast.EnabledIndicator>
            <Broadcast.EnabledIndicator asChild>
              <StopIcon className="w-full h-full" />
            </Broadcast.EnabledIndicator>
          </Broadcast.EnabledTrigger>
        </Broadcast.Controls>

        <Broadcast.LoadingIndicator asChild matcher={false}>
          <div className="absolute overflow-hidden py-1 px-2 rounded-full top-1 left-1 bg-black/50 flex items-center backdrop-blur">
            <Broadcast.StatusIndicator
              matcher="live"
              className="flex gap-2 items-center"
            >
              <div className="bg-red-500 animate-pulse h-1.5 w-1.5 rounded-full" />
              <span className="text-xs select-none">LIVE</span>
            </Broadcast.StatusIndicator>

            <Broadcast.StatusIndicator
              className="flex gap-2 items-center"
              matcher="pending"
            >
              <div className="bg-white/80 h-1.5 w-1.5 rounded-full animate-pulse" />
              <span className="text-xs select-none">LOADING</span>
            </Broadcast.StatusIndicator>

            <Broadcast.StatusIndicator
              className="flex gap-2 items-center"
              matcher="idle"
            >
              <div className="bg-white/80 h-1.5 w-1.5 rounded-full" />
              <span className="text-xs select-none">IDLE</span>
            </Broadcast.StatusIndicator>
          </div>
        </Broadcast.LoadingIndicator>
    
      <div
        style={{
          position: "absolute",
          left: 200,
          bottom: 20,
          display: "flex",
          gap: 10,
        }}
      >
        <SourceSelectComposed name="cameraSource" type="videoinput" />
        <SourceSelectComposed name="microphoneSource" type="audioinput" />
      </div>
      <Broadcast.ScreenshareTrigger
        style={{
          position: "absolute",
          left: 20,
        //   bottom: 20,
          width: 90,
          height: 100,
        }}
      >Screen Share
        <Broadcast.ScreenshareIndicator asChild matcher={false}>
          <StartScreenshareIcon />
        </Broadcast.ScreenshareIndicator>
        <Broadcast.ScreenshareIndicator asChild>
          <StopScreenshareIcon />
        </Broadcast.ScreenshareIndicator>
      </Broadcast.ScreenshareTrigger>




      <Broadcast.EnabledTrigger
        style={{
          position: "absolute",
          left: 20,
          bottom: 20,
          width: 90,
          height: 100,
        }}
      >
      <Broadcast.EnabledIndicator asChild matcher={false}>
          <EnableVideoIcon />
        </Broadcast.EnabledIndicator>
        <Broadcast.EnabledIndicator asChild>
          <StopIcon />
        </Broadcast.EnabledIndicator>
      </Broadcast.EnabledTrigger>
    </Broadcast.Root>
    </>
  );
};

const SourceSelectComposed = React.forwardRef(
  (
    { name, type }: { name: string; type: "audioinput" | "videoinput" },
    ref: React.Ref<HTMLButtonElement> | undefined,
  ) => (
    <Broadcast.SourceSelect name={name} type={type}>
      {(devices) =>
        devices ? (
          <>
            <Broadcast.SelectTrigger
              ref={ref}
              style={{
                minWidth: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 30,
                fontSize: 12,
                gap: 5,
                padding: 10,
                borderRadius: 5,
                outline: "white solid 1px",
              }}
              aria-label={type === "audioinput" ? "Audio input" : "Video input"}
            >
              <Broadcast.SelectValue
                placeholder={
                  type === "audioinput"
                    ? "Select an audio input"
                    : "Select a video input"
                }
              />







              <Broadcast.SelectIcon>
                <ChevronDownIcon style={{ width: 14, height: 14 }} />
              </Broadcast.SelectIcon>
            </Broadcast.SelectTrigger>
            <Broadcast.SelectPortal>
              <Broadcast.SelectContent
                style={{
                  borderRadius: 5,
                  backgroundColor: "black",
                }}
              >
                <Broadcast.SelectViewport style={{ padding: 5 }}>
                  <Broadcast.SelectGroup>
                    {devices?.map((device) => (
                      <SourceSelectItem
                        key={device.deviceId}
                        value={device.deviceId}
                      >
                        {device.friendlyName}
                      </SourceSelectItem>
                    ))}
                  </Broadcast.SelectGroup>
                </Broadcast.SelectViewport>
              </Broadcast.SelectContent>
            </Broadcast.SelectPortal>
          </>
        ) : (
          <span>There was an error fetching the available devices.</span>
        )
      }
    </Broadcast.SourceSelect>
  ),
);

const SourceSelectItem = React.forwardRef<
  HTMLDivElement,
  Broadcast.SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Broadcast.SelectItem
      style={{
        fontSize: 12,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        paddingRight: 35,
        paddingLeft: 25,
        position: "relative",
        userSelect: "none",
        height: 30,
      }}
      {...props}
      ref={forwardedRef}
    >
      <Broadcast.SelectItemText>{children}</Broadcast.SelectItemText>
      <Broadcast.SelectItemIndicator
        style={{
          position: "absolute",
          left: 0,
          width: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckIcon style={{ width: 14, height: 14 }} />
      </Broadcast.SelectItemIndicator>
    </Broadcast.SelectItem>
    
  );
});