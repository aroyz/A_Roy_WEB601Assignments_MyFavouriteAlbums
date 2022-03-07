import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], type?: string) {
    if (type) {
      return contentList.filter(c => c.type == type);
    }
    else {
      return contentList.filter(c => {return c.type === type || c.type === ''});
    }
  }

}
