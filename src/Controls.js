import React, { useState } from "react";
import { useClient } from "./setting";
import { Button, Grid} from "@material-ui/core";
// import MicIcon from "@mui/icons-material/Mic";
// import MicOffIcon from "@mui/icons-material/MicOff";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import VideocamOffIcon from "@mui/icons-material/VideocamOff";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import MicIcon from "@material-ui/icons/Mic";
// import MicOffIcon from "@material-ui/icons/MicOff";
// import VideocamIcon from "@material-ui/icons/Videocam";
// import VideocamOffIcon from "@material-ui/icons/VideocamOff";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute= async (type)=>{
    if(type==='video'){
        await tracks[1].setEnabled(!trackState.video);
        setTrackState((ps)=>{
            return {...ps,video:!ps.video}
        })
    }
    else if(type==='audio'){
        await tracks[0].setEnabled(!trackState.audio)
        setTrackState((ps)=>{
            return {...ps,audio:!ps.audio}
        })
    }
  }
  const leaveChannel= async ()=>{
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <Button>Mic</Button> : <Button>MicOff</Button>}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <Button>Videocam</Button> : <Button>VideocamOff</Button>}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="default"
          onClick={() => leaveChannel()}
        >
         Leave
         <Button>ExitToApp</Button>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Controls;
