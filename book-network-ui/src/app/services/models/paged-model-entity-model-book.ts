/* tslint:disable */
/* eslint-disable */
import { EntityModelBook } from '../models/entity-model-book';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelBook {
  '_embedded'?: {
'books'?: Array<EntityModelBook>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
