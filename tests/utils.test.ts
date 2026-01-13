import { test } from "node:test";
import assert from "node:assert";
import { cn } from "@/lib/utils";

test("cn merges tailwind classes and resolves conflicts", () => {
  const result = cn("px-2 py-1", "px-4", undefined, false && "hidden", null);
  assert.strictEqual(result, "py-1 px-4");
});

test("cn handles conditional class objects and arrays", () => {
  const result = cn(["font-bold", "text-sm"], { "bg-red-500": true, "bg-blue-500": false });
  assert.strictEqual(result, "font-bold text-sm bg-red-500");
});
