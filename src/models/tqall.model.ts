import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tqall extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  accnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  custnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  client_name: string;

  @property({
    type: 'string',
  })
  currency?: string;

  @property({
    type: 'string',
  })
  origdate?: string;

  @property({
    type: 'number',
    default: 0,
  })
  origbalance?: number;

  @property({
    type: 'number',
    default: 0,
  })
  oustbalance?: number;

  @property({
    type: 'string',
  })
  productcode?: string;

  @property({
    type: 'number',
  })
  daysinarr?: number;

  @property({
    type: 'number',
    default: 0,
  })
  instamount?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tqall>) {
    super(data);
  }
}

export interface TqallRelations {
  // describe navigational properties here
}

export type TqallWithRelations = Tqall & TqallRelations;
