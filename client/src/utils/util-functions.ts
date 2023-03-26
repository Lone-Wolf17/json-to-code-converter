/**
 * If you don't care about primitives and only objects then this function
 * is for you, otherwise look elsewhere.
 * This function will return `false` for any valid json primitive.
 * EG, 'true' -> false
 *     '123' -> false
 *     'null' -> false
 *     '"I'm a string"' -> false
 */
export function isValidJSONObject(jsonString: string) {
  if (isEmptyJsonObject(jsonString)) {
    return false;
  }
  try {
    var o = JSON.parse(jsonString);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && typeof o === "object") {
      return true;
    }
  } catch (e) {}

  return false;
}

export const isEmptyJsonObject = (jsonInput: string) => {
  const regExp = new RegExp(/\{w+\}/);
  return regExp.test(jsonInput);
};
