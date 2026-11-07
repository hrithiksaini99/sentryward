import { describe, expect, it } from "vitest"
import { formatDays } from "./PolicySummary"

describe("formatDays", () => {
  it("uses the singular for one day", () => {
    expect(formatDays(1)).toBe("1 day")
  })

  it("uses the plural for zero and multiple days", () => {
    expect(formatDays(0)).toBe("0 days")
    expect(formatDays(30)).toBe("30 days")
  })
})
