/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelBook {
  '_links'?: Links;
  archived?: boolean;
  authorName?: string;
  bookCover?: string;
  createdBy?: number;
  createdDate?: string;
  isbn?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  rate?: number;
  shareable?: boolean;
  synopsis?: string;
  title?: string;
}
