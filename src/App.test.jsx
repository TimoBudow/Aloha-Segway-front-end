import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./main";
import { tours } from "./content/tours";
import { site } from "./content/site";

describe("site content", () => {
  it("defines three customer-facing tour routes", () => {
    expect(tours).toHaveLength(3);
    expect(tours.map((tour) => tour.name)).toEqual([
      "Scenic Diamond Head",
      "Historic Downtown",
      "Magic Island & Ala Moana",
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
});
