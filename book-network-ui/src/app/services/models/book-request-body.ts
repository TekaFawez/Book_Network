/* tslint:disable */
/* eslint-disable */
export interface BookRequestBody {
  archived?: boolean;
  authorName?: string;
  bookCover?: string;
  createdBy?: number;
  createdDate?: string;
  feedbacks?: Array<string>;
  histories?: Array<string>;
  id?: number;
  isbn?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  owner?: string;
  rate?: number;
  shareable?: boolean;
  synopsis?: string;
  title?: string;
}
