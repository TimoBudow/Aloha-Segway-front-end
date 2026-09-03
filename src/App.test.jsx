import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./main";
import { tours } from "./content/tours";
import { site } from "./content/site";

describe("site content", () => {
  it("defines three customer-facing tour routes", () => {
    expect(tours).toHaveLength(3);
    expect(tours.map((tour) => tour.name)).toEqual([
      "Diamond Head Area Tour",
      "Historic Downtown & Wall Art Tour",
      "Magic Island & Ala Moana Tour",
    ]);
  });

  it("keeps the primary booking action pointed at FareHarbor", () => {
    expect(site.fareHarborUrl).toContain("fareharbor.com");
  });
});

describe("render smoke test", () => {
  it("renders the configured business name", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: site.businessName })).toBeInTheDocument();
  });

  it("switches the page to Japanese", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "日本語で表示" }));
    expect(screen.getByRole("heading", { name: "お好きなツアーをお選びください" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /ダイヤモンドヘッド周辺ツアー/ })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("ja");
  });
});
