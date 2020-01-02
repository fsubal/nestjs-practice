
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Item {
    id: string;
    name: string;
    description: string;
}

export interface IQuery {
    items(): Item[] | Promise<Item[]>;
    item(id: string): Item | Promise<Item>;
}
