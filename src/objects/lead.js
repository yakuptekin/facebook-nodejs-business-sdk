/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * Lead
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Lead extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_id: 'ad_id',
      ad_name: 'ad_name',
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      campaign_id: 'campaign_id',
      campaign_name: 'campaign_name',
      created_time: 'created_time',
      custom_disclaimer_responses: 'custom_disclaimer_responses',
      field_data: 'field_data',
      form_id: 'form_id',
      home_listing: 'home_listing',
      id: 'id',
      is_organic: 'is_organic',
      partner_name: 'partner_name',
      platform: 'platform',
      post: 'post',
      retailer_item_id: 'retailer_item_id',
      vehicle: 'vehicle',
    });
  }


  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Lead {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
