const performQuery = require("./api-client");

test("Returns movie results for search query mask", async () => {
    const result = await performQuery("mask");
    expect(result.Response).toBe("True");
    expect(parseInt(result.totalResults)).toBeGreaterThan(0)
});

test("Returns no movie results for invalid search query", async () => {
    const result = await performQuery("bhhhh");
    expect(result.Response).toBe("False");
});