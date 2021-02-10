/*
 * Copyright © 2021 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import PropTypes from 'prop-types';
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ThemeWrapper from 'components/ThemeWrapper';
import CommentRounded from '@material-ui/icons/CommentRounded';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tooltip from '@material-ui/core/Tooltip';
import If from 'components/If';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyle = makeStyles<Theme, Partial<IPipelineCommentsActionBtnProps>>((theme) => {
  return {
    tooltip: {
      position: 'relative',
      backgroundColor: (theme.palette as any).blue[40],
      padding: '7px',
      fontSize: '11px',
    },
    arrow: {
      color: (theme.palette as any).blue[40],
    },
    iconRoot: {
      fontSize: '15px',
    },
    iconButton: {
      background: ({ toggle }) =>
        toggle ? (theme.palette as any).bluegrey[100] : (theme.palette as any).white[50], // The way we inject custom colors is incorrect.
      color: ({ toggle }) =>
        toggle ? (theme.palette as any).white[50] : (theme.palette as any).bluegrey[100],
      border: `1px solid ${theme.palette.grey[1000]}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '7px 10px',
      borderRadius: 0,
      '&:hover': {
        background: ({ toggle }) =>
          toggle ? (theme.palette as any).bluegrey[100] : (theme.palette as any).grey[610],
        color: ({ toggle }) =>
          toggle ? (theme.palette as any).white[50] : (theme.palette as any).bluegrey[100],
      },
    },
    marker: {
      position: 'absolute',
      height: '5px',
      width: '5px',
      background: ({ toggle }) =>
        !toggle ? theme.palette.primary.main : (theme.palette as any).white[50],
      borderRadius: '50%',
      right: '5px',
      top: '2px',
    },
  };
});

interface IPipelineCommentsActionBtnProps {
  tooltip: string;
  doesStagesHaveComments: boolean;
  onCommentsToggle: () => void;
  toggle: boolean;
}

function PipelineCommentsActionBtn({
  tooltip,
  doesStagesHaveComments,
  onCommentsToggle,
  toggle,
}: IPipelineCommentsActionBtnProps) {
  const [localToggle, setLocalToggle] = React.useState(toggle);
  const [showMarker, setShowMarker] = React.useState(doesStagesHaveComments);
  const classes = useStyle({ toggle: localToggle });
  const onClick = () => {
    setLocalToggle(!toggle);
    if (typeof onCommentsToggle === 'function') {
      onCommentsToggle();
    }
  };
  React.useEffect(() => {
    if (typeof doesStagesHaveComments === 'boolean') {
      setShowMarker(doesStagesHaveComments);
    }
  }, [doesStagesHaveComments]);
  React.useEffect(() => {
    setLocalToggle(toggle);
  }, [toggle]);
  return (
    <Tooltip
      title={tooltip}
      enterDelay={500}
      placement="left"
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      arrow
    >
      <IconButton onClick={onClick} className={classes.iconButton} disableRipple={true}>
        <If condition={showMarker}>
          <span className={classes.marker}></span>
        </If>
        <CommentRounded className={classes.iconRoot} />
      </IconButton>
    </Tooltip>
  );
}

export default function ThemeWrappedPipelineComments(props) {
  return (
    <ThemeWrapper>
      <PipelineCommentsActionBtn {...props} />
    </ThemeWrapper>
  );
}

(ThemeWrappedPipelineComments as any).propTypes = {
  doesStagesHaveComments: PropTypes.bool,
  tooltip: PropTypes.string,
  onCommentsToggle: PropTypes.func,
  toggle: PropTypes.bool,
};