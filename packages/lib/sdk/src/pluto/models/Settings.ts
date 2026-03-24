import type { Model } from "../types";
import { schemaFactory } from "../utils";

/**
 * Model for persisting arbitrary key-value settings.
 *
 * The `value` field is encrypted at rest.
 */
export interface Settings extends Model {
    /** Application-defined identifier. */
    id: string;
    /** Setting name / lookup key. */
    key: string;
    /** Setting payload (encrypted at rest). */
    value: string;
}

/**
 * RIDB schema for the {@link Settings} model.
 * Version 0 — all fields required, `value` encrypted.
 */
export const SettingsSchema = schemaFactory<Settings>(schema => {
    schema.setRequired('id', 'key', 'value');
    schema.addProperty("string", "id");
    schema.addProperty("string", "key");
    schema.addProperty("string", "value");

    schema.setEncrypted("value");
    schema.setVersion(0);
});
