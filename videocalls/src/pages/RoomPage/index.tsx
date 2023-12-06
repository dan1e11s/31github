import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = (element: HTMLDivElement) => {
    const appId = 1545286861;
    const secretKey = '39a5b0b72fee6427035ca9c3be3ddc96';

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      secretKey,
      roomId as string,
      Date.now().toString(),
      'Daniel'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?roomID=' +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={myMeeting} />;
};

export default RoomPage;
