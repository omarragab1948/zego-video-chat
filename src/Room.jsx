import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router";

const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    console.log
    const appID = 165847095;
    const serverSecret = "eb7f0b24845c3469d1f50ab94df04e7b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Omar"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      //   sharedLinks: [
      //     {
      //       name: "Personal link",
      //       url:
      //         window.location.protocol +
      //         "//" +
      //         window.location.host +
      //         window.location.pathname +
      //         "?roomID=" +
      //         roomID,
      //     },
      //   ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return <div ref={myMeeting}></div>;
};

export default Room;
