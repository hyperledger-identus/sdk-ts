import type { Model } from "../types";
import { schemaFactory } from "../utils";

export interface Settings extends Model {
    id: string;
    key: string;
    value: string;
}

export const SettingsSchema = schemaFactory<Settings>(schema => {
    schema.setRequired('id', 'key', 'value');
    schema.addProperty("string", "id");
    schema.addProperty("string", "key");
    schema.addProperty("string", "value");

    schema.setEncrypted("value");
    schema.setVersion(0);
});
