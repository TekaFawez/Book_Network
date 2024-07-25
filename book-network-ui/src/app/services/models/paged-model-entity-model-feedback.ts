/* tslint:disable */
/* eslint-disable */
import { EntityModelFeedback } from '../models/entity-model-feedback';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelFeedback {
  '_embedded'?: {
'feedbacks'?: Array<EntityModelFeedback>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
