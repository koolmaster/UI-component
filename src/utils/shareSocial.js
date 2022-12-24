import { createUrlFromParams, isTikiWebview } from './index';

export const postOnFacebook = (content, url) => {
  const urlShare = createUrlFromParams('https://www.facebook.com/sharer/sharer.php', {
    u: url,
    quote: content,
  });
  return urlShare;
};

export const postOnMessenger = (url) => {
  const urlShare = createUrlFromParams('https://www.facebook.com/dialog/send', {
    app_id: '220558114759707',
    display: 'popup',
    link: url,
    redirect_uri: url,
  });
  return urlShare;
};

export const postOnTelegram = (content, url) => {
  const urlShare = createUrlFromParams('https://telegram.me/share/url', {
    url,
    text: content,
  });
  return urlShare;
};

export const postOnLine = (content, url) => {
  const urlShare = createUrlFromParams('https://social-plugins.line.me/lineit/share', {
    url,
    text: content,
  });
  return urlShare;
};

export const postOnWhatsApps = (phone_number, content, url) => {
  const urlShare = createUrlFromParams('https://api.whatsapp.com/send', {
    phone: phone_number,
    text: content,
  });
  return urlShare;
};

export const postOnTwitter = (content, url) => {
  const urlShare = createUrlFromParams('https://twitter.com/intent/tweet', {
    url,
    text: content,
  });
  return urlShare;
};

export const postOnZalo = (url) => {
  const header = {
    url: `${encodeURIComponent(url)}`,
  };
  const token = btoa(JSON.stringify(header));
  const urlShare = createUrlFromParams('https://button-share.zalo.me/share_external', {
    layout: '1',
    color: 'blue',
    customize: 'false',
    d: token,
    shareType: '0',
  });
  return urlShare;
};

export const postOnPinterest = (content, url) => {
  const urlShare = createUrlFromParams('https://www.pinterest.com/pin/create/link', {
    url,
    description: content,
  });
  return urlShare;
};

export const copyToClipBoard = (urlShare, onClose) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(urlShare).then(() => {
      onClose();
    });
  }
};

export const handleShare = (type, contentShare, urlShare, phone_number, pontoRef, onClose) => {
  let finalURL = '';
  switch (type) {
    case 'com.facebook.katana':
      finalURL = postOnFacebook(contentShare, urlShare);
      break;
    case 'com.facebook.orca':
      finalURL = postOnMessenger(urlShare);
      break;
    case 'org.telegram.messenger':
      finalURL = postOnTelegram(contentShare, urlShare);
      break;
    case 'jp.naver.line.android':
      finalURL = postOnLine(contentShare, urlShare);
      break;
    case 'com.whatsapp':
      finalURL = postOnWhatsApps(phone_number, contentShare, urlShare);
      break;
    case 'com.twitter.android':
      finalURL = postOnTwitter(contentShare, urlShare);
      break;
    case 'com.zing.zalo':
      finalURL = postOnZalo(urlShare);
      break;
    case 'com.pinterest':
      finalURL = postOnPinterest(contentShare, urlShare);
      break;
    case 'copy':
      if (!isTikiWebview()) {
        copyToClipBoard(urlShare, onClose);
      } else if (pontoRef.current) {
        pontoRef.current.invoke(
          'Messaging',
          'copyTextToClipboard',
          {
            text: urlShare,
          },
          (d) => {
            console.log('Copy thành công', d);
            onClose();
            return true;
          },
          (e) => {
            console.log('ponto error', e);
            return false;
          }
        );
      }
      break;
    default:
      break;
  }
  if (finalURL) {
    window.open(finalURL, '_blank', 'width=700,height=700');
  }
};

export const getNameTracking = (packageName) => {
  switch (packageName) {
    case 'com.facebook.katana':
      return 'facebook';
    case 'com.facebook.orca':
      return 'messenger';
    case 'org.telegram.messenger':
      return 'telegram';
    case 'com.zing.zalo':
      return 'zalo';
    default:
      break;
  }
};
