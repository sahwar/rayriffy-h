import _ from 'lodash'

import { ITag } from '../@types/ITag'
import { ITagType } from '../@types/ITagType'

export const filterTagByType = (tags: ITag[], type: ITagType): ITag[] => {
  return _.filter(tags, tag => tag.type === type)
}