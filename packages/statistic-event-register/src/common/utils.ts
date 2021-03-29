/* eslint-disable import/prefer-default-export */

export const postViewerEvent = async (
  eventName: string,
  identifier: string,
  compInfo: string,
  userInfo: string,
): Promise<any> => {
  const url = new URL('http://localhost:8002');
  url.pathname = '/api/event';
  const variables = {
    eventName,
    identifier,
    compInfo,
    userInfo,
  };

  const query = `
  query postEventAndViewer($eventName: String!, $identifier: String!, $compInfo: String!, $userInfo: String!) {
    postViewerEvent(eventName: $eventName, identifier: $identifier, compInfo: $compInfo, userInfo: $userInfo) {
      id
      viewer {
        id
        identifier
      }
    }
  }
`;
  return fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  });
};
