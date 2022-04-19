import { Response } from 'express'

export interface IMetaTag {
  propertyValue: string
  contentValue: string
}[]

export function metaTagsReplacerRequestHandler(
  indexHtml: string,
  renderOptions: any,
  res: Response,
  metaTags: IMetaTag[]
) {
  res.render(indexHtml, renderOptions, (err: Error, html: string) => {
    res.send(
      metaTags.reduce(
        (newHtml: string, metaTag: IMetaTag) =>
          newHtml.replace(
            new RegExp(`property="${metaTag.propertyValue}".*content=".*"`, 'g'),
            `property="${metaTag.propertyValue}" content="${metaTag.contentValue}"`
          ),
        html
      )
    )
  })
}