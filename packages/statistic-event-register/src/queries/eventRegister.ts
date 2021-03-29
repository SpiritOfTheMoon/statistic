/* eslint-disable import/prefer-default-export */

import { postViewerEvent } from '../common/utils';

export const event = async (eventName: string) => {
  console.log(eventName);
  const compInfo = `${window.screen.width}x${window.screen.height}`;
  const userInfo = navigator.userAgent;
  const identifier = `${userInfo}_${window.screen.availWidth}x${window.screen.availHeight}`;
  const currentEvent = await postViewerEvent(eventName, identifier, compInfo, userInfo);
};
