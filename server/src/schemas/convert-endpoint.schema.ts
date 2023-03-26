import zod from "zod";
import { AcceptedLanguages } from "../constants/enums";

const literalSchema = zod.union([
  zod.string(),
  zod.number(),
  zod.boolean(),
  zod.null(),
]);
type Literal = zod.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: zod.ZodType<Json> = zod.lazy(() =>
  zod.union([literalSchema, zod.array(jsonSchema), zod.record(jsonSchema)])
);

export const convertJsonSchema = zod.object({
  body: zod.object({
    json_input: jsonSchema,
    language: zod.nativeEnum(AcceptedLanguages),
  }),
});

export type ConvertJsonBodyInput = zod.TypeOf<typeof convertJsonSchema>["body"];
