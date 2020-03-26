'use strict';

module.exports = {
  app: {
    title: 'meanTorrent',
    description: 'MEAN.JS BitTorrent - Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js, a Private BitTorrent Tracker CMS with Multilingual and IRC announce support',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport, torrent, bitTorrent, tracker, announce, meanTorrent',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID',
    showSeoField: true
  },
  db: {
    promise: global.Promise
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  // DOMAIN config should be set to the fully qualified application accessible
  // URL. For example: https://www.myapp.com (including port if required).
  domain: process.env.DOMAIN || 'mean.im',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'mean.im.session.secret',
  // sessionKey is the cookie session name
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: false,
    csp: false,
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  illegalUsernames: ['meanjs', 'administrator', 'password', 'admin', 'user', 'mean', 'meanTorrent', 'torrent', 'bit', 'bits', 'oper', 'operator',
    'unknown', 'anonymous', 'null', 'undefined', 'api', 'tracker'
  ],
  aws: {
    s3: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      bucket: process.env.S3_BUCKET
    }
  },
  uploads: {
    // Storage can be 'local' or 's3'
    storage: process.env.UPLOADS_STORAGE || 'local',
    profile: {
      image: {
        dest: './modules/users/client/img/profile/uploads/',
        limits: {
          fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
        }
      }
    },
    torrent: {
      file: {
        dest: './modules/torrents/client/uploads/',
        temp: './modules/torrents/client/uploads/temp/',
        limits: {
          fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
        }
      },
      cover: {
        dest: './modules/torrents/client/uploads/cover/',
        crop: './modules/torrents/client/uploads/cover/crop/',
        temp: './modules/torrents/client/uploads/temp/',
        limits: {
          fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
        }
      },
      image: {
        dest: './modules/torrents/client/uploads/image/',
        crop: './modules/torrents/client/uploads/image/crop/',
        temp: './modules/torrents/client/uploads/temp/',
        limits: {
          fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
        }
      }
    },
    attach: {
      file: {
        dest: './modules/forums/client/attach/',
        temp: './modules/forums/client/attach/temp/',
        limits: {
          fileSize: 100 * 1024 * 1024 // Max file size in bytes (100 MB)
        }
      }
    },
    subtitle: {
      file: {
        dest: './modules/torrents/client/uploads/subtitles/',
        limits: {
          fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
        }
      }
    },
    tickets: {
      image: {
        dest: './modules/tickets/client/uploads/image/',
        temp: './modules/tickets/client/uploads/temp/',
        limits: {
          fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
        }
      }
    }
  },
  shared: {
    owasp: {
      allowPassphrases: true,
      maxLength: 128,
      minLength: 10,
      minPhraseLength: 20,
      minOptionalTestsToPass: 4
    }
  }

};
