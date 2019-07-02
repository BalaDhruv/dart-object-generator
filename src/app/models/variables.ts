enum TYPES { INT, DOUBLE, STRING, BOOL, DATETIME, LIST, SET, MAPS, OBJECT }

export interface Variables {
    id: number;
    name: string;
    type: TYPES;
    isNullable: boolean;
}
