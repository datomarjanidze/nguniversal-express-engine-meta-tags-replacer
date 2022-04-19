## nguniversal-express-engine-meta-tags-replacer

![language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![license](https://img.shields.io/badge/license-ISC-green)
[![npm version](https://img.shields.io/npm/v/nguniversal-express-engine-meta-tags-replacer.svg?style=flat)](https://npmjs.org/package/nguniversal-express-engine-meta-tags-replacer)
[![npm download](https://img.shields.io/npm/dt/nguniversal-express-engine-meta-tags-replacer.svg)](https://npmjs.org/package/nguniversal-express-engine-meta-tags-replacer)

### Description
This package provides a function for handling the page request in
Angular SSR app, which needs its specific `meta` tag `content` attribute
value. This can be mostly used for Facebook sharing.

### Installation
```console
npm i nguniversal-express-engine-meta-tags-replacer
```

### Usage example:
```typescript
import { metaTagsReplacerRequestHandler, IMetaTag } from 'nguniversal-express-engine-meta-tags-replacer'
import { APP_BASE_HREF } from '@angular/common'

server.get(['/some-path'], (req, res) => {
  metaTagsReplacerRequestHandler(
    indexHtml,
    {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl }
      ]
    },
    res,
    [
      {
        propertyValue: 'og:image',
        contentValue: '/page/specific/image'
      },
      {
        propertyValue: 'og:title',
        contentValue: 'Page specific title'
      }
    ] as IMetaTag[]
  )
})
```
