import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MapIcon from '@mui/icons-material/Map';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

import FlexLink from "../../../util/FlexLink";

export const mainListItems = (
  <React.Fragment>
    <FlexLink href='/admintoppage/' color='black' style ={{color:"black"}}>
      <ListItemButton>
        <ListItemIcon>
          <PhotoSizeSelectActualIcon/>
        </ListItemIcon>
        <ListItemText primary="トップページ画像" />
      </ListItemButton>
    </FlexLink>
    <FlexLink href='/adminchangelog/'>
      <ListItemButton>
        <ListItemIcon>
          <BorderColorIcon />
        </ListItemIcon>
        <ListItemText primary="変更履歴" />
      </ListItemButton>
    </FlexLink>
    <FlexLink href='/adminhistory/'>
      <ListItemButton>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        <ListItemText primary="歴史" />
      </ListItemButton>
    </FlexLink>
    <FlexLink href='/adminevent/'>
      <ListItemButton>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="イベント一覧" />
      </ListItemButton>
    </FlexLink>
    <FlexLink href='/adminmap/'>
      <ListItemButton>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="配布マップ一覧" />
      </ListItemButton>
    </FlexLink>
    <FlexLink href='/adminspecialthenks/'>
      <ListItemButton>
        <ListItemIcon>
          <StarBorderPurple500Icon />
        </ListItemIcon>
        <ListItemText primary="Special Thenks" />
      </ListItemButton>
    </FlexLink>
  </React.Fragment>
);
