import { test } from "node:test";
import assert from "node:assert";
import { siteConfig, socialLinks, navigation } from "../src/config/site.ts";

test("siteConfig contains essential profile metadata", () => {
  assert.strictEqual(siteConfig.name, "Vaibhav Saini");
  assert.ok(siteConfig.email.includes("@"));
  assert.ok(siteConfig.url.startsWith("http"));
  assert.ok(siteConfig.avatarUrl.includes("profile.png"));
  assert.ok(siteConfig.resumeUrl.includes("resume.pdf"));
});

test("socialLinks contains required platforms with active URLs", () => {
  assert.ok(socialLinks.github.href.includes("github.com/vbhvx"));
  assert.ok(socialLinks.linkedin.href.includes("linkedin.com"));
  assert.ok(socialLinks.x.href.includes("x.com"));
  assert.ok(socialLinks.email.href.startsWith("mailto:"));
});

test("navigation contains standard sections", () => {
  assert.ok(navigation.length >= 4);
  const labels = navigation.map((item) => item.label);
  assert.ok(labels.includes("Work"));
  assert.ok(labels.includes("About"));
  assert.ok(labels.includes("Craft"));
  assert.ok(labels.includes("GitHub"));
});
