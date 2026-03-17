export type QuerySortDirection = 'asc' | 'desc';
export type StringKeys<T> = Exclude<Extract<keyof T, string>, "uuid">;
export type QuerySortPart<Doc = any> = {
    [k in StringKeys<Doc> | string]: QuerySortDirection;
};
export type PropertyType<Type, Property extends string> = string extends Property
    ? unknown
    : Property extends keyof Type
    ? Type[Property]
    : Property extends `${number}`
    ? Type extends ReadonlyArray<infer ArrayType>
    ? ArrayType
    : unknown
    : Property extends `${infer Key}.${infer Rest}`
    ? Key extends `${number}`
    ? Type extends ReadonlyArray<infer ArrayType>
    ? PropertyType<ArrayType, Rest>
    : unknown
    : Key extends keyof Type
    ? Type[Key] extends Map<string, infer MapType>
    ? MapType
    : PropertyType<Type[Key], Rest>
    : unknown
    : unknown;

export interface QueryOperators<PathValueType> {
    $eq?: PathValueType;
    $gt?: PathValueType;
    $gte?: PathValueType;
    $lt?: PathValueType;
    $lte?: PathValueType;
    $ne?: PathValueType;
    $in?: PathValueType[];
    $nin?: PathValueType[];
    $regex?: string | RegExp;
    $options?: string;
    $exists?: boolean;
    $type?: 'null' | 'boolean' | 'number' | 'string' | 'array' | 'object';
    $mod?: number;
    $not?: PathValueType;
    $size?: number;
    $elemMatch?: QuerySelector<PathValueType>;
}
export type Join<K, P> = K extends string | number ?
    P extends string | number ?
    `${K}${'' extends P ? '' : '.'}${P}`
    : never : never;
export type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]];
export type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: K extends string | number ?
        `${K}` | (Paths<T[K], Prev[D]> extends infer R ? Join<K, R> : never)
        : never
    }[keyof T] : '';

export type QuerySelector<DocType> = Partial<{
    [Property in Paths<DocType>]: QueryOperators<any> | PropertyType<DocType, Property>;
}> & {
    $and?: QuerySelector<DocType>[];
    $or?: QuerySelector<DocType>[];
    $nor?: QuerySelector<DocType>[];
};

export type QuerySelectorAndIndex<Doc = any> = {
    selector?: QuerySelector<Doc>;
    index?: string | string[];
};

export type QueryNoLimit<Doc> = QuerySelectorAndIndex<Doc> & {
    sort?: QuerySortPart<Doc>[];
};

/**
 * Query type for Pluto
 */
export type Query<Doc = any> = QueryNoLimit<Doc> & {
    skip?: number;
    limit?: number;
};

export type MigrationStrategy<DocData = any> = (
    oldDocumentData: DocData
) => Promise<DocData> | DocData | null;

export type MigrationStrategies = {
    [toVersion: number]: MigrationStrategy<any>;
};