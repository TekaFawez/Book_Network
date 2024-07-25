/* tslint:disable */
/* eslint-disable */
import { FeedbackResponse } from '../models/feedback-response';
import { Links } from '../models/links';
export interface CollectionModelFeedback {
  '_embedded'?: {
'feedbacks'?: Array<FeedbackResponse>;
};
  '_links'?: Links;
}
